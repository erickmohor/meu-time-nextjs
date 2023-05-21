import { ReactNode, SelectHTMLAttributes, forwardRef } from 'react'


type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string,
  errorMessage?: string,
  selectOptions?: OptionsProps[],
  children: ReactNode
}

export type OptionsProps = {
  label: string,
  value: string,
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(

  function Select( {label, errorMessage, selectOptions, children, ...rest}: SelectProps, ref) {

    return (
      <div className='flex flex-col items-start gap-1 mb-8'>

        <label className='text-gray-200 ml-2'>
          {label.toUpperCase()}
        </label>

        <select 
          className="bg-slate-800 h-14 border-2 border-slate-700 rounded w-full py-2 px-4 text-gray-400 focus:outline-none focus:bg-slate-800 focus:border-green-800"
          ref={ref}
          {...rest}
        >
          {children}
        </select>

      </div>
    )
  }
)