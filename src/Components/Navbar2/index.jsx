import React, { Fragment, useState } from "react";
import Logo from "./Media/Logo2.png";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from './Media/facebook-icon.png'
import { Wrapper, Flex } from "./styles";
import axios from "axios";
import { baseUrl } from "../../utils";
import { useEffect } from "react";
// import { useHistory, Link } from "react-router-dom"

const Navbar2 = () => {
    const [items, setItems] = useState([])
    const fetchBrandName = () => {
        axios.get(`${baseUrl}/brand`)
        .then((res) => {
            const items = res.data
            setItems(items)
        })

    }
    useEffect(() => {
        fetchBrandName()
    },[])
    return (
        <Fragment>
                <Wrapper>
                    <nav>
                        <a href="/">
                            <img src={Logo} alt="RKL_logo" class="logo" />
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
                            <li><a href="/" className="home">HOME</a></li>
                            <li><a href="/about">ABOUT</a></li>
                            {/* <li><a href="/brands/1">BRANDS</a></li> */}
                            <li className="dropdown">
                                <a className="dropbtn" href="#/">BRANDS</a>
                                <div class="dropdown-content">
                                    {items.map((items) => (
                                        <a href={`/brands/${items.name}`}>{items.name}</a>
                                    ))}
                                    {/* <a href="/brands/1">Café Ruci</a>
                                    <a href="/brands/3">Ruci's Joint</a>
                                    <a href="/brands/2">Warget</a>
                                    <a href="/brands/4">123</a>
                                    <a href="/brands/5">Rara</a> */}
                                </div>
                            </li>
                            <li><a href="/career">CAREER</a></li>
                            <Flex direction="row" justify="flex-start" className="socmed">
                                <InstagramIcon fontSize="large" style={{color: 'white'}} />
                                <img src={FacebookIcon} alt="facebook-icon" />
                            </Flex>
                        </ul>
                    </nav>
                </Wrapper>
        </Fragment>
  );
};

export default Navbar2;
