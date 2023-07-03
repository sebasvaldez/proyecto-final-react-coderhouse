import React from 'react'
import { Form } from 'react-bootstrap'

const FormSearch = () => {
  return (
    <Form className="d-flex" size="sm">
    <Form.Control
      type="search"
      placeholder="Buscar"
      className="me-2"
      aria-label="Search"
    />
    
   
  </Form>
  )
}

export default FormSearch