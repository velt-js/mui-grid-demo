"use client"

import { VeltCollaboration } from "@/components/velt/VeltCollaboration"
import { VeltProvider } from "@veltdev/react"
import dynamic from "next/dynamic"

const DataGridDemo = dynamic(
  () => import("@/components/option-2/data-grid-demo/DataGridDemo"),
  { ssr: false }
)

export default function Page() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltCollaboration />
      <DataGridDemo />
    </VeltProvider>
  )
} 