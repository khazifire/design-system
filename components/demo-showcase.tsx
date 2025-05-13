'use client'

import { useState } from "react"
import {
  LucideLayout,
  LucideFileText,
  LucideTable,
  LucideBarChart,
  LucideHome,
  LucideMonitor,
} from "lucide-react"
import DesignSystemDemo from "./design-system-demo"
import DashboardDemo from "./demo-views/dashboard-demo"
import FormsDemo from "./demo-views/forms-demo"
import TablesDemo from "./demo-views/tables-demo"
import ThemeSwitcher from "./theme-switcher"

type DemoType = 'design-system' | 'dashboard' | 'forms' | 'tables'

export default function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState<DemoType>('design-system')

  const demoOptions = [
    {
      id: 'design-system',
      name: 'Design System',
      description: 'Core components and styles',
      icon: <LucideMonitor className="h-5 w-5" />,
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      description: 'Analytics and data visualization',
      icon: <LucideBarChart className="h-5 w-5" />,
    },
    {
      id: 'forms',
      name: 'Forms',
      description: 'Input controls and validation',
      icon: <LucideFileText className="h-5 w-5" />,
    },
    {
      id: 'tables',
      name: 'Tables',
      description: 'Data tables and pagination',
      icon: <LucideTable className="h-5 w-5" />,
    }
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-neutral">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LucideLayout className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Design System Showcase</h1>
          </div>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {demoOptions.map((demo) => (
            <button
              key={demo.id}
              className={`card card-hover p-4 flex items-center gap-3 transition-all ${
                activeDemo === demo.id ? 'border-primary bg-primary-light/30' : ''
              }`}
              onClick={() => setActiveDemo(demo.id as DemoType)}
            >
              <div className={`rounded-full p-2 ${
                activeDemo === demo.id ? 'bg-primary text-white' : 'bg-muted'
              }`}>
                {demo.icon}
              </div>
              <div className="text-left">
                <h3 className="font-medium">{demo.name}</h3>
                <p className="text-sm text-muted-foreground">{demo.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="border-t pt-8">
          {activeDemo === 'design-system' && <DesignSystemDemo />}
          {activeDemo === 'dashboard' && <DashboardDemo />}
          {activeDemo === 'forms' && <FormsDemo />}
          {activeDemo === 'tables' && <TablesDemo />}
        </div>
      </div>
    </div>
  )
} 