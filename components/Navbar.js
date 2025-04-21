"use client"
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

const Navbar = () => {
    const user = useUser();
    console.log(user.user?.id)
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto px-4 py- flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          PieChat
        </Link>

        <ul className="flex space-x-8 text-l font-bold items-center">
          <li>
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/forums" className="text-gray-700 hover:text-indigo-600 transition">
              Forums
            </Link>
          </li>
          <li>
            <Link href="/chat" className="text-gray-700 hover:text-indigo-600 transition">
              UserChat
            </Link>
          </li>

          <li className='flex justify-center items-center'>
            <UserButton />    
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
