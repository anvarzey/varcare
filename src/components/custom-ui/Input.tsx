import { FormControl } from "../ui/form";
import { Input as ShadcnInput } from "../ui/input";
import { LucideIcon } from "lucide-react";

interface Props {
  field: any
  Icon?: LucideIcon
  placeholder?: string
  type?: string
}

export default function Input({ field, Icon, placeholder = '', type = 'text' }: Props) {
  return (
    <div className='flex items-center gap-1 border rounded-md px-3 py-1 has-[:focus-visible]:border-white has-[:invalid]:border-destructive'>
      {
        Icon && (
          <span>
            <Icon className='size-4' />
          </span>
        )
      }
      <FormControl>
        <ShadcnInput placeholder={placeholder} {...field} className='border-0 py-0 px-2 leading-none focus-visible:ring-0 focus-visible:ring-offset-0' type={type} />
      </FormControl>
    </div>
  )
}
