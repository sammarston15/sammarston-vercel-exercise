import React from 'react'
import PageHeader from '@/app/components/PageHeader'


const PageTwo = () => {
  return (
    <div className='container mx-auto h-full'>
        <PageHeader />
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className='text-xl text-center'>Q. How would you compare Next.js with another framework? Feel free to compare with a framework of your choice</h1>
            <p className='my-4 text-neutral-500'>A. Next.js is the fastest and easist JS framework I've used so far. Comparing it to plain React, the routing is easy to understand. Developers work with files/directories all the time so routing with a folder/file structure provides a concise way to organize and work with those pages. </p>
        </div>
    </div>
  )
}

export default PageTwo