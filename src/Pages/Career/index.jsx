import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Wrapper, Flex, Header, Content, Card} from './styles'
import {TextField, Select, MenuItem, InputLabel, FormControl} from '@material-ui/core'
import Navbar from '../../Components/Navbar2'
import Footer from '../../Components/Footer'


const Career = () => {
    const [keyword, setKeyword] = useState('')
    const [position, setPosition] = useState('')
    const [location, setLocation] = useState('')
    const [data, setData] = useState([])

    const handleKeyword = (event) => {
        console.log(event.target.value)
        setKeyword(event.target.value)
    }
    const handlePosition = (event) => {
        console.log(event.target.value)
        setPosition(event.target.value);
    };
    const handleLocation = (event) => {
        console.log(event.target.value)
        setLocation(event.target.value);
    }
   
    const handleClick = (id) => {
        window.location.href = `/career-detail/${id}`
        console.log(id)
    }

    const fetchData = async() => {
        const res = await axios.get("http://admin.rklokal.com/api/career")
        const items = res.data
        console.log(items)
        setData(items)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div>
            <Wrapper>
                <Header>
                    <Navbar />
                    <Flex direction="column" justify="center" alignItems="center" className="join">
                        <h1>JOIN RKL TEAM</h1>
                        <h2>Come and join our team, we are looking for experienced team and want to grow together</h2>
                    </Flex>
                </Header>
                <Content>
                    <Flex directio="row" justify="center">
                        <h1 className="title">OPEN POSITIONS</h1>
                    </Flex>
                    <Flex direction="row" justify="space-around" alignItems="center">
                        <TextField 
                            id="standard-basic"
                            label="Keyword" 
                            className="field"
                            value={keyword}
                            onChange={handleKeyword} 
                        />
                        <FormControl className="field">
                            <InputLabel id="demo-simple-select-label">Position</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={position}
                            onChange={handlePosition}
                            >
                            <MenuItem value="Marketing">Marketing</MenuItem>
                            <MenuItem value="Sales Associates">Sales Associates</MenuItem>
                            <MenuItem value="Public Relation">Public Relation</MenuItem>
                            <MenuItem value="Administrator Staff">Administrator Staff</MenuItem>
                            <MenuItem value="Outlet Manager">Outlet Manager</MenuItem>
                            <MenuItem value="Asisten Outlet Manager">Asisten Outlet Manager</MenuItem>
                            <MenuItem value="Captain Service">Captain Service</MenuItem>
                            <MenuItem value="Server">Server</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl className="field">
                            <InputLabel id="demo-simple-select-label">Location</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            onChange={handleLocation}
                            >
                            <MenuItem value="Head Office">Head Office</MenuItem>
                            <MenuItem value="Outlet">Outlet</MenuItem>
                            <MenuItem value="Intern">Intern</MenuItem>
                            </Select>
                        </FormControl>
                    </Flex>
                    <br />
                                      
                </Content>
                <Flex direction="row" justify="space-around" wrap="wrap" className="vacancies">
                    {data.map((items) => (
                        <Card onClick={() => handleClick(items.id)}>
                            <Flex direction="column" justify="center" style={{marginLeft: '1.5em'}}>
                                <p className="position">{items.position_name}</p>
                                <p className="location">{items.location_name}</p>
                            </Flex>
                        </Card>
                    ))}
                </Flex>  
            </Wrapper>
            <Footer />
        </div>
        
    )
}

export default Career