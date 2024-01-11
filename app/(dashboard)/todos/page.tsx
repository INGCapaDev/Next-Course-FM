import TodoList from '@/app/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
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
