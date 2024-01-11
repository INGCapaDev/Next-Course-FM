import TodoList from '@/app/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return await db.todo.findMany({});
};

const TodosPage = async () => {
  const todos = await getData();
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};
export default TodosPage;
