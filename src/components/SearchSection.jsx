import { useState } from "react";
import CustomInput from "./CustomInput";
import { IoSearchSharp } from "react-icons/io5";

function SearchSection({ setModalOpen, setFrom }) {
  const [formData, setFormData] = useState({
    search: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-[34px] flex flex-col lg:flex-row gap-2 md:gap-6 w-full justify-between items-center px-[13px] md:px-40">
      <div>Tasks</div>
      <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-0">
        <div className="relative w-full md:w-auto">
          <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <CustomInput
            name="search"
            onChange={onChange}
            placeholder="Search by task name"
            type="text"
            value={formData["search"]}
            customClass="!bg-[#D9DFEB] pl-10 pr-3 mr-3 w-full md:w-auto"
          />
        </div>
        <button
          className="bg-[#5285EC] text-white rounded-lg px-4 py-2"
          onClick={() => {
            setModalOpen(true);
            setFrom("newTask");
          }}
        >
          + New Task
        </button>
      </div>
    </div>
  );
}

export default SearchSection;
