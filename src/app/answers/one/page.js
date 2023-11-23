import React from 'react'
import PageHeader from '@/app/components/PageHeader'


const PageOne = () => {
  return (
    <div className='container mx-auto h-full'>
        <PageHeader />
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className='text-xl text-center'>Q. Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?</h1>
            <p className='my-4 text-neutral-500'>A. Our team had an internal tool we used often but the teammate who created/managed the tool was leaving the company. We needed someone to take ownership moving forward as there was nobody else with experience in the coding language the tool was written in.</p>
            
            <p className='my-4 text-neutral-500'>I took ownership of the tool and learned the language (Python) so that our team could continue using the tool. This has been a tool that the team still heavily uses to help solve customer/developer issues and it helps streamline the troubleshooting process for each team member.</p>
        </div>
    </div>
  )
}

export default PageOne