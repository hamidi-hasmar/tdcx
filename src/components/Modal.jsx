import { useState } from "react";
import CustomInput from "./CustomInput";

function Modal({
  setModalOpen,
  setTaskList,
  taskList,
  from = "newTask",
  id = "none",
}) {
  const [formData, setFormData] = useState({
    id: from === "editTask" ? taskList.find((task) => task.id === id).id : "",
    taskName: from === "editTask" ? taskList.find((task) => task.id === id).name : "",
    completed: from === "editTask" ? taskList.find((task) => task.id === id).completed : false,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: crypto.randomUUID(),
        name: formData.taskName,
        completed: false,
      },
    ]);
    setModalOpen(false);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList.map((task) =>
        task.id === formData.id
          ? { ...task, name: formData.taskName, completed: false }
          : task
      ),
    ]);
    setModalOpen(false);
  };
  return (
    <div className="fixed inset-0 flex pt-[84px] md:pt-0 md:items-center justify-center bg-[#00000033] bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[296px] h-[193px]">
        <h2 className="text-xl font-medium mb-6">+ New Task</h2>

        <form onSubmit={from === "editTask" ? handleSubmitEdit : handleSubmit}>
          <div className="mb-3">
            <CustomInput
              name="taskName"
              onChange={onChange}
              placeholder="Task Name"
              required={true}
              type="text"
              value={formData.taskName}
              customClass="w-full"
            />
          </div>

          <div>
            <button className=" px-4 py-2 rounded-lg bg-[#5285EC] text-white hover:bg-blue-600 w-full">
              {from === "editTask" ? "Update Task" : "+ New Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
