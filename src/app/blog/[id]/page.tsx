import Image from 'next/image';
import Link from 'next/link';
import { getPostData, getAllPostIds } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths.map(path => ({
    id: path.params.id
  }));
}

const PostPage = async ({ params: paramsPromise }: { params: Promise<{ id: string }> }) => {
  const { id } = await paramsPromise;
  const postData = await getPostData(id);

  if (!postData) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">{postData.title}</h1>
        <p className="text-lg text-gray-400 mt-4">
          Publicat la {postData.date} de {postData.author}
        </p>
      </header>
      <Image
        src={postData.image}
        alt={`Imagine pentru ${postData.title}`}
        width={1200}
        height={630}
        className="w-full rounded-lg shadow-lg mb-8"
        priority
      />
      <div 
        className="prose prose-invert max-w-none prose-lg"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
      <footer className="mt-12 pt-8 border-t border-gray-700">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Categorii</h3>
        <div className="flex flex-wrap gap-2">
          {postData.tags.map(tag => (
            <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag)}`} className="inline-block bg-gray-700 text-yellow-400 text-sm font-semibold px-3 py-1 rounded-full hover:bg-gray-600">
              {tag}
            </Link>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default PostPage;
