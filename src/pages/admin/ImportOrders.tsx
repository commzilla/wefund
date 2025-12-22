import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, CheckCircle, XCircle, Loader2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ParsedOrder {
  invoiceNumber: string;
  orderDate: string;
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postcode: string;
  countryCode: string;
  country: string;
  email: string;
  phone: string;
  paymentId: string;
  paymentMethod: string;
  currencyCode: string;
  completedDate: string;
  paidDate: string;
  discountAmount: string;
  invoiceTotal: string;
  quantity: string;
  orderTotalFee: string;
  orderTotalAmount: string;
  sku: string;
  itemCode: string;
  productName: string;
  itemPrice: string;
  couponCode: string;
  couponDiscount: string;
}

interface ImportResults {
  imported: number;
  skipped: number;
  errors: string[];
  customersCreated: number;
  customersUpdated: number;
}

export default function ImportOrders() {
  const [file, setFile] = useState<File | null>(null);
  const [parsedOrders, setParsedOrders] = useState<ParsedOrder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [totalBatches, setTotalBatches] = useState(0);
  const [results, setResults] = useState<ImportResults | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseCSV = (content: string): ParsedOrder[] => {
    const lines = content.split('\n');
    const orders: ParsedOrder[] = [];
    
    // Skip header row
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Parse CSV properly handling quoted fields
      const fields: string[] = [];
      let current = '';
      let inQuotes = false;
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          fields.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      fields.push(current.trim());
      
      if (fields.length >= 22) {
        orders.push({
          invoiceNumber: fields[0],
          orderDate: fields[1],
          // fields[2] is order link - skip
          firstName: fields[3],
          lastName: fields[4],
          address1: fields[5],
          city: fields[6],
          state: fields[7],
          postcode: fields[8],
          countryCode: fields[9],
          country: fields[10],
          email: fields[11],
          phone: fields[12],
          paymentId: fields[13],
          paymentMethod: fields[14],
          currencyCode: fields[15],
          completedDate: fields[16],
          paidDate: fields[17],
          discountAmount: fields[18],
          invoiceTotal: fields[19],
          quantity: fields[20],
          orderTotalFee: fields[21],
          orderTotalAmount: fields[22] || '',
          sku: fields[23] || '',
          itemCode: fields[24] || '',
          productName: fields[25] || '',
          itemPrice: fields[26] || '',
          couponCode: fields[27] || '',
          couponDiscount: fields[28] || '',
        });
      }
    }
    
    return orders;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    
    setFile(selectedFile);
    setIsParsing(true);
    setParsedOrders([]);
    setResults(null);
    
    try {
      const content = await selectedFile.text();
      const orders = parseCSV(content);
      setParsedOrders(orders);
      toast.success(`Parsed ${orders.length} orders from CSV`);
    } catch (error) {
      toast.error('Failed to parse CSV file');
      console.error('Parse error:', error);
    } finally {
      setIsParsing(false);
    }
  };

  const handleImport = async () => {
    if (parsedOrders.length === 0) return;
    
    setIsLoading(true);
    setProgress(0);
    setResults(null);
    
    const BATCH_SIZE = 50;
    const batches = Math.ceil(parsedOrders.length / BATCH_SIZE);
    setTotalBatches(batches);
    
    const aggregatedResults: ImportResults = {
      imported: 0,
      skipped: 0,
      errors: [],
      customersCreated: 0,
      customersUpdated: 0,
    };
    
    try {
      for (let i = 0; i < batches; i++) {
        setCurrentBatch(i + 1);
        const start = i * BATCH_SIZE;
        const end = Math.min(start + BATCH_SIZE, parsedOrders.length);
        const batch = parsedOrders.slice(start, end);
        
        const { data, error } = await supabase.functions.invoke('import-woo-orders', {
          body: { orders: batch }
        });
        
        if (error) {
          console.error('Batch error:', error);
          aggregatedResults.errors.push(`Batch ${i + 1}: ${error.message}`);
        } else if (data) {
          aggregatedResults.imported += data.imported || 0;
          aggregatedResults.skipped += data.skipped || 0;
          aggregatedResults.customersCreated += data.customersCreated || 0;
          aggregatedResults.customersUpdated += data.customersUpdated || 0;
          if (data.errors?.length > 0) {
            aggregatedResults.errors.push(...data.errors.slice(0, 10)); // Limit errors shown
          }
        }
        
        setProgress(Math.round(((i + 1) / batches) * 100));
      }
      
      // Reset sequence after import
      await supabase.functions.invoke('import-woo-orders', {
        body: { action: 'reset-sequence' }
      });
      
      setResults(aggregatedResults);
      toast.success(`Import complete! ${aggregatedResults.imported} orders imported.`);
      
    } catch (error) {
      console.error('Import error:', error);
      toast.error('Import failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Import Orders</h1>
        <p className="text-muted-foreground mt-1">
          Import orders from WooCommerce CSV export
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upload Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload CSV File
            </CardTitle>
            <CardDescription>
              Select your WooCommerce order export CSV file
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
            />
            
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
            >
              {isParsing ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-8 w-8 text-muted-foreground animate-spin" />
                  <p className="text-sm text-muted-foreground">Parsing CSV...</p>
                </div>
              ) : file ? (
                <div className="flex flex-col items-center gap-2">
                  <FileText className="h-8 w-8 text-primary" />
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">CSV files only</p>
                </div>
              )}
            </div>

            {parsedOrders.length > 0 && (
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Preview</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Total orders: <span className="text-foreground font-medium">{parsedOrders.length}</span></p>
                  <p>Order range: <span className="text-foreground font-medium">
                    {parsedOrders[0]?.invoiceNumber} - {parsedOrders[parsedOrders.length - 1]?.invoiceNumber}
                  </span></p>
                  <p>Unique emails: <span className="text-foreground font-medium">
                    {new Set(parsedOrders.map(o => o.email?.toLowerCase()).filter(Boolean)).size}
                  </span></p>
                </div>
              </div>
            )}

            <Button 
              onClick={handleImport} 
              disabled={parsedOrders.length === 0 || isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Importing...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Import {parsedOrders.length} Orders
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Progress/Results Card */}
        <Card>
          <CardHeader>
            <CardTitle>
              {results ? 'Import Results' : 'Import Progress'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {isLoading && (
              <div className="space-y-4">
                <Progress value={progress} className="h-2" />
                <div className="text-sm text-muted-foreground text-center">
                  Processing batch {currentBatch} of {totalBatches}...
                </div>
              </div>
            )}

            {results && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/10 rounded-lg p-4 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-500">{results.imported}</p>
                    <p className="text-xs text-muted-foreground">Orders Imported</p>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-4 text-center">
                    <AlertCircle className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-yellow-500">{results.skipped}</p>
                    <p className="text-xs text-muted-foreground">Skipped</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Customers created:</span>{' '}
                    <span className="font-medium">{results.customersCreated}</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Customers updated:</span>{' '}
                    <span className="font-medium">{results.customersUpdated}</span>
                  </p>
                </div>

                {results.errors.length > 0 && (
                  <div className="bg-destructive/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-4 w-4 text-destructive" />
                      <p className="text-sm font-medium text-destructive">Errors ({results.errors.length})</p>
                    </div>
                    <div className="text-xs text-muted-foreground max-h-32 overflow-y-auto space-y-1">
                      {results.errors.slice(0, 10).map((error, i) => (
                        <p key={i}>{error}</p>
                      ))}
                      {results.errors.length > 10 && (
                        <p>...and {results.errors.length - 10} more</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!isLoading && !results && (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Upload a CSV file to start importing</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* CSV Format Info */}
      <Card>
        <CardHeader>
          <CardTitle>Expected CSV Format</CardTitle>
          <CardDescription>
            The CSV should be exported from WooCommerce with these columns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground overflow-x-auto">
            <code className="text-xs bg-muted px-2 py-1 rounded">
              Invoice Number, Order Date, Order Link, First Name, Last Name, Address, City, State, Postcode, Country Code, Country, Email, Phone, Payment ID, Payment Method, Currency, Completed Date, Paid Date, Discount, Total, Quantity, Fees, Order Total, SKU, Item Code, Product Name, Item Price, Coupon, Coupon Discount
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
