import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { useInView } from 'react-intersection-observer'
import Gallery from '../components/Gallery'
import Header, { HeaderMini } from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  })

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
        <motion.main
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.main>
      </AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={'show'}
        exit="exit"
        ref={ref}
      >
        <AnimatePresence>
          <motion.div
            variants={containerItem}
            className="fixed top-0 left-0 z-20 w-full "
          >
            <HeaderMini />
          </motion.div>
        </AnimatePresence>

        <Services />
        <Gallery />
        <div className=" h-screen w-full bg-slate-600"></div>
      </motion.div>

      <footer className=""></footer>
    </div>
  )
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
  exit: {},
}

const containerItem = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      dipping: 100,
    },
  },
  exit: { opacity: 1, y: -200 },
}
