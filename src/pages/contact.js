import "./contact.scss";
import headerimg from "../img/header.jpg";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";

const Contact = () => {
  return (
    <>
      <div className="about-body">
        <div className="container_heading">
          <img src={headerimg} alt="" />
        </div>

        <section className="about">
          <div className="about__split">
            <div>
              <h1>This is Gifted.</h1>
              <span>Load It. Gift It. Get it.</span>
            </div>
            <div className="about__split__center">
              <p>
                GiftCards.com™, the highest-ranking and most-trafficked gift
                card website on the Internet, is your one-stop shop for gift
                cards online.
              </p>
            </div>
          </div>
        </section>

        <section className="info">
          <div className="info__heading">
            <h1>Contact</h1>
            <p>Customer service all the time.</p>
          </div>
          <div className="info__container">
            <form action="/">
              <div className="form__container">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form__container">
                <input type="text" placeholder="Email" />
              </div>
              <div className="form__container">
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="form__container__button">
                <button className="form__container__button__center">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="extra">
          <div className="extra__text">
            <h2>Psst... Follow us on social media</h2>
          </div>
          <div className="extra__img">
            <div className="extra__img__item">
              <a href="/">
                <img src={facebook} alt="" />
              </a>
            </div>
            <div className="extra__img__item">
              <a href="/">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="extra__img__item">
              <a href="/">
                {" "}
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
