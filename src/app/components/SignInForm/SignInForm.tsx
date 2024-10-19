import TextInput from '../TextInput/TextInput';
import './signIn.css';

interface ISignInForm {
  action: (payload: FormData) => void;
  state:
    | {
        errors: {
          auth: undefined;
          email?: string[] | undefined;
          password?: string[] | undefined;
        };
      }
    | {
        errors: {
          auth: string[];
          email: undefined;
          password: undefined;
        };
      }
    | undefined;
}

const SignInForm = ({ state, action }: ISignInForm) => {
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
