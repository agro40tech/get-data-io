import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { IObjectArrTitlesRepeats } from "@/components/services/CreateArr/CreateArr-titles-repeats";

ChartJS.register(Tooltip, Legend, ArcElement);

interface IDiagramProps {
  data: IObjectArrTitlesRepeats[];
}

const Diagram: React.FC<IDiagramProps> = ({ data }) => {
  const legends: string[] = [];
  const dataSet: number[] = [];

  data.forEach((element) => {
    legends.push(element.name);
    dataSet.push(element.repeats);
  });

  const pieChartData = {
    labels: legends,
    datasets: [
      {
        data: dataSet,
        backgroundColor: ["#EE82EE", "#8A2BE2", "#8B008B", "#4B0082"],
        hoverBackgroundColor: ["#175000", "#003350", "#993d00"],
      },
    ],
  };
  const pieChart = (
    <Pie
      options={{
        plugins: {
          title: {
            display: true,
            text: "diagram",
            font: {
              size: 15,
            },
          },
          legend: {
            display: true, //Is the legend shown?
            position: "top", //Position of the legend.
          },
        },
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};

export default Diagram;
