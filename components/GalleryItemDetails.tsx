import { motion } from 'framer-motion'
import { HouseItem } from '../data/houses'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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
      className="fixed top-0 left-0  h-screen  w-[100vw] "
    >
      <div
        className=" flex h-full w-full items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm "
        onClick={() => setSelectedHouse(null)}
      >
        <motion.div>
          <motion.div className="relative h-[60vh] w-[90vw] overflow-hidden sm:mx-5 md:w-[40vw] lg:h-[80vh] lg:w-[70vw]  ">
            <div className="absolute top-0  right-0 h-[100%] w-[90%] overflow-hidden rounded-md">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
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
            <motion.div className="absolute bottom-[10%] left-0 flex h-[20%]  w-full items-center justify-start bg-white py-2 px-4 pl-8 drop-shadow-md ">
              <div className=" flex-initial">
                <p className=" font-Oswald text-5xl font-thin leading-normal">
                  {house.title}
                </p>
                <p className=" w-full flex-row items-center justify-evenly font-Montserrat text-base font-thin ">
                  <span className="mx-2">{house.address}</span>
                  <span className="mx-2">{house.surface}</span>
                  <span className="mx-2">{house.price}</span>
                </p>
              </div>
              <div className="flex-auto ">
                <p className="mx-auto max-w-xl border-l border-black px-5 font-Montserrat font-thin">
                  {house.description}
                </p>
              </div>
              <div className="m-4 flex-initial self-start text-black">
                <motion.button
                  className=""
                  onClick={() => setSelectedHouse(null)}
                >
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    size="2x"
                    className="h-5 w-5"
                  />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
