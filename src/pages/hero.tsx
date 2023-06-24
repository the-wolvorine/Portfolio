import { useState } from 'react'
import Image from 'next/image'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-screen-xl pt-32 sm:pt-48 lg:pt-56">
            <div className="font-sans text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Full-Stack Web Developer and Test Engineer: Building and Ensuring Quality Web Applications
            </h1>
            <p className="mt-6 text-lg leading-8 text-black">
            As an expert in frontend development and meticulous testing, I adeptly craft impeccable web experiences. My goal is to enhance user satisfaction and create top-notch applications, dedicating myself to each line of code.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Image src="/hero-1.svg" width={950} height={500} alt="hero" />
            </div>
            </div>
        </div>
    </div>
  )
}
