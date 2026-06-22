import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentActivities } from "@/lib/mock-data";
import {
  ShoppingCart,
  CreditCard,
  Package,
  UserPlus,
  FileText,
} from "lucide-react";

const typeIcons = {
  order: ShoppingCart,
  payment: CreditCard,
  inventory: Package,
  customer: UserPlus,
  invoice: FileText,
};

const typeColors = {
  order: "bg-blue-500",
  payment: "bg-green-500",
  inventory: "bg-orange-500",
  customer: "bg-purple-500",
  invoice: "bg-cyan-500",
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => {
            const Icon = typeIcons[activity.type as keyof typeof typeIcons];
            const color =
              typeColors[activity.type as keyof typeof typeColors];
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`rounded-full p-2 ${color}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                    {activity.amount && (
                      <Badge variant="secondary" className="text-xs">
                        {activity.amount}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
