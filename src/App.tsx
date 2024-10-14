import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const App = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const t1 = gsap.timeline()
      const t2 = gsap.timeline()

      t1.from('#intro-slider', {
        xPercent: '-100',
        duration: 1.3,
        ease: 'power2.inOut',
        delay: 0.3,
      })
        .from(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          x: -100,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.5,
        })
        .to(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          x: -100,
          duration: 1,
          delay: 0.3,
          ease: 'power4.in',
          stagger: 0.05,
        })
        .to('#intro-slider', {
          xPercent: '-100',
          duration: 1,
          ease: 'power2.inOut',
        })
        .to('#welcome', {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: 'power4.out',
        })
        .to('#welcome', {
          duration: 1,
          opacity: 0,
          y: 80,
          ease: 'power4.in',
        })
        .to('#refresh-btn', {
          opacity: 1,
          duration: 1,
          delay: 1,
          scale: 1,
          pointerEvents: 'auto',
          ease: 'power4.out',
        })

      t2.from('#slider-container', {
        opacity: 0,
        duration: 1,
        ease: 'power4.inOut',
      })
        .to('#slider-container', {
          opacity: 1,
          duration: 0,
          delay: 1,
          ease: 'power4.inOut',
        })
        .to(['#slide-1', '#slide-2', '#slide-3'], {
          xPercent: '-150',
          delay: 3.5,
          ease: 'power4.inOut',
          stagger: 0.1,
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div
      className='relative pointer-events-none'
      ref={comp}
    >
      <div
        id='intro-slider'
        className='h-screen p-10 bg-gray-100 text-gray-900 absolute top-0 left-0 w-full z-20 flex flex-col gap-10 tracking-tight justify-center text-6xl md:text-8xl font-light'
      >
        <h2 id='title-1'>Freelancer</h2>
        <h2 id='title-2'>UI/UX Designer</h2>
        <h2 id='title-3'>Front End Developer</h2>
      </div>
      <div
        id='slider-container'
        className='h-screen w-screen opacity-0 absolute top-0 left-0 z-10'
      >
        <div
          id='slide-1'
          className='h-screen w-full bg-red-500 absolute top-0 left-0 z-10'
        ></div>
        <div
          id='slide-2'
          className='h-screen w-full bg-blue-500 absolute top-0 left-0'
        ></div>
        <div
          id='slide-3'
          className='h-screen w-full bg-green-500 absolute top-0 left-0 -z-10'
        ></div>
      </div>
      <div className='h-screen flex justify-center place-items-center'>
        <h1
          id='welcome'
          className='text-6xl md:text-9xl font-bold opacity-0 -translate-y-20'
        >
          Welcome.
        </h1>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-screen flex justify-center items-center'>
        <button
          id='refresh-btn'
          className='text-gray-900 bg-gray-100 p-4 rounded-full opacity-0 scale-90 pointer-events-none'
          onClick={() => window.location.reload()}
        >
          Refresh?
        </button>
      </div>
    </div>
  )
}

export default App
