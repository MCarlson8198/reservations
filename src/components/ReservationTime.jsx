import React from 'react';
import { Link } from 'react-router-dom'
import { URL_GUEST_DETAILS } from '../url/constants'

export default function ReservationDetails () {
  return (
    <div>
      <h1>Reservation Time</h1>
      <div>
      <Link to={URL_GUEST_DETAILS} >Guest Details</Link>
      </div>
    </div>
  )
}