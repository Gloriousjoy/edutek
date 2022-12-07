import React, {useState} from "react";

function LogInForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: json.stringify({username, password}),
        }) .then((r) => {
            if (r.ok) {
                r.json() .then ((user) => onLogin(user));
            }
            else {
            r.json().then ((err) => setErrors(err.errors));
        }
    });
    }
return (
    <form onSubmit={handleSubmit}>
<FormField>
    <label htmlFor="username">username</label>
    <input 
    type="text"
    id= "username"
    value="{username}"
    autoComplete="off"
    onChange={(e) => setUsername(e.target.value)} ></input>
</FormField>
<FormField>
    <label htmlFor= "password">Password</label>
    <input
    type = "password"
    id = "password"
    autoComplete= "current-password"
    value = {password}
    onChange={(e) => setPassword(e.target.value)}>
    </input>
</FormField>
<FormField>
    {errors.map((err) => (
        <Error key= {err}>{err}</Error>
   ))}; 
</FormField>
    </form>
    );
}
export default LogInForm;