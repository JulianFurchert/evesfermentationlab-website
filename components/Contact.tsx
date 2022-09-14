import React from 'react'
import Image from 'next/image'
import { Text } from "./Text";

import GlobalIcon from '../assets/globe.svg'
import InstagramIcon from '../assets/logo-instagram.svg'
import PhoneIcon from '../assets/phone.svg'
import SendIcon from '../assets/send.svg'
import { useScroll, useTransform, motion } from "framer-motion"

const content = [
  // {
  //   title: '+49 171 8384944',
  //   href: 'tel:+491718384944',
  //   icon: <PhoneIcon />
  // },
  {
    title: 'evesfermentationlab',
    href: 'evesfermentationlab',
    icon: <InstagramIcon />
  },
  // {
  //   title: 'evesfermentationlab.com',
  //   href: 'https://evesfermentationlab.com/',
  //   icon: <GlobalIcon />
  // },
  {
    title: 'evesfermentationlab@gmail.com',
    href: 'mailto:evesfermentationlab.com',
    icon: <SendIcon />
  }
]

export const Contact = () => {
  const { scrollYProgress  } = useScroll();
  const y = useTransform( scrollYProgress, [0.6, 1], [0, 0], { clamp: true })
  const yImage = useTransform( scrollYProgress, [0.6, 1], ['100%', '-50%'], { clamp: true })

  return (
    <div className='relative flex items-center'>

      <motion.div style={{ y }} className='border border-text px-4 py-2 pr-[50%]'>
        {content.map(item => (
          <div key={item.href} className='flex my-4 items-center'>
            <div className='w-8 h-8 rounded-full	 bg-primary text-white p-2'>
              {item.icon}
            </div>
            <Text className='ml-4 hover:text-opacity-80'>
              <a href={item.href} >
                {item.title}
              </a>
            </Text>
          </div>
        ))}
      </motion.div>

      <motion.div style={{ x: '10%', y: yImage }} className='absolute right-0 w-[40%]'>
        <Image sizes="33vw" width="819px" height="1024px" alt="" src="/assets/profil-image.jpg" />
      </motion.div>
    </div>
  )
}