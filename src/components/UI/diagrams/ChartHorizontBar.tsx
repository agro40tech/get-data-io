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

const DiagramHorizontBar: React.FC<IDiagramProps> = ({ data, label }) => {
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
    datasets: [
      {
        axis: "y",
        label: label,
        data: dataSet,
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
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

  const chart = (
    <Bar
      options={{
        indexAxis: "y",
      }}
      data={chartData}
    />
  );
  return chart;
};

export default DiagramHorizontBar;
