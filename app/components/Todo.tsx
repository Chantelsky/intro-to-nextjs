'use client'

import { toggleTodoCompletion, removeTodo } from '@/utils/actions'
import { useState, useTransition } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TodoType } from '@/types'

type TodoProps = {
  todo: TodoType
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [isPending, startTransition] = useTransition()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => startTransition(() => toggleTodoCompletion(todo.id))}
          className="form-checkbox h-5 w-5 text-blue-600 mr-5"
        />
        <div className="flex-1">
          {new Date(todo.createdAt).toLocaleDateString('en-AU', {
            day: '2-digit',
            month: 'short',
            year: '2-digit',
          })}
        </div>
        <div className="flex-1">{todo.content}</div>
        <div className="flex-1">
          {todo.completedAt &&
            new Date(todo.completedAt).toLocaleDateString('en-AU', {
              day: '2-digit',
              month: 'short',
              year: '2-digit',
            })}
        </div>
        <button
          className="p-1"
          onClick={(e) => {
            e.stopPropagation()
            removeTodo(todo.id)
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Delete {todo.content}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    This is a permanent action. Are you sure you want to delete?
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={(e) => {
                  e.stopPropagation()
                  removeTodo(todo.id)
                }}
              >
                Delete
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Todo
