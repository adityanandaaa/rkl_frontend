import React, {useState} from 'react'
import {Flex, Wrapper, Header, Events, Gallerys, Parts} from './styles'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Gallery from 'react-grid-gallery'
import {TextField} from '@material-ui/core'
import {Container, InputGroup, FormControl, Button} from 'react-bootstrap'
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

import Event1 from './Media/event-1.jpeg'
import Event2 from './Media/event-2.jpeg'
import Event3 from './Media/event-3.jpeg'
import Event4 from './Media/event-4.jpeg'

import Gallery1 from './Media/gallery - 1.jpg'
import Gallery2 from './Media/gallery - 2.jpg'
import Gallery3 from './Media/gallery - 3.jpg'
import Gallery4 from './Media/gallery - 4.jpg'
import Gallery5 from './Media/gallery - 5.jpg'
import Gallery6 from './Media/gallery - 6.jpg'
import Gallery7 from './Media/gallery - 7.jpg'
import Gallery8 from './Media/gallery - 8.jpg'
import Gallery9 from './Media/gallery - 9.jpg'
import Gallery10 from './Media/gallery - 10.jpg'


const Home = () => {
    const [hover, setHover] = useState({
        pic1: false,
        pic2: false,
        pic3: false,
        pic4: false,
        pic5: false
    })

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

    const IMAGESandro = [
        {
            src: Gallery1,
            thumbnail: Gallery1,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery2,
            thumbnail: Gallery2,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery3,
            thumbnail: Gallery3,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery4,
            thumbnail: Gallery4,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery5,
            thumbnail: Gallery5,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery6,
            thumbnail: Gallery6,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery7,
            thumbnail: Gallery7,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery8,
            thumbnail: Gallery8,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery9,
            thumbnail: Gallery9,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
        {
            src: Gallery10,
            thumbnail: Gallery10,
            thumbnailWidth: 300,
            thumbnailHeight: 200,
        },
    ];

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
        if(value.email == ''){
            alert('You must insert the text first')
        }
        else{
            alert('success')
            setValue({email: ''})
        }
    }

    return(
        <Wrapper>
            <Header>
                <Navbar />
                <Flex direction="row" justify="center" alignItems="center">
                    <p class="description">
                        RKL is a Food and Beverage company incepted in 2010
                        with a commitment to make great experience to
                        denizens of Jakarta
                    </p>
                </Flex>
                <Flex direction="column" justify="center" className="brands">
                    <Flex direction="row" justify="space-around">
                        <img src={!hover.pic1 ? Brand1 : Brand6} onMouseOver={() => setHover({pic1: true})} onMouseOut={() => setHover({pic1: false})} />
                        <img src={!hover.pic2 ? Brand2 : Brand7} onMouseOver={() => setHover({pic2: true})} onMouseOut={() => setHover({pic2: false})} />
                        <img src={!hover.pic3 ? Brand3 : Brand8} onMouseOver={() => setHover({pic3: true})} onMouseOut={() => setHover({pic3: false})} />
                    </Flex>
                    <Flex direction="row" justify="space-around">
                        <img src={!hover.pic4 ? Brand4 : Brand9} onMouseOver={() => setHover({pic4: true})} onMouseOut={() => setHover({pic4: false})} />
                        <img src={!hover.pic5 ? Brand5 : Brand10} onMouseOver={() => setHover({pic5: true})} onMouseOut={() => setHover({pic5: false})} />
                    </Flex>
                </Flex>
            </Header>

            <Events>
                <Flex direction="column" alignItems="center">
                    <h1>EVENT & PROMO</h1>
                    <div className="line" />
                </Flex>
                
                <Carousel
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
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="event">
                        <Flex direction="column" justify="center">
                            <img src={Event1} />
                            <p className="event_title">Opening Promo at Cafe Ruci</p>
                            <p className="event_date">15 May 2021</p>
                        </Flex>
                        
                    </div>
                    <div className="event">
                        <Flex direction="column" justify="center">
                            <img src={Event2} />
                            <p className="event_title">Opening Promo at Cafe Ruci</p>
                            <p className="event_date">15 May 2021</p>
                        </Flex>
                        
                    </div>
                    <div className="event">
                        <Flex direction="column" justify="center">
                            <img src={Event3} />
                            <p className="event_title">Kawa Kawa Special Price</p>
                            <p className="event_date">15 May - 30 May 2021</p>
                        </Flex>
                    </div>
                    <div className="event">
                        <Flex direction="column" justify="center">
                            <img src={Event4} />
                            <p className="event_title">Family Meals Packet Only 130K</p>
                            <p className="event_date">15 May 2021</p>
                        </Flex>
                    </div>
                </Carousel>
            </Events>
            
            <Gallerys>
                <Flex direction="column" alignItems="center" className="title">
                    <h1>Gallery</h1>
                    <div className="line" />
                </Flex>
                <Gallery
                    images={IMAGESandro}
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