import Button from "../../components/Button/Button";
import { animal, getPlanteaterStatus } from "./data";
import "./styles.css";

function Lesson_02() {
  console.log(animal);
  console.log(animal.fullName);

  return (
    <div className="lesson_02_wrapper">
      <div className="animal_card">
        <p className="card_title">Animal Card: {animal.type}</p>
        <img src={animal.avatarURL} alt="animal avatar" className="avatar" />
        <p className="card_info">Name: {animal.fullName}</p>
        <p className="card_info">Age: {animal.age}</p>
        <p className="card_info">Color: {animal.color}</p>
        <p className="card_info">
          Is PlantEater: {getPlanteaterStatus(animal.isPlanteater)}
        </p>
        {/* <p className="card_info">Is PlantEater: {animal.isPlanteater ? "Yes" : "No"}</p> */}
        <Button />
      </div>
    </div>
  );
}

export default Lesson_02;
