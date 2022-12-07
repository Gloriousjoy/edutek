import  React, { useState } from "react";
import LogInForm from "../components/LogInForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true)
    
    return(
        <Wrapper>
        <LogInForm onLogin={onLogin} /> 
        <Divider />
        <Button color= "secondary" onClick={() => setShowLogin(true)}>
            Log In
        </Button>
        </Wrapper>
    );
}
export default Login;

// const Wrapper = styled.section
// max-width: 450px;
// padding: 20px;
// margin: 30px auto;
// ;
// const Divider = styled.hr
//  border: none;
//  border-bottom: 2px solid #ccc;
//  margin: 16px 0;
//  ;