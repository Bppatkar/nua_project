import React from "react";
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";
import fakeData from "./makeData";

const columnHelper = createMRTColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    size: 40,
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    size: 120,
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    size: 120,
  }),
  columnHelper.accessor("company", {
    header: "Company",
    size: 300,
  }),
  columnHelper.accessor("city", {
    header: "City",
  }),
  columnHelper.accessor("country", {
    header: "Country",
    size: 220,
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const TableComponent = () => {
  const handleExportRows = (rows) => {
    if (rows && rows.length) {
      const rowData = rows.map((row) => row.original);
      const csv = generateCsv(csvConfig)(rowData);
      download(csvConfig)(csv);
    } else {
      console.error("Rows data is undefined or empty.");
    }
  };

  const handleExportData = () => {
    if (fakeData && fakeData.length) {
      const csv = generateCsv(csvConfig)(fakeData);
      download(csvConfig)(csv);
    } else {
      console.error("Fake data is undefined or empty.");
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fakeData, // Assuming you pass fakeData as data
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
          disabled={!fakeData || !fakeData.length}
        >
          Export All Data
        </Button>
        <Button
          onClick={() =>
            handleExportRows(table?.getPrePaginationRowModel()?.rows)
          }
          startIcon={<FileDownloadIcon />}
          disabled={!table?.getPrePaginationRowModel()?.rows?.length}
        >
          Export All Rows
        </Button>
        {/* Other export buttons */}
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default TableComponent;
