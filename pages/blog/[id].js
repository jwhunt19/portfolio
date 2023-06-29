import Layout from '../../components/Layout.js'
import { getPostIDs, getPostData } from '../../lib/posts.js'

export default function Post({ postData }) {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostIDs()
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
