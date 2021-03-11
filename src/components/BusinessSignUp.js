import React,{useState} from 'react'
import {Button,Card,Form,Col} from 'react-bootstrap'

const BusinessSignUp = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault();
    alert('Thanks for signing up!')
  }

  return (
    <Card className='mt-3'>
          <Card.Body>
            <Card.Title><strong>Business Sign Up</strong></Card.Title>
            <Card.Text>
              Sign up for Compras today and start posting your products online for free in minutes.
            </Card.Text>
            <Form>
              <Form.Row>
                <Col xs={12}>
                  <Form.Control
                    type='email'
                    size="lg"
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </Col>
                <Col xs={12}>
                  <Form.Control
                      type='password'
                      size="lg"
                      placeholder='Password'
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                </Col>
              </Form.Row>
              <Button 
                variant="info" 
                size="lg" 
                block
                onSubmit={handleSignUp}
                className='mt-2'
              >
                Sign Up
              </Button>
            </Form>
            <p className='mt-3'>
              Already a business user?{' '}
              <a 
                href='#'
              >
                Login here
              </a>
            </p>
          </Card.Body>
          </Card>
  )
}

export default BusinessSignUp
