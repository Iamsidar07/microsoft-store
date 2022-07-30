import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HorizontalNavbar from '../components/HorizontalNavbar';
import Hero from '../components/Hero';
import VerticalNavbar from '../components/VerticalNavbar';


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Microsoft store</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <div className='flex flex-col w-full h-screen'>
        <div className='h-16 w-full'>
          <HorizontalNavbar/>
        </div>
        <div className=' w-full h-[calc(100vh-3.5rem)] flex'>
          <div className='w-14 h-full hidden md:block '>
               <VerticalNavbar/>
          </div>
          <div className='w-full md:w-[calc(100vw-3.5rem)] h-full  '>
            <Hero/>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Home
