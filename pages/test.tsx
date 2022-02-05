import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import Link from 'next/link'
import { exit } from 'process'
import { useEffect, useState } from 'react'

export default function Test() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 350])

  const container = {
    show: {
      transition: {
        stagerChildren: 0.35,
        delayChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: 100,
      opacity: 0,
    },
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedIndex === colors.length - 1) {
        setSelectedIndex(0)
      } else {
        setSelectedIndex(selectedIndex + 1)
      }
    }, 60000)
    return () => clearTimeout(timer)
  }, [selectedIndex, setSelectedIndex])
  return (
    <div
      className={`relative h-full min-h-screen w-full overflow-hidden  bg-[#EDEDED] py-28`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            exit="exit"
            className=" grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((color, index) => (
              <motion.div
                variants={item}
                key={index}
                className="relative h-[80vh] w-[90vw] overflow-hidden sm:mx-5 md:w-[40vw] lg:h-[60vh] lg:w-[25vw] "
              >
                <div className="absolute top-0  right-0 h-[100%] w-[90%] overflow-hidden rounded-md">
                  <motion.div
                    whileInView={{ scale: 1.1 }}
                    transition={{
                      duration: 1,
                      delay: 1.5,
                      ease: [0.6, 0.01, -0.05, 0.5],
                    }}
                    style={{
                      background: `url(${color})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                    className={`h-full w-full`}
                  ></motion.div>
                </div>
                <motion.div
                  style={{ y: yPos }}
                  initial={{ left: '10%', opacity: 0 }}
                  whileInView={{ left: 0, opacity: 1 }}
                  exit={{ left: '10%', opacity: 0 }}
                  transition={{
                    left: { duration: 0.5, delay: 1 + index / 10 },
                  }}
                  className="absolute top-[10%] left-0 flex h-[20%]  w-[90%] items-center justify-center bg-white drop-shadow-md "
                >
                  <div className="">
                    <p className=" font-Oswald text-5xl font-thin">
                      House {index + 1}
                    </p>
                    <p className=" font-Montserrat text-base font-thin ">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

const colors = [
  '#FF0075',
  '#F0A500',
  '#1DB9C3',
  '#77D970',
  '#FF8243',
  '#664E88',
]

const images = [
  'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2224956/pexels-photo-2224956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4819396/pexels-photo-4819396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
]
