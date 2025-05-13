'use client'

import { ComponentExample } from './component-example'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LucideMail, LucideHeart, LucideCheck, LucideAlertTriangle } from "lucide-react"

export function ComponentsShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold">Components</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Essential building blocks for your applications.
        </p>
      </div>

      <section id="buttons" className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <Badge variant="outline" className="text-xs font-normal">Interactive</Badge>
        </div>
        
        <ComponentExample 
          title="Variants"
          description="Different button styles for various purposes."
          code={`<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </ComponentExample>
        
        <ComponentExample 
          title="Sizes"
          description="Buttons come in different sizes for various contexts."
          code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentExample>
        
        <ComponentExample 
          title="With Icons"
          description="Buttons can include icons to enhance meaning."
          code={`<Button>
  <LucideMail className="mr-2 h-4 w-4" />
  Email
</Button>
<Button variant="outline" size="icon">
  <LucideHeart className="h-4 w-4" />
</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button>
              <LucideMail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="outline" size="icon">
              <LucideHeart className="h-4 w-4" />
            </Button>
          </div>
        </ComponentExample>
        
        <div className="space-y-6">
          <h3 className="text-lg font-medium mb-3">Usage Guidelines</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2 text-success">
                <LucideCheck className="h-4 w-4" />
                <span>Do</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <LucideCheck className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Use primary buttons for main actions</span>
                </li>
                <li className="flex gap-2">
                  <LucideCheck className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Keep button labels concise and action-oriented</span>
                </li>
                <li className="flex gap-2">
                  <LucideCheck className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Use icons to reinforce meaning when helpful</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2 text-error">
                <LucideAlertTriangle className="h-4 w-4" />
                <span>Don't</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <LucideAlertTriangle className="h-4 w-4 text-error mt-0.5 flex-shrink-0" />
                  <span>Use too many primary buttons in one view</span>
                </li>
                <li className="flex gap-2">
                  <LucideAlertTriangle className="h-4 w-4 text-error mt-0.5 flex-shrink-0" />
                  <span>Use long button labels that wrap to multiple lines</span>
                </li>
                <li className="flex gap-2">
                  <LucideAlertTriangle className="h-4 w-4 text-error mt-0.5 flex-shrink-0" />
                  <span>Use button styles for navigational links</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id="inputs" className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Form Controls</h2>
          <Badge variant="outline" className="text-xs font-normal">Interactive</Badge>
        </div>
        
        <ComponentExample 
          title="Input Field"
          description="Standard text input for collecting user data."
          code={`<div className="space-y-2">
  <label className="text-sm font-medium">Username</label>
  <Input placeholder="Enter your username" />
</div>`}
          align="start"
        >
          <div className="w-full max-w-sm space-y-2">
            <label className="text-sm font-medium">Username</label>
            <Input placeholder="Enter your username" />
          </div>
        </ComponentExample>
        
        <ComponentExample 
          title="Select Menu"
          description="Dropdown selection control for choosing from a list of options."
          code={`<div className="space-y-2">
  <label className="text-sm font-medium">Choose an option</label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Options</SelectLabel>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
        <SelectItem value="3">Option 3</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>`}
          align="start"
        >
          <div className="w-full max-w-sm space-y-2">
            <label className="text-sm font-medium">Choose an option</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                  <SelectItem value="3">Option 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </ComponentExample>
      </section>
      
      <section id="badges" className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Badges</h2>
          <Badge variant="outline" className="text-xs font-normal">UI Element</Badge>
        </div>
        
        <ComponentExample 
          title="Badge Variants"
          description="Small status indicators for showing metadata."
          code={`<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>`}
        >
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </ComponentExample>
      </section>
      
      <section id="cards" className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <Badge variant="outline" className="text-xs font-normal">UI Element</Badge>
        </div>
        
        <ComponentExample 
          title="Basic Card"
          description="Container for related content and actions."
          code={`<Card className="p-6 max-w-md">
  <h3 className="text-lg font-medium mb-2">Card Title</h3>
  <p className="text-muted-foreground mb-4">
    This is a basic card component that can be used to display content.
  </p>
  <div className="flex justify-end">
    <Button variant="outline" size="sm">Cancel</Button>
    <Button size="sm" className="ml-2">Submit</Button>
  </div>
</Card>`}
          align="start"
        >
          <Card className="p-6 max-w-md w-full">
            <h3 className="text-lg font-medium mb-2">Card Title</h3>
            <p className="text-muted-foreground mb-4">
              This is a basic card component that can be used to display content.
            </p>
            <div className="flex justify-end">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm" className="ml-2">Submit</Button>
            </div>
          </Card>
        </ComponentExample>
        
        <ComponentExample 
          title="Profile Card"
          description="Card variant for displaying user information."
          code={`<Card className="p-6 max-w-sm">
  <div className="flex items-center gap-4">
    <Avatar className="border-2">
      <img src="https://github.com/khazifire.png" alt="User" />
    </Avatar>
    <div>
      <h3 className="font-medium">BIg Boss</h3>
      <p className="text-sm text-muted-foreground">just a little guy that codes</p>
    </div>
  </div>
  <div className="mt-4 pt-4 border-t">
    <p className="text-sm text-muted-foreground">
      Hello everyone, welcome to our simple design system
    </p>
  </div>
</Card>`}
          align="start"
        >
          <Card className="p-6 max-w-sm w-full">
            <div className="flex items-center gap-4">
              <Avatar className="border-2">
                <img src="https://github.com/khazifire.png" alt="User" />
              </Avatar>
              <div>
                <h3 className="font-medium">BIg Boss</h3>
                <p className="text-sm text-muted-foreground">just a little guy that codes</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Hello everyone, welcome to our simple design system
              </p>
            </div>
          </Card>
        </ComponentExample>
      </section>
    </div>
  )
} 