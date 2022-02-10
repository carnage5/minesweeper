import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Board from '../components/board'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router=useRouter();
  const [pName,setpName]=useState('')
  const [gCode,setgCode]=useState('')
  const login=(e)=>{
    e.preventDefault()
    console.log(pName);
    console.log(gCode);
    router.push('/game')
  }
  return (
    <div>
      {/* <Board /> */}
      <form onSubmit={login}>
      <h5>enter name</h5>
      <input type="text" onChange={e=>setpName(e.target.value)}/>
      <br/>
      <input type="text" placeholder="gamecode" onChange={e=>setgCode(e.target.value)}/>
      <br/>
      <button type="submit">Enter</button>
      </form>
    </div>
  )
}
