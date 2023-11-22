import React from 'react'
import PageHeader from '@/app/components/PageHeader'


const PageThree = () => {
  return (
    <div className='container mx-auto h-full'>
        <PageHeader />
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className='text-xl text-center'>Q. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h1>
            <p className='my-4 text-neutral-500'>A. When thinking about the lifecycle of a request to a Vercel application, Edge Middleware is what will see execution first. This process will run before the rest of the app. This is helpful for filtering query parameters, for example. Edge and Serverless functions can both be used to handle API routes and user authentication, however, Edge Functions are typically faster and perform better than Serverless Functions. </p>
        </div>
    </div>
  )
}

export default PageThree