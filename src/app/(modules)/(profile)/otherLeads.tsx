import React from 'react'
import LeadsProfile from './_components/leadsProfile';

const OtherLeads:React.FC = () => {
  return (
      <div className='px-5 py-4 '>
          <h1 className=' font-bold'>Other leads</h1>
          <div className='flex flex-col gap-8 mt-5 px-3'>
              <LeadsProfile/>
              <LeadsProfile/>
          </div>
    </div>
  )
}

export default OtherLeads;