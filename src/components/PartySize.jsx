import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATION_TIME } from '../url/constants'

export default function ReservationDetails () {
  return (
    <div>
      <h1>Party Size</h1>
      <div>
      <Link to={URL_RESERVATION_TIME} >Reservation Time</Link>
      </div>
    </div>
  )
}