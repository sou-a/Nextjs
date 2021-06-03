import { FormEventHandler, MouseEventHandler } from 'react'
import { DataProps } from './hooks'

type TodoBoxProps = {
  data: DataProps
  TodoListProps: TodoListProps
  TodoFormProps: TodoFormProps
}

export const TodoBox = ({
  data,
  TodoListProps,
  TodoFormProps,
}: TodoBoxProps) => {
  return (
    <section className="container vert-offset-top-2">
      <div id="todoBox" className="todoBox col-xs-6 col-xs-offset-3">
        <div className="well">
          <h1 className="vert-offset-top-0">To do:</h1>
          <TodoList
            data={data}
            removeNode={TodoListProps.removeNode}
            toggleComplete={TodoListProps.toggleComplete}
          />
          <TodoForm
            formValue={TodoFormProps.formValue}
            onTaskSubmit={TodoFormProps.onTaskSubmit}
            handleChange={TodoFormProps.handleChange}
          />
        </div>
      </div>
    </section>
  )
}

type TodoListProps = {
  data: DataProps
  //   removeNode: MouseEventHandler
  removeNode
  //   toggleComplete: MouseEventHandler
  toggleComplete
}

const TodoList = ({ data, removeNode, toggleComplete }: TodoListProps) => {
  const listNodes = data.map(function (listItem) {
    return (
      <TodoItem
        key={listItem.id}
        data={listItem.task}
        complete={listItem.complete}
        removeNode={() => removeNode(listItem.id)}
        toggleComplete={() => toggleComplete(listItem.id)}
      />
    )
  })
  return <ul className="list-group">{listNodes}</ul>
}

const TodoItem = ({ data, toggleComplete, removeNode, complete }) => {
  return (
    // <li className={classes}>
    <li>
      {data}
      <div className="pull-right" role="group">
        <button
          type="button"
          className="btn btn-xs btn-success img-circle"
          onClick={toggleComplete}
        >
          &#x2713;
        </button>{' '}
        <button
          type="button"
          className="btn btn-xs btn-danger img-circle"
          onClick={removeNode}
        >
          &#xff38;
        </button>
      </div>
    </li>
  )
}

type TodoFormProps = {
  formValue
  handleChange
  onTaskSubmit: FormEventHandler
}

const TodoForm = ({ formValue, handleChange, onTaskSubmit }: TodoFormProps) => {
  return (
    <div className="commentForm vert-offset-top-2">
      <hr />
      <div className="clearfix">
        <form
          className="todoForm form-horizontal"
          onSubmit={() => onTaskSubmit(formValue)}
        >
          <div className="form-group">
            <label htmlFor="task" className="col-md-2 control-label">
              Task
            </label>
            <div className="col-md-10">
              <input
                type="text"
                id="task"
                // ref="task"
                value={formValue}
                onChange={handleChange}
                className="form-control"
                placeholder="What do you need to do?"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-2 text-right">
              <input
                type="submit"
                value="Save Item"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
