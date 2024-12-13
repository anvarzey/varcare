import Image from "next/image";
import PexelsImg from '@/assets/pexels-kooldark-14438786.jpg'
import PatientLoginForm from "@/components/auth/PatientLoginForm";
import LargeLogo from '@/assets/images/large-logo.png'
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="h-screen max-h-screen overflow-y-hidden">
      <section className="flex h-full max-w-screen-xl mx-auto">
        <div className="grow flex flex-col p-10">
          <div className="grow flex flex-col justify-center">
            <div className="mb-6 space-y-3">
              <Image src={LargeLogo}
                alt='Logo'
                className="h-12 w-fit"
              />
              <div className="space-y-1">
                <h2 className="font-bold text-2xl">Welcome back !</h2>
                <p>
                  Login to make your medical appointments with ease
                </p>
              </div>
            </div>
            <PatientLoginForm />

            <Separator className="mt-4 mb-2" />
            <div className="flex flex-col items-center gap-2">
              <p className="text-muted-foreground text-sm">or</p>
              <Link href='signup'>
                Create an account
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

        <div className="hidden w-1/2 items-center rounded-l-lg overflow-hidden lg:flex">
          <Image
            src={PexelsImg}
            alt='Doctors'
          />
        </div>

      </section>
    </div>
  );
}
