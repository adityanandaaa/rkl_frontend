import React from 'react'
import {Flex, Wrapper} from './styles'
import Logo from './Media/Logo2.png'
import CopyrightIcon from './Media/Copyright-White.png'
import FacebookIcon from './Media/Facebook-White.png'
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return(
        <Wrapper>
            <Flex direction="row">
                <img src={Logo} className="logo" alt="RKL_logo" />
            </Flex>
            <Flex direction="row" justify="flex-start" alignItems="flex-start" className="wrap">
                <Flex direction="column" justify="center">
                    <p className="description">RKL is a Food and Beverage company incepted in 2010 with a commitment to make great experience to denizens of Jakarta</p>
                    <a href="mailto:info@rklokal.com" className="email">info@rklokal.com</a>
                </Flex>
                <Flex direction="column" justify="flex-start" alignItems="flex-start" className="menu-wrap">
                    <Flex direction="row" justify="flex-start" className="menu">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </Flex>
                    <Flex direction="row" justify="flex-start" className="menu">
                        <a href="/brands/1">Brand</a>
                        <a href="/">Gallery</a>
                    </Flex>
                     <Flex direction="row" justify="flex-start" className="menu">
                        <a href="/career">Career</a>
                        <a href="https://www.instagram.com/caferuci/">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="https://www.instagram.com/caferuci/">
                            <img src={FacebookIcon} alt="facebook_icon" style={{marginLeft: '1em'}} />
                        </a>
                    </Flex>
                </Flex>
            </Flex>
            <div className="footer-line"></div>
            <Flex direction="row" justify="flex-start" className="copy-icon" style={{marginTop: '30px'}}>
                <img src={CopyrightIcon} alt="copyright_icon" style={{width: '17px', height: '17px', marginTop: '4px'}} />
                <p>2021 RKL Group</p>
            </Flex>
        </Wrapper>
    )
}

export default Footer