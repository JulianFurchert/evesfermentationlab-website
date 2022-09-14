import React, {useRef} from 'react'
import Image from 'next/image'
import { Text } from "./Text";

// import GlobalIcon from '../assets/globe.svg'
import InstagramIcon from '../assets/logo-instagram.svg'
// import PhoneIcon from '../assets/phone.svg'
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
    href: 'http://instagram.com/_u/evesfermentationlab/',
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

type ContactProps = {
  mobil?: boolean
}

export const Contact:React.FC<ContactProps> = ({mobil}) => {
  const ref = useRef(null);

  const { scrollYProgress  } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  // const { scrollYProgress } = useScroll();
  const yImage = useTransform( scrollYProgress, [0, 1], [200, mobil ? -180 : -130], { clamp: true })


  React.useEffect(()=> scrollYProgress.onChange(e => console.log(e)),[])

  return (
    <div className='relative flex items-center'>

      <div ref={ref} className='border border-text px-4 py-2 w-full'>
        {content.map(item => (
          <div key={item.href} className='flex my-4 items-center'>
            <div className='w-8 h-8 rounded-full flex-shrink-0 bg-primary text-white p-2'>
              {item.icon}
            </div>
            <Text className='ml-4 hover:text-opacity-80'>
              <a href={item.href} >
                {item.title}
              </a>
            </Text>
          </div>
        ))}
      </div>

      <motion.div  style={{ x: mobil ? 20  : 20, y: yImage }} className={mobil ? 'absolute right-0 w-[60%] max-w-[200px]' : 'absolute right-0 w-[40%]'}>
        <Image className='select-none pointer-events-none' priority sizes="33vw" width="819px" height="1024px" alt="" src="/assets/profil-image.jpg" />
      </motion.div>
    </div>
  )
}