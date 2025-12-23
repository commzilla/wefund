-- Create analytics_events table
CREATE TABLE public.analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  event_type text NOT NULL,
  event_name text,
  page_url text NOT NULL,
  element_id text,
  element_text text,
  metadata jsonb,
  referrer text,
  user_agent text,
  screen_width integer,
  screen_height integer,
  created_at timestamptz DEFAULT now()
);

-- Create analytics_sessions table
CREATE TABLE public.analytics_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  first_page text,
  last_page text,
  page_count integer DEFAULT 1,
  total_duration_seconds integer,
  is_converted boolean DEFAULT false,
  is_completed boolean DEFAULT false,
  user_agent text,
  referrer text,
  country text,
  device_type text,
  started_at timestamptz DEFAULT now(),
  ended_at timestamptz
);

-- Indexes for performance
CREATE INDEX idx_events_session ON public.analytics_events(session_id);
CREATE INDEX idx_events_type ON public.analytics_events(event_type);
CREATE INDEX idx_events_created ON public.analytics_events(created_at);
CREATE INDEX idx_sessions_started ON public.analytics_sessions(started_at);
CREATE INDEX idx_sessions_session_id ON public.analytics_sessions(session_id);

-- Enable RLS
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_sessions ENABLE ROW LEVEL SECURITY;

-- RLS policies for analytics_events
CREATE POLICY "Anyone can insert analytics events"
ON public.analytics_events
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view analytics events"
ON public.analytics_events
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS policies for analytics_sessions
CREATE POLICY "Anyone can insert analytics sessions"
ON public.analytics_sessions
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can update their own session"
ON public.analytics_sessions
FOR UPDATE
USING (true)
WITH CHECK (true);

CREATE POLICY "Admins can view analytics sessions"
ON public.analytics_sessions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));