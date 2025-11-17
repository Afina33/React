import "./styles.css";

function Button({ name = "Login", type = "submit" }) {
    return <button type={type} className="button">{name}</button>
    
}

export default Button;