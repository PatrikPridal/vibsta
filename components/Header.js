import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/solid'

function Header() {
  return (
    <div>
      <div className="flex max-w-6xl justify-between">
        {/* left */}
        <div
          className="relative hidden w-24 cursor-pointer 
        lg:inline-grid"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          className="relative w-10 flex-shrink-0 cursor-pointer 
        lg:hidden"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search input field */}
        <div className='relative mt-1 p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 flex items-center 
          pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
          </div>
          <input 
          className='bg-gray-50 block w-full pl-10 sm:text-sm 
          border-gray-300 focus:ring-black focus:border-black rounded-md' 
          type="text" 
          placeholder="Search" />
        </div>

        {/* Right */}
      </div>
    </div>
  )
}

export default Header
