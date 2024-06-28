import React from "react";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <nav className='flex items-center justify-between p-5 shadow-sm border-b-[1px]'>
      <Image src={"/fpmoz-logo.png"} alt='logo' width={100} height={100} />
      <div className='hidden md:flex gap-5'>
        <h2 className='hover:bg-orange-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
          Home
        </h2>
        <h2 className='hover:bg-orange-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
          History
        </h2>
        <h2 className='hover:bg-orange-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
          Contact us
        </h2>
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}

export default NavBar;
