import React, {useEffect} from 'react'
import {Wrapper, Flex, Header, Content, Menu, Event, Gallery, Location} from './styles'
// import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';
import {Paper} from '@material-ui/core'
import {Ruci} from './CafeRuci'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Modal from '../../Components/Modal'
import {Carousel} from 'react-bootstrap'
import Carousels from '../../Components/Carousel'
import {api} from './api'



const Brands = ({match}) => {
    const {params: {id} } = match
    const [data, setData] = React.useState(api)
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

    const services = [{
        title: 'title0',
        caption: 'caption0'
      }, {
        title: 'title1',
        caption: 'caption1'
      }, {
        title: 'title2',
        caption: 'caption2'
      }, {
        title: 'title3',
        caption: 'caption3'
      }];
    //   var html = '<div>'
    //   services.forEach(function (item, index) {
    //     html += '<div>' + item.title + '</div>'
    //     html += '<div>' + item.caption + '</div>'
    //     if (index % 2) {
    //         html += '</div><div class="row">'
    //     }
    // })
    
    // html += '</div>'
    
      useEffect(() => {
        // document.getElementById('result').insertAdjacentHTML('beforeend', html)

        // services.reduce(
        //     function(accumulator, currentValue, currentIndex, array) {
        //       if (currentIndex % 2 === 0)
        //         accumulator.push(array.slice(currentIndex, currentIndex + 2));
        //       return accumulator;
        //     }, []).map(p => (console.log(p[0], p[1])))
      }, [])
    return(
        <Wrapper>
            <div>
                <Header background={Ruci.headerBackground}>
                    <Navbar />
                    <Flex direction="row" justify="center" alignItems="center">
                        <img src={Ruci.title} alt="cafe-ruci-logo" className="brand" /> 
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
                        
                        <Carousel activeIndex={indexMen} onSelect={handleSelectMen}>
                            <Carousel.Item>
                                <Flex direction="row" justify="center" className="promo">
                                    <div>
                                        <a onClick={handleOpen} style={{textDecoration: 'none'}}>
                                            <img src={Ruci.event.eventPic[0]} />
                                        </a>
                                        <p className="title">Buy 1 Get 1 Free</p>
                                        <p className="date">1 May 2021 - 20 May 2021</p>
                                    </div>
                                    <div style={{margin: 0}}>
                                        <img src={Ruci.event.eventPic[1]} />
                                        <p className="title">Holiday with Beer and Live Music</p>
                                        <p className="date">1 May 2021 - 20 May 2021</p>
                                    </div>
                                    <div style={{margin: 0}}>
                                        <img src={Ruci.event.eventPic[1]} />
                                        <p className="title">Holiday with Beer and Live Music</p>
                                        <p className="date">1 May 2021 - 20 May 2021</p>
                                    </div>
                                </Flex>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Flex direction="row" justify="center" className="promo">
                                    
                                    <div style={{margin: 0}}>
                                        <img src={Ruci.event.eventPic[1]} />
                                        <p className="title">Holiday with Beer and Live Music</p>
                                        <p className="date">1 May 2021 - 20 May 2021</p>
                                    </div>
                                    <div>
                                        <a onClick={handleOpen} style={{textDecoration: 'none'}}>
                                            <img src={Ruci.event.eventPic[0]} />
                                        </a>
                                        <p className="title">Buy 1 Get 1 Free</p>
                                        <p className="date">1 May 2021 - 20 May 2021</p>
                                    </div>
                                </Flex>
                            </Carousel.Item>
                        </Carousel>
                        {/* <Carousels 
                        src={Ruci.event.eventPic[0]}
                        title="Buy 1 Get 1 Free"
                        date="1 May 2021 - 20 May 2021" 
                        handleOpen={handleOpen}
                        style={{marginTop: '5em'}}
                    /> */}
                    </Flex>
                    

                    {/* <Carousel
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={false}
                            // autoPlay={
                            //     this.props.deviceType !== "mobile" ? true : false
                            // }
                            autoPlay={false}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            // customTransition="ease .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            // removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            style={{marginLeft: "2em"}}
                            >
                                <Paper style={{width: '20em', height: '20em', background: 'black', color: 'white'}}>
                                    <h1>Test 1</h1>
                                </Paper>
                                <Paper style={{width: '20em', height: '20em', background: 'black', color: 'white'}}>
                                    <h1>Test 1</h1>
                                </Paper>
                                <Paper style={{width: '20em', height: '20em', background: 'black', color: 'white'}}>
                                    <h1>Test 1</h1>
                                </Paper>
                                <Paper style={{width: '20em', height: '20em', background: 'black', color: 'white'}}>
                                    <h1>Test 1</h1>
                                </Paper>
                                <Paper style={{width: '20em', height: '20em', background: 'black', color: 'white'}}>
                                    <h1>Test 1</h1>
                                </Paper>
                                <Paper style={{width: '20em', height: '20em', background: 'black', color: 'white'}}>
                                    <h1>Test 1</h1>
                                </Paper>
                            </Carousel> */}
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
        </Wrapper>
    )

}

export default Brands