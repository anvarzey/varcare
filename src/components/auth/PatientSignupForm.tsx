'use client'

import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { ClipboardListIcon, ClipboardPlusIcon, DnaIcon, IdCardIcon, LockIcon, MailIcon, PhoneIcon, PillIcon, UserIcon } from 'lucide-react'
import CustomInput from '../custom-ui/Input'
import DatePicker from '../custom-ui/DatePicker'
import { Signup, signupSchema } from '@/schemas/signupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import BiInputContainer from '../shared/BiInputContainer'

export default function PatientSignupForm() {
  const form = useForm<Signup>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      birthday: '',
      gender: '',
      password: '',
      idNumber: '',
      insuranceNumber: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      allergies: '',
      personalMedicalHistory: '',
      familiarMedicalHistory: '',
      usualMedication: '',
      idImage: ''
    },
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='space-y-4'>
          <h2 className='font-semibold'>Personal Information</h2>
          <BiInputContainer>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Name</FormLabel>
                  <CustomInput field={field} Icon={UserIcon} placeholder='John' />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Surame</FormLabel>
                  <CustomInput field={field} placeholder='Doe' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>

          <BiInputContainer>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Email</FormLabel>
                  <CustomInput field={field} Icon={MailIcon} placeholder='johndoe@fakemail.com' />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Phone</FormLabel>
                  <CustomInput field={field} Icon={PhoneIcon} placeholder='123 456 789' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>

          <BiInputContainer>
            <FormField
              control={form.control}
              name="birthday"
              render={() => (
                <FormItem className='w-full'>
                  <FormLabel>Birthday</FormLabel>
                  <DatePicker />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Gender</FormLabel>
                  <CustomInput field={field} Icon={DnaIcon} placeholder='123 456 789' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Medical Condition</h2>

          <BiInputContainer>
            <FormField
              control={form.control}
              name="allergies"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Allergies</FormLabel>
                  <CustomInput field={field} Icon={UserIcon} placeholder='John' />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="usualMedication"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Usual Medication</FormLabel>
                  <CustomInput field={field} Icon={PillIcon} placeholder='johndoe@fakemail.com' />
                  <FormMessage />
                </FormItem>
              )}
            />

          </BiInputContainer>

          <BiInputContainer>
            <FormField
              control={form.control}
              name="personalMedicalHistory"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Personal Medical History</FormLabel>
                  <CustomInput field={field} Icon={ClipboardListIcon} placeholder='Doe' />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="familiarMedicalHistory"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Familiar Medical History</FormLabel>
                  <CustomInput field={field} placeholder='123 456 789' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Identification</h2>

          <BiInputContainer>
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>ID Number</FormLabel>
                  <CustomInput field={field} Icon={IdCardIcon} placeholder='1234567A' />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="insuranceNumber"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Insurance Number</FormLabel>
                  <CustomInput field={field} Icon={ClipboardPlusIcon} placeholder='123456ABC' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>

          <FormField
            control={form.control}
            name="idImage"
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>ID image</FormLabel>
                <CustomInput field={field} type='file' />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Emergency Contact</h2>

          <BiInputContainer>
            <FormField
              control={form.control}
              name="emergencyContactName"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Emergency Contact Name</FormLabel>
                  <CustomInput field={field} Icon={UserIcon} placeholder='Kate' />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergencyContactPhone"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Emergency Contact Phone</FormLabel>
                  <CustomInput field={field} Icon={PhoneIcon} placeholder='123 456 789' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Account</h2>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <CustomInput field={field} Icon={LockIcon} type='password' />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <Button className='w-full' type='submit'>
            Sign up
          </Button>
        </div>
      </form>
    </Form>
  )
}
