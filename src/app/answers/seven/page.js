import React from 'react'
import PageHeader from '@/app/components/PageHeader'


const PageSeven = () => {
  return (
    <div className='container mx-auto h-full'>
        <PageHeader />
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className='text-xl text-center'>Q.  How could we improve or alter this familiarization exercise?</h1>
            
            <p className='my-4 text-neutral-500'>
                A.  I think this was an awesome exercise to participate in. It was very technical and it was fun building an app to respond to the questions. This was a learning experience all around because I now know a little bit more about what Vercel can do and how those processes work. Thank you for this opportunity!
            </p>
        </div>
    </div>
  )
}

export default PageSeven