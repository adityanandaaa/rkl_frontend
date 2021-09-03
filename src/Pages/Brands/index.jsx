import React, {useEffect, useState} from 'react'
import {Wrapper, Flex, Header, Content, Menu, Event, Gallery, Location} from './styles'
import axios from 'axios'
import Navbar from '../../Components/Navbar2'
import Footer from '../../Components/Footer'
import {Carousel} from 'react-bootstrap'
import Carousels from '../../Components/Carousel'
import {baseUrl} from '../../utils'
import Food from './Media/food.jpg'
import Drink from './Media/drink.jpeg'
import EventCover from './Media/event-cover.jpg'
import InstagramIcon from './Media/instagram-icon.png'
import WhatsappIcon from './Media/whatsapp-icon.png'



const Brands = ({match}) => {
    const {params: {name} } = match
    const [data, setData] = useState([])
    const [event, setEvent] = useState([])
    const [gallery, setGallery] = useState([])

    const convertUrl = () => {
        var str = name
        str = str.replace(/\s+/g, '-').toLowerCase();
        console.log(str); // "sonic-free-games"
    }

    const fetchBrand = () => {
        axios.get(`${baseUrl}/brand`)
        .then((res) => {
            const items = res.data
            const data = items.filter(
                x => x.name === name
            )
            console.log(data)
            setData(data)
            axios.get(`${baseUrl}/brand?id=${data[0].id}&with_gallery_event=true`)
            .then((res) => {
                const items = res.data
                setEvent(items.event_promo)
                setGallery(items.gallery)
            })
        })
    }

    const handleOpenMenu = (url) => {
        window.open(url, "_blank")
    }

    useEffect(() => {
        fetchBrand()
        // console.log(event)
        // console.log(name)
        // console.log(data)
        convertUrl()
    }, [])
   
    return(
        <Wrapper>
            {data && data.map((data, i) => (
                <div key={i}>
                    <Header background={data.hero_header_image_link}>
                        <Navbar />
                        <Flex direction="row" justify="center" alignItems="center">
                            <img src={data.brand_image_link} alt="cafe-ruci-logo" className="brand" /> 
                        </Flex>
                    </Header>
                    <Content>
                        <Flex direction="column" justify="center">
                            <p className="description">{data.description}</p>
                            <Flex direction="column" justify="center" alignItems="center">
                                <h1 className="title">OUR MENU</h1>
                                <span className="line" />
                            </Flex>
                            <Flex direction="row" justify="center" className="menu" onClick={() => handleOpenMenu(data.menu_file_link)}>
                                <Menu background={Food}>
                                    <Flex direction="row" justify="center" alignItems="center">
                                        <h1>FOOD</h1>
                                    </Flex>
                                </Menu>
                                <Menu background={Drink}>
                                    <Flex direction="row" justify="center" alignItems="center">
                                        <h1>DRINK</h1>
                                    </Flex>
                                </Menu>

                            </Flex>
                        </Flex>
                    </Content>
                    
                    <Event background={EventCover}>
                        <div>
                            <Flex direction="column" alignItems="center">
                                <h1>EVENT & PROMO</h1>
                                <span className="line" />
                            </Flex>
                            <div className="promo">
                                {event.length === 0 ?
                                    <Flex direction="row" justify="center">
                                        <h1>There is no event in this period of time</h1>
                                    </Flex>
                                    :
                                    <Carousels data={event} />
                                }
                            </div>
                        </div>
                    </Event>

                    <Gallery id="gallery">
                        <Flex direction="column" alignItems="center">
                            <h1>GALLERY</h1>
                            <span className="line" />
                        </Flex>
                        <Flex direction="row" justify="center" alignItems="center" className="pic">
                            <Flex direction="row" justify="center">
                                {gallery.length === 0 ? 
                                    <h1>There is no picture uploaded yet</h1>
                                    :
                                    <Carousel>
                                        {gallery.map((items, i) => (
                                            <Carousel.Item key={i}>
                                                <Flex direction="row" justify="center">
                                                    <img
                                                    className="d-block w-95"
                                                    src={items.name_image_link}
                                                    alt="First slide"
                                                    />
                                                </Flex>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                }
                            </Flex>
                        </Flex>
                    </Gallery>

                    <Location background={data.hero_footer_image_link}>
                        <Flex direction="row" justify="center" alignItems="center" className="logo">
                            <Flex direction="column" alignItems="center" justify="center">
                                <img src={data.brand_image_link} alt="brand_logo" />
                            </Flex>
                            <Flex direction="column" alignItems="flex-start" justify="center" className="location-wrap">
                                <p>{data.address}</p>
                                <p>{data.open_hour}</p>
                                <p>
                                    <img src={WhatsappIcon} alt="whatsapp_icon" className="icon" />
                                    <span>{data.contact}</span>
                                </p>
                                <a href={data.instagram} className="insta">
                                    <img src={InstagramIcon} alt="instagram_icon" className="icon" />
                                    <span>@{data.name}</span>
                                </a>
                            </Flex>
                        </Flex>
                    </Location>
                </div>
            ))}
            <Footer />
        </Wrapper>
    )
}

export default Brands