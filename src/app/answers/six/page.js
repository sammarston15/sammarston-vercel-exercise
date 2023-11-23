import React from 'react'
import PageHeader from '@/app/components/PageHeader'


const PageSix = () => {
  return (
    <div className='container mx-auto h-full'>
        <PageHeader />
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className='text-xl text-center'>Q.  A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you'd like to share about your decision making process.</h1>
            
            <p className='my-4 text-neutral-500'>
                A.  Hi there,<br /><br />
                Vercel via Git has the ability to give you a "Preview Deployment" of your site in which the <code className='bg-neutral-700'>"X-Robots-Tag"</code> is added to the header automatically to prevent crawlers from viewing your preview site. If you are using a custom domain for a non-Production branch, you will have to manually set the <code className='bg-neutral-700'>"X-Robots-Tag"</code> to <code className='bg-neutral-700'>"noindex"</code> manually as it will not be done automatically. <br /><br/>
                More information on this can be found <a href="https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines" target="_blank" rel="noopener noreferrer" className='text-neutral-100 hover:underline'>here</a>.
            </p>
        </div>
    </div>
  )
}

export default PageSix