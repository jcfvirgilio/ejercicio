import React from "react";
import {Header,Footer} from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-black text-white">
      <Header />
      <Footer/>
    </main>
  )
}
