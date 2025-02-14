"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, UserButton,useUser } from "@clerk/nextjs";

export default function Home() {
  const {user,isSignedIn}=useUser();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to AI Mock Interview
      </h1>
      <Image
        src="/vtix5ctr.png"
        alt="AI Mock Interview"
        width={500}
        height={300}
        className="rounded-lg shadow-lg mb-4"
      />
      {isSignedIn? 
      <div className="flex space-x-4">
          <Link href="/dashboard">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Dashboard
          </Button>
          </Link>
          <UserButton />
        </div>:

          <SignInButton>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
        Sign In
      </Button>
       </SignInButton>
         
      }
    </div>
    
  );
}
