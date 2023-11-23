import React from 'react'
import PageHeader from '@/app/components/PageHeader'


const PageFive = () => {
  return (
    <div className='container mx-auto h-full'>
        <PageHeader />
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className='text-xl text-center'>Q. Imagine that the customer from Question 4 responds with the following email.</h1>
            <h2 className='italic text-neutral-300'>"I'm so frustrated. I've been trying to make this work for hours and I just can't figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions."</h2>
            <p className='my-4 text-neutral-500'>
                A.  Hi there,<br /><br />
                Sorry to hear that this is causing frustration. I understand the desire to get this going as soon as possible. Unfortunately, I won't be able to change/fix this for you, but I would be happy to continue working with you on this!<br /><br />
                What errors (if any) are you running into? I wanted to share that we have more documentation available on Redirects <a href="https://vercel.com/docs/edge-network/redirects" target="_blank" rel="noopener noreferrer" className='text-neutral-100 hover:underline'>here</a> that may help.
            </p>
        </div>
    </div>
  )
}

export default PageFive