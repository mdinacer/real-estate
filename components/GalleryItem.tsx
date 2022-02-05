import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import Image from 'next/image'
import { HouseItem } from '../data/houses'

interface Props {
  setSelectedHouse: (item: HouseItem) => void
  house: HouseItem
}

const item = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: 100,
    opacity: 0,
  },
}

export default function GalleryItem({ setSelectedHouse, house }: Props) {
  const { scrollYProgress } = useViewportScroll()
  const yPos = useTransform(scrollYProgress, [0.5, 0.8], [0, 350])
  return (
    <AnimatePresence>
      <motion.div
        onClick={() => setSelectedHouse(house)}
        layoutId={house.title}
        key={house.id}
        variants={item}
        className="relative h-[60vh] w-[90vw] overflow-hidden sm:mx-5 md:w-[40vw] lg:h-[60vh] lg:w-[25vw] "
      >
        <div className="absolute top-0  right-0 h-[100%] w-[90%] overflow-hidden rounded-md">
          <motion.div
            whileInView={{ scale: 1.1 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: [0.6, 0.01, -0.05, 0.5],
            }}
            style={{}}
            className={`h-full w-full`}
          >
            <Image
              src={`/assets/images/${house.image}`}
              layout="fill"
              objectFit="cover"
              objectPosition={'center'}
            />
          </motion.div>
        </div>
        <motion.div
          style={{ y: yPos }}
          initial={{ left: '10%' }}
          whileInView={{ left: 0 }}
          exit={{ left: '10%' }}
          transition={{
            left: { duration: 0.5, delay: house.id / 10 },
          }}
          className="absolute top-[10%] left-0 flex h-[20%]  w-[90%] items-center justify-start bg-white py-2 px-4 drop-shadow-md"
        >
          <div className="">
            <p className=" font-Oswald text-5xl font-thin leading-normal">
              {house.title}
            </p>
            <p className=" font-Montserrat text-base font-thin ">
              {house.address} - {house.surface} - {house.price}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
