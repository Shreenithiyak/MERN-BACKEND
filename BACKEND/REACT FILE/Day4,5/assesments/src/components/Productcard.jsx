

const Productcard = ({props}) => {
  return (
    <>
    <div>
      <h1>{props.Data.id}</h1>
      <p>{props.Data.productname}</p>
      <p>{props.Data.price}</p>
    </div>
    
    </>
  )
}

export default Productcard