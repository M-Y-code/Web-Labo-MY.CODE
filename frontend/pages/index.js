import Head from "next/head";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  return (
    <>
      <Head>
        <title>Web-Labo-M.Y.CODE</title>
      </Head>
      <h1>Hello!world!</h1>
      <h2>{heroPost.title}</h2>
      <h2>{heroPost.excerpt}</h2>
      <h2>{heroPost.slug}</h2>
      <h2>{heroPost.date}</h2>
      {console.log(heroPost)}
    </>
  );
}

//全ての投稿取得
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
}
