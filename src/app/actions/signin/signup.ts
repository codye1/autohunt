'use server'
import { FormState, signupFormSchema } from "@/app/lib/definitions"
import User from "@/app/models/userModel"
import bcrypt from "bcrypt"
import { createSession } from "@/app/lib/session"
import { ObjectId } from "mongoose"
import { redirect } from "next/navigation"

const signup = async (state: FormState, formData: FormData) => {
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

  const {password,email} = validatedFields.data

  const hashedPassword = await bcrypt.hash(password,10)


  try{
    const user = await User.findOne({email})
    if (user) {

      return {errors:{email:["Цей email занятий"] , name:undefined,phone:undefined,password:undefined}}
    }
    const newUser = await User.create({
      ...validatedFields.data,
      password:hashedPassword
    })
    newUser.save()
    await createSession((newUser._id as ObjectId).toString())
  } catch (error){
    console.error(error)
  }finally{
    redirect('/')
  }
}

export default signup