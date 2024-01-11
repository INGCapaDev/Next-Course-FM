import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          type="text"
          name="content"
          placeholder="What's on your mind?"
          className="bg-slate-800 bg-opacity-25 border border-slate-700 m-4"
        />
        <button
          type="submit"
          className="bg-slate-800 bg-opacity-25 border border-slate-700 m-4"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default NewTodoForm;
