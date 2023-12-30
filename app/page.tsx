import React from "react";
import {Header,Footer,Center} from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black p-5 text-white">
      <Header />
      <Center/>
      <Footer/>
    </main>
  )
}
