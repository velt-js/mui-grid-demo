"use client"
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { VeltCommentableCellWithBubble } from "@/components/velt/VeltCommentableCellWithBubble"

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>{params.value}</VeltCommentableCellWithBubble>
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>{params.value}</VeltCommentableCellWithBubble>
    ),
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>{params.value}</VeltCommentableCellWithBubble>
    ),
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    align: "left",
    headerAlign: "left",
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>{params.value}</VeltCommentableCellWithBubble>
    ),
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>{params.value}</VeltCommentableCellWithBubble>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>{params.value}</VeltCommentableCellWithBubble>
    ),
  },
  {
    field: "department",
    headerName: "Department",
    width: 130,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>{params.value}</VeltCommentableCellWithBubble>
    ),
  },
  {
    field: "salary",
    headerName: "Salary",
    type: "number",
    width: 120,
    align: "left",
    headerAlign: "left",
    valueFormatter: (value: number) => {
      if (typeof value === "number") {
        return `$${value.toLocaleString()}`
      }
      return value
    },
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>
        {params.formattedValue}
      </VeltCommentableCellWithBubble>
    ),
  },
  {
    field: "joinDate",
    headerName: "Join Date",
    width: 120,
    type: "date",
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithBubble params={params}>
        {params.value instanceof Date
          ? params.value.toLocaleDateString()
          : params.value}
      </VeltCommentableCellWithBubble>
    ),
  },
] 