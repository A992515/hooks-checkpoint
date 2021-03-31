import React from 'react'
import {Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
import "./Navbar.css"
function Searchbar({ getSearchRate, getSearchTitle }) {

    const ratingChanged = (newRating) => {
        getSearchRate(newRating)
    };
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Movie App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline className="InputArea">
            <ReactStars className="star"
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={(e) => getSearchTitle(e.target.value)}/>
    <Button variant="outline-info">Search</Button>
  </Form>
        </Navbar>
    )
}

export default Searchbar
