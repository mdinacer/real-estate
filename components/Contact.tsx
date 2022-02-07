import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialLinks } from '../data/socialLinks'

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative flex h-full min-h-screen w-full flex-col overflow-hidden bg-[#04293A] py-28"
    >
      <div className='absolute top-0 left-0 h-full w-full bg-[url("/assets/images/backgrounds/bg.webp")] bg-contain bg-center bg-no-repeat opacity-100 mix-blend-multiply' />

      <div className="container relative mx-auto h-auto w-full flex-initial text-white">
        <h1 className="px-5 font-Oswald text-5xl sm:text-7xl">Contacts</h1>
      </div>
      <div className="relative flex h-full w-full flex-auto  items-center justify-center text-white">
        <div className=" flex h-auto w-auto flex-col p-5">
          <div>
            <p className="font-Cinzel text-2xl sm:text-4xl">Let's find your</p>
            <p className="text-center font-CinzelDeco text-8xl sm:text-left sm:text-9xl">
              Dream House
            </p>
          </div>
          <div className="w-auto pt-10  sm:ml-auto sm:self-end sm:pt-2">
            <Link href={'tel:+213662991735'} passHref>
              <a className="transition-all duration-200 hover:text-red-500">
                <p className="flex flex-col items-center justify-between pb-5 sm:flex-row sm:pb-2">
                  <span className="font-Oswald text-lg uppercase sm:text-xl">
                    {'Phone'}
                  </span>
                  <span className="font-Montserrat text-2xl">
                    +213 662 991 735
                  </span>
                </p>
              </a>
            </Link>
            <Link href={'mailto:mdi.nacer@outlook.com'} passHref>
              <a className="transition-all duration-200 hover:text-red-500">
                <p className="flex flex-col items-center justify-between pb-5 sm:flex-row sm:pb-2">
                  <span className="font-Oswald text-lg uppercase sm:pr-5 sm:text-xl">
                    {'Email'}
                  </span>
                  <span className="font-Montserrat text-2xl ">
                    mdi.nacer@outlook.com
                  </span>
                </p>
              </a>
            </Link>

            <div className=" flex flex-col items-center justify-between pb-5 sm:flex-row sm:pb-2">
              <p className="select-none font-Oswald text-lg uppercase sm:pr-5 sm:text-xl">
                {'Follow Us'}
              </p>
              <div className="  my-2 flex-initial self-center">
                <motion.ul className={'flex list-none flex-row'}>
                  <motion.li
                    key="1"
                    whileHover={{ scale: 1.4 }}
                    className="h-full w-full px-3 transition-all duration-200 hover:text-[#4267B2] "
                  >
                    <Link href={socialLinks.facebook} passHref>
                      <a
                        target={'_blank'}
                        rel="noreferrer"
                        className=" transition-all duration-200 "
                      >
                        {''}
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="h-10 w-10 sm:h-7 sm:w-7"
                        />
                      </a>
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.4 }}
                    className="h-auto w-auto px-3 transition-all duration-200 hover:text-[#0077B5]"
                  >
                    <Link href={socialLinks.linkedIn} passHref>
                      <a
                        target={'_blank'}
                        rel="noreferrer"
                        className="transition-all duration-200 "
                      >
                        {''}
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="h-10 w-10 sm:h-7 sm:w-7"
                        />
                      </a>
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.4 }}
                    className="h-auto w-auto px-3 transition-all duration-200 hover:text-[#e95950]"
                  >
                    <Link href={socialLinks.instagram} passHref>
                      <a
                        target={'_blank'}
                        rel="noreferrer"
                        className="transition-all duration-200"
                      >
                        {''}
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="h-10 w-10 sm:h-7 sm:w-7"
                        />
                      </a>
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
