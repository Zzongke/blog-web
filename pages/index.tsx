import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import FloorButton from '../components/FloorButton';
import _ from "lodash";

const Home: NextPage = () => {
  const [isShow, setisShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", _.throttle(scrolltop, 100), false);
    function scrolltop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.clientHeight || document.body.clientHeight;
      if (top > (height / 2)) {
        setisShow(true)
      } else {
        setisShow(false)
      }
    }
    return () => {
      window.removeEventListener("scroll", scrolltop)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Blog、zzk Blog、博客、zzk的博客" />
        <meta name="keywords" content="Blog、zzk Blog、博客、zzk的博客" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <img className='w-full h-auto lg:h-screen object-cover' src='./images/homepage.jpg' alt='homelog' />
        <div className='h-[1080px]'>
        </div>
      </main>
      <FloorButton isShow={isShow} />
    </div>
  )
}

export default Home
