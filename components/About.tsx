import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div
      id="about"
      className="relative h-full min-h-screen w-full overflow-hidden bg-[#000] bg-opacity-50 py-28 backdrop-blur-sm"
    >
      <div className="flex h-full w-full items-center justify-center pb-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className=" mx-auto flex w-auto flex-col text-white">
            <span className=" flex flex-col font-Cinzel text-3xl leading-4">
              Our
            </span>
            <span className=" flex flex-col font-CinzelDeco text-7xl ">
              Team
            </span>
          </h1>

          <p className=" max-w-xl pb-7 text-center font-Crimson text-xl font-normal  text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nulla
            soluta vel porro libero hic voluptates dignissimos debitis.
          </p>
        </div>
      </div>

      <div className="flex w-full items-start justify-center">
        <AnimatePresence>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            exit="exit"
            className="flex flex-col justify-evenly gap-10 sm:flex-row sm:gap-5"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="overflow-hidden rounded-lg duration-1000 sm:grayscale sm:hover:grayscale-0"
                variants={gridItemVariants}
              >
                <motion.div
                  whileHover={{ width: '40vw' }}
                  transition={{
                    stiffness: 120,
                    duration: 0.5,
                  }}
                  className="relative flex h-[60vh] w-[80vw] flex-col overflow-hidden sm:h-[40vh] sm:w-[18vw] sm:flex-row "
                >
                  <div className="top-0 left-0 z-[1] h-[40vh] w-full bg-black sm:absolute  sm:h-full sm:w-[20vw]">
                    <div className="relative h-full w-full">
                      <Image
                        objectFit="cover"
                        className=" object-[50%_30%] sm:object-center"
                        src={`/assets/images/team/${member.image}`}
                        layout="fill"
                        alt={member.name}
                      />
                    </div>
                    <p className=" absolute bottom-1/2 left-0 bg-[#04293A] px-10 py-2 font-Oswald text-2xl text-white sm:bottom-0 sm:bg-[white] sm:px-5   sm:py-1  sm:text-black ">
                      {member.name}
                    </p>
                  </div>
                  <div className="top-0 right-0  flex h-[40vh] w-full items-center  justify-center bg-white sm:absolute  sm:h-full sm:w-[20vw] sm:rounded-r-lg">
                    <div className=" w-auto py-2 px-3 ">
                      {/* <p className="  font-Oswald text-3xl">{member.name}</p> */}
                      <p className=" pb-5 font-Montserrat text-xl">
                        {member.title}
                      </p>
                      <p className="max-w-sm font-Montserrat text-base ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic cum ducimus eveniet culpa sint explicabo recusandae
                        odit blanditiis porro sit repellendus provident tempora
                        minima sequi inventore, nulla est suscipit magnam?
                      </p>
                    </div>
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

const gridVariants = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const gridItemVariants = {
  hidden: { y: -200, opacity: 0 },
  show: { y: 0, opacity: 1 },
  exit: { y: 200, opacity: 0 },
}

const teamMembers = [
  {
    id: 1,
    name: 'Lucas Forward',
    title: 'Chief Executive Officer',
    shortBio: '',
    image: 'member1.webp',
  },
  {
    id: 2,
    name: 'Rebecca Forward',
    title: 'Buyers Specialist',
    shortBio: '',
    image: 'member2.webp',
  },
  {
    id: 3,
    name: 'Rick Trico',
    title: 'Lead Buyers Specialist',
    shortBio: '',
    image: 'member3.webp',
  },

  {
    id: 4,
    name: 'Charl Menkies',
    title: 'Associate Agent',
    shortBio: '',
    image: 'member4.webp',
  },
]
