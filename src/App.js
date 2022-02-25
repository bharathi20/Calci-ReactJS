import React from 'react'
import './App.css'
export default function App() {
  return (
    <div className='calculator'>

      <div className="topContainer">
        <div className="time">
          <p>9:41</p>
        </div>

        <div className="space">
          <p></p>
        </div>

        <div className="status">
          <p>battery</p>
        </div> 

      </div>

      <div className="value">
        <p>0</p>
      </div>

      <div className='buttonsContainer'>
        <p className='button grey'>AC</p>
        <p className='button grey'>C</p>
        <p className='button grey'>%</p>
        <p className='button operator'>/</p>
        <p className='button'>7</p>
        <p className='button'>8</p>
        <p className='button'>9</p>
        <p className='button operator'>*</p>
        <p className='button'>4</p>
        <p className='button'>5</p>
        <p className='button'>6</p>
        <p className='button operator'>-</p>
        <p className='button'>1</p>
        <p className='button'>2</p>
        <p className='button'>3</p>
        <p className='button operator'>+</p>
        <p className='button shape'>0</p>
        <p className='button'>.</p>
        <p className='button operator'>=</p>
      </div>
    </div>

  )
}
