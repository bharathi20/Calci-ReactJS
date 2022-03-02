import React,{useEffect,useState} from 'react'
import './App.css'
import Typewriter from 'typewriter-effect';



export default function App() {
  let [value, setvalue]   =  useState(0)
  let [time,settime]        =  useState(null)

  // useEffect(()=>{},[value,time])
  // var toptext = new Typewriter('#typewriter', {
  //   strings: ['Hello', 'World'],
  //   autoStart: true,
  // });
  // console.log(toptext)

  function init(event)
  {
    const { target }  =   event;
    // console.log(target)
    let targetValue   =   (event.target.innerText)
    // console.log(targetValue)
    if (target.classList.contains('number'))
    {
      if(value===0)
      {
        setvalue(targetValue)
      }
      else
      {
        value+=targetValue
        setvalue(value)
      }
    }

    if (target.classList.contains('operator'))
    {
      if(value===0)
      {
        setvalue(targetValue)
      }
      else
      {
        value+=targetValue
        setvalue(value)
      }
    }

    if(target.classList.contains('equal'))
    {
      try{
        let result = eval('(' + value.toString() +')')
        setvalue(result)
      }
      catch{
       alert('Give a valid input')
      }
    }

    if(target.classList.contains('allclear')){
      setvalue(0)
    }

    if(target.classList.contains('clear')){
      console.log("clear")
      if(value.length > 0)
      {
        value=value.slice(0,-1)
        setvalue(value)
      }
    }
  }

  function updateTime()
  {
    const currentTime = new Date();
    let result = currentTime.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true });
    let time = result.toString()
    settime(time)
    // console.log(time)
  
  }
  setInterval(updateTime, 10000);
  useEffect(()=>{updateTime()})



  return (
    <div className='main'>
      <div className='leftside'>
        <div className='heading'>
          <div className="h11">Hi, I'm Bharathi, Web developer</div>
          {/* <Typewriter
          options={{
          strings:  ['Bharathi',' Web Developer'],
          autoStart: true,
          loop: true,
          }}
          /> */}
        

        </div>
        <div className="subHeading">
          This is a simple calculator App
        </div>
        <div className="content">
          I'm an aspiring, front end web developer, started learning, ReactJs and build this app.
        </div>
        <div className="tech">
          <p>Technology used</p>
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>React Js</li>
          <li>Netlify for Hosting</li>
          <li>Vscode</li>
        </div>
      </div>

      <div className='rightside'>
        <div className='calculator '>

          <div className="topContainer">
            <div className="time">
              <p>{time}</p>
            </div>

            <div className="space">
              <p></p>
            </div>

            <div className="status">
              <i className="bi bi-reception-4"></i>
              <i className="bi bi-wifi"></i>
              <i className="bi bi-battery-half"></i> 
            </div> 

          </div>

          <div className="value">
            <p>{value}</p>
          </div>

          <div className='buttonsContainer' onClick={e=>init(e)}>
            <div className='button grey allclear'>AC</div>
            <div className='button grey clear'>C</div>
            <div className='button grey operator'>%</div>
            <div className='button operator'>/</div>
            <div className='button number'>7</div>
            <div className='button number'>8</div>
            <div className='button number'>9</div>
            <div className='button operator'>*</div>
            <div className='button number'>4</div>
            <div className='button number'>5</div>
            <div className='button number'>6</div>
            <div className='button operator'>-</div>
            <div className='button number'>1</div>
            <div className='button number'>2</div>
            <div className='button number'>3</div>
            <div className='button operator'>+</div>
            <div className='button number shape'>0</div>
            <div className='button operator'>.</div>
            <div className='button equal'>=</div>
          </div>
        </div>
      </div>
      
    </div>
    
  
    

  )
}
