import footerContact from "../../api/FooterApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="footer-section">
       <div className="container grid grid-three-cols">
        {
          footerContact.map((currentData, index)=>{
           const {icon, title, details} = currentData;
           return(
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
           )
          })
        }
       </div>

        <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved
                <NavLink to="https://svikram.netlify.app" target="_blank">
                  Vikram Singh
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/vksingh15/"
                    target="_blank"
                  >
                    LinkedIn
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/VikramSingh39/World-Atlas"
                    target="_blank"
                  >
                    GitHub Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer