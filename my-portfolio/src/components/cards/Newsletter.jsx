import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Newsletter = () => {
  return (
        <Col lg={12}>
          <div className="newsletter-bx wow slideInUp">
            <Row>
              <Col lg={12} md={6} xl={5}>
                <h3>Suscribete a mi Blog</h3>
            
              </Col>
              <Col md={6} xl={7}>
                <a href="https://jonarosero.hashnode.dev" target='_blank'>
                  <div className="new-email-bx-button">
                    
                Ver más
                  </div></a>
                
              </Col>
            </Row>
          </div>
        </Col>
    
  )
}

export default Newsletter