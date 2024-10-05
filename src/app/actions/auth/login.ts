import { loginFormSchema, FormState } from '@/app/lib/definitions'

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = loginFormSchema.safeParse({
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
}