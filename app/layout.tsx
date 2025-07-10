import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MUI Data Grid Demo",
  description: "A simple demonstration of MUI X Data Grid",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'