'use client'

import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { LockIcon, MailIcon } from 'lucide-react'
import InputWithIcon from '../custom-ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/schemas/loginSchema'

export default function PatientLoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <InputWithIcon field={field} Icon={MailIcon} placeholder='johndoe@fakemail.com' />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <InputWithIcon field={field} Icon={LockIcon} />
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button className='w-full' type='submit'>
            Sign in
          </Button>
        </div>
      </form>
    </Form>
  )
}
