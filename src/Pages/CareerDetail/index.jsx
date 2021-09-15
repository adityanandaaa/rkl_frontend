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
    const [title, setTitle] = useState([])

    const handleClick = () => {
        window.location = `mailto:${items.email_to}`
    }
    const removeTags = (str) => {
        if ((str===null) || (str==='')){
            return false;
        }
        else{
            str = "" + str
            return str.replace( /(<([^>]+)>)/ig, '');
        }
    }

    useEffect(() => {
        axios.get(`${baseUrl}/career?id=${id}`)
        .then((res) => {
            const items = res.data
            console.log(items)
            console.log(id)
            console.log(typeof items.spesification)
            setItems(items)
            setTitle(items.position_name.toUpperCase())
        })
    },[id])

    return(
        <div>
            <Header>
                <Navbar />
                <Flex direction="row" justify="center" alignItems="center">
                    <h1>{title}</h1>
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
                            <p dangerouslySetInnerHTML={{__html: items.spesification}} />
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