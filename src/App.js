import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { imagedata } from "./constant/data";

function App() {
  const [curr, setCurr] = useState(0);

  const handlePrev = () => {
    curr === 0 ? setCurr(imagedata.length - 1) : setCurr(curr - 1);
  };

  const handleNext = () => {
    curr === imagedata.length - 1 ? setCurr(0) : setCurr(curr + 1);
  };

  const handleClick = (index) => {
    
      setCurr(index)
    
  }
  return (
    <>
      <div className="App">
        <div className="body">
          <div className="prev" onClick={handlePrev}>
            <i className="fa-solid fa-backward back"></i>
          </div>
          <div className="main-body">
            {imagedata.slice(curr, curr + 1).map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </div>
          <div className="next" onClick={handleNext}>
            <i className="fa-solid fa-forward front"></i>
          </div>
          
        </div>
        <div className="footer">
            {imagedata.map((_, index) => {
              return <span className={index===curr ? "fill-buble" :" empty_buble"} key={index} onClick={()=> handleClick(index)}></span>;
            })}
          </div>
      </div>
    </>
  );
}

export default App;
