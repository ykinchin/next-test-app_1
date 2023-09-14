import { FC } from 'react';

type PostProps = {
  params: { id: string };
};

export const generateMetadata = ({ params: { id } }: PostProps) => {
  return {
    title: id
  };
};

const Post: FC<PostProps> = ({ params: { id } }) => {
  return <div>page {id}</div>;
};

export default Post;
