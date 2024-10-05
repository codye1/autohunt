'use client'

import { useFormState } from "react-dom";
import "./login.css"
import { login } from '@/app/actions/auth/login';
import TextInput from "../TextInput/TextInput";

const LoginForm = () => {
  const [state,action] = useFormState(login,undefined)

  return (
    <form action={action} >
      <TextInput
        title="Email"
        name="email"
        type="Email"
        placeholder="Email"
        errors={state?.errors.email}
        />
      <TextInput
        title="Password"
        name="password"
        type="Password"
        placeholder="Password"
        errors={state?.errors.password}
        />
      <button>Login</button>
      <p>Don't have account? <span>Login here</span></p>
    </form>
  );
};

export default LoginForm;