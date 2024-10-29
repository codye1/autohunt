'use client';
import signIn from '@/actions/signIn';
import { useFormState } from 'react-dom';
import TextInput from '../TextInput/TextInput';
import styles from './signInForm.module.css';

const SignInForm = () => {
  const [state, action] = useFormState(signIn, undefined);

  return (
    <form action={action} className={styles.form}>
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
      <p>{state?.errors.auth}</p>
      <button type="submit">SignIn</button>
    </form>
  );
};

export default SignInForm;
