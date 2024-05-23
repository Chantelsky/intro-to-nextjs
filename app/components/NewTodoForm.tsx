import { newTodo } from '@/utils/actions'

const NewTodoForm = ({}) => {
  return (
    <div className="flex justify-center">
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="border border-black/25 mr-4"
        />
        <button
          className="bg-indigo-600 rounded-md text-white p-1"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default NewTodoForm
