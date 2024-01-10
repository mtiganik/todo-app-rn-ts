

export  const formatDateToUI = (dateString: string) => {
  const options = {day: '2-digit', month:'2-digit', year: 'numeric'};
  return new Date(dateString).toLocaleDateString(undefined)
}

export const formatDateToISO = (dateString: string) => {
  const parsedDate = new Date(dateString)
  return parsedDate.toISOString();
}