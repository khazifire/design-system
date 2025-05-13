import dynamic from 'next/dynamic'

const DesignSystemDemo = dynamic(() => import('@/components/design-system-demo'), {
  ssr: false
})

export default function HomePage() {
    return <DesignSystemDemo />
  }
