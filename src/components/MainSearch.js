import React,{useState} from 'react'
import {Button,Card,Form,Col} from 'react-bootstrap'

const MainSearch = () => {
  const [search,setSearch] = useState('')
  const [zip,setZip] = useState('')

  const handleSearch = (e) => {
    e.preventDefault();
    alert({
      search,
      zip
    })
  }

  return (
    <Card className='mt-3'>
          <Card.Body>
            <Card.Title><strong>Search Local Products</strong></Card.Title>
            <Card.Text>
              Search by product name, brand, or keyword below. Enter your zip code for local results!
            </Card.Text>
            <Form>
              <Form.Row>
                <Col lg={9} md={12}>
                  <Form.Control
                    type='text'
                    size="lg"
                    placeholder='Search local products'
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    required
                  />
                </Col>
                <Col lg={3} md={12}>
                  <Form.Control
                      type='number'
                      size="lg"
                      placeholder='Zip Code'
                      onChange={e => setZip(e.target.value)}
                      value={zip}
                    />
                </Col>
              </Form.Row>
              <Button 
                variant="info" 
                size="lg" 
                block
                onSubmit={handleSearch}
                className='mt-2'
              >
                Search
              </Button>
            </Form>
          </Card.Body>
          </Card>
  )
}

export default MainSearch
