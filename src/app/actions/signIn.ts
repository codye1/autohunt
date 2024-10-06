import { signInFormSchema, FormState } from '@/app/lib/definitions'
import { signIn as  nextSignIn } from "next-auth/react";

const signIn = async (state: FormState, formData: FormData) => {
  // Validate form fields
  const validatedFields = signInFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Call the provider or db to create a user...

  await nextSignIn('credentials',{...validatedFields.data,callbackUrl:"/"})


}

export default signIn