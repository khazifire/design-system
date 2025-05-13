import { useState } from 'react'
import { LucideCopy, LucideCheck, LucideCode, LucideX } from 'lucide-react'
import { Button } from './button'
import { Card } from './card'
import { cn } from '@/lib/utils'

interface CodeViewerProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeViewer({
  code,
  language = 'jsx',
  filename,
  showLineNumbers = true,
  className,
}: CodeViewerProps) {
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className={cn("relative overflow-hidden rounded-md border", className)}>
      {filename && (
        <div className="flex items-center justify-between bg-muted px-4 py-2 border-b">
          <div className="font-mono text-sm text-muted-foreground">{filename}</div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 gap-1 text-xs" 
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? (
                <>
                  <LucideX className="h-3.5 w-3.5" />
                  <span>Hide Code</span>
                </>
              ) : (
                <>
                  <LucideCode className="h-3.5 w-3.5" />
                  <span>View Code</span>
                </>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 gap-1 text-xs" 
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <LucideCheck className="h-3.5 w-3.5 text-success" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <LucideCopy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {showCode || !filename ? (
        <pre className={cn(
          "relative p-4 overflow-x-auto bg-muted text-sm font-mono", 
          showLineNumbers ? "pl-12" : ""
        )}>
          {showLineNumbers && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-muted-foreground/10 flex flex-col items-end pr-2 py-4 select-none">
              {code.split('\n').map((_, i) => (
                <div key={i} className="text-xs text-muted-foreground">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code>{code}</code>
        </pre>
      ) : (
        <div className="p-4 flex justify-center items-center h-24 bg-muted text-muted-foreground">
          Click "View Code" to see implementation
        </div>
      )}

      {!filename && (
        <div className="absolute top-3 right-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 gap-1 bg-background/80 backdrop-blur-sm"
            onClick={copyToClipboard}
          >
            {copied ? <LucideCheck className="h-3.5 w-3.5 text-success" /> : <LucideCopy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy"}</span>
          </Button>
        </div>
      )}
    </div>
  )
} 