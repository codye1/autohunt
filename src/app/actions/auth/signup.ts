import { FormState, signupFormSchema } from "@/app/lib/definitions"
import { addUser } from "@/app/lib/mongodb"


export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = signupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get('email'),
    phone: formData.get("phone"),
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