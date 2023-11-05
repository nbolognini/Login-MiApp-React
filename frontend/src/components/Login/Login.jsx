import {useState} from "react";


const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    

    //Funcion que indica que hace el boton
    const handleLogin = (e) => {
        e.preventDefault();
        console.log({
            usuario: usuario,
            password: password,
        });
    }


    return(
            <div>
                <h1>Login</h1>
                <form>

                    <label >Usuario</label> 
                    <input onChange={ (event) => {setUsuario(event.target.value)}}  type="text" placeholder="Usuario:"  />

                    <label >Contraseña</label>
                    <input onChange={ (event) => {setPassword(event.target.value)}} type="password" placeholder="Password:" />

                    <button onClick= { handleLogin } >Login</button>
                </form>
            </div>
            );
    }

    export default Login;