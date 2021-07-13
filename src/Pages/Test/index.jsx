import React from 'react'
import {Flex} from './styles'
import Carousels from '../../Components/Carousel'
import Navbar2 from '../../Components/Navbar2'

const Test = () => {
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
        <div>
            <Navbar2 />
            <h1>Test</h1>
            {/* <Flex direction="row" justify="center"> */}
            <Carousels text={"item 1"} />
            {/* </Flex> */}
        </div>
    )
}

export default Test