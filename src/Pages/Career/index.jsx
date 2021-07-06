import React from 'react'
import {Wrapper, Flex, Header, Content} from './styles'
import {TextField, Select, MenuItem, InputLabel, FormControl} from '@material-ui/core'
import {Accordion, Card, Button} from 'react-bootstrap'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Career = () => {
    const [position, setPosition] = React.useState('');
    const [location, setLocation] = React.useState('')
    const handlePosition = (event) => {
        setPosition(event.target.value);
    };
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }
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
                        <TextField id="standard-basic" label="Keyword" style={{width: '250px'}} />
                        <FormControl style={{width: '250px'}}>
                            <InputLabel id="demo-simple-select-label">Position</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={position}
                            onChange={handlePosition}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{width: '250px'}}>
                            <InputLabel id="demo-simple-select-label">Location</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            onChange={handleLocation}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Flex>

                    <Flex direction="column" alignItems="center" style={{marginTop: '5em'}}>
                        <Flex direction="row" justify="space-around" className="section">
                            <h1>Spesification</h1>
                            <ul>
                                <li>Have a working experience, minimal 1 year</li>
                                <li>Have a basic knowledge about food and beverages</li>
                                <li>Working experience in Food and Beverages is a plus</li>
                                <li>Working experience in the desired position is a plus</li>
                                <li>Eager to learn</li>
                            </ul>              
                        </Flex>
                        <Flex direction="row" justify="space-around" className="section" style={{marginTop: '3em'}}>
                            <h1>Head Office</h1>
                            <Accordion className="accor">
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="card">
                                    <Flex direction="row" justify="space-between">
                                        <Flex direction="column" >
                                            <p>Marketing</p>
                                            <span className="line" />
                                        </Flex>
                                        <ExpandMoreIcon />
                                    </Flex>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="description">
                                    <p>test</p>
                                </Accordion.Collapse>

                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="card">
                                    <Flex direction="row" justify="space-between">
                                        <Flex direction="column" >
                                            <p>Sales Associates</p>
                                            <span className="line" />
                                        </Flex>
                                        <ExpandMoreIcon />
                                    </Flex>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1" className="description">
                                    <p>test</p>
                                </Accordion.Collapse>

                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className="card">
                                    <Flex direction="row" justify="space-between">
                                        <Flex direction="column" >
                                            <p>Public Relation</p>
                                            <span className="line" />
                                        </Flex>
                                        <ExpandMoreIcon />
                                    </Flex>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2" className="description">
                                    <p>test</p>
                                </Accordion.Collapse>

                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" className="card">
                                    <Flex direction="row" justify="space-between">
                                        <Flex direction="column" >
                                            <p>Administrator Staff</p>
                                            <span className="line" />
                                        </Flex>
                                        <ExpandMoreIcon />
                                    </Flex>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3" className="description">
                                    <p>test</p>
                                </Accordion.Collapse>
                            </Accordion>   
                        </Flex>

                        <Flex direction="row" justify="space-around" className="section" style={{marginTop: '3em'}}>
                            <h1>Outlet</h1>
                            <Accordion className="accor">
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="card">
                                    <Flex direction="row" justify="space-between">
                                        <Flex direction="column" >
                                            <p>Outlet Manager</p>
                                            <span className="line" />
                                        </Flex>
                                        <ExpandMoreIcon />
                                    </Flex>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="description">
                                    <p>test</p>
                                </Accordion.Collapse>

                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="card">
                                    <Flex direction="row" justify="space-between">
                                        <Flex direction="column" >
                                            <p>Assisten Outlet Manager</p>
                                            <span className="line" />
                                        </Flex>
                                        <ExpandMoreIcon />
                                    </Flex>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1" className="description">
                                    <p>test</p>
                                </Accordion.Collapse>

                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className="card">
                                    <Flex direction="row" justify="space-between">
                                        <Flex direction="column" >
                                            <p>Captain Service</p>
                                            <span className="line" />
                                        </Flex>
                                        <ExpandMoreIcon />
                                    </Flex>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2" className="description">
                                    <p>test</p>
                                </Accordion.Collapse>

                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" className="card">
                                    <Flex direction="row" justify="space-between">
                                        <Flex direction="column" >
                                            <p>Server</p>
                                            <span className="line" />
                                        </Flex>
                                        <ExpandMoreIcon />
                                    </Flex>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3" className="description">
                                    <p>test</p>
                                </Accordion.Collapse>
                            </Accordion>   
                        </Flex>
                    </Flex>
                    
                </Content>
            </Wrapper>
            {/* <Footer /> */}
        </div>
        
    )
}

export default Career