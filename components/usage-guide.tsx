import { Card } from "./ui/card"
import { CodeSnippet } from "./ui/code-snippet"

export default function UsageGuide() {
  return (
    <div className="space-y-8 max-w-4xl">
      <header>
        <h1 className="text-3xl font-bold">Design System Usage Guide</h1>
        <p className="text-lg text-muted-foreground mt-2">How to use the design system in your projects</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <p>
          This design system provides a comprehensive set of UI components and styles that can be used across your
          projects. It supports multiple themes and includes various UI elements like buttons, cards, alerts, and more.
        </p>

        <Card className="p-6 mt-6">
          <h3 className="text-xl font-medium mb-4">Installation</h3>
          <p className="mb-4">To use this design system in your project, include the CSS file and component files in your project.</p>

          <CodeSnippet 
            code={`// Import the CSS file
import "@/styles/globals.css";

// Import components as needed
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";`} 
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Theming</h2>
        <p>
          The design system supports multiple themes. By default, it uses the green theme, but you can switch to blue,
          purple, or red themes.
        </p>

        <Card className="p-6 mt-6">
          <h3 className="text-xl font-medium mb-4">Using the Theme Switcher</h3>
          <p className="mb-4">Include the ThemeSwitcher component in your layout to allow users to change themes:</p>

          <CodeSnippet 
            code={`import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Layout() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <h1>Your App</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
}`} 
          />
        </Card>

        <Card className="p-6 mt-6">
          <h3 className="text-xl font-medium mb-4">Creating a New Theme</h3>
          <p className="mb-4">To create a new theme, add a new CSS class in globals.css:</p>

          <CodeSnippet 
            language="css"
            code={`/* New Theme - Orange */
.theme-orange {
  --brand-primary: 245 124 0; /* #F57C00 */
  --brand-primary-light: 255 243 224; /* #FFF3E0 */
  --brand-primary-dark: 230 81 0; /* #E65100 */
  --brand-secondary: 66 66 66; /* #424242 */
  --brand-tertiary: 255 152 0; /* #FF9800 */
}`} 
          />

          <p className="mt-4">Then update the ThemeSwitcher component to include the new theme.</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Using Components</h2>
        <p>
          The design system includes various components that you can use in your projects. Here are some examples:
        </p>

        <Card className="p-6 mt-6">
          <h3 className="text-xl font-medium mb-4">Buttons</h3>
          <p className="mb-4">The design system provides various button styles:</p>

          <CodeSnippet 
            code={`// Primary button
<Button>Primary Button</Button>

// Secondary button
<Button variant="secondary">Secondary Button</Button>

// Outline button
<Button variant="outline">Outline Button</Button>

// Button with icon
<Button>
  <LucideMail className="mr-2 h-4 w-4" />
  Email
</Button>

// Icon button
<Button variant="outline" size="icon">
  <LucideHeart className="h-4 w-4" />
</Button>`} 
          />
        </Card>

        <Card className="p-6 mt-6">
          <h3 className="text-xl font-medium mb-4">Cards</h3>
          <p className="mb-4">Cards are used to group related content:</p>

          <CodeSnippet 
            code={`<Card className="p-6">
  <h3 className="text-lg font-medium mb-2">Card Title</h3>
  <p className="text-muted-foreground mb-4">
    This is a card with some content. Cards can contain any type of content.
  </p>
  <div className="flex justify-end">
    <Button variant="outline" size="sm">Cancel</Button>
    <Button size="sm" className="ml-2">Submit</Button>
  </div>
</Card>`} 
          />
        </Card>

        <Card className="p-6 mt-6">
          <h3 className="text-xl font-medium mb-4">Form Controls</h3>
          <p className="mb-4">Various form controls for user input:</p>

          <CodeSnippet 
            code={`// Input field with label
<div className="space-y-2">
  <label className="text-sm font-medium">Username</label>
  <Input placeholder="Enter your username" />
</div>

// Select control
<div className="space-y-2">
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
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Best Practices</h2>
        <Card className="p-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-success/20 text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Use the provided components consistently</p>
                <p className="text-sm text-muted-foreground mt-1">Maintain a unified look and feel by using the design system components throughout your application.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-success/20 text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Follow the design token system</p>
                <p className="text-sm text-muted-foreground mt-1">Use the design tokens for colors, spacing, typography, and other styles instead of hard-coding values.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-success/20 text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Test with all themes</p>
                <p className="text-sm text-muted-foreground mt-1">Ensure your UI looks good in all supported themes and color modes.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-success/20 text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Prioritize accessibility</p>
                <p className="text-sm text-muted-foreground mt-1">Follow accessibility best practices for color contrast, keyboard navigation, and semantic HTML.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-success/20 text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Responsive design</p>
                <p className="text-sm text-muted-foreground mt-1">Ensure your UI works well on all screen sizes and devices.</p>
              </div>
            </li>
          </ul>
        </Card>
      </section>
    </div>
  )
}
