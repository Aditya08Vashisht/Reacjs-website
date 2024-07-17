import "./style.css";
import logo from "../assets/pngwing.com-2 1.svg";
import frame from "../assets/Frame 40594.png";
import about from "../assets/first blue section.svg";
import one from "../assets/boxpic1.jpeg";
import two from "../assets/boxpic2.jpeg";
import three from "../assets/boxpic3.jpeg";
import four from "../assets/boxpic4.jpeg";
import five from "../assets/boxpic5.jpeg";
import six from "../assets/boxpic6.jpeg";
import facebook from "../assets/facebook.svg";
import Linkedin from "../assets/Linkedin.svg";
import X from "../assets/X.svg";
import instagram from "../assets/instagram 1.svg";

const MainPage = () => {
  return (
    <>
      <div className="firstsection">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {/*
  <ul class="navbar">
    <li>
<a href="#" class="aboutt"><button>About</button></a>
    </li>
    <li>
<a href="#" class="service"><button>Services</button></a>
    </li>
    <li>
<a href="#" class="team"><button>Team</button></a>
    </li>
    <li>
<a href="#" class="btncontact"><button>Contact</button></a>
    </li>
    <li>
<a href="#" class="btnlog"><button>Log Out</button></a>
    </li>
  </ul>
*/}
        </div>
      </div>
      <div className="hero">
        <div className="para">
          <h1>SHISHIR &amp; Co.</h1>
          <h2>CHARTERED ACCOUNTANTS</h2>
          <p>
            "Trusted advisors helping you navigate the complexities of finance"
          </p>
          <button className="btn">Contact Now</button>
        </div>
        <div>
          <img src={frame} alt="shislogo" className="nxttoshishir" />
        </div>
      </div>
      <img src={about} alt="logo" className="about" />
      <h1 className="sec-3">Our Serivice</h1>
      <div className="text-box">
        <div className="box">
          <div className="box-header">Diract Taxation</div>
          <div className="box-content">
            Mininmize tax stress and maximize your savings. our CAs handles
            personal and corporate income taxes, ensuring coplinces while
            legally reducing your tax burden.
            <div className="conbutton">
              <li>
                <a href="#" className="plscon">
                  Contact!
                </a>
              </li>{" "}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-header">Business Advisory</div>
          <div className="box-content">
            Grow your business with expert guidance. Our CAs provide strategic
            advice on finances, operation and growth. Make informed decisions
            &amp; achieve your goals
            <div className="conbutton">
              <li>
                <a href="#" className="plscon">
                  Contact!
                </a>
              </li>{" "}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-header">GST filling</div>
          <div className="box-content">
            Stremline your GST filling with our expert CAs. Our CAs handle
            everything from returns to record keeping, with accuracy and
            minimizing penalties.
            <div className="conbutton">
              <li>
                <a href="#" className="plscon">
                  Contact!
                </a>
              </li>{" "}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-header">Corporate Advisory</div>
          <div className="box-content">
            Navigate complex corporate matters with confidence. Our CAs offer
            comprehensive advisory services for mergers, acquisitions,
            structuring and legal compliance.
            <div className="conbutton">
              <li>
                <a href="#" className="plscon">
                  Contact!
                </a>
              </li>{" "}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-header">Consulting</div>
          <div className="box-content">
            Unlock your business potential with our expert CA consulting. We
            offer tailored solutions for financial strategies, risk management
            and operational efficiency.
            <div className="conbutton">
              <li>
                <a href="#" className="plscon">
                  Contact!
                </a>
              </li>{" "}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-header">Audit &amp; Assurance</div>
          <div className="box-content">
            Gain trust and transperancy with our CA-led auddit and assurance. We
            provide independent varification of your financial health, boosting
            investor confidence and mitigating risks.
            <div className="conbutton">
              <li>
                <a href="#" className="plscon">
                  Contact!
                </a>
              </li>{" "}
            </div>
          </div>
        </div>
      </div>
      <h1 className="sec-3">Meet our Team</h1>
      <div className="grid-container">
        <div className="image-box">
          <img src={one} alt="Person Image" />
          <div className="info-overlay">
            <h3>Name: John Doe</h3>
            <p>Gender: Male</p>
          </div>
        </div>
        <div className="image-box">
          <img src={five} alt="Person Image" />
          <div className="info-overlay">
            <h3>Name: Lana ray</h3>
            <p>Gender: Female</p>
          </div>
        </div>
        <div className="image-box">
          <img src={three} alt="Person Image" />
          <div className="info-overlay">
            <h3>Name: Sam Smith</h3>
            <p>Gender: male</p>
          </div>
        </div>
        <div className="image-box">
          <img src={four} alt="Person Image" />
          <div className="info-overlay">
            <h3>Name: Alice Johnson</h3>
            <p>Gender: female</p>
          </div>
        </div>
        <div className="image-box">
          <img src={two} alt="Person Image" />
          <div className="info-overlay">
            <h3>Name: Bob Brown</h3>
            <p>Gender: Male</p>
          </div>
        </div>
        <div className="image-box">
          <img src={six} alt="Person Image" />
          <div className="info-overlay">
            <h3>Name: Casey Green</h3>
            <p>Gender: female</p>
          </div>
        </div>
      </div>
      <div className="onlybox">
        <div className="accline">
          Chartered accountants committed to your financial growth and
          prosperity
        </div>
        <a href="#" className="boxcontact">
          <button className="contact-button">Contact now!</button>
        </a>
      </div>
      <div className="lastsection">
        <div className="lestsentences">
          <h1>SHISHIR &amp; Co.</h1>
          <h2>CHARTERED ACCOUNTANTS</h2>
        </div>
        <div className="social-icons">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="#">
            <img src={X} />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </>
  );
};
export default MainPage;
