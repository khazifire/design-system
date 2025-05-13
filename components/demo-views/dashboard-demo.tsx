'use client'

import {
  LucideArrowUp,
  LucideArrowDown,
  LucideUsers,
  LucideBarChart,
  LucideShoppingCart,
  LucideDollarSign,
  LucideCalendar,
  LucideSettings,
  LucideUser,
  LucideSearch,
  LucideMenu,
  LucideX,
  LucideFilter,
  LucideMoreHorizontal,
  LucideRefreshCw,
} from "lucide-react"
import { Input } from "../ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useState } from "react"

export default function DashboardDemo() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-background border-b border-neutral sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden btn-ghost p-2" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <LucideX className="h-5 w-5" /> : <LucideMenu className="h-5 w-5" />}
            </button>
            <h1 className="text-xl font-semibold hidden md:block">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative max-w-sm hidden md:block">
              <Input type="search" placeholder="Search..." className="pr-8" />
              <LucideSearch className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            <button className="btn-ghost p-2">
              <LucideSettings className="h-5 w-5" />
            </button>
            <div className="avatar avatar-md bg-primary-light text-primary">
              <LucideUser className="h-5 w-5" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside 
          className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-64 border-r border-neutral bg-background h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto`}
        >
          <nav className="p-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary-light text-primary font-medium">
              <LucideBarChart className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted">
              <LucideUsers className="h-5 w-5" />
              <span>Customers</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted">
              <LucideShoppingCart className="h-5 w-5" />
              <span>Orders</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted">
              <LucideDollarSign className="h-5 w-5" />
              <span>Transactions</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted">
              <LucideCalendar className="h-5 w-5" />
              <span>Calendar</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard 
                title="Total Revenue" 
                value="$45,231.89" 
                change="+20.1%" 
                trend="up"
                icon={<LucideDollarSign className="h-5 w-5" />}
                color="bg-primary-light text-primary"
              />
              <StatCard 
                title="New Customers" 
                value="2,456" 
                change="+10.5%" 
                trend="up"
                icon={<LucideUsers className="h-5 w-5" />}
                color="bg-info/10 text-info"
              />
              <StatCard 
                title="Total Orders" 
                value="1,286" 
                change="+12.3%" 
                trend="up"
                icon={<LucideShoppingCart className="h-5 w-5" />}
                color="bg-success/10 text-success"
              />
              <StatCard 
                title="Refund Rate" 
                value="4.5%" 
                change="-2.7%" 
                trend="down"
                icon={<LucideBarChart className="h-5 w-5" />}
                color="bg-error/10 text-error"
              />
            </div>

            <div className="mb-8">
              <div className="card mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Recent Orders</h2>
                  <div className="flex items-center gap-2">
                    <button className="btn-ghost p-2">
                      <LucideFilter className="h-4 w-4" />
                    </button>
                    <button className="btn-ghost p-2">
                      <LucideRefreshCw className="h-4 w-4" />
                    </button>
                    <button className="btn-outline text-sm py-1 px-3">Export</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ordersData.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <StatusBadge status={order.status} />
                          </TableCell>
                          <TableCell>{order.amount}</TableCell>
                          <TableCell className="text-right">
                            <button className="btn-ghost p-1">
                              <LucideMoreHorizontal className="h-4 w-4" />
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card md:col-span-2">
                <h2 className="text-xl font-semibold mb-6">Top Products</h2>
                <div className="space-y-4">
                  {productData.map((product) => (
                    <div key={product.id} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-md ${product.color} flex items-center justify-center`}>
                        {product.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${product.revenue}</p>
                        <p className="text-sm text-muted-foreground">+{product.growth}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-6">Activity</h2>
                <div className="space-y-4">
                  {activityData.map((activity, index) => (
                    <div key={index} className="relative pl-6 pb-4 border-l border-neutral last:border-l-0 last:pb-0">
                      <div className="absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function StatCard({ title, value, change, trend, icon, color }: { 
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
  color: string
}) {
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className={`rounded-full p-2 ${color}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center mt-4">
        {trend === 'up' ? (
          <LucideArrowUp className="h-4 w-4 text-success mr-1" />
        ) : (
          <LucideArrowDown className="h-4 w-4 text-error mr-1" />
        )}
        <span className={trend === 'up' ? 'text-success' : 'text-error'}>
          {change}
        </span>
        <span className="text-sm text-muted-foreground ml-1">from last month</span>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: 'completed' | 'processing' | 'failed' | 'pending' }) {
  const styles = {
    completed: 'bg-success/10 text-success',
    processing: 'bg-info/10 text-info',
    failed: 'bg-error/10 text-error',
    pending: 'bg-warning/10 text-warning',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

// Sample data
const ordersData = [
  { id: 'ORD-1234', customer: 'John Doe', date: 'Jun 12, 2023', status: 'completed' as const, amount: '$256.00' },
  { id: 'ORD-1235', customer: 'Jane Smith', date: 'Jun 11, 2023', status: 'processing' as const, amount: '$128.50' },
  { id: 'ORD-1236', customer: 'Robert Johnson', date: 'Jun 10, 2023', status: 'failed' as const, amount: '$354.20' },
  { id: 'ORD-1237', customer: 'Emily Davis', date: 'Jun 09, 2023', status: 'pending' as const, amount: '$89.99' },
  { id: 'ORD-1238', customer: 'Michael Wilson', date: 'Jun 08, 2023', status: 'completed' as const, amount: '$178.40' },
]

const productData = [
  { 
    id: 1, 
    name: 'Wireless Headphones', 
    category: 'Electronics', 
    revenue: '12,430', 
    growth: 8.2,
    color: 'bg-primary-light',
    icon: <LucideBarChart className="h-5 w-5 text-primary" />
  },
  { 
    id: 2, 
    name: 'Smart Watch Series 5', 
    category: 'Accessories', 
    revenue: '8,950', 
    growth: 12.5,
    color: 'bg-info/10',
    icon: <LucideBarChart className="h-5 w-5 text-info" />
  },
  { 
    id: 3, 
    name: 'Laptop Pro 2023', 
    category: 'Electronics', 
    revenue: '32,750', 
    growth: 6.8,
    color: 'bg-success/10',
    icon: <LucideBarChart className="h-5 w-5 text-success" />
  },
]

const activityData = [
  { title: 'New order #ORD-1234 received', time: '2 hours ago' },
  { title: 'Payment for #ORD-1230 confirmed', time: '4 hours ago' },
  { title: 'Customer refund processed', time: '6 hours ago' },
  { title: 'New product added to inventory', time: '8 hours ago' },
  { title: 'Website maintenance completed', time: '12 hours ago' },
] 