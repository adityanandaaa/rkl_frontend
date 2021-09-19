import React, {useEffect, useState} from 'react'
import {Flex, Wrapper} from './styles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from './Media/Logo2.png'
import CopyrightIcon from './Media/Copyright-White.png'
import FacebookIcon from './Media/Facebook-White.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import { baseUrl } from '../../utils'
// import {Link} from 'react-scroll'

const Footer = () => {
    const [setting, setSetting] = useState('')
    const [list, setList] = useState([])
    const fetchSetting = (text) => {
        axios.get(`${baseUrl}/setting?name=footer_text`)
        .then((res) => {
            const setting = res.data
            setSetting(setting.substring(3, setting.length - 4))
        }, [])
        return setting
    }
    // const getLocal = () => {
    //     if(localStorage.getItem('isSroll') === null){
    //         localStorage.setItem('isScroll', JSON.stringify([]))
    //     }
    //     let scrollLocal = JSON.parse(localStorage.getItem('isScroll'))
    //     setList(scrollLocal)
    // }
    const handleScroll = () => {
        // const value = {
        //     brands: false,
        //     gallery: false
        // }
        // localStorage.setItem('isScroll', JSON.stringify(value))
        // window.location.href = '/'
        localStorage.setItem('galScroll', false)
        localStorage.setItem('brandScroll', false)
    }
    // const handleBrands = () => {
    //     localStorage.setItem('brandScroll', true)
    //     window.location.href = '/'
    // }
    // const handleGallery = () => {
    //     localStorage.setItem('galScroll', true)
    //     window.location.href = '/'
    // }
    const handleBrands = () => {
        document.getElementById('brands').scrollIntoView({
            behavior: 'smooth'
        })
    }
    const handleGallery = () => {
        document.getElementById('gallery').scrollIntoView({
            behavior: 'smooth'
        })
    }
    const checkUrl = () => {
        let url = window.location.href.split('/')
        if(url[3] == ""){
            console.log(true)
            return true
        }
        console.log(false)
        return false
    }


    useEffect(() => {
        fetchSetting()
        console.log()
        checkUrl()
        console.log(document.getElementById('brands'))
    }, [])

    return(
        <Wrapper>
            <Flex direction="row">
                <img src={Logo} className="logo" alt="RKL_logo" />
            </Flex>
            <Flex direction="row" justify="flex-start" alignItems="flex-start" className="wrap">
                <Flex direction="column" justify="center">
                    <p className="description">{setting}</p>
                    <a href="mailto:info@rklokal.com" className="email">info@rklokal.com</a>
                </Flex>
                <Flex direction="column" justify="flex-start" alignItems="flex-start" className="menu-wrap">
                    <Flex direction="row" justify="flex-start" className="menu">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </Flex>
                    <Flex direction="row" justify="flex-start" className="menu">
                        {checkUrl() ? 
                            <>
                                {/* <Link to="brands" smooth={true} duration={700}>Brand</Link>
                                <Link to="gallery" smooth={true} duration={500}>Gallery</Link> */}
                                <Link onClick={handleBrands}>Brand</Link>
                                <Link onClick={handleGallery}>Gallery</Link>
                            </>
                            :
                            <>
                                {/* <a onClick={handleBrands}>Brands</a>
                                <a onClick={handleGallery}>Gallery</a> */}
                                <Link to={{ pathname: '/', state: { brands: true }}}>
                                    Brand
                                </Link>
                                <Link to={{ pathname: '/', state: { gallery: true }}}>
                                    Gallery
                                </Link>
                                
                            </>
                        }
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