import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  return (
    <motion.nav
      variants={container}
      animate={'show'}
      initial="hidden"
      className="absolute flex h-[50vh] w-full flex-col overflow-hidden bg-[#04293A] text-white drop-shadow-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 3 }}
        className={
          'absolute top-0 left-0 hidden h-full w-full bg-[url("/assets/images/backgrounds/bg.png")] bg-contain bg-top bg-no-repeat mix-blend-multiply lg:block'
        }
      ></motion.div>
      <div className="relative flex h-full w-full flex-auto items-center justify-center">
        <motion.div
          variants={item}
          key="logo"
          className=" h-auto w-auto  select-none"
        >
          {/* <p className="">
            <span className=" text-center font-Cinzel text-4xl sm:text-7xl">
              La
            </span>
          </p> */}
          <p className=" font-CinzelDeco text-7xl sm:text-9xl">Maison</p>

          <p className="flex flex-row justify-end text-right sm:-translate-y-8">
            <span className=" mb-auto pt-3 text-center font-Cinzel text-4xl sm:text-7xl">
              de
            </span>
            <span className=" text-center font-Cinzel text-7xl sm:text-9xl">
              Rève
            </span>
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 flex h-auto w-full flex-initial items-end justify-between px-5 py-5">
        <motion.ul
          variants={containerIcons}
          className="mx-auto flex list-none flex-row items-center font-Oswald text-base uppercase sm:ml-0"
        >
          {links.map((link, index) => (
            <motion.li
              variants={itemIcon}
              whileHover={{ scale: 1.5 }}
              key={index}
              className=" list-item px-2 sm:px-5 "
            >
              <Link href={link.path} passHref>
                <a className="transition-all duration-200 hover:text-red-500">
                  {link.title}
                </a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="absolute top-0 right-0 h-auto w-auto p-5 ">
        <motion.ul
          className=" flex list-none flex-row"
          variants={containerIcons}
        >
          <motion.li
            key="1"
            whileHover={{ scale: 1.4 }}
            className="h-full w-full px-3 transition-all duration-200 hover:text-[#4267B2]"
            variants={itemIcon}
          >
            <Link href={'#'} passHref>
              <a className=" transition-all duration-200">
                {''}
                <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.4 }}
            className="h-auto w-auto px-3 transition-all duration-200 hover:text-[#0077B5]"
            variants={itemIcon}
          >
            <Link href={'#'} passHref>
              <a className="transition-all duration-200 ">
                {''}
                <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.4 }}
            className="h-auto w-auto px-3 transition-all duration-200  hover:text-[#e95950]"
            variants={itemIcon}
          >
            <Link href={'#'} passHref>
              <a className="transition-all duration-200">
                {''}
                <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
              </a>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  )
}

const container = {
  hidden: {
    y: '-60vh',
  },
  show: {
    y: 0,
    transition: {
      x: { delay: 3 },
      duration: 1,
      bounce: 0,
      delay: 0.5,
      stagerChildren: 0.35,
      delayChildren: 2,
    },
  },
  exit: {
    y: '-60vh',
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      opacity: { duration: 2 },
    },
  },
  exit: { opacity: 0 },
}

const containerIcons = {
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 1,
    },
  },
}

const itemIcon = {
  hidden: {
    x: 200,
    opacity: 0,
  },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      scale: {
        duration: 0.4,
      },
      opacity: {
        duration: 2,
      },
    },
  },
  exit: {
    opacity: 0,
    x: 200,
  },
}

const links = [
  { title: 'Home', path: '#home' },
  { title: 'Services', path: '#services' },
  { title: 'Houses', path: '#gallery' },
  { title: 'Our team', path: '#about' },
  { title: 'Contact', path: '#contact' },
]

export function HeaderMini() {
  const [collapsed, setCollapsed] = useState(true)
  const { scrollYProgress } = useViewportScroll()
  const opac = useTransform(scrollYProgress, [0.8, 1], [1, 0.2])
  return (
    <motion.nav
      initial={{ height: 'auto' }}
      animate={{ height: collapsed ? 'auto' : '100vh' }}
      transition={{
        stiffness: 100,
      }}
      className="fixed flex h-auto w-full select-none flex-col bg-[#04293A] py-2 px-10 text-white drop-shadow-md sm:flex-row"
    >
      <div className=" flex-initial">
        <p className=" font-CinzelDeco text-2xl">Maison</p>
      </div>
      <AnimatePresence>
        <motion.div
          variants={menuVariants}
          className=" flex flex-auto items-center justify-center self-center"
        >
          <motion.ul
            className={
              'relative mx-auto  w-auto list-none  flex-col items-center sm:flex-row lg:flex' +
              (!collapsed ? ' flex' : ' hidden')
            }
          >
            {links.map((link, index) => (
              <motion.li
                whileHover={{ scale: 1.5 }}
                key={index}
                className=" list-item p-5 px-2 sm:p-0 sm:px-5 "
              >
                <Link href={link.path} passHref>
                  <a className="transition-all duration-200 hover:text-red-500">
                    <p className="font-Oswald text-4xl uppercase sm:text-base">
                      {link.title}
                    </p>
                  </a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </AnimatePresence>
      <div className=" flex-initial self-center">
        <motion.ul
          className={
            'flex list-none flex-row' + (!collapsed ? ' flex' : ' hidden')
          }
          variants={containerIcons}
        >
          <motion.li
            key="1"
            whileHover={{ scale: 1.4 }}
            className="h-full w-full px-3 transition-all duration-200 hover:text-red-500"
            variants={itemIcon}
          >
            <Link href={'#'} passHref>
              <a className=" transition-all duration-200 hover:text-red-500">
                {''}
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.4 }}
            className="h-auto w-auto px-3 transition-all duration-200 hover:text-red-500"
            variants={itemIcon}
          >
            <Link href={'#'} passHref>
              <a className="transition-all duration-200 hover:text-red-500">
                {''}
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.4 }}
            className="h-auto w-auto px-3 transition-all duration-200 hover:text-red-500"
            variants={itemIcon}
          >
            <Link href={'#'} passHref>
              <a className="transition-all duration-200 hover:text-red-500">
                {''}
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </a>
            </Link>
          </motion.li>
        </motion.ul>
      </div>

      <div className=" absolute top-0 right-0 p-4 lg:hidden">
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          type="button"
          title="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}

const menuVariants = {
  hidden: { opacity: 1, y: -200 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -200 },
}
