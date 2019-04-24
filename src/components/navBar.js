// @flow

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./style.css"
import SocialIcons from "./socialIcons"

const NavigationBar = (props) => {
  const { classes, rest, image } = props
  return (
    <div>
    {image
      ? <div>
          <img src={require('../img/carson_kitchen_main_dining.jpg')} className="firstImage"/>
          <div className ="social"><SocialIcons /></div>
        </div>
      : null}
    <Navbar collapseOnSelect expand="lg" variant="light" className="borderbottom">
    <Navbar.Brand href="#home" className={image?"text-light":"dark"}>Navbar</Navbar.Brand>
    <Nav className="ml-auto text-light">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='collapseColor' />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav.Link href="#home" className={image?"textsize":"dark"}>HOME</Nav.Link>
      <Nav.Link href="#features" className={image?"textsize":"dark"}>FEATURES</Nav.Link>
      <Nav.Link href="#pricing" className={image?"textsize":"dark"}>PRICING</Nav.Link>
      <Nav.Link href="#home" className={image?"textsize":"dark"}><img src={require('../img/twittersmall.svg')}/></Nav.Link>
      <Nav.Link href="#features" className={image?"textsize":"dark"}><img src={require('../img/fbsmall.svg')}/></Nav.Link>
      <Nav.Link href="#pricing" className={image?"textsize":"dark"}><img src={require('../img/instasmall.svg')}/></Nav.Link>
    </Navbar.Collapse>
    </Nav>
  </Navbar>
  </div>
  )
}

export default NavigationBar
