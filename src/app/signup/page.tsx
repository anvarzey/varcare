import Image from "next/image";
import RegisterImg from '@/assets/images/register-img.png'
import LargeLogo from '@/assets/images/large-logo.png'
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import PatientSignupForm from "@/components/auth/PatientSignupForm";

export default function SignupPage() {
  return (
    <div className="h-screen max-h-screen overflow-y-hidden">
      <section className="flex h-full max-w-screen-xl mx-auto">
        <div className="grow flex flex-col p-10 overflow-y-auto">
          <div className="grow flex flex-col justify-center">
            <div className="mb-6 space-y-3">
              <Image src={LargeLogo}
                alt='Logo'
                className="h-10 w-fit"
              />
              <div className="space-y-1">
                <h2 className="font-bold text-2xl">Hello 👋</h2>
                <p>
                  Tell us about you and make your appointments with the best professionals.
                </p>
              </div>
            </div>
            <PatientSignupForm />

            <Separator className="mt-4 mb-2" />
            <div className="flex flex-col items-center gap-2">
              <p className="text-muted-foreground text-sm">if you have an account</p>
              <Link href='/'>
                Login
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              VarCare © 2024
            </p>
            <Link href='?admin=true' className="text-cyan-500">
              Admin
            </Link>
          </div>
        </div>

        <div className="hidden w-1/3 items-center rounded-l-lg overflow-hidden lg:flex">
          <Image
            src={RegisterImg}
            alt='Doctors'
          />
        </div>

      </section>
    </div>
  )
}
