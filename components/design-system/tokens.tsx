'use client'

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Design Tokens Documentation
 * 
 * This component provides a comprehensive guide to the design tokens
 * used throughout the system and how they map to Tailwind classes.
 */

function TokenTable({ title, description, children }: { 
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
      <Card>
        <div className="p-6">
          {children}
        </div>
      </Card>
    </div>
  )
}

export function DesignTokens() {
  const [activeTab, setActiveTab] = useState("colors")

  // Handle anchor navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ['colors', 'typography', 'spacing', 'radius', 'shadows'].includes(hash)) {
      setActiveTab(hash)
    }

    // Update hash when tab changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && ['colors', 'typography', 'spacing', 'radius', 'shadows'].includes(hash)) {
        setActiveTab(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold">Design Tokens</h2>
        <p className="text-muted-foreground mt-2">
          Design tokens are the visual design atoms of the design system — they define the core visual properties like colors, typography, and spacing. Our tokens are implemented as CSS variables and mapped to Tailwind utility classes.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => {
        setActiveTab(value)
        window.location.hash = value
      }}>
        <TabsList>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="radius">Border Radius</TabsTrigger>
          <TabsTrigger value="shadows">Shadows</TabsTrigger>
        </TabsList>

        <TabsContent id="colors" value="colors" className="mt-6 space-y-8">
          <TokenTable 
            title="Brand Colors" 
            description="The primary colors that represent our brand identity. Used for primary actions, accents, and key UI elements."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>CSS Variable</TableHead>
                  <TableHead>Tailwind Class</TableHead>
                  <TableHead>Preview</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Primary</TableCell>
                  <TableCell className="font-mono text-sm">--brand-primary</TableCell>
                  <TableCell className="font-mono text-sm">bg-primary</TableCell>
                  <TableCell><div className="w-16 h-8 bg-primary rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Primary Light</TableCell>
                  <TableCell className="font-mono text-sm">--brand-primary-light</TableCell>
                  <TableCell className="font-mono text-sm">bg-primary-light</TableCell>
                  <TableCell><div className="w-16 h-8 bg-primary-light rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Primary Dark</TableCell>
                  <TableCell className="font-mono text-sm">--brand-primary-dark</TableCell>
                  <TableCell className="font-mono text-sm">bg-primary-dark</TableCell>
                  <TableCell><div className="w-16 h-8 bg-primary-dark rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Secondary</TableCell>
                  <TableCell className="font-mono text-sm">--brand-secondary</TableCell>
                  <TableCell className="font-mono text-sm">bg-secondary</TableCell>
                  <TableCell><div className="w-16 h-8 bg-secondary rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tertiary</TableCell>
                  <TableCell className="font-mono text-sm">--brand-tertiary</TableCell>
                  <TableCell className="font-mono text-sm">bg-tertiary</TableCell>
                  <TableCell><div className="w-16 h-8 bg-tertiary rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Quaternary</TableCell>
                  <TableCell className="font-mono text-sm">--brand-quaternary</TableCell>
                  <TableCell className="font-mono text-sm">bg-quaternary</TableCell>
                  <TableCell><div className="w-16 h-8 bg-quaternary rounded" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TokenTable>

          <TokenTable 
            title="Brand Gradients"
            description="Tailwind utility classes for brand gradients. These are theme-aware."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Utility Class</TableHead>
                  <TableHead>Preview</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium font-mono text-sm">bg-gradient-primary</TableCell>
                  <TableCell><div className="w-24 h-12 rounded bg-gradient-primary border border-neutral/20" /></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium font-mono text-sm">bg-gradient-secondary</TableCell>
                  <TableCell><div className="w-24 h-12 rounded bg-gradient-secondary border border-neutral/20" /></TableCell>
                </TableRow>
               
                <TableRow>
                  <TableCell className="font-medium font-mono text-sm">bg-gradient-tertiary</TableCell>
                  <TableCell><div className="w-24 h-12 rounded bg-gradient-tertiary border border-neutral/20" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TokenTable>

          <TokenTable 
            title="System Feedback Colors" 
            description="Colors used to communicate feedback, status, and system messages to users."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>CSS Variable</TableHead>
                  <TableHead>Tailwind Class</TableHead>
                  <TableHead>Preview</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Success</TableCell>
                  <TableCell className="font-mono text-sm">--system-success</TableCell>
                  <TableCell className="font-mono text-sm">bg-success</TableCell>
                  <TableCell><div className="w-16 h-8 bg-success rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Error</TableCell>
                  <TableCell className="font-mono text-sm">--system-error</TableCell>
                  <TableCell className="font-mono text-sm">bg-error</TableCell>
                  <TableCell><div className="w-16 h-8 bg-error rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Warning</TableCell>
                  <TableCell className="font-mono text-sm">--system-warning</TableCell>
                  <TableCell className="font-mono text-sm">bg-warning</TableCell>
                  <TableCell><div className="w-16 h-8 bg-warning rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Info</TableCell>
                  <TableCell className="font-mono text-sm">--system-info</TableCell>
                  <TableCell className="font-mono text-sm">bg-info</TableCell>
                  <TableCell><div className="w-16 h-8 bg-info rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Pending</TableCell>
                  <TableCell className="font-mono text-sm">--system-pending</TableCell>
                  <TableCell className="font-mono text-sm">bg-pending</TableCell>
                  <TableCell><div className="w-16 h-8 bg-pending rounded" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TokenTable>

          <TokenTable 
            title="Neutral Colors" 
            description="The foundation colors used for backgrounds, text, and borders throughout the interface."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>CSS Variable</TableHead>
                  <TableHead>Tailwind Class</TableHead>
                  <TableHead>Preview</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Background</TableCell>
                  <TableCell className="font-mono text-sm">--neutral-background</TableCell>
                  <TableCell className="font-mono text-sm">bg-background</TableCell>
                  <TableCell><div className="w-16 h-8 bg-background border border-neutral rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Foreground</TableCell>
                  <TableCell className="font-mono text-sm">--neutral-foreground</TableCell>
                  <TableCell className="font-mono text-sm">text-foreground</TableCell>
                  <TableCell><div className="w-16 h-8 bg-foreground rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Muted</TableCell>
                  <TableCell className="font-mono text-sm">--neutral-muted</TableCell>
                  <TableCell className="font-mono text-sm">bg-muted</TableCell>
                  <TableCell><div className="w-16 h-8 bg-muted rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Muted Foreground</TableCell>
                  <TableCell className="font-mono text-sm">--neutral-muted-foreground</TableCell>
                  <TableCell className="font-mono text-sm">text-muted-foreground</TableCell>
                  <TableCell><div className="w-16 h-8 bg-muted-foreground rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Border</TableCell>
                  <TableCell className="font-mono text-sm">--neutral-border</TableCell>
                  <TableCell className="font-mono text-sm">border-neutral</TableCell>
                  <TableCell><div className="w-16 h-8 border-2 border-neutral rounded" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TokenTable>
        </TabsContent>

        <TabsContent id="typography" value="typography" className="mt-6 space-y-8">
          <TokenTable 
            title="Headings" 
            description="Typography scale for headings with consistent visual hierarchy."
          >
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h1 className="text-4xl font-bold">Heading 1</h1>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-sm">text-4xl font-bold</p>
                  <p className="text-muted-foreground mt-1">Used for main page headings</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h2 className="text-3xl font-bold">Heading 2</h2>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-sm">text-3xl font-bold</p>
                  <p className="text-muted-foreground mt-1">Used for section headings</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Heading 3</h3>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-sm">text-2xl font-bold</p>
                  <p className="text-muted-foreground mt-1">Used for sub-section headings</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-xl font-bold">Heading 4</h4>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-sm">text-xl font-bold</p>
                  <p className="text-muted-foreground mt-1">Used for card headings and smaller sections</p>
                </div>
              </div>
            </div>
          </TokenTable>

          <TokenTable 
            title="Body Text" 
            description="Typography scale for body text with varying emphasis levels."
          >
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-lg">Large Body Text</p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-sm">text-lg</p>
                  <p className="text-muted-foreground mt-1">Used for featured paragraphs or introductions</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p>Default Body Text</p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-sm">text-base</p>
                  <p className="text-muted-foreground mt-1">Used for standard paragraphs and content</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm">Small Body Text</p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-sm">text-sm</p>
                  <p className="text-muted-foreground mt-1">Used for supplementary information and UI elements</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs">Extra Small Text</p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-sm">text-xs</p>
                  <p className="text-muted-foreground mt-1">Used for captions, footnotes, and legal text</p>
                </div>
              </div>
            </div>
          </TokenTable>
        </TabsContent>

        <TabsContent id="spacing" value="spacing" className="mt-6 space-y-8">
          <TokenTable 
            title="Spacing Scale" 
            description="Consistent spacing units used for margin, padding, and layout spacing."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token Size</TableHead>
                  <TableHead>Tailwind Class</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell className="font-mono text-sm">p-1, m-1, gap-1</TableCell>
                  <TableCell className="font-mono text-sm">0.25rem (4px)</TableCell>
                  <TableCell><div className="w-4 h-4 bg-primary/20 border border-primary/40" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell className="font-mono text-sm">p-2, m-2, gap-2</TableCell>
                  <TableCell className="font-mono text-sm">0.5rem (8px)</TableCell>
                  <TableCell><div className="w-8 h-8 bg-primary/20 border border-primary/40" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">4</TableCell>
                  <TableCell className="font-mono text-sm">p-4, m-4, gap-4</TableCell>
                  <TableCell className="font-mono text-sm">1rem (16px)</TableCell>
                  <TableCell><div className="w-16 h-16 bg-primary/20 border border-primary/40" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">6</TableCell>
                  <TableCell className="font-mono text-sm">p-6, m-6, gap-6</TableCell>
                  <TableCell className="font-mono text-sm">1.5rem (24px)</TableCell>
                  <TableCell><div className="w-24 h-6 bg-primary/20 border border-primary/40" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">8</TableCell>
                  <TableCell className="font-mono text-sm">p-8, m-8, gap-8</TableCell>
                  <TableCell className="font-mono text-sm">2rem (32px)</TableCell>
                  <TableCell><div className="w-32 h-8 bg-primary/20 border border-primary/40" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TokenTable>
        </TabsContent>

        <TabsContent id="radius" value="radius" className="mt-6 space-y-8">
          <TokenTable 
            title="Border Radius" 
            description="Consistent border radius values for UI elements."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>CSS Variable</TableHead>
                  <TableHead>Tailwind Class</TableHead>
                  <TableHead>Preview</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Small</TableCell>
                  <TableCell className="font-mono text-sm">calc(var(--radius) - 4px)</TableCell>
                  <TableCell className="font-mono text-sm">rounded-sm</TableCell>
                  <TableCell><div className="w-16 h-16 bg-primary/20 border border-primary/40 rounded-sm" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Medium</TableCell>
                  <TableCell className="font-mono text-sm">calc(var(--radius) - 2px)</TableCell>
                  <TableCell className="font-mono text-sm">rounded-md</TableCell>
                  <TableCell><div className="w-16 h-16 bg-primary/20 border border-primary/40 rounded-md" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Default</TableCell>
                  <TableCell className="font-mono text-sm">var(--radius)</TableCell>
                  <TableCell className="font-mono text-sm">rounded</TableCell>
                  <TableCell><div className="w-16 h-16 bg-primary/20 border border-primary/40 rounded" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Large</TableCell>
                  <TableCell className="font-mono text-sm">var(--radius)</TableCell>
                  <TableCell className="font-mono text-sm">rounded-lg</TableCell>
                  <TableCell><div className="w-16 h-16 bg-primary/20 border border-primary/40 rounded-lg" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Full</TableCell>
                  <TableCell className="font-mono text-sm">9999px</TableCell>
                  <TableCell className="font-mono text-sm">rounded-full</TableCell>
                  <TableCell><div className="w-16 h-16 bg-primary/20 border border-primary/40 rounded-full" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TokenTable>
        </TabsContent>
        
        <TabsContent id="shadows" value="shadows" className="mt-6 space-y-8">
          <TokenTable 
            title="Shadow Tokens" 
            description="Shadows help create depth and hierarchy in the interface."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="h-24 bg-background shadow-sm rounded-lg" />
                <div>
                  <p className="font-medium">Shadow Small</p>
                  <p className="text-sm text-muted-foreground font-mono mt-1">shadow-sm</p>
                  <p className="text-xs text-muted-foreground mt-1">Used for subtle elevation</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-24 bg-background shadow rounded-lg" />
                <div>
                  <p className="font-medium">Shadow Default</p>
                  <p className="text-sm text-muted-foreground font-mono mt-1">shadow</p>
                  <p className="text-xs text-muted-foreground mt-1">Used for default elevation</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-24 bg-background shadow-md rounded-lg" />
                <div>
                  <p className="font-medium">Shadow Medium</p>
                  <p className="text-sm text-muted-foreground font-mono mt-1">shadow-md</p>
                  <p className="text-xs text-muted-foreground mt-1">Used for noticeable elevation</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-24 bg-background shadow-lg rounded-lg" />
                <div>
                  <p className="font-medium">Shadow Large</p>
                  <p className="text-sm text-muted-foreground font-mono mt-1">shadow-lg</p>
                  <p className="text-xs text-muted-foreground mt-1">Used for significant elevation</p>
                </div>
              </div>
            </div>
          </TokenTable>
          
          <TokenTable 
            title="Shadow Usage" 
            description="Guidelines for using shadows in UI elements."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Shadow Type</TableHead>
                  <TableHead>Recommended Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">shadow-sm</TableCell>
                  <TableCell>Buttons, form inputs, small UI elements</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">shadow</TableCell>
                  <TableCell>Cards, panels, secondary UI containers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">shadow-md</TableCell>
                  <TableCell>Dropdowns, popovers, floating elements</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">shadow-lg</TableCell>
                  <TableCell>Modals, dialogs, elevated content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">shadow-xl</TableCell>
                  <TableCell>Full-page overlays, maximum elevation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TokenTable>
        </TabsContent>
      </Tabs>
    </div>
  )
} 