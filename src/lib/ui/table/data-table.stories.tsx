import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./table";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./data-table";

interface FileRow {
  id: string;
  url: string | null;
  fileName: string;
  type: string;
  size: number;
}

const columns: ColumnDef<FileRow>[] = [
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "fileName",
    header: "File Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => `${Math.round(row.original.size / 1024)} KB`,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
];

export const DataTableTemplate = () => {
  const filesData: FileRow[] = [
    {
      id: "123",
      url: "https://example.com",
      fileName: "example.txt",
      type: "text/plain",
      size: 1024,
    },
    {
      id: "123",
      url: "https://example.com",
      fileName: "example.txt",
      type: "text/plain",
      size: 1024,
    },
    {
      id: "123",
      url: "https://example.com",
      fileName: "example.txt",
      type: "text/plain",
      size: 1024,
    },
  ];
  if (!filesData) return null;
  return <DataTable columns={columns} data={filesData} />;
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Table",
  component: DataTableTemplate,
  parameters: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
