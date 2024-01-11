'use client';
import { FC, useTransition } from 'react';
import { completeTodo } from '@/utils/actions';

type Props = {
  todo: {
    id: string;
    content: string;
    createdAt: Date;
    completed: boolean;
  };
};

const Todo: FC<Props> = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  const complete = () => startTransition(() => completeTodo(todo.id));

  return (
    <div
      className={`border border-white/20 max-w-xs mx-4 py-3 px-2 cursor-pointer ${
        todo.completed ? 'line-through text-green-800' : ''
      } `}
      onClick={complete}
    >
      {todo.content}
    </div>
  );
};
export default Todo;
