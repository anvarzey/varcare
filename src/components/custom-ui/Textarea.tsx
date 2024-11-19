import { Textarea as ShadcnTextarea } from '../ui/textarea'

interface Props {
  field: any
}
export default function Textarea({ field }: Props) {
  return (
    <ShadcnTextarea className='focus-visible:ring-0 focus-visible:border-white' {...field} />
  )
}
