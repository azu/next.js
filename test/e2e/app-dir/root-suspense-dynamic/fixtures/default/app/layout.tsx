import { Suspense } from 'react'
import DynamicWrapper from './dynamic-wrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense>
      <html>
        <body>
          <DynamicWrapper>{children}</DynamicWrapper>
        </body>
      </html>
    </Suspense>
  )
}
