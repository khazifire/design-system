import { useState } from "react"
import { LucideCopy, LucideCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeSnippetProps {
  code: string
  language?: string
  className?: string
  showLineNumbers?: boolean
}

export function CodeSnippet({ code, language = "jsx", className, showLineNumbers = true }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className={cn("relative rounded-md bg-muted overflow-hidden", className)}>
      <pre className={cn(
        "p-4 overflow-x-auto text-sm font-mono", 
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
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 backdrop-blur-sm border border-neutral hover:bg-muted transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <LucideCheck className="h-4 w-4 text-success" />
        ) : (
          <LucideCopy className="h-4 w-4" />
        )}
      </button>
    </div>
  )
} 