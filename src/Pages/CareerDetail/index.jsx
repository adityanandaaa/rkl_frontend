import React, {useState, useEffect} from 'react'
import {Flex, Header, Content} from './styles'
import {Button} from 'react-bootstrap'
import Navbar from '../../Components/Navbar2'
import Footer from '../../Components/Footer'
import axios from 'axios'
import { baseUrl } from '../../utils'

const CareerDetail = ({match}) => {
    const {params: {id}} = match
    const [items, setItems] = useState([])
    const handleClick = () => {
        window.location = `mailto:${items.email_to}`
    }

    useEffect(() => {
        axios.get(`${baseUrl}/career?id=${id}`)
        .then((res) => {
            const items = res.data
            console.log(items)
            console.log(id)
            setItems(items)
        })
    },[])

    return(
        <div>
            <Header>
                <Navbar />
                <Flex direction="row" justify="center" alignItems="center">
                    <h1>OUTLET MANAGER</h1>
                </Flex>
            </Header>
            <Content>
                {[items].map((items) => (
                    <div>
                        <Flex direction="column" justify="center">
                            <h1>Job Description</h1>
                            <p>{items.description}</p>
                        </Flex>
                        <Flex direction="column" justify="center">
                            <h1 style={{marginTop: '50px'}}>Job Specification</h1>
                            <p>{items.spesification}</p>
                        </Flex>
                        <Flex direction="row">
                            <p>Please send your CV to <b>hrd@rkl.com</b> or click the button below if you interested this position</p>
                        </Flex>
                        <Button onClick={handleClick} variant="dark">Apply Now</Button>
                    </div>
                ))}
                
            </Content>
            <Footer />
        </div>
    )
}

export default CareerDetail