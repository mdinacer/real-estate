import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  return (
    <motion.nav
      variants={container}
      animate={'show'}
      initial="hidden"
      className="absolute flex h-[50vh] w-full flex-col bg-[#04293A] text-white drop-shadow-md"
    >
      <div className="  flex h-full w-full flex-auto items-center justify-center">
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
      <div className="  flex h-auto w-full flex-initial items-end justify-between px-5 py-5">
        <motion.ul
          variants={containerIcons}
          className="juse flex list-none flex-row items-center font-Oswald text-base uppercase"
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
            className="h-full w-full px-3 transition-all duration-200 hover:text-red-500"
            variants={itemIcon}
          >
            <Link href={'#'} passHref>
              <a className=" transition-all duration-200 hover:text-red-500">
                {''}
                <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
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
                <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
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
  { title: 'Home', path: '#' },
  { title: 'Projects', path: '#projects' },
  { title: 'About Us', path: '#about' },
  { title: 'Contact', path: '#contact' },
]

export function HeaderMini() {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <motion.nav
      initial={{ height: 'auto' }}
      animate={{ height: collapsed ? 'auto' : '100vh' }}
      transition={{
        stiffness: 100,
      }}
      className="fixed flex h-auto w-full flex-col bg-[#04293A] py-2 px-10 text-white drop-shadow-md sm:flex-row"
    >
      <div className=" flex-initial">
        <p className=" font-CinzelDeco text-2xl">Maison</p>
      </div>
      <AnimatePresence>
        <motion.div
          variants={menuVariants}
          className="flex flex-auto items-center justify-center self-center"
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
          <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
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
