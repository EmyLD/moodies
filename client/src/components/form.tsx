import { FormEvent, useRef } from "react"

const Form = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const loginData = { username: '', password: '' };
    const error = document.getElementById('error-form');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (usernameRef.current !== null && passwordRef.current !== null) {
            if (usernameRef.current.value !== '' || passwordRef.current.value !== '') {
                loginData.username = usernameRef.current.value;
                loginData.password = passwordRef.current.value;
                console.log(loginData);

            } else {
                error.innerText = 'Error: username or password is null';
            }

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username :</label>
            <input id="username" ref={usernameRef} type="text" autoComplete="username" />
            <label htmlFor="password">Password :</label>
            <input id="password" ref={passwordRef} type="password" autoComplete="current-password" />
            <button type="submit">Submit</button>
            <div id="error-form"></div>
        </form>
    )

}

export default Form;