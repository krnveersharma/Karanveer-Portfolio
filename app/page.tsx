import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNav'
import { navItems } from '@/data';
import React from 'react'
import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Experience/>
        <Footer/>
      </div>
    </main>
  )
}

export default Home