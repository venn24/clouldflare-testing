import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { leads, type LeadStage } from "@/lib/mock-data";

const stageOrder: LeadStage[] = [
  "new",
  "contacted",
  "proposal",
  "negotiation",
  "won",
  "lost",
];

const stageLabels: Record<LeadStage, string> = {
  new: "New",
  contacted: "Contacted",
  proposal: "Proposal",
  negotiation: "Negotiation",
  won: "Won",
  lost: "Lost",
};

const stageColors: Record<LeadStage, string> = {
  new: "bg-blue-500",
  contacted: "bg-yellow-500",
  proposal: "bg-purple-500",
  negotiation: "bg-orange-500",
  won: "bg-green-500",
  lost: "bg-red-500",
};

export function LeadsPipeline() {
  const grouped = stageOrder.reduce(
    (acc, stage) => {
      acc[stage] = leads.filter((l) => l.stage === stage);
      return acc;
    },
    {} as Record<LeadStage, typeof leads>
  );

  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      {stageOrder.map((stage) => (
        <div key={stage} className="space-y-3">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${stageColors[stage]}`} />
            <span className="text-sm font-medium">
              {stageLabels[stage]}
            </span>
            <Badge variant="secondary" className="ml-auto">
              {grouped[stage].length}
            </Badge>
          </div>
          <div className="space-y-2">
            {grouped[stage].map((lead) => (
              <Card key={lead.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-3">
                  <div className="text-sm font-medium">{lead.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {lead.company}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      ${lead.value.toLocaleString()}
                    </span>
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-[10px]">
                        {lead.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
