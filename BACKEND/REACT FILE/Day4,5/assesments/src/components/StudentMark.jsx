

const StudentMark = ({check}) => {
  return (
    <>
    <div>
       {check.map((e,i)=>(
     <p key={i}>{e.name}:{e.Mark >=40?"pass":"fail"}</p>
       ))}

    </div>
    </>
  )
}

export default StudentMark