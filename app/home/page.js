import React from 'react'
import FolderCard from '../../components/folderCard'
import { sem } from '@/database/db'
const Home = () => {

  return (<>
    <div className='flex justify-center md:h-[15rem] h-auto mt-5 md:pt-5 pt-14 md:mb-0 mb-10'>
      <div className='max-w-4xl flex flex-wrap gap-10 justify-center items-center'>

        {
          sem.map((items, index) => (
            <FolderCard key={index} name={items.text} url={items.link} />
          ))
        }


      </div>
    </div >
  </>
  )
}

export default Home