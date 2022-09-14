import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile(props) {
  const { id } = useParams();
  const { users } = props;

  console.log(users[id])
  return (
    <div>
      


    </div>
  )
}
