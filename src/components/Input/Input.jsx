import "./styles.css"

function Input({name = "Email", type = "email", placeholder = "Enter your email", label = "Email"}) {
    return(
        <div className="input_form">
            <label htmlFor={name}>{label}</label>
            <input name={name} className="input" type= {type} placeholder= {placeholder} />
        </div>
    );
}
export default Input;