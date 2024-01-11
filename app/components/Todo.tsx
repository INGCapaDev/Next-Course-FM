import { FC } from 'react';

type Props = {
  todo: {
    id: string;
    content: string;
    createdAt: Date;
    completed: boolean;
  };
};

const Todo: FC<Props> = ({ todo }) => {
  return (
    <div>
      <p>{todo.content}</p>
    </div>
  );
};
export default Todo;
