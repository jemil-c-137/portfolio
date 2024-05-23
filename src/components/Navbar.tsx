'use client';

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    
    return(
        <header className="max-w-screen-xl">
            <nav className="flex flex-row justify-between items-center border-b-2 border-primary-grey py-6">
                <div className='flex gap-x-4'>
                    <Image
                        src={'/logo.svg'}
                        alt='website logo'
                        width={35}
                        height={20}/>
                    <span>Jemil S.</span>
                </div>
                <ul className="flex gap-x-4">
                    <li>
                        <Link className={`${pathname === '/' ? 'text-secondary underline' : ''}`} href='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={pathname === '/blog' ? 'text-secondary underline' : ''} href='/blog'>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}