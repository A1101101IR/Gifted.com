import "./Login.scss"
import { Link  } from "react-router-dom";



const Login = () => {



  return (
    // just plain html code. The login is  not functional
    <section className="section-login">
      <div className="container">
        <form className="split">
          <div className="logo">
            <span>Gifted.</span>
          </div>
          <div className="card" style={{height: "27rem"}} > 
            <div className="card-text">
              <span>Login</span>
              {/* Link to signup page */}
              <p>Don't have an account yet?<Link to="/pages/singup" className="link">Sign up</Link></p> 
            </div>
            <div className="inputs">
              <input type="text" name="username"placeholder="Username"  required/>
              <input type="password" name="password" placeholder="Password" required/>
            </div>
            <div className="button-container">
              <button>Sign in</button>
            </div>
            <div className="bottom">
              <input type="checkbox" className="check" />
              {/* link to signup page */}
           <span>I have read and agree to the <Link to="/pages/singup"className="link">Terms of Service</Link></span>
          </div>
          </div>
        </form>
      </div>
    </section>
   
  );
};

export default Login;
