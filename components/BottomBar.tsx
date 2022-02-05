import { useState } from 'react'

interface Props {
  selectedIndex: number
  handleSelectedIndex: (index: number) => void
  handleNext: () => void
  handlePrevious: () => void
}

export default function BottomBar({
  selectedIndex,
  handleSelectedIndex,
  handleNext,
  handlePrevious,
}: Props) {
  function handleNextItem() {
    if (selectedIndex === pages.length - 1) {
      return
    }
    handleSelectedIndex(selectedIndex + 1)
    handleNext()
  }

  function handlePreviousItem() {
    if (selectedIndex === 0) {
      return
    }
    handleSelectedIndex(selectedIndex - 1)
    handlePrevious()
  }

  return (
    <div
      className={` ${
        selectedIndex === 0 ? ' bg-opacity-5' : ' bg-opacity-30'
      }  bottom-0 left-0 z-30 flex h-auto  w-full flex-initial flex-row items-center justify-between bg-black  px-10 backdrop-blur-md transition-all duration-200`}
    >
      <div className="flex-initial">
        <div className=" grid grid-flow-col grid-rows-1">
          {pages.map((page, index) => (
            <button
              type="button"
              onClick={() => handleSelectedIndex(index)}
              className={
                'mx-2 flex scale-100 flex-row  items-center  bg-opacity-0 px-10 py-3 transition-all duration-300 hover:scale-110 hover:bg-opacity-10 hover:backdrop-blur-sm'
              }
              key={index}
            >
              <p
                className={
                  'font-Oswald text-base uppercase text-white ' +
                  (selectedIndex === index
                    ? ' underline underline-offset-4 transition-all duration-300'
                    : ' scale-100 no-underline')
                }
              >
                {page.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className=" flex-initial py-2 ">
        <div>
          <button
            disabled={selectedIndex === 0}
            type="button"
            onClick={() => handlePreviousItem()}
            className={
              'mx-2  px-5 py-1 text-white  transition-all duration-200 ' +
              (selectedIndex === 0
                ? 'opacity-20 hover:opacity-20'
                : 'opacity-50 hover:opacity-100')
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {''}
          </button>
          <button
            disabled={selectedIndex === pages.length - 1}
            type="button"
            onClick={() => handleNextItem()}
            className={
              'mx-2  px-5 py-1 text-white  transition-all duration-200 ' +
              (selectedIndex === pages.length - 1
                ? 'opacity-20 hover:opacity-20'
                : 'opacity-50 hover:opacity-100')
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {''}
          </button>
        </div>
      </div>
    </div>
  )
}

const pages = [
  { title: 'Home', path: '#' },
  { title: 'Services', path: '#' },
  { title: 'Discover', path: '#' },
  { title: 'About Us', path: '#' },
  { title: 'Contact', path: '#' },
]
