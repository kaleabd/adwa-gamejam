import { Link } from "react-router-dom"
import War from '../assets/war.svg'

function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <img src={War} alt="" className="w-[15%]"/>
      <h1 className="text-[5rem] font-bold ">Digit Adwa</h1>
      <div className= "flex gap-4">
        <button className="bg-[#8D6C16] px-4 py-2 rounded-lg text-white font-bold">
          <Link to={'/play'}>Play Now</Link>
        </button>
        <button className="bg-[#8D6C16] px-4 py-2 rounded-lg text-white font-bold">
          <Link to={'/howto'}>How to play</Link>
        </button>
        
      </div>
    </div>
  )
}

export default Home