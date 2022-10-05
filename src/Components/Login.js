import { UseLogin } from "../Hooks/UseLogin";

function Login() {
    const { handlerLogin, hanlderInput, formState } = UseLogin();

    return (
        <form onSubmit={handlerLogin}>
            <h1>Login</h1>
            <label>Ingrese su mail:</label>
            <input name="mail" type='mail' value={formState.mail} onChange={hanlderInput} />

            <label>Ingrese su password</label>
            <input name="pass" type='password' value={formState.pass} onChange={hanlderInput} />
            <button type="submite" >Logearse</button>
        </form>
    )
}

export default Login;