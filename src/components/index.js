export function getSortedReservations (data) {
  const listedItems = data.sort((a, b) => {
    const timeA = new Date(a.getIn(['selectedReservationTimes', 'startReservationTime']))
    const timeB = new Date(b.getIn(['selectedReservationTimes', 'startReservationTime']))
    const hoursA = timeA.getHours()
    const hoursB = timeB.getHours()
    const minutesA = timeA.getMinutes()
    const minutesB = timeB.getMinutes()
    const numberA = hoursA.toString().concat(minutesA.toString())
    const numberB = hoursB.toString().concat(minutesB.toString())
    return numberA - numberB;
  })
    return listedItems
  }