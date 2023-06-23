export default function Blog({ blogData }) {
  return (
    <>
      {blogData.map((blogItem) => (
        <article>
          <header>{blogItem.title}</header>
          <p>{blogItem.teaser}</p>
          <a href={"#" + blogItem.id}>See more</a>
        </article>
      ))}
    </>
  );
}
