import React from 'react'
import PageHeader from '@/app/components/PageHeader'


const PageFour = () => {
  return (
    <div className='container mx-auto h-full'>
        <PageHeader />
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className='text-xl text-center'>Q. A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you'd like to share about your decision making process.</h1>
            <p className='my-4 text-neutral-500'>
                A.  Hi there,<br /><br />
                Thanks for reaching out! One way you can redirect a path to another URL is in using the Edge Middleware API. You can have the middleware run only on the <code className='bg-neutral-700'>/blog</code> path using the <code className='bg-neutral-700'>config</code> object - which is used to define the path the middleware is looking for. Once the path is found, you can <code className='bg-neutral-700'>redirect</code> to a new URL. <br /><br />
                An example of this can be found <a href="https://vercel.com/docs/functions/edge-middleware/middleware-api#" target="_blank" rel="noopener noreferrer" className='text-neutral-100 hover:underline'>here</a> along with additional information.
            </p>
        </div>
    </div>
  )
}

export default PageFour