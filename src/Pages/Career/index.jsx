import React from 'react'
import {Wrapper, Flex, Header, Content, Card} from './styles'
import {TextField, Select, MenuItem, InputLabel, FormControl} from '@material-ui/core'
import Navbar from '../../Components/Navbar2'
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
    const vacancies = [
        {position: 'Marketing', location: 'Head Office'},
        {position: 'Sales Associates', location: 'Head Office'},
        {position: 'Pulic Relation', location: 'Head Office'},
        {position: 'Administrator Staff', location: 'Head Office'},
        {position: 'Outlet Manager', location: 'Outlet'},
        {position: 'Asisten Manager Outlet', location: 'Outlet'},
        {position: 'Captain Service', location: 'Head Office'},
        {position: 'Server', location: 'Outlet'},
        {position: 'Housekeeping', location: 'Outlet'},
        {position: 'Chef De Partie', location: 'Head Office'},
        {position: 'Cook', location: 'Outlet'},
        {position: 'Cook Helper', location: 'Outlet'},
        {position: 'Steward', location: 'Head Office'},
        {position: 'Head Bar', location: 'Outlet'},
        {position: 'Bartender', location: 'Outlet'},
        {position: 'Bar Back', location: 'Head Office'},
        {position: 'Host', location: 'Head Office'},
        {position: 'Marketing - Intern', location: 'Intern'},

    ]
    const handleClick = () => {
        window.location.href = '/career-detail'
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
                            <MenuItem value={10}>Marketing</MenuItem>
                            <MenuItem value={20}>Sales Associates</MenuItem>
                            <MenuItem value={30}>Public Relation</MenuItem>
                            <MenuItem value={40}>Administrator Staff</MenuItem>
                            <MenuItem value={50}>Outlet Manager</MenuItem>
                            <MenuItem value={60}>Asisten Outlet Manager</MenuItem>
                            <MenuItem value={70}>Captain Service</MenuItem>
                            <MenuItem value={80}>Server</MenuItem>

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
                            <MenuItem value={10}>Head Office</MenuItem>
                            <MenuItem value={20}>Outlet</MenuItem>
                            <MenuItem value={30}>Intern</MenuItem>
                            </Select>
                        </FormControl>
                    </Flex>
                    <br />
                                      
                </Content>
                <Flex direction="row" justify="space-around" wrap="wrap" className="vacancies">
                        {vacancies.map((items) => (
                            <Card onClick={handleClick}>
                                <Flex direction="column" justify="center" style={{marginLeft: '1.5em'}}>
                                    <p className="position">{items.position}</p>
                                    <p className="location">{items.location}</p>
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