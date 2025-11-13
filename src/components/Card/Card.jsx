import { user } from "./data_user";
import "./styles.css";

function Card() {
  return (
    <div className="card_wrapper">
      <img src={user.avatar_url} alt="avatar" className="user_avatar" />

      <div className="card_info">
        name: <p className="text">{user.name_user}</p>
      </div>
      <div className="card_info">
        surname: <p className="text">{user.surname}</p>
      </div>
      <div className="card_info">
        type of activity:  <p className="text">{user.type_of_activity}</p>
      </div>
      <div className="card_info">
        hobby: <p className="text">{user.hobby}</p>
      </div>
    </div>
  );
}

export default Card;
