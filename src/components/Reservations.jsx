import React from 'react';
import { Link } from 'react-router-dom'
import { URL_PARTY_SIZE, URL_RESERVATION_DETAILS } from '../url/constants'

export default function Reservations () {
  return (
    <div>
      <h1>Reservations</h1>
      <div>
        <Link to={URL_PARTY_SIZE} >Party Size</Link>
      </div>
      <div>
        <Link to={URL_RESERVATION_DETAILS} >Reservation Details</Link>
      </div>
    </div>
  )
}