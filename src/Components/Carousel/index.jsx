import React from 'react'
import {Wrapper, Flex} from './styles'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const Carousels = ({data, src, title, date, handleOpen}) => {

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
    return(
        <Wrapper>

        
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
                // customTransition="ease .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {data.map((events) => (
                    <div className="event" onClick={handleOpen}>
                        <Flex direction="column" justify="center" alignItems="flex-start">
                            <img src={events.img} alt="events_pic" />
                            <p className="event_title">{events.title}</p>
                            <p className="cafe_name">{events.name}</p>
                            <p className="event_date">{events.date}</p>
                        </Flex>
                    </div>
                ))}
                {/* <Flex direction="row" justify="center" className="promo">
                    <div>
                        <a onClick={handleOpen} style={{textDecoration: 'none'}}>
                            <img src={src} />
                        </a>
                        <p className="title">{title}</p>
                        <p className="date">{date}</p>
                    </div>
                    <div>
                        <a onClick={handleOpen} style={{textDecoration: 'none'}}>
                            <img src={src} />
                        </a>
                        <p className="title">{title}</p>
                        <p className="date">{date}</p>
                    </div>
                    <div>
                        <a onClick={handleOpen} style={{textDecoration: 'none'}}>
                            <img src={src} />
                        </a>
                        <p className="title">{title}</p>
                        <p className="date">{date}</p>
                    </div>
                </Flex> */}
            </Carousel>
        </Wrapper>
    )
}

export default Carousels