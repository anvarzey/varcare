'use client'

import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import {
  BriefcaseBusinessIcon,
  Building2Icon,
  ClipboardPlusIcon,
  DnaIcon,
  IdCardIcon,
  LocateFixedIcon,
  LockIcon,
  MailIcon,
  MapPinHouseIcon,
  PhoneIcon,
  PillIcon,
  StethoscopeIcon,
  UserIcon
} from 'lucide-react'
import CustomTextarea from '../custom-ui/Textarea'
import CustomInput from '../custom-ui/Input'
import DatePicker from '../custom-ui/DatePicker'
import { Signup, signupSchema } from '@/schemas/signupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import BiInputContainer from '../shared/BiInputContainer'
import CustomSelect from '../custom-ui/Select'

export default function PatientSignupForm() {
  const form = useForm<Signup>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      birthDate: undefined,
      gender: undefined,
      occupation: '',
      address: '',
      city: '',
      password: '',
      idNumber: '',
      insuranceNumber: '',
      insuranceProvider: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      primaryCarePhysician: '',
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

  const genderOptions = [
    {
      title: 'Female',
      value: 'Female'
    },
    {
      title: 'Male',
      value: 'Male'
    },
    {
      title: 'Other',
      value: 'Other'
    },
  ]

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
              name="birthDate"
              render={() => (
                <FormItem className='w-full'>
                  <FormLabel>Date of birth</FormLabel>
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
                  <CustomSelect field={field} Icon={DnaIcon} options={genderOptions} placeholder='Select your gender' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>

          <div>
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Occupation</FormLabel>
                  <CustomInput field={field} Icon={BriefcaseBusinessIcon} placeholder='Engineer' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <BiInputContainer>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Address</FormLabel>
                  <CustomInput field={field} Icon={MapPinHouseIcon} placeholder='Fake Street 123' />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>City</FormLabel>
                  <CustomInput field={field} Icon={LocateFixedIcon} placeholder='Madrid' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Medical information</h2>

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
                  <FormLabel>Usual medication</FormLabel>
                  <CustomInput field={field} Icon={PillIcon} placeholder='johndoe@fakemail.com' />
                  <FormMessage />
                </FormItem>
              )}
            />

          </BiInputContainer>

          <div>
            <FormField
              control={form.control}
              name="personalMedicalHistory"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Personal medical history</FormLabel>
                  <CustomTextarea field={field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="familiarMedicalHistory"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Familiar medical history</FormLabel>
                  <CustomTextarea field={field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>


          <div>
            <FormField
              control={form.control}
              name="primaryCarePhysician"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Primary care physician</FormLabel>
                  <CustomInput field={field} Icon={StethoscopeIcon} placeholder='Doe' />
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>

          <BiInputContainer>
            <FormField
              control={form.control}
              name="insuranceProvider"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Insurance provider</FormLabel>
                  <CustomInput field={field} Icon={Building2Icon} placeholder='Insurance Company' />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="insuranceNumber"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Insurance number</FormLabel>
                  <CustomInput field={field} Icon={ClipboardPlusIcon} placeholder='123456ABC' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </BiInputContainer>

        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Identification</h2>

          <div>
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>ID number</FormLabel>
                  <CustomInput field={field} Icon={IdCardIcon} placeholder='1234567A' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
                  <FormLabel>Emergency contact name</FormLabel>
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
                  <FormLabel>Emergency contact phone</FormLabel>
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
