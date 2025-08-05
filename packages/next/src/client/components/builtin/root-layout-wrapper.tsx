'use client'

/**
 * Framework marker component injected by Next.js to detect when root layouts
 * are wrapped in <Suspense>. Creates "Suspense -> RootLayoutWrapper" pattern
 * in component stacks, enabling dynamic rendering detection in dynamic-rendering.ts.
 */
export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
