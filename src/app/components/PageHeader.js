import Link from 'next/link'

const PageHeader = () => {
  return (
    <div className='container p-6 h-18'>
        <Link href='/' className='rounded bg-neutral-400 p-2'>
            Back to Home
        </Link>
    </div>
  )
}

export default PageHeader