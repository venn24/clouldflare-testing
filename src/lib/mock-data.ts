// Dashboard Stats
export const dashboardStats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up" as const,
    icon: "dollar-sign",
  },
  {
    title: "Orders",
    value: "2,350",
    change: "+180.1%",
    trend: "up" as const,
    icon: "shopping-cart",
  },
  {
    title: "Customers",
    value: "1,248",
    change: "+19%",
    trend: "up" as const,
    icon: "users",
  },
  {
    title: "Products",
    value: "573",
    change: "-2.5%",
    trend: "down" as const,
    icon: "package",
  },
];

// Revenue data for chart (12 months)
export const revenueData = [
  { month: "Jan", revenue: 18600, expenses: 11200 },
  { month: "Feb", revenue: 21300, expenses: 12100 },
  { month: "Mar", revenue: 24500, expenses: 13800 },
  { month: "Apr", revenue: 19800, expenses: 11500 },
  { month: "May", revenue: 28900, expenses: 14200 },
  { month: "Jun", revenue: 32100, expenses: 15800 },
  { month: "Jul", revenue: 29400, expenses: 14600 },
  { month: "Aug", revenue: 35200, expenses: 16900 },
  { month: "Sep", revenue: 31800, expenses: 15200 },
  { month: "Oct", revenue: 38500, expenses: 17800 },
  { month: "Nov", revenue: 42100, expenses: 19200 },
  { month: "Dec", revenue: 45231, expenses: 20100 },
];

// Recent Activity
export const recentActivities = [
  {
    id: "1",
    type: "order",
    message: "New order #1234 placed by Acme Corp",
    amount: "$2,450.00",
    time: "2 minutes ago",
  },
  {
    id: "2",
    type: "payment",
    message: "Payment received from TechStart Inc",
    amount: "$8,200.00",
    time: "15 minutes ago",
  },
  {
    id: "3",
    type: "inventory",
    message: "Product 'Widget Pro' restocked - 500 units",
    amount: "",
    time: "1 hour ago",
  },
  {
    id: "4",
    type: "customer",
    message: "New customer registered: Global Solutions Ltd",
    amount: "",
    time: "2 hours ago",
  },
  {
    id: "5",
    type: "invoice",
    message: "Invoice #INV-089 sent to Digital Dynamics",
    amount: "$5,100.00",
    time: "3 hours ago",
  },
];

// Products
export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Widget Pro",
    sku: "WP-001",
    category: "Electronics",
    price: 299.99,
    stock: 450,
    status: "in-stock",
    image: "🔧",
  },
  {
    id: "2",
    name: "Gadget X",
    sku: "GX-002",
    category: "Electronics",
    price: 599.99,
    stock: 12,
    status: "low-stock",
    image: "📱",
  },
  {
    id: "3",
    name: "Sensor Kit",
    sku: "SK-003",
    category: "Components",
    price: 89.99,
    stock: 0,
    status: "out-of-stock",
    image: "🔌",
  },
  {
    id: "4",
    name: "Display Module",
    sku: "DM-004",
    category: "Components",
    price: 149.99,
    stock: 230,
    status: "in-stock",
    image: "🖥️",
  },
  {
    id: "5",
    name: "Power Supply Unit",
    sku: "PS-005",
    category: "Hardware",
    price: 45.99,
    stock: 890,
    status: "in-stock",
    image: "🔋",
  },
  {
    id: "6",
    name: "Network Hub",
    sku: "NH-006",
    category: "Networking",
    price: 199.99,
    stock: 5,
    status: "low-stock",
    image: "🌐",
  },
  {
    id: "7",
    name: "Cable Assembly",
    sku: "CA-007",
    category: "Accessories",
    price: 24.99,
    stock: 1200,
    status: "in-stock",
    image: "🔗",
  },
  {
    id: "8",
    name: "Memory Module 16GB",
    sku: "MM-008",
    category: "Components",
    price: 79.99,
    stock: 340,
    status: "in-stock",
    image: "💾",
  },
];

// Invoices
export interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  amount: number;
  status: "paid" | "pending" | "overdue" | "draft";
  dueDate: string;
  issuedDate: string;
}

export const invoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-001",
    customer: "Acme Corporation",
    amount: 12500.0,
    status: "paid",
    dueDate: "2024-01-15",
    issuedDate: "2024-01-01",
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    customer: "TechStart Inc",
    amount: 8200.0,
    status: "pending",
    dueDate: "2024-02-01",
    issuedDate: "2024-01-15",
  },
  {
    id: "3",
    invoiceNumber: "INV-003",
    customer: "Global Solutions Ltd",
    amount: 15750.0,
    status: "overdue",
    dueDate: "2024-01-10",
    issuedDate: "2023-12-20",
  },
  {
    id: "4",
    invoiceNumber: "INV-004",
    customer: "Digital Dynamics",
    amount: 5100.0,
    status: "paid",
    dueDate: "2024-01-20",
    issuedDate: "2024-01-05",
  },
  {
    id: "5",
    invoiceNumber: "INV-005",
    customer: "Innovate Labs",
    amount: 22300.0,
    status: "pending",
    dueDate: "2024-02-15",
    issuedDate: "2024-01-20",
  },
  {
    id: "6",
    invoiceNumber: "INV-006",
    customer: "Future Systems",
    amount: 9800.0,
    status: "draft",
    dueDate: "2024-02-20",
    issuedDate: "2024-01-25",
  },
];

// Finance Summary
export const financeSummary = {
  totalRevenue: 45231.89,
  totalExpenses: 20100.0,
  netProfit: 25131.89,
  pendingInvoices: 2,
  overdueAmount: 15750.0,
};

// Expense Breakdown
export const expenseBreakdown = [
  { category: "Salaries", amount: 8500, color: "#3b82f6" },
  { category: "Marketing", amount: 4200, color: "#10b981" },
  { category: "Operations", amount: 3800, color: "#f59e0b" },
  { category: "Technology", amount: 2100, color: "#8b5cf6" },
  { category: "Office", amount: 1500, color: "#ef4444" },
];

// Customers
export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  totalOrders: number;
  totalSpent: number;
  status: "active" | "inactive";
  avatar: string;
}

export const customers: Customer[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@acmecorp.com",
    company: "Acme Corporation",
    totalOrders: 24,
    totalSpent: 45200,
    status: "active",
    avatar: "JS",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@techstart.io",
    company: "TechStart Inc",
    totalOrders: 18,
    totalSpent: 32100,
    status: "active",
    avatar: "SJ",
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike@globalsolutions.com",
    company: "Global Solutions Ltd",
    totalOrders: 31,
    totalSpent: 67800,
    status: "active",
    avatar: "MC",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@digitaldynamics.co",
    company: "Digital Dynamics",
    totalOrders: 12,
    totalSpent: 18900,
    status: "active",
    avatar: "ED",
  },
  {
    id: "5",
    name: "Alex Wilson",
    email: "alex@innovatelabs.com",
    company: "Innovate Labs",
    totalOrders: 8,
    totalSpent: 12400,
    status: "inactive",
    avatar: "AW",
  },
  {
    id: "6",
    name: "Lisa Wang",
    email: "lisa@futuresystems.io",
    company: "Future Systems",
    totalOrders: 15,
    totalSpent: 28600,
    status: "active",
    avatar: "LW",
  },
];

// Leads Pipeline
export type LeadStage = "new" | "contacted" | "proposal" | "negotiation" | "won" | "lost";

export interface Lead {
  id: string;
  name: string;
  company: string;
  value: number;
  stage: LeadStage;
  assignee: string;
  avatar: string;
}

export const leads: Lead[] = [
  { id: "1", name: "Enterprise Deal", company: "Mega Corp", value: 85000, stage: "new", assignee: "John", avatar: "MC" },
  { id: "2", name: "Cloud Migration", company: "DataFlow Inc", value: 42000, stage: "new", assignee: "Sarah", avatar: "DF" },
  { id: "3", name: "API Integration", company: "ConnectTech", value: 28000, stage: "contacted", assignee: "Mike", avatar: "CT" },
  { id: "4", name: "Platform License", company: "SoftWare Co", value: 65000, stage: "contacted", assignee: "Emily", avatar: "SW" },
  { id: "5", name: "Custom Solution", company: "BuildRight", value: 120000, stage: "proposal", assignee: "John", avatar: "BR" },
  { id: "6", name: "Annual Subscription", company: "ScaleUp Ltd", value: 36000, stage: "proposal", assignee: "Sarah", avatar: "SU" },
  { id: "7", name: "Enterprise Upgrade", company: "TechGiant", value: 95000, stage: "negotiation", assignee: "Mike", avatar: "TG" },
  { id: "8", name: "Full Stack Project", company: "DevHouse", value: 55000, stage: "won", assignee: "Emily", avatar: "DH" },
  { id: "9", name: "Consulting Package", company: "Strategy Plus", value: 18000, stage: "won", assignee: "John", avatar: "SP" },
  { id: "10", name: "Legacy Migration", company: "OldTech Inc", value: 72000, stage: "lost", assignee: "Sarah", avatar: "OT" },
];
