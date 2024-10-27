'use client';
import { useFormState } from 'react-dom';
import TextInput from '../TextInput/TextInput';
import './signIn.css';

import signIn from '@/actions/signIn';

const SignInForm = () => {
  const [state, action] = useFormState(signIn, undefined);

  return (
    <form action={action}>
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
      <button>SignIn</button>
    </form>
  );
};

export default SignInForm;
