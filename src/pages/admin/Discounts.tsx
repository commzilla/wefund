import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Plus, Search, MoreHorizontal, Edit, Trash2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface DiscountCode {
  id: string;
  code: string;
  discount_type: string;
  discount_value: number;
  min_order_amount: number | null;
  max_uses: number | null;
  current_uses: number;
  valid_from: string | null;
  valid_until: string | null;
  is_active: boolean;
  created_at: string;
}

const defaultDiscount: Partial<DiscountCode> = {
  code: '',
  discount_type: 'percentage',
  discount_value: 0,
  min_order_amount: null,
  max_uses: null,
  is_active: true
};

export default function AdminDiscounts() {
  const [discounts, setDiscounts] = useState<DiscountCode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingDiscount, setEditingDiscount] = useState<Partial<DiscountCode>>(defaultDiscount);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchDiscounts();
  }, []);

  const fetchDiscounts = async () => {
    try {
      const { data, error } = await supabase
        .from('discount_codes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDiscounts(data || []);
    } catch (error) {
      console.error('Error fetching discounts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editingDiscount.code || !editingDiscount.discount_value) {
      toast({
        title: "Validation Error",
        description: "Code and discount value are required",
        variant: "destructive"
      });
      return;
    }

    setIsSaving(true);

    try {
      if (editingDiscount.id) {
        const { error } = await supabase
          .from('discount_codes')
          .update({
            code: editingDiscount.code.toUpperCase(),
            discount_type: editingDiscount.discount_type,
            discount_value: editingDiscount.discount_value,
            min_order_amount: editingDiscount.min_order_amount,
            max_uses: editingDiscount.max_uses,
            valid_from: editingDiscount.valid_from,
            valid_until: editingDiscount.valid_until,
            is_active: editingDiscount.is_active
          })
          .eq('id', editingDiscount.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('discount_codes')
          .insert({
            code: editingDiscount.code.toUpperCase(),
            discount_type: editingDiscount.discount_type,
            discount_value: editingDiscount.discount_value,
            min_order_amount: editingDiscount.min_order_amount,
            max_uses: editingDiscount.max_uses,
            valid_from: editingDiscount.valid_from,
            valid_until: editingDiscount.valid_until,
            is_active: editingDiscount.is_active
          });

        if (error) throw error;
      }

      toast({ title: "Discount saved successfully" });
      setIsDialogOpen(false);
      setEditingDiscount(defaultDiscount);
      fetchDiscounts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this discount code?')) return;

    try {
      const { error } = await supabase
        .from('discount_codes')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({ title: "Discount deleted" });
      fetchDiscounts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({ title: "Code copied to clipboard" });
  };

  const openEditDialog = (discount: DiscountCode) => {
    setEditingDiscount(discount);
    setIsDialogOpen(true);
  };

  const openNewDialog = () => {
    setEditingDiscount(defaultDiscount);
    setIsDialogOpen(true);
  };

  const filteredDiscounts = discounts.filter(d => 
    d.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isExpired = (discount: DiscountCode) => {
    if (!discount.valid_until) return false;
    return new Date(discount.valid_until) < new Date();
  };

  const getStatus = (discount: DiscountCode) => {
    if (!discount.is_active) return 'cancelled';
    if (isExpired(discount)) return 'failed';
    if (discount.max_uses && discount.current_uses >= discount.max_uses) return 'completed';
    return 'completed';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Discount Codes</h1>
          <p className="text-muted-foreground">Manage promotional discount codes</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog} className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" /> Add Discount
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>
                {editingDiscount.id ? 'Edit Discount Code' : 'New Discount Code'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Code *</Label>
                  <Input
                    id="code"
                    value={editingDiscount.code || ''}
                    onChange={(e) => setEditingDiscount(prev => ({ 
                      ...prev, 
                      code: e.target.value.toUpperCase() 
                    }))}
                    placeholder="SUMMER20"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={editingDiscount.discount_type || 'percentage'}
                    onValueChange={(value) => setEditingDiscount(prev => ({ 
                      ...prev, 
                      discount_type: value 
                    }))}
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage (%)</SelectItem>
                      <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="value">
                    Discount Value *
                    {editingDiscount.discount_type === 'percentage' ? ' (%)' : ' ($)'}
                  </Label>
                  <Input
                    id="value"
                    type="number"
                    step="0.01"
                    value={editingDiscount.discount_value || ''}
                    onChange={(e) => setEditingDiscount(prev => ({ 
                      ...prev, 
                      discount_value: parseFloat(e.target.value) || 0 
                    }))}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="min_order">Min Order Amount</Label>
                  <Input
                    id="min_order"
                    type="number"
                    step="0.01"
                    value={editingDiscount.min_order_amount || ''}
                    onChange={(e) => setEditingDiscount(prev => ({ 
                      ...prev, 
                      min_order_amount: e.target.value ? parseFloat(e.target.value) : null 
                    }))}
                    placeholder="Optional"
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="max_uses">Max Uses</Label>
                <Input
                  id="max_uses"
                  type="number"
                  value={editingDiscount.max_uses || ''}
                  onChange={(e) => setEditingDiscount(prev => ({ 
                    ...prev, 
                    max_uses: e.target.value ? parseInt(e.target.value) : null 
                  }))}
                  placeholder="Unlimited"
                  className="bg-background/50"
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="is_active"
                  checked={editingDiscount.is_active ?? true}
                  onCheckedChange={(checked) => setEditingDiscount(prev => ({ 
                    ...prev, 
                    is_active: checked 
                  }))}
                />
                <Label htmlFor="is_active">Active</Label>
              </div>
              <Button 
                onClick={handleSave} 
                className="w-full"
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Discount'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search discount codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50"
            />
          </div>
        </CardContent>
      </Card>

      {/* Discounts Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">All Discount Codes</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          ) : filteredDiscounts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No discount codes found</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={openNewDialog}
              >
                <Plus className="h-4 w-4 mr-2" /> Create your first discount
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDiscounts.map((discount) => (
                  <TableRow key={discount.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold">{discount.code}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6"
                          onClick={() => copyCode(discount.code)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      {discount.discount_type === 'percentage' 
                        ? `${discount.discount_value}%` 
                        : `$${discount.discount_value}`
                      }
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {discount.current_uses}
                      {discount.max_uses && ` / ${discount.max_uses}`}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={getStatus(discount)} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {format(new Date(discount.created_at), 'MMM d, yyyy')}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => openEditDialog(discount)}>
                            <Edit className="h-4 w-4 mr-2" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(discount.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
