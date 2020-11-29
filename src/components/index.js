export function getSortedReservations (data) {
  const listedItems = data.sort((a, b) => {
    const timeA = new Date(a.getIn(['selectedReservationTimes', 'startReservationTime']))
    const timeB = new Date(b.getIn(['selectedReservationTimes', 'startReservationTime']))
    const hoursA = timeA.getHours()
    const hoursB = timeB.getHours()
    const minutesA = timeA.getMinutes()
    const minutesB = timeB.getMinutes()
    let numberA = hoursA.toString().concat(minutesA.toString())
    let numberB = hoursB.toString().concat(minutesB.toString())
    // there is no 1:00 reservation, so this work around will always
    // make the number 10:00 the largest
    if (numberA === '100') {numberA = 1000}
    if (numberB === '100') {numberB = 1000}
    return numberA - numberB;
  })
    return listedItems
  }