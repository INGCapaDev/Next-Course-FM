import { FC } from 'react';

interface DocsIdPageProps {
  params: {
    id: string;
  };
}

const DocsIdPage: FC<DocsIdPageProps> = ({ params }) => {
  return <div>HOLA {params.id}</div>;
};
export default DocsIdPage;
