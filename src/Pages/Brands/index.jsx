import React from 'react'
import {Flex, Header, Content, Menu, Event, Gallery, Location} from './styles'
import {Ruci} from './CafeRuci'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import {Carousel} from 'react-bootstrap'
import {api} from './api'

const Brands = ({match}) => {
    const {params: {id} } = match
    const [data, setData] = React.useState(api)
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    // console.log(api)
    // console.log(data)

    for(let i=1; i < data.length; i++){
        console.log(data[i-1].id == id)
        if(data[i-1].id == id){
            setData(data[i-1])
            console.log(data)
        }
        setData(data[1])
    }
    console.log(data)
    // if(data.id == 1){
    //     setData(data[0])
    // }
    // else{
    //     setData(data[1])
    // }
    return(
        <div>
            <div>
                <Header background={Ruci.headerBackground}>
                    <Navbar />
                    <Flex direction="row" justify="center" alignItems="center">
                        <img src={Ruci.title} alt="cafe-ruci-logo" className="brand" /> 
                    </Flex>
                </Header>
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
                                    <h1>Food</h1>
                                </Flex>
                            </Menu>
                            <Menu background={Ruci.menu[1]}>
                                <Flex direction="row" justify="center" alignItems="center">
                                    <h1>Drink</h1>
                                </Flex>
                            </Menu>

                        </Flex>
                    </Flex>
                </Content>
                <Event background={Ruci.event.eventBackground}>
                    <Flex direction="column" alignItems="center">
                        <h1>EVENT & PROMO</h1>
                        <span className="line" />
                        <Flex direction="row" justify="center" className="promo">
                            <div>
                                <img src={Ruci.event.eventPic[0]} />
                                <p className="title">Buy 1 Get 1 Free</p>
                                <p className="date">1 May 2021 - 20 May 2021</p>
                            </div>
                            <div style={{margin: 0}}>
                                <img src={Ruci.event.eventPic[1]} />
                                <p className="title">Holiday with Beer and Live Music</p>
                                <p className="date">1 May 2021 - 20 May 2021</p>
                            </div>
                        </Flex>
                    </Flex>
                </Event>
                <Gallery>
                    <Flex direction="column" alignItems="center">
                        <h1>GALLERY</h1>
                        <span className="line" />
                    </Flex>
                    <Flex direction="row" justify="center" alignItems="center" className="pic">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                // className="d-block w-95"
                                src={Ruci.gallery[0]}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                // className="d-block w-95"
                                src={Ruci.gallery[1]}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Flex>
                </Gallery>
                <Location background={Ruci.locationBackground}>
                    <Flex direction="row" justify="center" alignItems="center" className="logo">
                        <Flex direction="column" alignItems="center" justify="center">
                            <img src={Ruci.title} />
                            <p className="insta">{Ruci.insta}</p>
                        </Flex>
                        <Flex direction="column" alignItems="flex-start" justify="center" className="location-wrap">
                            <p>Jl. Suryo Blk. S No.49, Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12180</p>
                            <p>Mon - Sun : 12 PM - 11 PM</p>
                            <p>+62 819 1800 6649</p>
                        </Flex>
                    </Flex>
                </Location>
             </div>
            <Footer />
        </div>
    )

}

export default Brands