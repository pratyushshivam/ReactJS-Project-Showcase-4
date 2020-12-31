import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <a href='https://github.com/pratyushshivam?tab=repositories' exact>
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
              <li className='nav-info-label'>Phone</li>
              <li>
                  <a href='tel:+917766077785'>
                    +917766077785
                  </a>
                </li>


                <li className='nav-info-label'>Email</li>
                <li>
                  <a href='mailto:pratyushshivam7@gmail.com'>
                   pratyushshivam7@gmail.com
                  </a>
                </li>
                <li>
                <a href='https://github.com/pratyushshivam?tab=repositories'>
                    Github
                  </a>
                </li>

              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Education</li>
                <li>B.Tech</li>
                <li>KIIT UNIVERSITY</li>
                <li>Bhubaneswar, India</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
