import { ReactNode } from 'react'


type ContentContainerProps = {
  title?: string,
  children: ReactNode,
}

export function ContentContainer({ title, children }: ContentContainerProps) {

  return (
    <div className='mb-10 px-5 py-10 h-full w-full bg-gray-800 bg-opacity-70 flex flex-col justify-center items-center border-gray-800 border-2 rounded-lg overflow-hidden'>
      {
        title && (
          <div className='text-center mb-10'>
            <h1 className="text-2xl font-bold text-stone-200">
              {title.toUpperCase()}
            </h1>
          </div>
        )
      }
      <div className='w-full text-center'>
        {children}
      </div>
    </div>
  )
}