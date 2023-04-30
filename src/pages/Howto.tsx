import Old from '../assets/Rectangle 1.png'
function Howto() {
  return (
    <div className="relative">
        <img src={Old} alt="" className='absolute w-full h-[100vh] '/>
        <div className='absolute w-[500px] left-[35%] top-[10rem] flex flex-col gap-8'> 
            <h1 className='font-bold  text-4xl'>How to play the game</h1> 
            <div className='flex flex-col gap-5 w-[80%]'>
                <h2>
                    1. scroll the numbers of your 
                    choosing to get the right sequence numbers.
                </h2>
                <h2>
                    2.“Numbers ” shows how many numbers you have gotten right ,
                    ”Positions”show how many positions you have gotten right 
                </h2>
                <h2>
                    3.you have one minute and 3 chances to guess the number. 
                </h2>
            </div>
        </div>

        
    </div>
  )
}

export default Howto