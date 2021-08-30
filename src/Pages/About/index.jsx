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
import { useEffect } from 'react'


const About = () => {
    const [setting, setSetting] = useState({
        status: 0,
        about_text: '',
        vision_text: '',
        mission_text: '',
        phone_number: '',
        contact: ''
    })

    const removeTags = (str) => {
        if ((str===null) || (str===''))
        return false;
        else
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    const fetchSetting = () => {
        Promise.all([
            axios.get(`${baseUrl}/setting?name=about_text`),
            axios.get(`${baseUrl}/setting?name=visi_text`),
            axios.get(`${baseUrl}/setting?name=misi_text`),
            axios.get(`${baseUrl}/setting?name=contact`),
        ]).then(([about, vision, mission, contact]) => {
            setSetting({
                status: about.status,
                about_text: removeTags(about.data),
                vision_text: removeTags(vision.data),
                mission_text: removeTags(mission.data),
                contact: removeTags(contact.data)
            })
        })
    }
    useEffect(() => {
        fetchSetting()
    }, [])
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
                {setting.status === 200 ?
                    <p className="description">{setting.about_text}</p>
                    :
                    <LinearProgress style={{width: '80%', marginTop: '2em'}} />
                }
                <Button variant="dark" className="download">Download Company Profile</Button>
            </Flex>
            <Flex direction="row" justify="center" className="vision">
                <h1>Vision</h1>
                <p>{setting.vision_text}</p>
            </Flex>
            <Flex direction="row" justify="center">
                <div className="moto-line" />
            </Flex>
            <Flex direction="row" justify="center" className="mission">
                <p>{setting.mission_text}</p>
                <h1>Mission</h1>
            </Flex>
            <Contact>
                <Flex direction="row" justify="center" className="wrapper">
                    <Flex direction="column" alignItems="flex-start" className="title">
                        <h1>Our Contact <span>Details</span></h1>
                    </Flex>
                    <Flex direction="column" justify="center" alignItems="center" className="contact-wrap">
                        <Flex direction="row">
                            <img src={emailIcon} alt="email_icon" />
                            <p>info@rklokal.com</p>
                        </Flex>
                        <Flex direction="row">
                            <img src={phoneIcon} alt="phone_icon" />
                            <p>{setting.contact}</p>
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