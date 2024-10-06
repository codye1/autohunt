'use client'

import { useFormState } from "react-dom";
import "../SignInForm/login.css"
import TextInput from "../TextInput/TextInput";
import signup from "@/app/actions/signin/signup";

const Signup = () => {
  const [state,action] = useFormState(signup,undefined)

  return (
    <form action={action} >
        <TextInput
            title="Name"
            name="name"
            type="text"
            placeholder="Name"
            errors={state?.errors?.name}
            />
        <TextInput
            title="Email"
            name="email"
            type="Email"
            placeholder="Email"
            errors={state?.errors.email}
            />
        <TextInput
            title="Phone number"
            name="phone"
            type="phone"
            placeholder="Phone number"
            errors={state?.errors.phone}
            />
        <TextInput
            title="Password"
            name="password"
            type="Password"
            placeholder="Password"
            errors={state?.errors.password}
            />
      <button>Signup</button>
      <p>Don&apos;t have account? <span>Login here</span></p>
    </form>
  );
};

export default Signup;