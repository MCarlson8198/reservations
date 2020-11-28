import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATIONS } from '../url/constants'

export default function GuestDetails () {
  return (
    <div>
      <h1>Guest Details</h1>
      <div>
        <Link to={URL_RESERVATIONS}>Home</Link>
      </div>
    </div>
  )
}
