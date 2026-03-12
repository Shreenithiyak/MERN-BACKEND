import Image from 'next/image'

function IssueCard({issue}){

 return(
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
    <Image src={`/assets/${issue.image}`} width="100" height="100" className="rounded-full" />
    <h3 className="text-2xl font-semibold">{issue.title}</h3>
    <p className="text-gray-600">{issue.description}</p>
    <p className="text-gray-600">Time: {issue.time}</p>
    <p className="text-gray-600">Faculty: {issue.faculty}</p>
  </div>
 )

}

export default IssueCard
