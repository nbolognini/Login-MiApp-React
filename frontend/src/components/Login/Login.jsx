const Login = () => {
    return(
            <div>
                <h1>Login</h1>
                <form>

                    <label  className="custom-label"  >Usuario</label> 
                    <input  className="custom-input"  type="text" placeholder="Usuario:" />

                    <label  className="custom-label"  >Contraseña</label>
                    <input  className="custom-input"  type="password" placeholder="Contraseña:" />

                    <button className="custom-button" >Login</button>
                </form>
            </div>
            );
    }

    export default Login;