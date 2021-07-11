import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Flex, Wrapper} from './styles'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from './Media/Logo2.png'
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';

const Navbars = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <Wrapper>
            <Navbar expand="lg" variant="light" bg="transparent" style={{paddingTop: '1em'}}>
                <Navbar.Brand href="/">
                    <img src={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleOpen} style={{border: 'none'}}>
                    {open ?
                        <CloseIcon fontSize="large" style={{ color: 'white', transition: 'ease 0.5'}} />
                        :
                        <DehazeIcon fontSize="large" style={{ color: 'white', transition: 'ease 0.5' }} />

                    }
                </Navbar.Toggle>
                
                <Navbar.Collapse className="justify-content-end menu" >
                    <Flex direction="row" justify="center">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        <NavDropdown title="BRANDS" id="basic-nav-dropdown" className="dropdown">
                            <NavDropdown.Item href="#action/3.1">CAFÉ RUCI</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">123</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">WARGET</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="/career">CAREER</Nav.Link>
                    </Flex>
                </Navbar.Collapse>
            </Navbar>
        </Wrapper>
        
    );

}

export default Navbars