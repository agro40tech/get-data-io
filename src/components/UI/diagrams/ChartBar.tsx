import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { IObjectArrTitlesRepeats } from "@/components/services/CreateArr/CreateArr-titles-repeats";

ChartJS.register(Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

interface IDiagramProps {
  data: IObjectArrTitlesRepeats[];
  label: string;
}

const DiagramBar: React.FC<IDiagramProps> = ({ data, label }) => {
  const legends: string[] = [];
  const dataSet: number[] = [];

  let last = 0;
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (count < 3) {
      legends.push(data[i].name);
      dataSet.push(data[i].repeats);

      if (last === data[i].repeats) {
        count++;
      }

      last = data[i].repeats;
    } else {
      break;
    }
  }

  const chartData = {
    labels: legends,
    type: "bar",
    datasets: [
      {
        label: label,
        data: dataSet,
        fill: false,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chart = <Bar data={chartData} />;
  return chart;
};

export default DiagramBar;
