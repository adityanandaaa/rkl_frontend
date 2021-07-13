import React, { Fragment } from "react";
import axios from "axios";
import Logo from "./Media/Logo2.png";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from './Media/facebook-icon.png'
import { Wrapper, Header, Flex } from "./styles";
import { useHistory, Link } from "react-router-dom"
// import { headers, baseUrl } from "../../config";

const Navbar2 = () => {
  const token = localStorage.getItem("token");
  const history = useHistory()

  const handleLogout = () => {
    // axios.get(`${baseUrl}/logout`, headers()).then((res) => {

    //   localStorage.removeItem("token");
    //   history.push("/")
    // });
    alert('logout button pressed')
  };

  const checkAuth = () => {
    if (token === null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fragment>
            <Wrapper>
                <nav>
                    <a href="/">
                        <img src={Logo} class="logo" />
                    </a>
                    <input type="checkbox" id="click" />
                    <label for="click" class="menu-btn">
                        <i>
                            <MenuIcon fontSize="large" style={{color: 'white'}} />   
                        </i>
                    </label>
                    <ul>
                        <Flex direction="row" justify="flex-end">
                            <label for="click" class="menu-btn" style={{padding: '20px'}}>
                                <i>
                                    <CloseIcon fontSize="large" style={{color: 'white'}} />
                                </i>
                            </label>
                        </Flex>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/brands/1">BRANDS</a></li>
                        <li><a href="/career">CAREER</a></li>
                        <Flex direction="row" justify="center" className="socmed">
                            <InstagramIcon fontSize="large" style={{color: 'white'}} />
                            <img src={FacebookIcon} alt="facebook-icon" />
                        </Flex>
                    </ul>
                </nav>
            {/* <div class="content">
                <div>
                    Responsive Navigation Menu Bar Design
                </div>
                <div>
                    using only HTML & CSS
                </div>
            </div> */}
            </Wrapper>
      
    </Fragment>
  );
};

export default Navbar2;
