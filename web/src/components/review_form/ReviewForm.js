import React from 'react'
import { Form, Button } from 'react-bootstrap'

function ReviewForm({ handleSubmit, reviewText, labelText, defaultValue }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={reviewText} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
  )
}

export default ReviewForm