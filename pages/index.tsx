import type { NextPage } from 'next'
import React from 'react'

import { Gallery } from '../components/Gallery'
import { Logo } from '../components/Logo'
import { AboutA, AboutB } from '../components/About'
import { Contact } from '../components/Contact'
import { useScroll, useTransform } from "framer-motion"
import { useWindowWidth } from '@react-hook/window-size'
import { useMediaQuery } from 'react-responsive'

const images = [
  "/assets/img/01_IMG_0971.jpg",
  "/assets/img/02_IMG_9888.jpg",
  "/assets/img/03_IMG_6224.jpg",
  // "/assets/img/04_IMG_9886.jpg",
  "/assets/img/05_IMG_7519.jpg",
  "/assets/img/06_IMG_7747.jpg",
  "/assets/img/07_IMG_8764.jpg",
  "/assets/img/IMG_6786.jpg",
  "/assets/img/IMG_6788.jpg",
  "/assets/img/IMG_6797.jpg",
  "/assets/img/IMG_6818.jpg",
  "/assets/img/08_IMG_9882 3.jpg",
  "/assets/img/09_IMG_9994.jpg",
  "/assets/img/10_IMG_9916.jpg",
  "/assets/img/11_IMG_8066.jpg",
  "/assets/img/12_IMG_9905.jpg",
  "/assets/img/13_IMG_9868.jpg",
  "/assets/img/14_IMG_9909.jpg",
]

const Home: NextPage = () => {
  const isMobil = useMediaQuery({ query: '(max-width: 899px)' })
  const { scrollY  } = useScroll();
  const rotateElement = useTransform( scrollY, [0, 2000], [0, -360], { clamp: false })
  const rotateText = useTransform( scrollY, [0, 2000], [0, 360], { clamp: false })

  return (
    <div>
      <main className='min-h-screen w-full overflow-hidden'>
        {isMobil ? (
          <div>
              
            <div className='h-[60vh]'>
              <Logo rotateElement={rotateElement} rotateText={rotateText} white={false} />
            </div>

            <div className='my-8 px-8'>
              <AboutA />
            </div>

            <div className='w-[100vw] h-[100vw] flex relative justify-center items-center overflow-hidden'>
              <Gallery 
                images={images}
              />
            </div>

            <div className='my-8 px-8'>
              <AboutB />
            </div>

            <div className='mt-20 mb-20 px-8'>
              <Contact mobil />
            </div>

          </div>
        ): (
          <div className='flex'>
            <div className='w-[50vw] p-10 lg:p-16 relative '>
              
              <div className='h-[80vh]'>
                <Logo rotateElement={rotateElement} rotateText={rotateText} white={false} />
              </div>

              <div className='my-8 max-w-[720px] mx-auto'>
                <AboutA />
                <AboutB />
              </div>

              <div className='mt-20 mb-20 max-w-[720px] mx-auto'>
                <Contact />
              </div>

            </div>
            <div className='fixed right-0 top-0 w-[50vw] h-screen flex overflow-hidden bg-primary'>
              <div className='w-[50vw] h-screen flex relative justify-center items-center overflow-hidden'>
                <Gallery 
                  images={images}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
