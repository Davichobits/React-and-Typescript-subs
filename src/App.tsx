import { useState, useEffect } from 'react'
import { Form } from './components/Form'
import { List } from './components/List'
import './App.css'

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'http://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'david',
    subMonths: 7,
    avatar: 'http://i.pravatar.cc/150?u=sergio_serrano',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum, iure nesciunt est impedit quaerat. Sunt tenetur suscipit nostrum nobis et. Eos sequi rerum minus, earum magnam corrupti autem et!'
  }
]

interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

interface AppState {
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <div>
      <h1>Subs</h1>
      <Form />
      <List 
        subs={subs}
      />
    </div>
  )
}

export default App
