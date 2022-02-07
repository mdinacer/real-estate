import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { HouseItem, HousesList } from '../data/houses'
import GalleryItem from './GalleryItem'
import GalleryItemDetails from './GalleryItemDetails'

export default function Gallery() {
  const [selectedHouse, setSelectedHouse] = useState<HouseItem | null>(null)

  const [ref, inView, entry] = useInView({
    /* Optional options */
    //threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (!inView && selectedHouse) {
      setSelectedHouse(null)
    }
  }, [inView, selectedHouse, setSelectedHouse])

  const container = {
    hidden: {},
    show: {
      transition: {
        stagerChildren: 0.35,
      },
    },
    exit: {},
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (selectedIndex === colors.length - 1) {
  //       setSelectedIndex(0)
  //     } else {
  //       setSelectedIndex(selectedIndex + 1)
  //     }
  //   }, 60000)
  //   return () => clearTimeout(timer)
  // }, [selectedIndex, setSelectedIndex])
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <div
          id="gallery"
          ref={ref}
          className={`relative h-full min-h-screen w-full overflow-hidden bg-[#04293A] pb-20`}
        >
          <div
            className={`absolute top-0 h-full w-full bg-[url('/assets/images/image7.webp')] bg-cover bg-fixed bg-center mix-blend-overlay`}
          />
          <div className=" flex w-full items-center justify-center py-20">
            <h1 className=" flex flex-col  text-white">
              <span className="font-Cinzel text-4xl">Our</span>
              <span className="font-CinzelDeco text-5xl sm:text-7xl">
                Selection
              </span>
            </h1>
          </div>
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              exit="exit"
              className=" grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            >
              {HousesList.map((house) => (
                <GalleryItem
                  key={house.id}
                  setSelectedHouse={setSelectedHouse}
                  house={house}
                />
              ))}
            </motion.div>

            <div className="flex h-auto  w-full  items-center justify-center pt-10">
              <Link href={'#'} passHref>
                <a className="mx-auto rounded-md border py-5 px-10 transition-all duration-200 hover:scale-110">
                  <p className="   font-Oswald text-2xl uppercase text-white ">
                    Show More
                  </p>
                </a>
              </Link>
            </div>

            <motion.div>
              <AnimatePresence>
                {selectedHouse && (
                  <GalleryItemDetails
                    house={selectedHouse}
                    setSelectedHouse={setSelectedHouse}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
