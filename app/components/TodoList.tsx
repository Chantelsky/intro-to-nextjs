import { TodoType } from '@/types'
import Todo from './Todo'

type TodoListProps = {
  todos: TodoType[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="flex justify-center mt-12">
      <div className="overflow-auto">
        <table className="min-w-100 bg-white shadow-md rounded-xl">
          <thead className="bg-blue-gray-100 text-gray-700">
            <tr className="flex space-x-20">
              <th className="py-3 px-4 text-left">Created At</th>
              <th className="py-3 px-4 text-left">Task</th>
              <th className="py-3 px-4 text-left">Completed At</th>
              <th className="py-3 px-4 text-left">{''}</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {todos.map((todo) => (
              <tr key={todo.id} className="border-b border-blue-gray-500">
                <td className="py-4 px-5">
                  <Todo todo={todo} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TodoList
