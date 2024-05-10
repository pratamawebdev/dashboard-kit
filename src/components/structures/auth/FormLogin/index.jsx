import { useState } from "react";
import FormField from "../../../constructs/globals/FormField";
import Button from "../../../elements/globals/Button";
import getData from "../../../../api/getData";

import { useNavigate } from "react-router-dom";
import { MakeModal } from "../../../../utils/MakeModal";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await getData(`/users`);
        const user = response.data.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          localStorage.setItem("email", email);
          localStorage.setItem("role", user.role);
          localStorage.setItem("name", user.name);
          localStorage.setItem("avatar", user.avatar);
          localStorage.setItem("token", `${import.meta.env.VITE_TOKEN}`);
          MakeModal(
            `Login successful`,
            "In a moment you will be directed to the dashboard page",
            "success"
          );
          setInterval(() => {
            navigate("/");
          }, 3000);
        } else {
          setError("Email or password is incorrect");
        }
      } catch (error) {
        setError(`${error}`);
        MakeModal(`Error`, `${error}`, "error");
      }
    }
  };

  const validate = () => {
    let result = true;

    if (password === "" || password === null) {
      result = false;
      setError("Password cannot be empty");
    } else if (password?.length < 8) {
      result = false;
      setError("Password must be at least 8 characters");
    }

    if (email === "" || email === null) {
      result = false;
      setError("Email cannot be empty");
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        result = false;
        setError("Invalid email format");
      }
    }

    return result;
  };

  return (
    <>
      {error && <p className="mb-4 text-center text-red-500">{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-6">
          <FormField
            placeholder="Email address"
            classNameInput="form-field-input"
            classNameLabel="form-field-label"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Email
          </FormField>
          <FormField
            isInputCustom={true}
            type="password"
            classNameLabel="form-field-label"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            PASSWORD
          </FormField>
        </div>
        <Button
          type="submit"
          className="w-full bg-[#3751FF] mt-6 py-4 rounded-lg text-white"
        >
          Log In
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
