"use client"

import { VeltCommentBubble, VeltCommentTool } from "@veltdev/react"
import type { GridRenderCellParams } from "@mui/x-data-grid"
import React from "react"

interface VeltCommentableCellProps {
  params: GridRenderCellParams
  children: React.ReactNode
}

export const VeltCommentableCellWithBubble: React.FC<VeltCommentableCellProps> = ({
  params,
  children,
}) => {
  const elementId = `cell-${params.field}-${params.id}`

  return (
    <div style={{ position: "relative" }} className="group w-full">
      {children}
      <div className="absolute top-0 right-0 invisible group-hover:visible">
        <VeltCommentTool context={{
          field: params.field,
          id: params.id,
        }} />
      </div>
      <div className="absolute top-0 right-0">
        <VeltCommentBubble context={{
          field: params.field,
          id: params.id,
        }} />
      </div>
    </div>
  )
} 