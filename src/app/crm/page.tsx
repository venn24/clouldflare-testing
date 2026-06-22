import { CustomersTable } from "@/components/crm/customers-table";
import { LeadsPipeline } from "@/components/crm/leads-pipeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { customers, leads } from "@/lib/mock-data";
import { Users, Target } from "lucide-react";

export default function CRMPage() {
  const activeCustomers = customers.filter((c) => c.status === "active").length;
  const totalLeadsValue = leads.reduce((sum, l) => sum + l.value, 0);
  const wonDeals = leads.filter((l) => l.stage === "won");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">CRM</h1>
        <p className="text-muted-foreground">
          Manage customers and track your sales pipeline.
        </p>
      </div>

      <Tabs defaultValue="pipeline" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pipeline" className="gap-2">
            <Target className="h-4 w-4" />
            Pipeline
          </TabsTrigger>
          <TabsTrigger value="customers" className="gap-2">
            <Users className="h-4 w-4" />
            Customers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="text-sm text-muted-foreground">Total Pipeline</div>
              <div className="text-2xl font-bold">
                ${totalLeadsValue.toLocaleString()}
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-muted-foreground">Won Deals</div>
              <div className="text-2xl font-bold text-green-500">
                {wonDeals.length}
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-muted-foreground">Active Customers</div>
              <div className="text-2xl font-bold">{activeCustomers}</div>
            </div>
          </div>
          <LeadsPipeline />
        </TabsContent>

        <TabsContent value="customers">
          <CustomersTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
