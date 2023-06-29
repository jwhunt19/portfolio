import Layout from '../../components/layout.js'
import { getPostIDs, getPostData } from '../../lib/posts.js'
import styles from './blog.module.css';

export default function Post({ postData }) {
  return (
    <Layout className={styles.container}>
      <div className='blogpost' dangerouslySetInnerHTML={{ __html: postData.content }} />
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
