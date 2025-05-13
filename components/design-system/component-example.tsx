import { ReactNode, useState } from 'react'
import { Card } from "@/components/ui/card"
import { CodeViewer } from '@/components/ui/code-viewer'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'

interface ComponentExampleProps {
  title: string
  description?: string
  code: string
  children: ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
  preview?: boolean
}

export function ComponentExample({ 
  title,
  description,
  code,
  children,
  className,
  align = 'center',
  preview = false
}: ComponentExampleProps) {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <div className={cn("component-example space-y-4", className)}>
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-medium">{title}</h3>
        {preview && <Badge variant="outline" className="text-xs">Preview</Badge>}
      </div>
      
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      
      <Card className="overflow-hidden">
        <div 
          className={cn(
            "p-6 flex items-center bg-background border-b border-muted",
            align === 'center' && "justify-center",
            align === 'end' && "justify-end"
          )}
        >
          {children}
        </div>
        
        <CodeViewer 
          code={code}
          filename="Example.tsx"
          language="jsx"
        />
      </Card>
    </div>
  )
} 