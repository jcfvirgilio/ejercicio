import React,{Suspense} from "react";
import {Header,Footer} from '@/components';
const Content = React.lazy(() => import('@/components/Content'));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black p-5 text-white">
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
          <Content />
      </Suspense>
      <Footer />
    </main>
  )
}
