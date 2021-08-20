import React, {useEffect, useState} from 'react'
import {Wrapper, Flex, Header, Content, Menu, Event, Gallery, Location} from './styles'
import axios from 'axios'
import {Ruci} from './CafeRuci'
import Navbar from '../../Components/Navbar2'
import Footer from '../../Components/Footer'
import {Carousel} from 'react-bootstrap'
import Carousels from '../../Components/Carousel'
import {baseUrl} from './api'



const Brands = ({match}) => {
    const {params: {name} } = match
    const [data, setData] = useState([])
    const [event, setEvent] = useState([])
    const [gallery, setGallery] = useState([])
    const [indexGal, setIndexGal] = React.useState(0);

    const handleSelectGal = (selectedIndex, e) => {
        setIndexGal(selectedIndex);
    };

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
                x => x.name == name
            )
            console.log(data)
            setData(data)
            axios.get(`${baseUrl}/brand?id=${data[0].id}&with_gallery_event=true`)
            .then((res) => {
                const items = res.data
                setEvent(items.event_promo)
                setGallery(items.gallery)
            })
            
            // setEvent(items.event_promo)
            // setGallery(items.gallery)

        })
    }

    // const fetchBrand = () => {
    //     axios.get(`${baseUrl}/brand?id=${id}&with_gallery_event=true`)
    //     .then((res) => {
    //         const items = res.data
    //         console.log(items)
    //         setData(items)
    //         setEvent(items.event_promo)
    //         setGallery(items.gallery)
    //     })
    // }

    useEffect(() => {
        fetchBrand()
        console.log(event)
        console.log(name)
        // console.log(data)
        convertUrl()
    }, [])
    return(
        <Wrapper>
            {data.map((data, i) => (
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
                            <Flex direction="row" justify="center" className="menu">
                                <Menu background={Ruci.menu[0]}>
                                    <Flex direction="row" justify="center" alignItems="center">
                                        <h1>FOOD</h1>
                                    </Flex>
                                </Menu>
                                <Menu background={Ruci.menu[1]}>
                                    <Flex direction="row" justify="center" alignItems="center">
                                        <h1>DRINK</h1>
                                    </Flex>
                                </Menu>

                            </Flex>
                        </Flex>
                    </Content>
                    
                    <Event background={Ruci.event.eventBackground}>
                        <div>
                            <Flex direction="column" alignItems="center">
                                <h1>EVENT & PROMO</h1>
                                <span className="line" />
                            </Flex>
                            <div className="promo">
                                {event.length == 0 ?
                                    <Flex direction="row" justify="center">
                                        <h1>There is no event in this period of time</h1>
                                    </Flex>
                                    :
                                    <Carousels data={event} />
                                }
                            </div>
                        </div>
                    </Event>

                    <Gallery>
                        <Flex direction="column" alignItems="center">
                            <h1>GALLERY</h1>
                            <span className="line" />
                        </Flex>
                        <Flex direction="row" justify="center" alignItems="center" className="pic">
                            <Flex direction="row" justify="center">
                                {gallery == 0 ? 
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
                        <Flex direction="row" justify="flex-end" alignItems="center" className="logo">
                            <Flex direction="column" alignItems="center" justify="center">
                                <img src={data.brand_image_link} alt="brand_logo" />
                            </Flex>
                            <Flex direction="column" alignItems="flex-start" justify="center" className="location-wrap">
                                <p>{data.address}</p>
                                <p>{data.open_hour}</p>
                                <p>{data.contact}</p>
                                <a href={data.instagram} className="insta">@{data.name}</a>
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