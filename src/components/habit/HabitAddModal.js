import React from "react"
import { Modal, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Habit.css"

export const HabitAddModal = ({showModal, setShowModal, handleClose}) => (
  <> 
    {showModal ? 
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
        
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
  : null}
  </>
)


{/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}