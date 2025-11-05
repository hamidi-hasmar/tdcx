import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

function ThreeCard({ taskList }) {
  const [latestTasks, setLatestTasks] = useState([]);

  const data = {
    labels: ["Completed Tasks", "Remaining"],
    datasets: [
      {
        data: [
          taskList.filter((task) => task.completed).length,
          taskList.length - taskList.filter((task) => task.completed).length,
        ],
        backgroundColor: ["#4a90e2", "#e9edee"],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    const reversedList = [...taskList].reverse();
    setLatestTasks(reversedList.slice(0, 3));
  }, [taskList]);

  if (taskList.length === 0) return null;

  return (
    <div className="mt-[22px] flex flex-col lg:flex-row gap-6 w-full justify-between items-center px-0 md:px-40">
      <div className="rounded-xl bg-white p-6 w-full h-[158px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
        <span className="text-[20px]/[24px] font-medium mb-1">
          Tasks Completed
        </span>
        <div className="flex items-baseline">
          <span className="text-[64px]/[78px] font-medium text-[#5285EC]">
            {taskList.filter((task) => task.completed).length}
          </span>
          <span className="text-xl/6 font-medium self-end">
            /{taskList.length}
          </span>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 w-full h-[158px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
        <div className="mb-3">
          <span className="text-[20px]/[24px] font-medium ">
            Latest Created Tasks
          </span>
        </div>
        <ul className="list-disc pl-5">
          {latestTasks.map((task, index) => (
            <li key={index}>
              <span className={`${task.completed ? "line-through" : ""}`}>
                {task.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl bg-white p-6 w-full h-[158px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
        <div className="flex justify-center items-start ">
          <div className="w-[103px] h-[103px]">
            <Pie data={data} width={103} height={103} />
          </div>
          {taskList.filter((task) => task.completed).length !== 0 && (
            <div className="flex flex-col text-[10px] text-[#5285EC]">
              <span>Completed</span>
              <span>Task</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThreeCard;
