import React from 'react'

type Props = {
  params: {creatorId:string}

}

function page({params: {creatorId}}:Props) {
  return (
    <div>{creatorId}</div>
  )
}

export default page
