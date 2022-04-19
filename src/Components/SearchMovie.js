import React, { useId, useState } from 'react'
import { Button, Container, Form, FormControl, Modal, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function SearchMovie({Addmovie,search,setSearch}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [rate, setRate] = useState(0)
  const id=useId()
  console.log(id)
  return (
    <div>
        
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand >Movies App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
         <Nav.Link as={Link} to='/'>Home</Nav.Link> 
        <Nav.Link  as={Link} to='/about' >About</Nav.Link> 
        <Nav.Link  as={Link} to='/contact' >Contact</Nav.Link> 
        <Nav.Link  as={Link} to='/movies' >Movies</Nav.Link>       
          
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        
        <>
        <Button style={{width:'200px'}}variant="primary" onClick={handleShow}>Add Movie</Button>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header >
        <label>Title</label>
        <input  type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>posterUrl</label>
        <input  type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
        <label>Description</label>
        <input  type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <label>Rating</label>
        <input  type="number" value={rate} onChange={(e)=>setRate(e.target.value)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{Addmovie({id:id,title,url,description,rate});handleClose()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      
        </>
        
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>






    </div>
  )
}

export default SearchMovie