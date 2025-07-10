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
    <div id={elementId} style={{ position: "relative" }} className="group w-full flex items-center justify-between">
      {children}
      <div className="flex">
        <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <VeltCommentTool targetElementId={elementId} />
        </div>
        <VeltCommentBubble targetElementId={elementId} />
      </div>
    </div>
  )
} 