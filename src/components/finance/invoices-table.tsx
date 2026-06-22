import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { invoices } from "@/lib/mock-data";

const statusVariant = {
  paid: "default" as const,
  pending: "secondary" as const,
  overdue: "destructive" as const,
  draft: "outline" as const,
};

export function InvoicesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Issued</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                {invoice.invoiceNumber}
              </TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell className="text-muted-foreground">
                {invoice.issuedDate}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {invoice.dueDate}
              </TableCell>
              <TableCell>
                <Badge variant={statusVariant[invoice.status]}>
                  {invoice.status.charAt(0).toUpperCase() +
                    invoice.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-medium">
                ${invoice.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
