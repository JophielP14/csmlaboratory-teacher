import CSMLogo from "../assets/Logo_dako.png"
import { Link } from 'react-router-dom';



function LoginTeacher(){

return(
    <div className="teacherContainer">
        <div className="logoDako">
            <img src={CSMLogo} className="CSMLogo"/>
        </div>

        <div className="UserPass">
            <div className="formContainer">
                <input className="InputField" placeholder="Username"></input>
            </div>

            <div className="formContainer">
                <input className="InputField" placeholder="Password"></input>
            </div>
        </div>
        
        <Link to="/Dashboard" className="loginButton">
            Login
        </Link>

        <div className="forgotPassword">
            Forgot Password?
        </div>
    </div>
);
}
export default LoginTeacher;