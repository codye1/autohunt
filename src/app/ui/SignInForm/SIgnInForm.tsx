'use client';
import './signIn.css';
import TextInput from '../TextInput/TextInput';
import { useFormState } from 'react-dom';
import signIn from '@/app/actions/signIn';

const SignInForm = () => {
  const [state, action] = useFormState(signIn, undefined);

  return (
    <form action={action}>
      <TextInput
        title="Email"
        name="email"
        type="Email"
        placeholder="Email"
        errors={state?.errors?.email}
      />
      <TextInput
        title="Password"
        name="password"
        type="Password"
        placeholder="Password"
        errors={state?.errors?.password}
      />
      <button>SignIn</button>
      {state?.errors.auth && (
        <ul>
          {state.errors.auth.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SignInForm;
