"use client"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { DataGrid } from "@mui/x-data-grid"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline, Container, Typography, Box } from "@mui/material"
import { generateLargeDataset, type Row } from "./data"
import { columns } from "./columns"
import { useState } from "react"
import VeltNavTools from "../../velt/VeltNavTools"

const theme = createTheme({
  palette: {
    mode: "light",
  },
})

export default function DataGridDemo() {
  const [rows] = useState<Row[]>(() => generateLargeDataset(10000))

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <VeltNavTools />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              MUI X Data Grid - Virtualization Demo
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Demonstration of MUI X Data Grid's virtualization capabilities with 10,000 rows and 9 columns. The grid
              efficiently renders only visible content for optimal performance.
            </Typography>
          </Box>

          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 100 },
                },
              }}
              pageSizeOptions={[50, 100, 500]}
              checkboxSelection
              disableRowSelectionOnClick
              rowHeight={52}
              columnHeaderHeight={56}
              // Virtualization settings
              rowBufferPx={100}
              columnBufferPx={150}
              // Performance optimizations
              disableColumnResize={false}
            />
          </Box>
        </Container>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
} 