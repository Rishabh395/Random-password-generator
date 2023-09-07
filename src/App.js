import "./App.css";
import { useState , useEffect } from "react";

function App() {
  const [lenght, setlenght] = useState(8);
  const [isnumallow, setisnumallow] = useState(false);
  const [ischarallow, setischarallow] = useState(false);

  const [pass, setpass] = useState("");

  const changelenght = (e) => {
    setlenght(e.target.value);
  };


  // useeffect take two parameters one is a callbackfunction and other is a dependency array
  // usecallback dependency array is used for cache memory and useeffect dependency array is used
  // for changes in dom if any changes to the dependent variable exists 
   

  

  useEffect(()=>{
    let passw=""
    let curr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(isnumallow){
      curr+="123456789"
    }
    if(ischarallow){
      curr+="@#$%^&*()"
    }

   for(let i=0 ; i<lenght ; i++){
     const index = Math.floor(Math.random()*  curr.length +1)
     passw+=curr.charAt(index)
   }

  setpass(passw)

  } , [lenght , ischarallow , isnumallow])

  const copytoclipboard=()=>{
    window.navigator.clipboard.writeText(pass);
  }


  return (
    <div className="parent">
      <div className="child1">
        <h1>Password-Generator</h1>
        <div className="child2">
          <input type="text" 
          value={pass} 
          placeholder="Password" 
          style={{width : "200px" , height : "20px"}}
          readOnly />
          <button className="child22" onClick={copytoclipboard}>copy</button>
        </div>
        <div className="child3">
      
          <div className="child31">
          <input
            type="range"
            min={8}
            max={100}
            value={lenght}
            onChange={changelenght}
          />
          <label>lenght: {lenght}</label>
          </div>
       

          <div className="child31">
          <input
            type="checkbox"
            defaultChecked={isnumallow}
            onChange={() => {
              setisnumallow((pre) => !pre);
            }}
          />
          <label>Number</label>
          </div>
      

          <div className="child31"> 
          <input
            type="checkbox"
            defaultChecked={ischarallow}
            onChange={() => {
              setischarallow((pre) => !pre);
            }}
          />
          <label>character</label>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
