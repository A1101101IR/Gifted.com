import { Link } from "react-router-dom";
import "./Login.scss";

const Signup = () => {
  return (
    // Plain html, nothing functional
    <section className="section-login">
      <div className="container">
        <div className="split">
          <div className="login-logo">
            <span>Gifted.</span>
          </div>
          <div className="card">
            <div className="card-text">
              <span>Create account</span>
              <p>
                Already have an account?
                {/* link to login page */}
                <Link to="/pages/login" className="link">
                  Sign in
                </Link>
              </p>
            </div>
            <div className="inputs">
              <input type="text" placeholder="Username" required />
              <input type="text" placeholder="E-mail" required />
              <input type="text" placeholder="Password" required />
              <input type="text" placeholder="Repeat password" required />
            </div>
            <div className="button-container">
              <button>Sign up</button>
            </div>
            <div className="bottom">
              <input type="checkbox" className="check" />
              <span>
                I have read and agree to the {/* Link to login */}
                <Link to="/pages/login" className="link">
                  Terms of Service
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
