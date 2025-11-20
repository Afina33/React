import "./styles.css"

function Input({id="idEmail", name = "Email", type = "email", placeholder = "Enter your email", label = "Email"}) {
    return(
        <div className="input_form">
            <label htmlFor={id}>{label}</label>
            <input id={id}
            name={name} 
            className="input" 
            type= {type} 
            placeholder= {placeholder} />
        </div>
    );
}
export default Input;