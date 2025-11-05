import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import loginForm from "../utils/loginForm.json";
import CustomInput from "../components/CustomInput";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {setAuthenticated, setUserData} = useAuth();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id.trim()) {
      login(formData, setAuthenticated, setUserData);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F4F6] px-0 w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-xl w-full max-w-xs flex flex-col gap-4"
      >
        <p className="text-xl/6 text-[#537178] font-medium">Login</p>
        {loginForm.map((item) => (
          <CustomInput
            name={item.name}
            onChange={onChange}
            placeholder={item.placeholder}
            required={item.required}
            type={item.type}
            key={item.name}
            value={formData[item.name]}
          />
        ))}
        <button
          type="submit"
          className="bg-[#5285EC] text-white text-sm rounded-lg py-[11px] hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
