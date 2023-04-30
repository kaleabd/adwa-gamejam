import { randomizeDigits } from "./utils/randomize";
import years from "./assets/data";
// import { useState } from "react";
import PlayersField from "./pages/PlayersField";
// import positionCalculator from "./assets/positionCalc";
import { useNavigate } from "react-router-dom";

function App() {
  const adwayears = {
    year1: years[0].year1,
    year2: years[1].year2,
    year3: years[2].year3,
    year4: years[3].year4,
    year5: years[4].year5
  } 
  const adwayear = randomizeDigits(adwayears.year5)
  const navigate = useNavigate()
  return (
    <div className="bg-gray-700">
      <div>
        <PlayersField adwanumber={adwayear}/>
      </div>
      <h2>{adwayear}</h2>
    </div>
  );
}

export default App;
