import Header from './Header'

export default function Hero() {
  return (
    <div className="relative h-[140vh] w-full  overflow-hidden ">
      <video
        src="/assets/videos/hero1.mp4"
        autoPlay
        muted
        preload="lazy"
        loop
        playsInline
        className="fixed top-0 left-0 z-[-10] hidden h-screen w-full object-cover object-center"
      ></video>
      <Header />
    </div>
  )
}
