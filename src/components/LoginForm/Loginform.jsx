import Button from "../Button_Homework03/Button";
import Input from "../Input/Input";
import "./styles.css"

function  LoginForm(){
    return(
        <form  className="form">
            <p className="formLogin">Login form</p>
            <Input/>
            <Input label="Password" placeholder="Enter your password" type="password" name="password"/>
            <Button/>
        </form>
    );
}
export default LoginForm;