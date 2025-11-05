import React, { useState, useEffect } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa6";
import { TfiCheckBox } from "react-icons/tfi";

function TableCustom({ taskList, setTaskList, setModalOpen, setFrom, setId }) {
  const [sortedTasks, setSortedTasks] = useState([]);

  const checkboxClick = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  useEffect(() => {
    const reversedList = [...taskList].reverse();
    setSortedTasks(reversedList);
  }, [taskList]);

  return (
    <div className="mt-4 mb-4 md:mt-2.5 flex flex-col lg:flex-row gap-6 w-full justify-between items-center px-0 md:px-40">
      <div className="bg-white w-full rounded-xl p-6 shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
        {sortedTasks.map((task, index) => (
          <React.Fragment key={task.id}>
            <div className="flex justify-between" key={task.id}>
              <div className="flex justify-center items-center">
                <div className="mr-3" onClick={() => checkboxClick(task.id)}>
                  {task.completed ? (
                    <TfiCheckBox className="font-semibold" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="font-semibold" />
                  )}
                </div>
                <p
                  className={` text-5/6 ${
                    task.completed ? "line-through" : "text-[#5285EC]"
                  }`}
                >
                  {task.name}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <RiPencilFill
                  width={16}
                  height={16}
                  className="mr-4"
                  onClick={() => {
                    setModalOpen(true);
                    setFrom("editTask");
                    setId(task.id);
                  }}
                />
                <FaTrash
                  width={16}
                  height={16}
                  onClick={() => deleteTask(task.id)}
                />
              </div>
            </div>
            {index !== taskList.length - 1 && (
              <hr className="border-gray-300 my-6" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default TableCustom;
