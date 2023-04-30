import React from "react"
import './howToPlay.css';
import oldpapper from '../../assets/oldpapper.png';

const HowToPlay = () =>{
    return(
            <div className='container' id= "HTP"> 
            <div className="images"> 
            <img src={oldpapper} alt='oldpapper'/> 
            </div> 
                <div className="rules">  
                <p> 
                <h1>How to play the game</h1> 
              <div>
                  1. scroll the numbers of your 
                choosing to get the right sequence numbers.
                </div> 
        
                2.“Numbers ” shows how many numbers you have gotten right ,
                <div> 
                ”Positions”show how many positions you have gotten right</div> 
                3.you have one minute and 3 chances to guess the number. 
                    </p> 
        </div>  
    </div> 
    )
}

export default HowToPlay