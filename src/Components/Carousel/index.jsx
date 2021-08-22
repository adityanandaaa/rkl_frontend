import React, {useState} from 'react'
import {Wrapper, Flex} from './styles'
import axios from 'axios'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Modal from '../Modal'
import dateFormat from 'dateformat'
import { baseUrl } from '../../utils';

const Carousels = ({data}) => {
    const [items, setItems] = useState(false)
    const [open, setOpen] = useState(false)
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const handleOpen = (id) => {
        console.log(id)
        axios.get(`${baseUrl}/event-promo?id=${id}`)
        .then((res) => {
            const items = res.data
            console.log(items)
            setItems(items)
        })
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
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
                {data.map((events, i) => (
                    <div key={i} className="event" onClick={() => handleOpen(events.id)}>
                        <Flex direction="column" justify="center" alignItems="flex-start">
                            <img src={events.name_image_link} alt={events.name_image} />
                            <p className="event_title">{events.name}</p>
                            <p className="cafe_name">{events.brand_name}</p>
                            <p className="event_date">{dateFormat(events.start_date, "d mmmm") + " - " + dateFormat(events.end_date, "d mmmm yyyy")}</p>
                        </Flex>
                    </div>
                ))}
            </Carousel>
            {[items].map((items) => (
                <Modal 
                    src={items.name_image_link}
                    open={open}
                    handleClose={handleClose}
                    title={items.name} 
                    description={items.description}
                    date={dateFormat(items.start_date, "d mmmm") + " - " + dateFormat(items.end_date, "d mmmm yyyy")}
                />
            ))}
        </Wrapper>
    )
}

export default Carousels