const Input = ({type, ...otherProps}) => {
  return (
    <input type={type} className={`mb-5 border-gray border-solid border border-t-0 border-l-0 border-r-0 outline-0 py-1 px-2.5 ${type}`} id="reservationId" placeholder={otherProps.placeholder} />
  )
}

export default Input