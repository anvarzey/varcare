import { LucideIcon } from 'lucide-react'
import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select as ShadcnSelect } from '../ui/select'

interface SelectOption {
  title: string
  value: string
}

interface Props {
  field: any
  Icon?: LucideIcon
  options: SelectOption[]
  placeholder?: string
}

export default function Select({ field, Icon, options, placeholder = '' }: Props) {
  return (
    <div className='flex items-center gap-1 border rounded-md px-3 py-1 has-[:focus-visible]:border-white has-[:invalid]:border-destructive'>
      {
        Icon && (
          <span>
            <Icon className='size-4' />
          </span>
        )
      }
      <ShadcnSelect onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger className='h-10 border-0 text-muted-foreground focus:ring-0 focus:ring-offset-0'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {
            options.map((opt, i) => (
              <SelectItem key={i} value={opt.value}>
                {opt.title}
              </SelectItem>
            ))
          }
        </SelectContent>
      </ShadcnSelect>
    </div>
  )
}
