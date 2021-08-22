import React, {useState} from 'react'
import axios from 'axios'
import {Flex, Wrapper, Header, Contact} from './styles'
import { LinearProgress } from '@material-ui/core'
import {Button} from 'react-bootstrap'
import Navbar from '../../Components/Navbar2'
import Footer from '../../Components/Footer'
import emailIcon from './Media/Email-Black.png'
import phoneIcon from './Media/Phone-Black.png'
import instagramIcon from './Media/Instagram-Black.png'
import facebookIcon from './Media/Facebook-Black.png'
import { baseUrl } from '../../utils'


const About = () => {
    const [setting, setSetting] = useState([{
        status: 0,
        text: ''
    }])
    const fetchSetting = (text) => {
        axios.get(`${baseUrl}/setting?name=${text}`)
        .then((res) => {
            const setting = res.data
            console.log(setting)
            setSetting({
                status: res.status,
                text: setting.substring(3, setting.length - 4)
            })
        })
        return setting.text
    }
    return(
        <div>
        <Wrapper>
            <div style={{backgroundColor: 'black'}}>
                <Header>
                    <Navbar />
                    <Flex direction="row" justify="center" alignItems="center">
                        <h1>ABOUT</h1>    
                    </Flex>
                </Header>
            </div>
            
            <Flex direction="column" justify="center" alignItems="center">
                {/* <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dolor elit faucibus non quis elit ipsum. Habitasse.</p> */}
                {setting.status == 200 ?
                    <p className="description">{fetchSetting('about_text')}</p>
                    :
                    <LinearProgress style={{width: '80%', marginTop: '2em'}} />
                }
                <Button variant="dark" className="download">Download Company Profile</Button>
            </Flex>
            <Flex direction="row" justify="center" className="vision">
                <h1>Vision</h1>
                <p>{fetchSetting('visi_text')}</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dolor elit faucibus non quis elit ipsum. Habitasse.</p> */}
            </Flex>
            <Flex direction="row" justify="center">
                <div className="moto-line" />
            </Flex>
            <Flex direction="row" justify="center" className="mission">
                {/* <ul>
                    <li>To retain outlets in big cities and tourism hotspots in Indonesia</li>
                    <li>Create strong brand awareness that suites to the target market</li>
                    <li>Build prospective partnership with various business upholding tourism sector</li>
                    <li>Build prospective partnership with various lifestyle brand</li>
                    <li>Implementing good corporate governance</li>
                </ul> */}
                <p>{fetchSetting('misi_text')}</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dolor elit faucibus non quis elit ipsum. Habitasse.</p> */}
                <h1>Mission</h1>
            </Flex>
            <Contact>
                <Flex direction="row" justify="center" className="lala">
                    <Flex direction="column" alignItems="flex-start" className="yeye">
                        <h1>Our Contact <span>Details</span></h1>
                    </Flex>
                    <Flex direction="column" justify="center" alignItems="center" className="contact-wrap">
                        <Flex direction="row">
                            <img src={emailIcon} alt="email_icon" />
                            <p>info@rklokal.com</p>
                        </Flex>
                        <Flex direction="row">
                            <img src={phoneIcon} alt="phone_icon" />
                            <p>+62 821 6652 6245</p>
                        </Flex>
                        <Flex direction="row">
                            <a href="www.instagram.com">
                                <img src={instagramIcon} alt="instagram_icon" />
                            </a>
                            <a href="www.facebook.com">
                                <img src={facebookIcon} alt="facebook_icon" style={{marginLeft: '2em'}} />
                            </a>
                        </Flex>
                    </Flex>
                </Flex>
            </Contact>
        </Wrapper>

        <Footer />
        </div>
    )
}

export default About