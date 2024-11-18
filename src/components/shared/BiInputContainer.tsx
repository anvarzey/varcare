import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
export default function BiInputContainer({ children }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row">
      {children}
    </div>
  )
}
