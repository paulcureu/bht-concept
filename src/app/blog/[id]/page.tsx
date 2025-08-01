import { getPostData, getAllPostIds } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

// Funcție pentru a genera paginile statice la build time
export function generateStaticParams() {
  const paths = getAllPostIds();
  // Rename id to slug to match the folder name
  return paths.map(path => ({
    id: path.params.id
  }));
}

const PostPage = async ({ params }: Props) => {
  try {
    const postData = await getPostData(params.id);

    return (
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400">{postData.title}</h1>
        <p className="text-sm text-gray-400 mt-2">{postData.date}</p>
        <div 
          className="mt-8 prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
};

export default PostPage;
