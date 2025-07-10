"use client"

import { Box } from "@mui/material"
import { VeltNotificationsTool, VeltSidebarButton } from "@veltdev/react"

export default function VeltNavTools() {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 2 }}>
      <VeltSidebarButton shadowDom={false} />
      <VeltNotificationsTool shadowDom={false} />
    </Box>
  )
} 