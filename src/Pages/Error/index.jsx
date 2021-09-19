import React from 'react'
import {Flex, Wrapper, Header} from './styles'
import {Button} from 'react-bootstrap'
import Navbar from '../../Components/Navbar2'

const Error = () => {
    const handleClick = () => {
        window.location.href = "/"
    }
    return(
        <div>
            <Header>
                <Navbar />
                <Wrapper>
                    <Flex direction="column" justify="center" alignItems="center">
                        <h1>DUDE, WHERE'S MY PAGE?</h1>
                        <div>
                            <h2>Something has gone wrong,</h2>
                            <h2>sorry for the incovenience</h2>
                        </div>
                        <Button variant="dark" onClick={handleClick}>Go Back</Button>
                        {/* <Button variant="contained" color="primary" onClick={handleClick}>Go Back</Button> */}
                    </Flex>
                </Wrapper>
            </Header>
            
        </div>
    )
}

export default Error