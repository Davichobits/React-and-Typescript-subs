import { useState } from "react"
import { Sub } from "./types"

interface FormState {
  inputValues: Sub
}

export const Form = () => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: '',
  });

  const handleSubmit = () => {}

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
      <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths" />
      <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
      <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
      <input type="submit" value='Save new sub'/>
    </form>
  )
}
