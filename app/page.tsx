import Image from 'next/image'
import Header from "@/components/Header"
import Board from '@/components/Board'
export default function Home() {
  return (
    <main>
      {/*Header*/}
      <Header />
      {/*Board*/}
      <Board />
      <h1>Trello 2.0 AI clone</h1>
    </main>
  )
}
