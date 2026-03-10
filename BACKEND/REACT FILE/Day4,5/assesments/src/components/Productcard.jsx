

const Productcard = ({transfer}) => {
   


  return (
    <>
    <div>
      <h1>{transfer.id}</h1>
      <p>{transfer.productname}</p>
      <p>{transfer.price}</p>
    </div>
    
    </>
  )
}

export default Productcard