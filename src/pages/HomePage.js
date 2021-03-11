import React,{useState} from 'react'
import {Row,Col,ButtonGroup,Button,Card,Form} from 'react-bootstrap'

const HomePage = () => {
  const PAGE_MODES = ['shopper','business']
  const [mode,setMode] = useState(PAGE_MODES[0])
  const [search,setSearch] = useState('')
  const [zip,setZip] = useState('')

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      search,
      zip
    })
  }

  return (
    <div className='page homepage text-center'>
      <Row>
        <Col>
          <ButtonGroup>
            <Button 
              variant='success' 
              onClick={() => setMode(PAGE_MODES[0])}
              disabled={mode === PAGE_MODES[0]}
            >
              For Shoppers
            </Button>
            <Button 
              variant='success' 
              onClick={() => setMode(PAGE_MODES[1])}
              disabled={mode === PAGE_MODES[1]}
            >
              For Business
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={12}>
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
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
