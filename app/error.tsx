'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <h2 className='pb-3'>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='bg-blue-700 rounded-md px-4 py-2 text-white'
      >
        Try again
      </button>
    </div>
  )
}