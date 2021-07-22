import React from 'react'
import {Flex, Header, Content} from './styles'
import {Button} from 'react-bootstrap'
import Navbar from '../../Components/Navbar2'
import Footer from '../../Components/Footer'

const CareerDetail = () => {

    return(
        <div>
            <Header>
                <Navbar />
                <Flex direction="row" justify="center" alignItems="center">
                    <h1>OUTLET MANAGER</h1>
                </Flex>
            </Header>
            <Content>
                <Flex direction="column" justify="center">
                    <h1>Job Description</h1>
                    <p>Handling and managing multiple outlets, strong skills in : systems, training, costing, recipe development, product sourcing and pricing, people management, kitchen design, equipment and layout of kitchens, ability to troubleshoot when challenges arise.</p>
                </Flex>
                <Flex direction="column" justify="center">
                    <h1 style={{marginTop: '50px'}}>Job Specification</h1>
                    <ul>
                        <li>Have a working experience, minimal 1 year</li>
                        <li>Have a basic knowledge about food and beverages</li>
                        <li>Working experience in Food and Beverages is a plus</li>
                        <li>Working experience in the desired position is a plus</li>
                        <li>Eager to learn</li>
                    </ul>
                </Flex>
                <Flex direction="row">
                    <p>Please send your CV to hrd@rkl.com or click the button below if you interested this position</p>
                </Flex>
                <Button variant="dark">Apply Now</Button>
            </Content>
            <Footer />
        </div>
    )
}

export default CareerDetail