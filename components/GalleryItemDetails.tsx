import { motion } from 'framer-motion'
import { HouseItem } from '../data/houses'
import Carousel from './Carousel'
import CarouselCaption from './CarouselCaption'

interface Props {
  setSelectedHouse: (item: HouseItem | null) => void
  house: HouseItem
}

export default function GalleryItemDetails({ setSelectedHouse, house }: Props) {
  return (
    <motion.div
      layoutId={house.title}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0  h-screen  w-[100vw] select-none"
    >
      <div className="z-[-5] flex h-full w-full items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm ">
        <motion.div>
          <div className="relative h-[90vh] w-[90vw] overflow-hidden sm:mx-5 sm:h-[60vh] md:w-[40vw] lg:h-[80vh] lg:w-[70vw]  ">
            <Carousel />
            <div className=" absolute bottom-0 left-0 h-auto w-full  drop-shadow-md sm:bottom-[10%] ">
              <CarouselCaption
                setSelectedHouse={setSelectedHouse}
                house={house}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
