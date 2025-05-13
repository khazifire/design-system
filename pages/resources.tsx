'use client'

import dynamic from 'next/dynamic'
import { Card } from '@/components/ui/card'

export default function Resources() {
  return (
    <div className="container mx-auto py-10">
      <Card className="p-6">
        <h1 className="text-3xl font-bold mb-4">Resources</h1>
        <p className="text-muted-foreground">
          Discover helpful resources, tools, and documentation for our design system.
        </p>
      </Card>
    </div>
  )
}
