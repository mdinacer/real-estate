import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleNext = () => {
    if (selectedIndex >= 6) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(6)
    } else {
      setSelectedIndex((prev) => prev - 1)
    }
    console.log(`image${selectedIndex + 1}.jpg`)
  }
  return (
    <div className="relative h-1/2 w-full translate-x-0 overflow-hidden rounded-md bg-black sm:h-full sm:w-[90%] sm:translate-x-[10%]">
      <AnimatePresence>
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className="relative h-full w-full"
        >
          <Image
            src={`/assets/images/carousel/image${selectedIndex + 1}.jpg`}
            layout="fill"
            objectFit="cover"
            objectPosition={'center'}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-1/2 right-0  flex h-auto w-full -translate-y-1/2 flex-row items-center justify-between  text-white">
        <motion.button
          variants={buttonVariants}
          onClick={handlePrevious}
          initial="initial"
          whileHover={'hover'}
          type="button"
          title="previous"
          className="rounded-r-2xl bg-black bg-opacity-40 p-5"
        >
          <FontAwesomeIcon icon={faChevronLeft} className=" h-8 w-8" />
        </motion.button>
        <motion.button
          variants={buttonVariants}
          onClick={handleNext}
          initial="initial"
          whileHover={'hover'}
          type="button"
          title="next"
          className="rounded-l-2xl bg-black bg-opacity-40 p-5"
        >
          <FontAwesomeIcon icon={faChevronRight} className=" h-8 w-8" />
        </motion.button>
      </div>
    </div>
  )
}

const buttonVariants = {
  initial: {
    opacity: 0.4,
  },

  hover: {
    opacity: 1,
  },
}
