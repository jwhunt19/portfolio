import Layout from '../../components/layout.js'
import { getAllPostIds, getPostData } from '../../lib/posts.js'
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'));

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
