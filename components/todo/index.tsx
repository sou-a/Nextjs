import { TodoBox } from './presenter'
import { useData } from './hooks'

export const Todo = () => {
  const {
    data,
    formValue,
    handleNodeRemoval,
    handleSubmit,
    handleToggleComplete,
    handleChange,
  } = useData()
  const TodoListProps = {
    data: data,
    removeNode: handleNodeRemoval,
    toggleComplete: handleToggleComplete,
  }
  const TodoFormProps = { formValue, handleChange, onTaskSubmit: handleSubmit }

  return (
    <TodoBox
      data={data}
      TodoListProps={TodoListProps}
      TodoFormProps={TodoFormProps}
    />
  )
}
