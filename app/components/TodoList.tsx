import { FC } from 'react';
import Todo from './Todo';

type Todo = {
  id: string;
  content: string;
  createdAt: Date;
  completed: boolean;
};

type Props = {
  todos: Todo[];
};

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
