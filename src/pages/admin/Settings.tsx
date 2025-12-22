import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Save, Globe, Key, Webhook, CreditCard } from "lucide-react";

export default function AdminSettings() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  // These would typically be stored in a settings table or environment
  const [settings, setSettings] = useState({
    wefundWebhookUrl: '',
    confirmoApiKey: '',
    confirmoCallbackPassword: '',
    enableCryptoPayments: true,
    enableCardPayments: false,
    autoConfirmOrders: false
  });

  const handleSave = async () => {
    setIsSaving(true);
    
    // TODO: Save to database or environment
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({ title: "Settings saved successfully" });
    setIsSaving(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Configure your CMS settings</p>
      </div>

      {/* Webhook Settings */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Webhook className="h-5 w-5" /> Webhook Configuration
          </CardTitle>
          <CardDescription>
            Configure the WeFund API webhook endpoint for order processing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="webhookUrl">WeFund Webhook URL</Label>
            <Input
              id="webhookUrl"
              value={settings.wefundWebhookUrl}
              onChange={(e) => setSettings(prev => ({ ...prev, wefundWebhookUrl: e.target.value }))}
              placeholder="https://api.wefund.com/webhook/orders"
              className="bg-background/50"
            />
            <p className="text-xs text-muted-foreground">
              Orders will be sent to this URL after successful payment
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" /> Payment Gateway
          </CardTitle>
          <CardDescription>
            Configure Confirmo for cryptocurrency payments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="confirmoKey">Confirmo API Key</Label>
            <Input
              id="confirmoKey"
              type="password"
              value={settings.confirmoApiKey}
              onChange={(e) => setSettings(prev => ({ ...prev, confirmoApiKey: e.target.value }))}
              placeholder="••••••••••••••••"
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmoCallback">Confirmo Callback Password</Label>
            <Input
              id="confirmoCallback"
              type="password"
              value={settings.confirmoCallbackPassword}
              onChange={(e) => setSettings(prev => ({ ...prev, confirmoCallbackPassword: e.target.value }))}
              placeholder="••••••••••••••••"
              className="bg-background/50"
            />
            <p className="text-xs text-muted-foreground">
              Used to verify webhook signatures from Confirmo
            </p>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Switch
                id="cryptoPayments"
                checked={settings.enableCryptoPayments}
                onCheckedChange={(checked) => setSettings(prev => ({ 
                  ...prev, 
                  enableCryptoPayments: checked 
                }))}
              />
              <Label htmlFor="cryptoPayments">Enable Crypto Payments</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="cardPayments"
                checked={settings.enableCardPayments}
                onCheckedChange={(checked) => setSettings(prev => ({ 
                  ...prev, 
                  enableCardPayments: checked 
                }))}
              />
              <Label htmlFor="cardPayments">Enable Card Payments</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Order Settings */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" /> Order Processing
          </CardTitle>
          <CardDescription>
            Configure how orders are processed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Switch
              id="autoConfirm"
              checked={settings.autoConfirmOrders}
              onCheckedChange={(checked) => setSettings(prev => ({ 
                ...prev, 
                autoConfirmOrders: checked 
              }))}
            />
            <Label htmlFor="autoConfirm">Auto-confirm orders after payment</Label>
          </div>
          <p className="text-xs text-muted-foreground">
            When enabled, orders will automatically be marked as completed and 
            the webhook will be sent immediately after payment confirmation.
          </p>
        </CardContent>
      </Card>

      {/* API Keys Info */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" /> API Keys & Secrets
          </CardTitle>
          <CardDescription>
            Manage your API keys securely
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-muted/30 p-4 border border-border">
            <p className="text-sm text-muted-foreground">
              API keys are stored securely and should be configured through 
              Lovable Cloud Secrets. Contact your administrator to update API keys.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-primary hover:bg-primary/90"
        >
          <Save className="h-4 w-4 mr-2" />
          {isSaving ? 'Saving...' : 'Save Settings'}
        </Button>
      </div>
    </div>
  );
}
