import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Trash2, Save, Loader2 } from "lucide-react";

const TRADING_PLATFORMS = [
  { value: 'mt5', label: 'MetaTrader 5' },
  { value: 'ctrader', label: 'cTrader' },
  { value: 'tradelocker', label: 'TradeLocker' },
];

interface Product {
  id?: string;
  name: string;
  slug: string;
  description: string;
  sku_prefix: string;
  is_active: boolean;
  sort_order: number;
}

interface Variant {
  id?: string;
  account_size: number;
  price: number;
  original_price: number | null;
  sku: string;
  broker_type: string;
  currency: string;
  is_active: boolean;
  sort_order: number;
}

interface Addon {
  id?: string;
  name: string;
  description: string;
  price_type: string;
  price_value: number;
  is_active: boolean;
  sort_order: number;
}

const defaultProduct: Product = {
  name: '',
  slug: '',
  description: '',
  sku_prefix: '',
  is_active: true,
  sort_order: 0
};

const defaultVariant: Variant = {
  account_size: 10000,
  price: 0,
  original_price: null,
  sku: '',
  broker_type: 'mt5',
  currency: 'USD',
  is_active: true,
  sort_order: 0
};

const defaultAddon: Addon = {
  name: '',
  description: '',
  price_type: 'free',
  price_value: 0,
  is_active: true,
  sort_order: 0
};

export default function ProductEdit() {
  const { id } = useParams();
  const isNew = id === 'new';
  const navigate = useNavigate();
  const { toast } = useToast();

  const [product, setProduct] = useState<Product>(defaultProduct);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [addons, setAddons] = useState<Addon[]>([]);
  const [isLoading, setIsLoading] = useState(!isNew);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!isNew && id) {
      fetchProduct(id);
    }
  }, [id, isNew]);

  const fetchProduct = async (productId: string) => {
    try {
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();

      if (productError) throw productError;

      const { data: variantsData, error: variantsError } = await supabase
        .from('product_variants')
        .select('*')
        .eq('product_id', productId)
        .order('sort_order', { ascending: true });

      if (variantsError) throw variantsError;

      // Fetch addons that apply to this product
      const { data: addonsData, error: addonsError } = await supabase
        .from('product_addons')
        .select('*')
        .contains('applies_to_products', [productId])
        .order('sort_order', { ascending: true });

      if (addonsError) throw addonsError;

      setProduct(productData);
      setVariants(variantsData || []);
      setAddons(addonsData || []);
    } catch (error) {
      console.error('Error fetching product:', error);
      toast({
        title: "Error",
        description: "Failed to load product",
        variant: "destructive"
      });
      navigate('/admin/products');
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleNameChange = (name: string) => {
    setProduct(prev => ({
      ...prev,
      name,
      slug: generateSlug(name)
    }));
  };

  const addVariant = () => {
    const newVariant: Variant = {
      ...defaultVariant,
      sort_order: variants.length,
      sku: `${product.sku_prefix}-${(variants.length + 1) * 10}K-MT5`
    };
    setVariants([...variants, newVariant]);
  };

  const updateVariant = (index: number, field: keyof Variant, value: any) => {
    setVariants(prev => prev.map((v, i) => 
      i === index ? { ...v, [field]: value } : v
    ));
  };

  const removeVariant = (index: number) => {
    setVariants(prev => prev.filter((_, i) => i !== index));
  };

  const addAddon = () => {
    const newAddon: Addon = {
      ...defaultAddon,
      sort_order: addons.length
    };
    setAddons([...addons, newAddon]);
  };

  const updateAddon = (index: number, field: keyof Addon, value: any) => {
    setAddons(prev => prev.map((a, i) => 
      i === index ? { ...a, [field]: value } : a
    ));
  };

  const removeAddon = (index: number) => {
    setAddons(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!product.name || !product.sku_prefix) {
      toast({
        title: "Validation Error",
        description: "Name and SKU Prefix are required",
        variant: "destructive"
      });
      return;
    }

    setIsSaving(true);

    try {
      let productId = product.id;

      if (isNew) {
        const { data, error } = await supabase
          .from('products')
          .insert({
            name: product.name,
            slug: product.slug,
            description: product.description,
            sku_prefix: product.sku_prefix,
            is_active: product.is_active,
            sort_order: product.sort_order
          })
          .select()
          .single();

        if (error) throw error;
        productId = data.id;
      } else {
        const { error } = await supabase
          .from('products')
          .update({
            name: product.name,
            slug: product.slug,
            description: product.description,
            sku_prefix: product.sku_prefix,
            is_active: product.is_active,
            sort_order: product.sort_order
          })
          .eq('id', productId);

        if (error) throw error;

        // Delete existing variants that aren't in our list
        const existingIds = variants.filter(v => v.id).map(v => v.id);
        if (existingIds.length > 0) {
          await supabase
            .from('product_variants')
            .delete()
            .eq('product_id', productId)
            .not('id', 'in', `(${existingIds.join(',')})`);
        } else {
          await supabase
            .from('product_variants')
            .delete()
            .eq('product_id', productId);
        }
      }

      // Upsert variants
      for (const variant of variants) {
        if (variant.id) {
          await supabase
            .from('product_variants')
            .update({
              account_size: variant.account_size,
              price: variant.price,
              original_price: variant.original_price,
              sku: variant.sku,
              broker_type: variant.broker_type,
              currency: variant.currency,
              is_active: variant.is_active,
              sort_order: variant.sort_order
            })
            .eq('id', variant.id);
        } else {
          await supabase
            .from('product_variants')
            .insert({
              product_id: productId,
              account_size: variant.account_size,
              price: variant.price,
              original_price: variant.original_price,
              sku: variant.sku,
              broker_type: variant.broker_type,
              currency: variant.currency,
              is_active: variant.is_active,
              sort_order: variant.sort_order
            });
        }
      }

      // Save addons
      for (const addon of addons) {
        if (addon.id) {
          // Update existing addon - update applies_to_products if needed
          const { data: existingAddon } = await supabase
            .from('product_addons')
            .select('applies_to_products')
            .eq('id', addon.id)
            .single();

          let appliesTo = existingAddon?.applies_to_products || [];
          if (!appliesTo.includes(productId)) {
            appliesTo = [...appliesTo, productId];
          }

          await supabase
            .from('product_addons')
            .update({
              name: addon.name,
              description: addon.description,
              price_type: addon.price_type,
              price_value: addon.price_value,
              is_active: addon.is_active,
              sort_order: addon.sort_order,
              applies_to_products: appliesTo
            })
            .eq('id', addon.id);
        } else {
          // Create new addon
          await supabase
            .from('product_addons')
            .insert({
              name: addon.name,
              description: addon.description,
              price_type: addon.price_type,
              price_value: addon.price_value,
              is_active: addon.is_active,
              sort_order: addon.sort_order,
              applies_to_products: [productId]
            });
        }
      }

      toast({ title: "Product saved successfully" });
      navigate('/admin/products');
    } catch (error: any) {
      console.error('Error saving product:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/admin/products')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">
            {isNew ? 'New Product' : 'Edit Product'}
          </h1>
          <p className="text-muted-foreground">
            {isNew ? 'Create a new challenge product' : `Editing: ${product.name}`}
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-primary hover:bg-primary/90"
        >
          {isSaving ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          Save Product
        </Button>
      </div>

      {/* Product Details */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                value={product.name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="e.g. 1-Step Challenge"
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={product.slug}
                onChange={(e) => setProduct(prev => ({ ...prev, slug: e.target.value }))}
                placeholder="1-step-challenge"
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sku_prefix">SKU Prefix *</Label>
              <Input
                id="sku_prefix"
                value={product.sku_prefix}
                onChange={(e) => setProduct(prev => ({ ...prev, sku_prefix: e.target.value.toUpperCase() }))}
                placeholder="e.g. 1ACC"
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sort_order">Sort Order</Label>
              <Input
                id="sort_order"
                type="number"
                value={product.sort_order}
                onChange={(e) => setProduct(prev => ({ ...prev, sort_order: parseInt(e.target.value) || 0 }))}
                className="bg-background/50"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={product.description}
              onChange={(e) => setProduct(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe the challenge..."
              className="bg-background/50"
              rows={3}
            />
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="is_active"
              checked={product.is_active}
              onCheckedChange={(checked) => setProduct(prev => ({ ...prev, is_active: checked }))}
            />
            <Label htmlFor="is_active">Active</Label>
          </div>
        </CardContent>
      </Card>

      {/* Variants */}
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Account Size Variants</CardTitle>
          <Button onClick={addVariant} size="sm">
            <Plus className="h-4 w-4 mr-2" /> Add Variant
          </Button>
        </CardHeader>
        <CardContent>
          {variants.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">No variants added yet</p>
              <Button onClick={addVariant} variant="outline">
                <Plus className="h-4 w-4 mr-2" /> Add your first variant
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Account Size</TableHead>
                  <TableHead>Price ($)</TableHead>
                  <TableHead>Original Price</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Broker</TableHead>
                  <TableHead>Active</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {variants.map((variant, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        type="number"
                        value={variant.account_size}
                        onChange={(e) => updateVariant(index, 'account_size', parseInt(e.target.value) || 0)}
                        className="w-28 bg-background/50"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        step="0.01"
                        value={variant.price}
                        onChange={(e) => updateVariant(index, 'price', parseFloat(e.target.value) || 0)}
                        className="w-24 bg-background/50"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        step="0.01"
                        value={variant.original_price || ''}
                        onChange={(e) => updateVariant(index, 'original_price', e.target.value ? parseFloat(e.target.value) : null)}
                        className="w-24 bg-background/50"
                        placeholder="Optional"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={variant.sku}
                        onChange={(e) => updateVariant(index, 'sku', e.target.value)}
                        className="w-36 bg-background/50"
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={variant.broker_type}
                        onValueChange={(value) => updateVariant(index, 'broker_type', value)}
                      >
                        <SelectTrigger className="w-32 bg-background/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {TRADING_PLATFORMS.map((platform) => (
                            <SelectItem key={platform.value} value={platform.value}>
                              {platform.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={variant.is_active}
                        onCheckedChange={(checked) => updateVariant(index, 'is_active', checked)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeVariant(index)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Add-ons */}
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Product Add-ons</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Optional add-ons that customers can select at checkout
            </p>
          </div>
          <Button onClick={addAddon} size="sm">
            <Plus className="h-4 w-4 mr-2" /> Add Add-on
          </Button>
        </CardHeader>
        <CardContent>
          {addons.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">No add-ons configured yet</p>
              <Button onClick={addAddon} variant="outline">
                <Plus className="h-4 w-4 mr-2" /> Add your first add-on
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price Type</TableHead>
                  <TableHead>Price ($)</TableHead>
                  <TableHead>Active</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {addons.map((addon, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        value={addon.name}
                        onChange={(e) => updateAddon(index, 'name', e.target.value)}
                        className="w-40 bg-background/50"
                        placeholder="Add-on name"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={addon.description}
                        onChange={(e) => updateAddon(index, 'description', e.target.value)}
                        className="w-48 bg-background/50"
                        placeholder="Brief description"
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={addon.price_type}
                        onValueChange={(value: 'fixed' | 'free') => {
                          updateAddon(index, 'price_type', value);
                          if (value === 'free') {
                            updateAddon(index, 'price_value', 0);
                          }
                        }}
                      >
                        <SelectTrigger className="w-24 bg-background/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="free">Free</SelectItem>
                          <SelectItem value="fixed">Paid</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        step="0.01"
                        value={addon.price_value}
                        onChange={(e) => updateAddon(index, 'price_value', parseFloat(e.target.value) || 0)}
                        className="w-24 bg-background/50"
                        disabled={addon.price_type === 'free'}
                      />
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={addon.is_active}
                        onCheckedChange={(checked) => updateAddon(index, 'is_active', checked)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeAddon(index)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
