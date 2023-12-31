import Link from 'next/link'

function NotFound() {
  return (
    <div className='min-h-[85vh] flex justify-center items-center'>
        <div className='flex flex-col items-center text-base-content relative'>
            <h3 className='text-8xl md:text-9xl font-bold'>4<span className='mx-1.5'>0</span>4</h3>
            <p className='text-sm md:text-sx absolute top-[39%] md:top-[43%] rotate-12 bg-primary px-1 font-bold text-white'>Page Not Found</p>
            <Link href='/' className='link link-hover text-primary font-bold pt-1'>Go to Home Page</Link>
        </div>
    </div>
  )
}

export default NotFound