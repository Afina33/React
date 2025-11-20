import "./styles.css"
import { useState } from "react";
import Button from "../Button/Button";

function Feedback() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

  const like = () => {
    setCount1((prevValue) => {
      return prevValue + 1;
    });
  };
  const dislike = () => {
    setCount2((prevValue) => {
      return prevValue + 1;
    });
  };

  const resetResults = () => {
   setCount1((prevValue) =>{
    return prevValue = 0;
   });
   setCount2((prevValue) =>{
    return prevValue = 0;
   });
  };

  return(
     <div className="homework_04_wraper">
      <div className="button_control_homework_04">
        <Button className="button_homework_04" name="Like" onClick={like}/>
        <p className="count">{count1}</p>
        <Button name="Dislike" onClick={dislike} />
        <p className="count">{count2}</p>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}
export default Feedback;