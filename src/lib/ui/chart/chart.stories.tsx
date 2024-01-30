import type { Meta, StoryObj } from "@storybook/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

interface ChartProps {
  children: React.ReactNode;
}

const ChartTemplate = (args: ChartProps) => (
  <div {...args}>{args.children}</div>
);

const meta = {
  title: "UI/Chart",
  component: ChartTemplate,
  parameters: {},
} satisfies Meta<typeof ChartTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => getRandomNumber()),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => getRandomNumber()),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const BarChart: Story = {
  args: {
    children: <Bar options={options} data={data} />,
  },
};

function getRandomNumber() {
  return Math.floor(Math.random() * 101); // Generates a random integer between 0 and 100
}
