import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import Link from 'next/link'

const Experience = () => {
  return (
    <section id="experience" className='py-20 w-full'>
        <h1 className='heading'>
            My 
            <span className='text-purple'> Work Experience</span>
        </h1>
        <div className='w-full flex flex-wrap gap-4 items-center justify-center mt-12  '>
            {workExperience.map((card)=>(
               <Button key={card.id} borderRadius='1.75rem'
                duration={Math.floor(Math.random()*1000+1000)} className='flex-1 text-white border-neutral-200 dark:border-slate-800  min-w-[300px] max-w-[500px] p-2'  >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'><img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/></div>
                    <div className='lg:ms-5 '>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>
                            {card.title}
                        </h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>
                            {card.desc}
                        </p>
                    </div>
                </Button>
            ))}
        </div>
    </section>
  )
}

export default Experience