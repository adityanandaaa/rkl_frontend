import React from 'react'
import {Flex, Wrapper} from './styles'
import Logo from './Media/Logo2.png'
import CopyrightIcon from './Media/Copyright-White.png'
import FacebookIcon from './Media/Facebook-White.png'
import InstagramIcon from './Media/Instagram-White.png'

const Footer = () => {
    return(
        <Wrapper>
            <Flex direction="row">
                <img src={Logo} className="logo" />
            </Flex>
            <Flex direction="row" justify="flex-start" alignItems="flex-start" className="wrap">
                <Flex direction="column" justify="center">
                    <p className="description">RKL is a Food and Beverage company incepted in 2010 with a commitment to make great experience to denizens of Jakarta</p>
                    <p className="email">info@rklokal.com</p>
                    
                </Flex>
                <Flex direction="column" justify="flex-start" alignItems="flex-start" className="menu-wrap">
                    <Flex direction="row" justify="space-between" className="menu">
                        <a href="/">Home</a>
                        <a href="/">About</a>
                    </Flex>
                    <Flex direction="row" justify="space-between" className="menu">
                        <a href="/">Brand</a>
                        <a href="/">Gallery</a>
                    </Flex>
                     <Flex direction="row" justify="space-between" className="menu">
                        <a href="/">Career</a>
                        <Flex direction="row" justify="flex-end" className="menu">
                            <a href="/">
                                <img src={InstagramIcon} />
                            </a>
                            <a href="/">
                                <img src={FacebookIcon} style={{marginLeft: '1em'}} />
                            </a>
                        </Flex>
                    </Flex>
                   
                </Flex>
            </Flex>
            <div className="footer-line"></div>
            <Flex direction="row" justify="flex-start" className="copy-icon">
                <img src={CopyrightIcon} style={{width: '17px', height: '17px', marginTop: '4px'}} />
                <p>2021 RKL Group</p>
            </Flex>
        </Wrapper>
    )
}

export default Footer