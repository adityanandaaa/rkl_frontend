import React, {useEffect, useState} from 'react'
import {Wrapper, Flex, Header, Content, Menu, Event, Gallery, Location} from './styles'
import axios from 'axios'
import {Ruci} from './CafeRuci'
import Navbar from '../../Components/Navbar2'
import Footer from '../../Components/Footer'
import Modal from '../../Components/Modal'
import {Carousel} from 'react-bootstrap'
import Carousels from '../../Components/Carousel'
import {api, baseUrl} from './api'

// import Event1 from './Media/event-1.jpeg'
// import Event2 from './Media/event-2.jpeg'
// import Event3 from './Media/event-3.jpeg'
import Event4 from './Media/event-4.jpeg'



const Brands = ({match}) => {
    const {params: {id} } = match
    const [indexMen, setIndexMen] = React.useState(0);
    const [indexGal, setIndexGal] = React.useState(0);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSelectMen = (selectedIndex, e) => {
        setIndexMen(selectedIndex);
    };
    const handleSelectGal = (selectedIndex, e) => {
        setIndexGal(selectedIndex);
    };
    // console.log(api)
    // console.log(data)
    const Events_Promo = [
        {title: 'Opening Promo at Cafe Ruci', date: '15 May 2021', name: 'Cafe Ruci', img: Ruci.event.eventPic[0]},
        {title: 'Opening Promo at Cafe Ruci', date: '15 May 2021', name: 'Cafe Ruci', img: Ruci.event.eventPic[1]},
        {title: 'Kawa Kawa Special Price', date: '15 May - 30 May 2021', name: 'Cafe Ruci', img: Ruci.event.eventPic[0]},
        {title: 'Family Meals Packet Only 130K', date: '15 May 2021', name: 'Cafe Ruci', img: Event4}
    ]


    const [data, setData] = useState([])
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/brand?id=${id}&with_gallery_event=true`)
        .then((res) => {
            const items = res.data
            console.log(items)
            setData(items)
            setGallery(items.gallery)
        })
    }, [])
    return(
        <Wrapper>
            {[data].map((data) => (
                <div>
                
                    <Header background={Ruci.headerBackground}>
                        <Navbar />
                        <Flex direction="row" justify="center" alignItems="center">
                            <img src={data.brand_image_link} alt="cafe-ruci-logo" className="brand" /> 
                        </Flex>
                    </Header>
                
                
                <Modal />
                <div id='result'></div>
                <Content>
                    <Flex direction="column" justify="center">
                        <p className="description">{Ruci.description}</p>
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
                        <Carousels 
                            data={Events_Promo}
                            handleOpen={handleOpen}
                        />
                        </div>
                    </div>
                </Event>
                <Modal 
                    src={Ruci.event.eventPic[0]}
                    open={open}
                    handleClose={handleClose}
                    title="Buy 1 Get 1 Free" 
                    date="May 2021 - 20 May 2021"
                />

                <Gallery>
                    <Flex direction="column" alignItems="center">
                        <h1>GALLERY</h1>
                        <span className="line" />
                    </Flex>
                    <Flex direction="row" justify="center" alignItems="center" className="pic">
                        <Carousel activeIndex={indexGal} onSelect={handleSelectGal}>
                            {gallery.map((items, i) => (
                                <Carousel.Item key={i}>
                                    <img
                                    // className="d-block w-95"
                                    src={items.name_image_link}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Flex>
                </Gallery>
                <Location background={Ruci.locationBackground}>
                    <Flex direction="row" justify="flex-end" alignItems="center" className="logo">
                        <Flex direction="column" alignItems="center" justify="center">
                            <img src={data.brand_image_link} />
                        </Flex>
                        <Flex direction="column" alignItems="flex-start" justify="center" className="location-wrap">
                            <p>Jl. Suryo Blk. S No.49, Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12180</p>
                            <p>Mon - Sun : 12 PM - 11 PM</p>
                            <p>+62 819 1800 6649</p>
                            <p className="insta">{Ruci.insta}</p>
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