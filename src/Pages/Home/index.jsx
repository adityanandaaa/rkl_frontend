import React, {useState, useEffect} from 'react'
import {Flex, Wrapper, Header, Events, Gallerys, Parts} from './styles'
import axios from 'axios'
// import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';
import Carousels from '../../Components/Carousel'
import Gallery from 'react-grid-gallery'
import {FormControl, Button} from 'react-bootstrap'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Brand1 from './Media/brands-1.png'
import Brand2 from './Media/brands-2.png'
import Brand3 from './Media/brands-3.png'
import Brand4 from './Media/brands-4.png'
import Brand5 from './Media/brands-5.png'
import Brand6 from './Media/brands-6.png'
import Brand7 from './Media/brands-7.png'
import Brand8 from './Media/brands-8.png'
import Brand9 from './Media/brands-9.png'
import Brand10 from './Media/brands-10.png'

import { baseUrl, fetchSetting } from '../../utils'


const Home = () => {
    const [setting, setSetting] = useState([])
    const [items, setItems] = useState([])
    const [event, setEvent] = useState([])
    const [hover, setHover] = useState({
        pic1: false,
        pic2: false,
        pic3: false,
        pic4: false,
        pic5: false
    })
    
    const IMAGES2 = items.map((items) => (
        {
            src: items.name_image_link,
            thumbnail: items.name_image_link,
            thumbnailWidth: 500,
            thumbnailHeight: 300,
        }
    ))

    const [value, setValue] = useState({
        email: ''
    })
    const handleChange = (event) => {
        const values = event.target.value
          setValue({
              ...value,
              [event.target.name]: values
          })
      }
    const handlePost = () => {
        if(value.email === ''){
            alert('You must insert the text first')
        }
        else{
            const {email} = {email: value.email}
            axios.post(`${baseUrl}/store-mailing-list`, email)
            .then((res) => {
                console.log(res)
            })
            console.log(email)
            alert('success')
            setValue({email: ''})
        }
    }
    const fetchSetting = (text) => {
        axios.get(`${baseUrl}/setting?name=${text}`)
        .then((res) => {
            const setting = res.data
            setSetting(setting)
        })
        return setting
    }
    const fetchEvent = () => {
        axios.get(`${baseUrl}/event-promo`)
        .then((res) => {
            const items = res.data
            console.log(items)
            setEvent(items)
        })
    }
    const getImages = () => {
        axios.get(`${baseUrl}/gallery`)
        .then((res) => {
            const items = res.data
            console.log(items)
            setItems(items)
        })  
    }
    const getText = () => {
        let text = 'lalala yeyeye'
        text = text.replace(/\s+/g, '-').toLowerCase()
        console.log(text)
    }

    useEffect(() => {
        fetchEvent()
        getImages()
        console.log(window.innerWidth)
        getText()
    }, [])
  

    return(
        <Wrapper>
            <Header>
                <Navbar />
                <Flex direction="row" justify="center" alignItems="center">
                    <p class="description">
                        {/* RKL is a Food and Beverage company incepted in 2010
                        with a commitment to make great experience to
                        denizens of Jakarta */}
                        {fetchSetting('homepage_text')}
                    </p>
                </Flex>
                <Flex direction="column" justify="center" className="brands">
                    <Flex direction="row" justify="space-around">
                        <a href="/brands/Cafe Ruci">
                            <img 
                                src={!hover.pic1 ? Brand1 : Brand6} 
                                onMouseOver={() => setHover({pic1: true})} 
                                onMouseOut={() => setHover({pic1: false})} 
                                alt="cafe_ruci_logo"
                            />
                        </a>
                        <a href="/brands/Ruci's Joint">
                            <img 
                                src={!hover.pic2 ? Brand2 : Brand7} 
                                onMouseOver={() => setHover({pic2: true})} 
                                onMouseOut={() => setHover({pic2: false})} 
                                alt="ruci's_joint_logo" 
                            />
                        </a>
                        <a href="/brands/Warget Bahagia">
                            <img 
                                src={!hover.pic3 ? Brand3 : Brand8} 
                                onMouseOver={() => setHover({pic3: true})} 
                                onMouseOut={() => setHover({pic3: false})} 
                                alt="warget_logo"
                            />
                        </a>
                    </Flex>
                    <Flex direction="row" justify="space-around" className="second">
                        <a href="/brands/Rara Ramen & Bar">
                            <img 
                                src={!hover.pic4 ? Brand4 : Brand9} 
                                onMouseOver={() => setHover({pic4: true})} 
                                onMouseOut={() => setHover({pic4: false})} 
                                alt="123_logo"
                            />
                        </a>
                        <a href="/brands/Rara Ramen & Bar">
                            <img 
                                src={!hover.pic5 ? Brand5 : Brand10} 
                                onMouseOver={() => setHover({pic5: true})} 
                                onMouseOut={() => setHover({pic5: false})} 
                                alt="rara_logo"
                            />
                        </a>
                    </Flex>
                </Flex>
            </Header>

            <Events>
                <Flex direction="column" alignItems="center">
                    <h1>EVENT & PROMO</h1>
                    <div className="line" />
                </Flex>
                <Carousels data={event} />
            </Events>
            
            <Gallerys>
                <Flex direction="column" alignItems="center" className="title">
                    <h1>Gallery</h1>
                    <div className="line" />
                </Flex>
                <Gallery
                    images={IMAGES2}
                    backdropClosesModal={true}
                    showImageCount={false}
                    enableImageSelection={false}
                    margin={0}
                    maxRows={10}
                    // rowHeight={220}
                    id={"test122"}
                    // tagStyle={test1}
                />
            </Gallerys>

            <Parts>
                <Flex direction="row" justify="center" className="lala">
                    <h1>
                        <span>LET'S BE</span><br /> PART OF US
                    </h1>
                    <FormControl
                        placeholder="Enter your phone number/email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="input"
                        value={value.email}
                        name="email"
                        onChange={handleChange}
                        />
                    <Button variant="dark" onClick={handlePost}>SEND</Button>
                </Flex>
            </Parts>
            
            <Footer />
        </Wrapper>
    )
}

export default Home