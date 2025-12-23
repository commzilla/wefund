import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const SESSION_KEY = 'wf_analytics_session';
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

interface EventMetadata {
  [key: string]: string | number | boolean | null | undefined;
}

const generateSessionId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const getDeviceType = (): string => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

const getOrCreateSession = () => {
  const stored = localStorage.getItem(SESSION_KEY);
  const now = Date.now();

  if (stored) {
    try {
      const session = JSON.parse(stored);
      if (now - session.lastActivity < SESSION_TIMEOUT) {
        session.lastActivity = now;
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        return session.id;
      }
    } catch {
      // Invalid session, create new
    }
  }

  const newSession = {
    id: generateSessionId(),
    lastActivity: now,
    startedAt: now,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
  return newSession.id;
};

export const useAnalytics = () => {
  const location = useLocation();
  const sessionId = useRef(getOrCreateSession());
  const lastPath = useRef<string | null>(null);

  // Track page view on route change
  useEffect(() => {
    const currentPath = location.pathname + location.search;
    
    // Avoid duplicate tracking for same path
    if (currentPath === lastPath.current) return;
    lastPath.current = currentPath;

    trackEvent('page_view', undefined, {
      path: location.pathname,
      search: location.search,
      hash: location.hash,
    });

    // Update session
    updateSession(location.pathname);
  }, [location]);

  const trackEvent = useCallback(async (
    eventType: string,
    eventName?: string,
    metadata?: EventMetadata
  ) => {
    try {
      await supabase.from('analytics_events').insert({
        session_id: sessionId.current,
        event_type: eventType,
        event_name: eventName || null,
        page_url: window.location.href,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        screen_width: window.innerWidth,
        screen_height: window.innerHeight,
        metadata: metadata || null,
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, []);

  const trackClick = useCallback((
    event: React.MouseEvent<HTMLElement>,
    eventName: string,
    metadata?: EventMetadata
  ) => {
    const target = event.currentTarget;
    const elementText = target.textContent?.slice(0, 100) || '';
    const elementId = target.id || target.getAttribute('data-analytics-id') || undefined;

    trackEvent('click', eventName, {
      ...metadata,
      element_id: elementId,
      element_text: elementText,
      element_tag: target.tagName.toLowerCase(),
    });
  }, [trackEvent]);

  const updateSession = useCallback(async (currentPage: string) => {
    const stored = localStorage.getItem(SESSION_KEY);
    if (!stored) return;

    try {
      const session = JSON.parse(stored);
      const isNewSession = session.startedAt === session.lastActivity;

      if (isNewSession) {
        // Create new session record
        await supabase.from('analytics_sessions').insert({
          session_id: sessionId.current,
          first_page: currentPage,
          last_page: currentPage,
          page_count: 1,
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
          device_type: getDeviceType(),
        });
      } else {
        // Update existing session
        await supabase
          .from('analytics_sessions')
          .update({
            last_page: currentPage,
            page_count: supabase.rpc ? undefined : 1, // Will be handled by trigger if needed
            ended_at: new Date().toISOString(),
          })
          .eq('session_id', sessionId.current);
      }
    } catch (error) {
      console.error('Session update error:', error);
    }
  }, []);

  const trackCheckoutInitiated = useCallback((data: {
    productId?: string;
    accountType: string;
    accountSize: string;
    price: string;
  }) => {
    trackEvent('checkout_initiated', 'Checkout Started', {
      product_id: data.productId,
      account_type: data.accountType,
      account_size: data.accountSize,
      price: data.price,
    });

    // Mark session as converted
    supabase
      .from('analytics_sessions')
      .update({ is_converted: true })
      .eq('session_id', sessionId.current)
      .then();
  }, [trackEvent]);

  const trackAddonSelected = useCallback((addonId: string, addonName: string, price: number, selected: boolean) => {
    trackEvent('addon_selected', selected ? 'Addon Added' : 'Addon Removed', {
      addon_id: addonId,
      addon_name: addonName,
      price,
      action: selected ? 'add' : 'remove',
    });
  }, [trackEvent]);

  const trackAccountSelection = useCallback((type: string, size: string, price: string) => {
    trackEvent('account_selected', 'Account Configuration Changed', {
      account_type: type,
      account_size: size,
      price,
    });
  }, [trackEvent]);

  const trackCTAClick = useCallback((ctaName: string, location: string, metadata?: EventMetadata) => {
    trackEvent('cta_click', ctaName, {
      cta_location: location,
      ...metadata,
    });
  }, [trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent('scroll_depth', `Scrolled ${depth}%`, {
      depth_percentage: depth,
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackClick,
    trackCheckoutInitiated,
    trackAddonSelected,
    trackAccountSelection,
    trackCTAClick,
    trackScrollDepth,
    sessionId: sessionId.current,
  };
};
