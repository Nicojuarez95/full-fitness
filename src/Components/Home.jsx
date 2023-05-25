import React from 'react'
import { Link as Anchor} from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div>index</div>
    <Anchor to={"/productos"}>productos</Anchor>
    </>
  )
}
