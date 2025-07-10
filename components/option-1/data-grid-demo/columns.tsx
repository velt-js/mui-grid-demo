"use client"
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { VeltCommentableCellWithoutBubble } from "@/components/velt/VeltCommentableCellWithoutBubble"

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithoutBubble params={params}>{params.value}</VeltCommentableCellWithoutBubble>
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithoutBubble params={params}>{params.value}</VeltCommentableCellWithoutBubble>
    ),
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithoutBubble params={params}>{params.value}</VeltCommentableCellWithoutBubble>
    ),
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithoutBubble params={params}>{params.value}</VeltCommentableCellWithoutBubble>
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
      <VeltCommentableCellWithoutBubble params={params}>{params.value}</VeltCommentableCellWithoutBubble>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithoutBubble params={params}>{params.value}</VeltCommentableCellWithoutBubble>
    ),
  },
  {
    field: "department",
    headerName: "Department",
    width: 130,
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithoutBubble params={params}>{params.value}</VeltCommentableCellWithoutBubble>
    ),
  },
  {
    field: "salary",
    headerName: "Salary",
    type: "number",
    width: 120,
    valueFormatter: (value: number) => {
      if (typeof value === "number") {
        return `$${value.toLocaleString()}`
      }
      return value
    },
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithoutBubble params={params}>
        {params.formattedValue}
      </VeltCommentableCellWithoutBubble>
    ),
  },
  {
    field: "joinDate",
    headerName: "Join Date",
    width: 120,
    type: "date",
    renderCell: (params: GridRenderCellParams) => (
      <VeltCommentableCellWithoutBubble params={params}>
        {params.value instanceof Date
          ? params.value.toLocaleDateString()
          : params.value}
      </VeltCommentableCellWithoutBubble>
    ),
  },
] 