import { useState } from 'react'

export type DataProps = {
  id: string
  task: string
  complete: string
}[]

const initialData: DataProps = [
  { id: '00001', task: 'Wake up', complete: 'false' },
  { id: '00002', task: 'Eat breakfast', complete: 'false' },
  { id: '00003', task: 'Go to work', complete: 'false' },
]

export const useData = () => {
  const [data, setData] = useState(initialData)
  const [formValue, setFormValue] = useState('')

  const handleNodeAdd = ({ addNode }) => {
    setData([...data, addNode])
  }

  const handleNodeRemoval = (nodeId: string) => {
    // TODO: 非推奨の代替
    event.preventDefault()

    setData(data.filter((el: { id: any }) => el.id !== nodeId))
  }

  const handleSubmit = () => {
    event.preventDefault()

    if (!formValue) {
      return
    }

    const id = generateId().toString()
    const complete = 'false'
    setData(data.concat([{ id, task: formValue, complete }]))
  }

  const handleToggleComplete = (nodeId: string) => {
    event.preventDefault()

    for (var i in data) {
      if (data[i].id == nodeId) {
        data[i].complete = data[i].complete === 'true' ? 'false' : 'true'
        break
      }
    }
    setData([...data])
  }

  // TODO: event.target.valueってなんだ...？
  const handleChange = (event) => {
    setFormValue(event.target.value)
  }

  return {
    data,
    formValue,
    handleNodeAdd,
    handleNodeRemoval,
    handleSubmit,
    handleToggleComplete,
    handleChange,
  }
}

const generateId = () => {
  return Math.floor(Math.random() * 90000) + 10000
}
