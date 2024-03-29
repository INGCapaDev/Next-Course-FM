'use server';
import db from '@/utils/db';
import { revalidatePath } from 'next/cache';

export const newTodo = async (formData: FormData) => {
  if (!formData.get('content') || formData.get('content') === '') {
    return;
  }
  await db.todo.create({
    data: {
      content: formData.get('content') as string,
    },
  });

  revalidatePath('/todos');
};

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  });

  revalidatePath('/todos');
};
