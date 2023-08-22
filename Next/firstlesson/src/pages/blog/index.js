import Link from "next/link";

export default function Blog({ articles }) {
  return (
    <div>
      {articles
        ? articles.map((article) => {
            return (
              <>
                <h2>{article.title}</h2>
                <Link href={`blog/${article.id}`}>Etrafli</Link>
              </>
            );
          })
        : "yoxdur"}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const articles = await res.json();

  console.log(articles);

  return {
    props: {
      articles,
    },
  };
};
