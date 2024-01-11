import NewTodoForm from '@/app/components/NewTodoForm';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;
