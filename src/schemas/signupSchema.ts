import { z } from 'zod'

export const signupSchema = z.object({
  name: z.string().min(3).max(50),
  surname: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().length(8),
  birthDate: z.coerce.date(),
  gender: z.enum(['Male', 'Female', 'Other']),
  address: z.string().min(3).max(50),
  occupation: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
  password: z.string().min(8).max(30),
  idNumber: z.string(),
  insuranceNumber: z.string().min(3).max(50),
  insuranceProvider: z.string().min(3).max(50),
  primaryCarePhysician: z.string(),
  emergencyContactName: z.string().min(3),
  emergencyContactPhone: z.string(),
  allergies: z.string(),
  personalMedicalHistory: z.string().min(3),
  familiarMedicalHistory: z.string().min(3),
  usualMedication: z.string(),
  idImage: z.string()
})

export type Signup = z.infer<typeof signupSchema>