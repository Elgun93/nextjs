import { useRouter } from "next/router";

import Link from "next/link";

export default function SinglePost({ article }) {
  const router = useRouter();

  const { title, body } = article;

  return (
    <>
      <h1>{router.query.id}</h1>
      <h2>{title}</h2>
      <h3>{body}</h3>
      <Link href="/">Home page</Link>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
