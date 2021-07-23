import React from 'react'
// import {Flex} from './styles'
import Carousels from '../../Components/Carousel'
// import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';
import Navbar2 from '../../Components/Navbar2'
import Event1 from './Media/event-1.jpeg'
import Event2 from './Media/event-2.jpeg'
import Event3 from './Media/event-3.jpeg'
import Event4 from './Media/event-4.jpeg'

const Test = () => {
    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3,
    //         slidesToSlide: 3 // optional, default to 1.
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //         slidesToSlide: 2 // optional, default to 1.
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1 // optional, default to 1.
    //     }
    // };
    const Events_Promo = [
        {title: 'Opening Promo at Cafe Ruci', date: '15 May 2021', img: Event1},
        {title: 'Opening Promo at Cafe Ruci', date: '15 May 2021', img: Event2},
        {title: 'Kawa Kawa Special Price', date: '15 May - 30 May 2021', img: Event3},
        {title: 'Family Meals Packet Only 130K', date: '15 May 2021', img: Event4}
    ]


    return(
        <div>
            <Navbar2 />
            <h1>Test</h1>
            <Carousels 
                data={Events_Promo}
            />
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
                >
                    {Events_Promo.map((events) => (
                        <div className="event">
                            <Flex direction="column" justify="center">
                                <img src={events.img} alt="events_pic" />
                                <p className="event_title">{events.title}</p>
                                <p className="event_date">{events.date}</p>
                            </Flex>
                            
                        </div>
                    ))}
                </Carousel> */}
        </div>
    )
}

export default Test