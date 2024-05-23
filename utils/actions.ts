'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  })
  revalidatePath('/todos')
  //nextjs v14 allows server action responses
  return todo
}

export const toggleTodoCompletion = async (id: string) => {
  const todo = await db.todo.findUnique({ where: { id } })

  if (todo) {
    await db.todo.update({
      where: { id },
      data: {
        completed: !todo.completed,
        completedAt: todo.completed ? null : new Date(),
      },
    })
  }

  revalidatePath('/todos')
}

export const removeTodo = async (id: string) => {
  await db.todo.delete({
    where: { id },
  })
  revalidatePath('/todos')
}
