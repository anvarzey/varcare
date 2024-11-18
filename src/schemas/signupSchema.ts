import { z } from 'zod'

export const signupSchema = z.object({
  name: z.string().min(3).max(50),
  surname: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().length(8),
  birthday: z.string().date(),
  gender: z.string(),
  password: z.string().min(8).max(30),
  idNumber: z.string(),
  insuranceNumber: z.string(),
  emergencyContactName: z.string().min(3),
  emergencyContactPhone: z.string(),
  allergies: z.string(),
  personalMedicalHistory: z.string(),
  familiarMedicalHistory: z.string(),
  usualMedication: z.string(),
  idImage: z.string()
})

export type Signup = z.infer<typeof signupSchema>