'use client'

import { useState } from "react"
import {
  LucideSettings,
  LucideUser,
  LucideSearch,
  LucideMail,
  LucideCheck,
  LucideAlertCircle,
  LucideAlertTriangle,
  LucideInfo,
  LucideBell,
  LucideHeart,
  LucideMenu,
  LucideLayers,
  LucideBox,
  LucidePalette,
  LucideCode,
  LucideBookOpen,
  LucideStar,
  LucideChevronRight
} from "lucide-react"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, SidebarProvider } from "./ui/sidebar"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Avatar } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { Card } from "./ui/card"
import ThemeSwitcher from "./theme-switcher"
import { DesignTokens } from "./design-system/tokens"
import { DesignGuidelines } from "./design-system/guidelines"
import { ComponentsShowcase } from "./design-system/components"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { cn } from "@/lib/utils"
import DemoShowcase from "./demo-showcase"
import UsageGuide from "./usage-guide"

export default function DesignSystemDemo() {
  const [activeTab, setActiveTab] = useState("tokens")

  const sections = [
    { id: "tokens", label: "Design Tokens", icon: LucideCode },
    { id: "guidelines", label: "Guidelines", icon: LucideBookOpen },
    { id: "components", label: "Components", icon: LucideBox },
    { id: "themes", label: "Themes", icon: LucidePalette },
  ]

  return (
    <div className="bg-background min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <span className="text-xl font-semibold">Design System</span>
            <NavigationMenu>
              <NavigationMenuList>
                {sections.map((section) => (
                  <NavigationMenuItem key={section.id}>
                    <NavigationMenuLink 
                      className={cn(
                        "px-3 py-2 text-sm transition-colors",
                        activeTab === section.id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setActiveTab(section.id)}
                    >
                      {section.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative max-w-sm hidden md:block">
              <Input
                type="search"
                placeholder="Search documentation..."
                className="w-[250px] pr-8"
              />
              <LucideSearch className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            <ThemeSwitcher />
            <a href="https://github.com/khazifire/design-system" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="hidden lg:block w-64 border-r min-h-[calc(100vh-4rem)] p-4 fixed top-16 overflow-auto">
          <nav className="space-y-1">
            {sections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)} 
                  className={cn(
                    "flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md transition-colors",
                    activeTab === section.id 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <SectionIcon className="h-4 w-4" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
          
          {activeTab === "tokens" && (
            <div className="mt-6 pt-6 border-t">
              <h3 className="px-3 mb-2 text-xs font-medium text-muted-foreground">DESIGN TOKENS</h3>
              <nav className="space-y-1">
                <a href="#colors" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Colors
                </a>
                <a href="#typography" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Typography
                </a>
                <a href="#spacing" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Spacing
                </a>
                <a href="#radius" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Border Radius
                </a>
                <a href="#shadows" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Shadows
                </a>
              </nav>
            </div>
          )}
          
          {activeTab === "components" && (
            <div className="mt-6 pt-6 border-t">
              <h3 className="px-3 mb-2 text-xs font-medium text-muted-foreground">COMPONENTS</h3>
              <nav className="space-y-1">
                <a href="#buttons" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Buttons
                </a>
                <a href="#inputs" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Inputs
                </a>
                <a href="#badges" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Badges
                </a>
                <a href="#cards" className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                  Cards
                </a>
              </nav>
            </div>
          )}
        </aside>

        <main className="flex-1 min-h-[calc(100vh-4rem)] pt-8 pb-16 lg:pl-64">
          <div className="container max-w-5xl px-6 mx-auto">
            {activeTab === "tokens" && (
              <div className="space-y-12">
                <div>
                  <h1 className="text-3xl font-bold">Design Tokens</h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Core visual elements and design tokens that form the basis of our design system.
                  </p>
                </div>

                <DesignTokens />
              </div>
            )}

            {activeTab === "guidelines" && (
              <div className="space-y-12">
                <div>
                  <h1 className="text-3xl font-bold">Design Guidelines</h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Best practices and standards for building consistent, accessible, and high-quality interfaces.
                  </p>
                </div>

                <DesignGuidelines />
              </div>
            )}

            {activeTab === "components" && (
              <div className="space-y-12">
                <div>
                  <h1 className="text-3xl font-bold">Components</h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Essential building blocks for your applications.
                  </p>
                </div>

                <ComponentsShowcase />
              </div>
            )}


            {activeTab === "themes" && (
              <div className="space-y-12">
                <div>
                  <h1 className="text-3xl font-bold">Themes</h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Customize the look and feel of your application with our theming system.
                  </p>
                </div>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">Available Themes</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card 
                      className="p-6 cursor-pointer  hover:shadow-md transition-shadow"
                      onClick={() => document.documentElement.className = ""}
                    >
                      <h3 className="font-medium">Green Theme (Default</h3>
                      <p className="text-sm text-muted-foreground mt-1">Primary green theme</p>
                      <div className="mt-4 flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#1fa37c]" />
                        <div className="w-6 h-6 rounded-full bg-[#333333]" />
                        <div className="w-6 h-6 rounded-full bg-[#006A76]" />
                      </div>
                    </Card>

                    <Card 
                      className="p-6 cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => document.documentElement.className = "theme-blue"}
                    >
                      <h3 className="font-medium">Blue Theme</h3>
                      <p className="text-sm text-muted-foreground mt-1">Clean and professional</p>
                      <div className="mt-4 flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#1971C2]" />
                        <div className="w-6 h-6 rounded-full bg-[#2C3E50]" />
                        <div className="w-6 h-6 rounded-full bg-[#3498DB]" />
                      </div>
                    </Card>

                    {/* <Card 
                      className="p-6 cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => document.documentElement.className = "theme-purple"}
                    >
                      <h3 className="font-medium">Purple Theme</h3>
                      <p className="text-sm text-muted-foreground mt-1">Creative and bold</p>
                      <div className="mt-4 flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#805AD5]" />
                        <div className="w-6 h-6 rounded-full bg-[#2C2C54]" />
                        <div className="w-6 h-6 rounded-full bg-[#9F7AEA]" />
                      </div>
                    </Card> */}

                    <Card 
                      className="p-6 cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => document.documentElement.className = "theme-red"}
                    >
                      <h3 className="font-medium">Red Theme</h3>
                      <p className="text-sm text-muted-foreground mt-1">Energetic and vibrant</p>
                      <div className="mt-4 flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#ED1C24]" />
                        <div className="w-6 h-6 rounded-full bg-[#333333]" />
                        <div className="w-6 h-6 rounded-full bg-[#DC3545]" />
                      </div>
                    </Card>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">Theme Implementation</h2>
                  <Card className="p-6">
                    <h3 className="text-lg font-medium mb-4">Using CSS Variables</h3>
                    <p className="text-muted-foreground mb-4">
                      Our theme system is built on CSS variables, making it easy to customize and extend.
                    </p>
                    <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`
  .theme-green {
    --brand-primary: 31 163 124; /* #1fa37c - Green */
    --brand-primary-light: 236 248 242; /* #ECF8F2 */
    --brand-primary-dark: 16 82 62; /* #10523e */
    --brand-secondary: 51 51 51; /* #333333 */
    --brand-tertiary: 0 106 118; /* #006A76 */
    --brand-quaternary: 255 168 0; /* #FFA800 */
  }

  .theme-blue {
    --brand-primary: 25 113 194; /* #1971C2 */
    --brand-primary-light: 232 240 254; /* #E8F0FE */
    --brand-primary-dark: 12 83 148; /* #0C5394 */
    --brand-secondary: 44 62 80; /* #2C3E50 */
    --brand-tertiary: 52 152 219; /* #3498DB */
    --brand-quaternary: 241 196 15; /* #F1C40F */
  }

  .theme-red {
    --brand-primary: 237 28 36; /* #ED1C24 */
    --brand-primary-light: 255 235 235; /* #FFEBEB */
    --brand-primary-dark: 178 21 27; /* #B2151B */
    --brand-secondary: 51 51 51; /* #333333 */
    --brand-tertiary: 220 53 69; /* #DC3545 */
    --brand-quaternary: 255 193 7; /* #FFC107 */
  }`}
                    </pre>
                  </Card>
                </section>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
