import { useState } from "react";
import { signIn } from "../../api";
import { lockIcon, shoppingCart, userIcon } from "../../images";
import { IconInput, WrongCredentialModal } from "../../components";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentialModalOpen, setCredentialModalOpen] = useState(false);
  const [wrongCombination, setWrongCombination] = useState(false);
  const navigate = useNavigate();

  const checkPasswordCombination = (password: string) => {
    // Only accept a combination of letters, numbers and special character.
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*+=_-])/;
    return regex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkPasswordCombination(password)) {
      setWrongCombination(true);
      return;
    }
    setWrongCombination(false);

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const {
        data: { id: userId },
        status,
      } = await signIn(formData);

      if (status === 200) {
        localStorage.setItem("userId", userId.toString());
        navigate("/");
      }
    } catch (e) {
      setCredentialModalOpen(true);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img src={shoppingCart} alt="logo" className="w-[119px]" />
      <form
        className="flex flex-col w-[300px] max-[350px]:w-4/5 gap-5 text-white mt-[71px]"
        onSubmit={handleSubmit}
      >
        <IconInput
          state={username}
          setState={setUsername}
          icon={userIcon}
          type="input"
          label="Username"
        />
        <IconInput
          state={password}
          setState={setPassword}
          icon={lockIcon}
          type="password"
          label="Password"
        />
        {wrongCombination && (
          <p className="text-red-500 text-sm font-bold">Wrong combination</p>
        )}
        <div className="w-full">
          <button
            type="submit"
            className="p-2 w-full h-11 bg-white rounded text-[#2148C0] text-base font-semibold leading-5 tracking-wider mt-5"
          >
            LOGIN
          </button>
          <p className="text-white text-base font-medium float-right cursor-pointer block mt-[11px] leading-5	tracking-wider">
            Forgot password?
          </p>
        </div>
      </form>
      {credentialModalOpen && (
        <WrongCredentialModal setOpen={setCredentialModalOpen} />
      )}
    </div>
  );
};
