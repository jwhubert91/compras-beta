import React from 'react'
import {Row,Col} from 'react-bootstrap'
import MainSearch from '../components/MainSearch'
import BusinessSignUp from '../components/BusinessSignUp'

const HomePage = ({mode}) => {
  return (
    <div className='page homepage text-center'>
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={12}>
          {mode === 'shopper' ? <MainSearch /> : <BusinessSignUp />}
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
