import { signInFormSchema, FormState } from '@/app/lib/definitions';
import { signIn as nextSignIn } from 'next-auth/react';

const signIn = async (state: FormState, formData: FormData) => {
  const validatedFields = signInFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validatedFields.success) {
    return {
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
        auth: undefined,
      },
    };
  }

  try {
    const result = await nextSignIn('credentials', {
      ...validatedFields.data,
      redirect: false,
    });

    if (result?.error) {
      return {
        errors: { auth: [result.error], email: undefined, password: undefined },
      };
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const callbackUrl = urlParams.get('callbackUrl');

      window.location.href = callbackUrl || '/';
    }
  } catch (error) {
    console.log(error);

    return {
      errors: { auth: ['Error'], email: undefined, password: undefined },
    };
  }
};

export default signIn;
