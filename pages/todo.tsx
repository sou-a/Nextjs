import { GetStaticProps } from 'next'
import { Todo } from '../components/todo'

const TodoPage = () => {
  return <Todo />
}

export default TodoPage

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
