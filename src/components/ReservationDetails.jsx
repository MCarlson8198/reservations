import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATIONS } from '../url/constants'

export default function ReservationDetails () {
  return (
    <div>
      <h1>Reservation Details</h1>
      <div>
      <Link to={URL_RESERVATIONS} >Reservations</Link>
      </div>
    </div>
  )
}