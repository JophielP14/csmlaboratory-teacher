import CSMLogo from "../assets/Logo_dako.png"


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
        
        <div className="loginButton">
            Login
        </div>

        <div className="forgotPassword">
            Forgot Password?
        </div>
    </div>
    );
}
export default LoginTeacher;