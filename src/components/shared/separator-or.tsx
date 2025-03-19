import { ReactNode } from 'react'
 
const SeparatorWithOr = ({ children }: { children?: ReactNode }) => {
  return (
    <div className='h-5  my-5 text-center w-full '>
      <span className=' text-gray-500'>
        {children ?? 'or'}
      </span>
    </div>
  )
}

export default SeparatorWithOr