import React from 'react'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import {PaymentElement} from '@stripe/react-stripe-js';
import style from "./donations.module.css"

const stripePromise = loadStripe('pk_test_51OMBYKAtlG3GSetRXulDMB0WuUUBPZduz4GazK4uDrA4X6A65MS9kEy9pBN0W4P2gkyqhUJ6OaIsxBSS7ONg2Vd300b9hVE0qv');

const CheckoutForm = () => {

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
  }

    return (
      <div className={style.position}>
        <form onSubmit={handleSubmit} className={style.all}>
          <div>
            <CardElement/>
          </div>
          <button>
            Pagar
          </button>
        </form>
      </div>
    );
  };

function DonationsPay() {
    return (
      <div className={style.contenedor}>
        <div>
          <p>Gracias a tu donacion vamos a poder seguir a yudando a nustros animalitos queridos </p>
        </div>
        <div>
          <Elements stripe={stripePromise} >
            <CheckoutForm />
          </Elements>
      </div>
    </div>
  )
}

export default DonationsPay 