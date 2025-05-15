'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeSnippet } from "@/components/ui/code-snippet"
import { LucideInfo, Check, Copy, RefreshCw } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

export function DesignGuidelines() {
  // Theme builder state
  const [primaryColor, setPrimaryColor] = useState('#1fa37c') // Default primary color (blue-500)
  const [secondaryColor, setSecondaryColor] = useState('#333333') // Default secondary color (purple-500)
  const [tertiaryColor, setTertiaryColor] = useState('#006A76') // Default tertiary color (green-500)
  const [radius, setRadius] = useState(8) // Default border radius in pixels
  const [copied, setCopied] = useState(false)
  
  // Convert hex to RGB for CSS variables
  const hexToRgb = (hex: string): string => {
    // Remove # if present
    hex = hex.replace('#', '')
    
    // Parse hex values
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    
    // Return as space-separated string
    return `${r} ${g} ${b}`
  }
  
  // Generate CSS variables from current theme settings
  const generateThemeCss = () => {
    return `@layer base {
  :root {
    --radius: ${radius/16}rem;
    
    /* Brand Colors (changed based on your selection) */
    --brand-primary: ${hexToRgb(primaryColor)}; /* ${primaryColor} */
    --brand-primary-light: ${hexToRgb(adjustColorBrightness(primaryColor, 30))}; /* ${adjustColorBrightness(primaryColor, 30)} */
    --brand-primary-dark: ${hexToRgb(adjustColorBrightness(primaryColor, -30))}; /* ${adjustColorBrightness(primaryColor, -30)} */
    --brand-secondary: ${hexToRgb(secondaryColor)}; /* ${secondaryColor} */
    --brand-tertiary: ${hexToRgb(tertiaryColor)}; /* ${tertiaryColor} */
    
    /* System Colors 
    --system-success: 61 187 137; /* #3DBB89  green*/
    --system-error: 220 93 94; /* #DC5D5E  red*/
    --system-warning: 255 195 54; /* #FFC336  yellow*/
    --system-info: 0 114 245; /* #0072F5  blue*/
    --system-pending: 121 0 186; /* #7900BA  purple*/
    
    /* Neutral Colors - Light Mode */
    --neutral-background: 255 255 255; /* #FFFFFF */
    --neutral-foreground: 0 0 0; /* #000000 */
    --neutral-muted: 241 243 245; /* #F1F3F5 */
    --neutral-muted-foreground: 102 102 102; /* #666666 */
    --neutral-border: 229 229 229; /* #E5E5E5 */
  }
}`
  }
  
  // Helper function to lighten or darken a color
  const adjustColorBrightness = (hex: string, percent: number): string => {
    // Remove # if present
    hex = hex.replace('#', '')
    
    // Parse hex values
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)
    
    // Adjust brightness
    r = Math.min(255, Math.max(0, r + (r * percent / 100)))
    g = Math.min(255, Math.max(0, g + (g * percent / 100)))
    b = Math.min(255, Math.max(0, b + (b * percent / 100)))
    
    // Convert back to hex
    const rHex = Math.round(r).toString(16).padStart(2, '0')
    const gHex = Math.round(g).toString(16).padStart(2, '0')
    const bHex = Math.round(b).toString(16).padStart(2, '0')
    
    return `#${rHex}${gHex}${bHex}`
  }
  
  // Copy the generated CSS
  const copyThemeCss = () => {
    navigator.clipboard.writeText(generateThemeCss())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  // Reset to default colors
  const resetColors = () => {
    setPrimaryColor('#1fa37c')
    setSecondaryColor('#333333')
    setTertiaryColor('#006A76')
    setRadius(8)
  }
  
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <p className="text-lg text-muted-foreground mt-2">
          How to use and customize the design system in your projects
        </p>
      </div>

      <Alert>
        <LucideInfo className="h-4 w-4" />
        <AlertTitle>Quick Start</AlertTitle>
        <AlertDescription>
          This design system is built with React, Next.js, and Tailwind CSS. Make sure you have these dependencies installed in your project.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="installation">
        <TabsList>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="tailwind">Tailwind Setup</TabsTrigger>
          {/* <TabsTrigger value="usage">Component Usage</TabsTrigger> */}
          <TabsTrigger value="theming">Theming</TabsTrigger>
        </TabsList>

        <TabsContent value="installation" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-4">Installation</h3>
            <p className="mb-4">
              Install the required dependencies using your package manager of choice:
            </p>
            
            <div className="mb-6">
              <CodeSnippet 
                code="npm install class-variance-authority clsx tailwind-merge tailwindcss-animate"
                language="bash"
              />
            </div>

            <p className="mb-4">Alternatively, if you're using PNPM:</p>
            
            <div className="mb-6">
              <CodeSnippet 
                code="pnpm add class-variance-authority clsx tailwind-merge tailwindcss-animate"
                language="bash"
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="tailwind" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-4">Tailwind CSS Setup</h3>
            <p className="mb-4">
              Configure your Tailwind CSS file to include our design tokens:
            </p>
            
            <div className="mb-6">
              <CodeSnippet 
                code={`// tailwind.config.ts
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Primary palette and variations
        primary: {
          DEFAULT: "rgb(var(--brand-primary) / <alpha-value>)",
          light: "rgb(var(--brand-primary-light) / <alpha-value>)",
          dark: "rgb(var(--brand-primary-dark) / <alpha-value>)",
        },
        secondary: "rgb(var(--brand-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--brand-tertiary) / <alpha-value>)",
        quaternary: "rgb(var(--brand-quaternary) / <alpha-value>)",

        // System Colors - Used for feedback and status indicators
        success: "rgb(var(--system-success) / <alpha-value>)",
        error: "rgb(var(--system-error) / <alpha-value>)",
        warning: "rgb(var(--system-warning) / <alpha-value>)",
        info: "rgb(var(--system-info) / <alpha-value>)",
        pending: "rgb(var(--system-pending) / <alpha-value>)",

        // Neutral Colors - Used for UI surfaces, text, and borders
        background: "rgb(var(--neutral-background) / <alpha-value>)",
        foreground: "rgb(var(--neutral-foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "rgb(var(--neutral-muted) / <alpha-value>)",
          foreground: "rgb(var(--neutral-muted-foreground) / <alpha-value>)",
        },
        neutral: "rgb(var(--neutral-border) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, rgb(var(--brand-primary)), rgb(var(--brand-primary-dark)))',
        'gradient-secondary': 'linear-gradient(to right, rgb(var(--brand-secondary)), rgb(var(--brand-tertiary)))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config`}
                language="typescript"
              />
            </div>

            <p className="mb-4">Add CSS variables to your global stylesheet:</p>
            
            <div className="mb-6">
              <CodeSnippet 
                code={`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
     :root {
    /* ---------------------------------- */
    /* Brand Colors - Default Theme      */
    /* ---------------------------------- */
    --brand-primary: 31 163 124; /* #1fa37c - Green */
    --brand-primary-light: 236 248 242; /* #ECF8F2 */
    --brand-primary-dark: 16 82 62; /* #10523e */
    --brand-secondary: 51 51 51; /* #333333 */
    --brand-tertiary: 0 106 118; /* #006A76 */
    --brand-quaternary: 255 168 0; /* #FFA800 */

    /* ---------------------------------- */
    /* System Feedback Colors            */
    /* Consistent across all themes      */
    /* ---------------------------------- */
    --system-success: 61 187 137; /* #3DBB89 */
    --system-error: 220 93 94; /* #DC5D5E */
    --system-warning: 255 195 54; /* #FFC336 */
    --system-info: 0 114 245; /* #0072F5 */
    --system-pending: 121 0 186; /* #7900BA */

    /* ---------------------------------- */
    /* Neutral Colors                    */
    /* Base palette for UI elements      */
    /* ---------------------------------- */
    --neutral-background: 255 255 255; /* #FFFFFF */
    --neutral-foreground: 0 0 0; /* #000000 */
    --neutral-muted: 241 243 245; /* #F1F3F5 */
    --neutral-muted-foreground: 102 102 102; /* #666666 */
    --neutral-border: 229 229 229; /* #E5E5E5 */

    /* ---------------------------------- */
    /* Radius                            */
    /* Used for consistent rounding      */
    /* ---------------------------------- */
    --radius: 0.5rem;
  }
}`}
                language="css"
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="mt-6 space-y-6">
          <Card className="p-6">
            {/* <h3 className="text-xl font-medium mb-4">Component Usage</h3>
            <p className="mb-4">
              Import and use components in your project:
            </p> */}
            
            {/* <div className="mb-6">
              <CodeSnippet 
                code={`import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function MyComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Form</h2>
      <div className="space-y-4">
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </div>
    </Card>
  )
}`}
                language="tsx"
              />
            </div> */}

            <h3 className="text-xl font-medium mb-4">Utility Function</h3>
            <p className="mb-4">
              Use the <code>cn</code> utility function to conditionally merge classes:
            </p>
            
            <div className="mb-6">
              <CodeSnippet 
                code={`import { cn } from "@/lib/utils"

function MyComponent({ className, ...props }) {
  return (
    <div
      className={cn("bg-primary text-white p-4 rounded-lg", className)}
      {...props}
    />
  )
}`}
                language="tsx"
              />
            </div>

            <h3 className="text-xl font-medium mb-4 mt-6">Setting Up the cn Utility</h3>
            <p className="mb-4">
              Create a utils.ts file in your lib directory to set up the cn utility function for merging Tailwind classes:
            </p>
            
            <div className="mb-6">
              <CodeSnippet 
                code={`// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge multiple class names with Tailwind CSS support
 * This helps safely merge classes without style conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Example usage:
// cn("px-2 py-1 bg-blue-500", "bg-red-500") => "px-2 py-1 bg-red-500"
// The later classes override earlier ones for the same property`}
                language="typescript"
              />
            </div>
            
            <h4 className="text-lg font-medium mb-2">Why Use the cn Utility?</h4>
            <p className="mb-4">
              The <code>cn</code> utility function provides several benefits:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Conflict Resolution</strong>: It properly handles Tailwind class conflicts, where later classes override earlier ones.
              </li>
              <li>
                <strong>Conditional Classes</strong>: Easily add classes conditionally without string concatenation issues.
              </li>
              <li>
                <strong>Props Merging</strong>: It allows component consumers to extend or override your default styles.
              </li>
              <li>
                <strong>Consistent Patterns</strong>: Provides a standard approach to class handling across your codebase.
              </li>
            </ul>
            
            <h4 className="text-lg font-medium mb-2">Examples</h4>
            <div className="mb-6">
              <CodeSnippet 
                code={`// Conditional classes
cn("base-styles", isActive && "active-styles")

// Merging with user-provided classes
cn("default-component-styles", className)

// Complex conditions
cn(
  "px-4 py-2 rounded",
  isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark",
  variant === "outline" && "bg-transparent border border-primary text-primary"
)`}
                language="typescript"
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="theming" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-4">Creating a Custom Theme</h3>
            <p className="mb-4">
              Customize themes by modifying the CSS variables in your globals.css file:
            </p>
            
            <div className="mb-6">
              <CodeSnippet 
                code={`@layer base {
  :root {
    /* Brand Colors - customize these for your brand */
    --brand-primary: 79 70 229; /* Indigo-600 */
    --brand-primary-light: 129 140 248; /* Indigo-400 */
    --brand-primary-dark: 67 56 202; /* Indigo-700 */
    --brand-secondary: 217 70 239; /* Fuchsia-600 */
    
    /* You can customize other variables as needed */
  }
}`}
                language="css"
              />
            </div>

            <h3 className="text-xl font-medium mb-4 mt-6">Theme Builder</h3>
            <p className="mb-4">
              Use this interactive tool to customize your theme colors and generate CSS variables:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex gap-3">
                    <div 
                      className="w-10 h-10 rounded-md border"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <Input
                      id="primary-color"
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                    />
                    <Input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-12 p-1 h-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex gap-3">
                    <div 
                      className="w-10 h-10 rounded-md border"
                      style={{ backgroundColor: secondaryColor }}
                    />
                    <Input
                      id="secondary-color"
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                    />
                    <Input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-12 p-1 h-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tertiary-color">Tertiary Color</Label>
                  <div className="flex gap-3">
                    <div 
                      className="w-10 h-10 rounded-md border"
                      style={{ backgroundColor: tertiaryColor }}
                    />
                    <Input
                      id="tertiary-color"
                      type="text"
                      value={tertiaryColor}
                      onChange={(e) => setTertiaryColor(e.target.value)}
                    />
                    <Input
                      type="color"
                      value={tertiaryColor}
                      onChange={(e) => setTertiaryColor(e.target.value)}
                      className="w-12 p-1 h-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="radius">Border Radius: {radius}px</Label>
                  <Slider 
                    id="radius"
                    min={0} 
                    max={20} 
                    step={1}
                    value={[radius]}
                    onValueChange={(value) => setRadius(value[0])}
                  />
                </div>
                
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetColors}
                    className="flex items-center gap-2"
                  >
                    <RefreshCw className="h-4 w-4" /> Reset to Default
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-md border space-y-4">
                  <h4 className="font-medium">Theme Preview</h4>
                  
                  <div className="flex flex-wrap gap-2">
                    <div 
                      className="w-24 h-16 rounded-md flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Primary
                    </div>
                    <div 
                      className="w-[8.7rem] h-16 rounded-md flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      Secondary
                    </div>
                    <div 
                      className="w-[8.7rem] h-16 rounded-md flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: tertiaryColor }}
                    >
                      Tertiary
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <div 
                      className="w-48 h-16 rounded-md flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: adjustColorBrightness(primaryColor, 30) }}
                    >
                      Primary Light
                    </div>
                  
                    <div 
                      className="w-48 h-16 rounded-md flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: adjustColorBrightness(primaryColor, -30) }}
                    >
                     Primary Dark
                    </div>
                  </div>
                  
                  <div 
                    className="p-3 border" 
                    style={{ borderRadius: `${radius}px` }}
                  >
                    Border Radius: {radius}px
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    onClick={copyThemeCss}
                    className="flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Copy CSS Variables
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <CodeSnippet 
                code={generateThemeCss()}
                language="css"
              />
            </div>

            {/* <h3 className="text-xl font-medium mb-4 mt-6">Dark Mode Support</h3>
            <p className="mb-4">
              Add dark mode support using the ThemeProvider component:
            </p>
            
            <div className="mb-6">
              <CodeSnippet 
                code={`// _app.tsx
import { ThemeProvider } from "@/components/theme-provider"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}`}
                language="tsx"
              />
            </div>

            <p className="mb-4">Add a theme toggle button:</p>
            
            <div className="mb-6">
              <CodeSnippet 
                code={`import { ThemeSwitcher } from "@/components/theme-switcher"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  )
}`}
                language="tsx"
              />
            </div> */}
          </Card>
        </TabsContent>
      </Tabs>

      {/* <Card className="p-6">
        <h3 className="text-xl font-medium mb-4">Next Steps</h3>
        <p className="mb-4">
          Now that you've set up the design system, check out these resources:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-primary">Component Documentation</span> - Explore all available components and their APIs
          </li>
          <li>
            <span className="text-primary">Resources</span> - Design tokens, guidelines, and additional resources
          </li>
        </ul>
      </Card> */}
    </div>
  )
} 