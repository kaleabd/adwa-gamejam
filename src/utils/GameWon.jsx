import React from "react"
import'./gamewon.css'
import scroll from '../../assets/oldpapper.png'
import gasha from '../../assets/gasha.png'
import popup from '../assets/popup.png'

const GameWon = () =>{
    return(
        <div>
        <div className='container'>
            <div className='img1'>
                <img src={scroll} alt="old paper" />
            </div>
            <div className='imgContainer'>
                 <img src={gasha} alt="" className='imgcon'/>
                 <img src={gasha} alt="" className='imgcon1' />
                 <img src={gasha} alt="" className='imgcon2' />
            </div>
            <div className='pictext'>
            <div className='imgpopup'>
            <img src={popup} alt="no picture"/>
            </div>
            <p>Congrats!!!! <br />The battle of Adawa was <br />fought in 1888 E.C.</p>
            </div>
            <div className='totalinfo'>
                <div className='num'>
                    <span>Numbers</span>
                </div>
                <div className='pos'>
                    <span>Position</span>
                </div>
            </div>
            <div className='inputes'>
            <div className='input1'></div>
            <div className='input2'></div>

            </div>
        </div>
     </div>
    )
}

export default GameWon