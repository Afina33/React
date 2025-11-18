import "./styles.css";

function Button({ name = "Login", type = "button" }) {
    return <button type={type} className="button">{name}</button>
    
}

export default Button;