import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import EmptyTask from "../components/EmptyTask";
import ThreeCard from "../components/ThreeCard";
import SearchSection from "../components/SearchSection";
import TableCustom from "../components/TableCustom";
import { fetchTaskList } from "../utils/data";

function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [from, setFrom] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadTask = async () => {
      try {
        setLoading(true);
        const data = await fetchTaskList();
        setTaskList(data);
      } catch (error) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTask();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );

  return (
    <>
      <EmptyTask
        setModalOpen={setModalOpen}
        taskList={taskList}
        setFrom={setFrom}
      />
      <ThreeCard taskList={taskList} />
      {taskList.length > 0 && (
        <>
          <SearchSection
            setModalOpen={setModalOpen}
            setFrom={setFrom}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
          <TableCustom
            taskList={taskList}
            setTaskList={setTaskList}
            setModalOpen={setModalOpen}
            setFrom={setFrom}
            setId={setId}
            searchTerm={searchTerm}
          />
        </>
      )}

      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          setTaskList={setTaskList}
          taskList={taskList}
          from={from}
          id={id}
        />
      )}
    </>
  );
}

export default DashboardPage;
