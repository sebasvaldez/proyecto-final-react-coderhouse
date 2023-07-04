import React from 'react'
import { Form } from 'react-bootstrap'
import SearchIcon from '../SearchIcon/SearchIcon.jsx' 

const FormSearch = () => {
  return (
    <Form className="d-flex" size="sm">
    <Form.Control
      type="search"
      placeholder="Buscar"
      className="me-2"
      aria-label="Search"
    />
    <SearchIcon />
   
  </Form>
  )
}

export default FormSearch