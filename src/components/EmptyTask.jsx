import React from "react";

function EmptyTask({ setModalOpen, taskList, setFrom }) {
  if (taskList.length > 0) return null;
  return (
    <div className="flex items-center justify-center mt-3 md:mt-0 md:h-[calc(100vh-72px)] bg-[#F4F4F6] px-4">
      <div className="bg-white shadow-md p-6 rounded-xl w-full max-w-xs flex justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-xl font-medium text-center mb-5">
            You have no task.
          </p>

          <button
            type="submit"
            className="bg-[#5285EC] text-white text-sm rounded-lg py-[11px] px-[22px] hover:bg-blue-600"
            onClick={() => {
              setModalOpen(true)
              setFrom("newTask")
            }}
          >
            + New Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyTask;
