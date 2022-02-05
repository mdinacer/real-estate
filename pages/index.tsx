import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
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
          <Services />
          <Gallery />
          <div className=" h-screen w-full bg-slate-600"></div>
        </motion.main>
      </AnimatePresence>

      <footer className=""></footer>
    </div>
  )
}
