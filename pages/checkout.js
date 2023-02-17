import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Col, Row } from 'reactstrap'
import Cart from '../components/Cart'
import CheckoutForm from '../components/Checkout/CheckoutForm'
const checkout = () => {
  const stripePromise = loadStripe(
    'pk_test_51Mc04vJlnPJdbCt2XOQ3J2r5ntN0IvDyndIu7WJReXprfoUy5iVvDv7sjxB9i4oBrfcCm8fSCeyaS3KKGZjyZhI500uFpeSgn5'
  )
  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20, fontSize: 20, textAlign: 'center' }}>
          チェックアウト
        </h1>
        <Cart />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  )
}

export default checkout
