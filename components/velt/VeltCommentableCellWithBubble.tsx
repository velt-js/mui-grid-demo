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
    <div id={elementId} style={{ position: "relative" }} className="group w-full">
      {children}
      <div className="absolute top-0 right-0">
        <VeltCommentTool targetElementId={elementId} />
        <VeltCommentBubble targetElementId={elementId} />
      </div>
    </div>
  )
} 