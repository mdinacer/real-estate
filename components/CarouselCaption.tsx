import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HouseItem } from '../data/houses'

interface Props {
  house: HouseItem
  setSelectedHouse: (value: any) => void
}

export default function CarouselCaption({ house, setSelectedHouse }: Props) {
  return (
    <div className="relative h-auto w-full bg-white px-10 py-5">
      <div className="relative flex flex-col sm:flex-row">
        <div className=" flex-initial pr-5 ">
          <p className=" whitespace-nowrap pb-2 font-Oswald text-4xl font-thin sm:text-5xl">
            {house.title}
          </p>
          <p className=" font-Montserrat text-base font-normal uppercase sm:pr-5 ">
            {house.address}
          </p>
          <div className="flex h-auto w-auto flex-row items-center justify-between sm:items-start md:flex-col lg:flex-row">
            <p className="font-Montserrat text-base font-thin sm:pr-5">
              {house.surface}
            </p>
            <p className="font-Montserrat text-base font-thin ">
              {house.price}
            </p>
          </div>
        </div>
        <div className=" flex flex-auto items-center justify-center py-5 sm:py-0">
          <div>
            <p className="mx-auto max-w-2xl border-l border-black px-5 font-Montserrat font-thin">
              {house.description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 py-5 px-5">
        <button
          type="button"
          title="close"
          className=""
          onClick={() => setSelectedHouse(null)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
