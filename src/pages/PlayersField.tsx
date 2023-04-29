import { useState} from "react"
import useGameDataStore from "../utils/GameStore";
import Brana from '../assets/Rectangle 1.png'
import years from "../assets/data";

interface PlayersFieldState {
  userGuess: number | string;
}
interface PlayersFieldProps {
    adwanumber: number;
  }
function PlayersField(props: PlayersFieldProps) {
  const [userNumber, setUserNumber] = useState<PlayersFieldState>({
    userGuess: "",
  });
  const [winState, setWinState] = useState<boolean>(false)
  
  const {values,addValues, setAdwaNumber } =useGameDataStore()
  const correct = {
    year1: years[0].year1,
    year2: years[1].year2,
    year3: years[2].year3,
    year4: years[3].year4,
    year5: years[4].year5
  } 
  const handleFirstPlayerSecretNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserNumber({
      userGuess: Number(e.target.value),
    });
    
  };
  const handleAddValue = () => {

    if (!isNaN(Number(userNumber.userGuess))) {
      addValues(Number(userNumber.userGuess));
      setAdwaNumber(props.adwanumber)
    }
    userNumber.userGuess === props.adwanumber && setWinState(true)

    
  };

  

  // const position = positionCalculator(props.adwanumber, Number(userNumber.userGuess))
  // const total = totalCalculator(props.adwanumber, Number(userNumber.userGuess))
  console.log(userNumber.userGuess, props.adwanumber)
  
  
  return (
    <div className='w-full h-auto relative gap-4'>
     {
      winState ? (
        <div className="absolute flex flex-col justify-center items-center top-[30%] left-[40%] bg-white p-12 z-50 w-[40%] h-[40vh]">
          <h2>you're correct the guess number was {props.adwanumber}</h2>
          <h2 className="text-4xl font-bold">{correct.year5}</h2>
          <h2>THIS WAS THE YEAR ITALY AND ETHIOPIA SIGN THE TREATY!</h2>
        </div>
      ) : <h2>lose</h2>
     }
      <div className="">
        <img src={Brana} alt="" className='w-full h-[100vh]'/>
        <div className="absolute top-[25%] left-[40%] flex flex-col gap-4">
            <input type="text" onChange={handleFirstPlayerSecretNumberChange} value={userNumber.userGuess}
            className="bg-transparent w-full border-2 border-black/70 p-2 rounded-lg text-center outline-none"
            />

            <button onClick={handleAddValue}
            className="w-full bg-[#8D6C16] py-2 rounded-lg"
            >Add Value</button>
          <div className="flex flex-col justify-center gap-6 w-full h-[150px] overflow-scroll border-2 border-[#8D6C16] rounded-lg px-4 pt-6">
          {
              values.map((e,i) => (
                <>
                  <div key={i} className="flex justify-between">
                      <h2>Positon: {e.position}</h2>
                      <h2>Total: {e.total}</h2>
                  </div>
                </>
              ))
          }
            
          </div>
         </div>

      </div>
    </div>
  );
}

export default PlayersField;