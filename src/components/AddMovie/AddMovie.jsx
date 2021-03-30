import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const AddMovie = ({ addMovie }) => {
  

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const [Date, setDate] = useState("");
  const [Rate, setRate] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitMovie = () => {
    let newMovie = {
      name: Name,
      description: Description,
      image: Image,
      date: Date,
      rating: Rate,
    };
    addMovie(newMovie);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
        </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title>Add a New Movie</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter Movie Name "
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter Movie Description "
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter Movie Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="URL"
                placeholder="Enter URL"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Rate</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setRate(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
};
