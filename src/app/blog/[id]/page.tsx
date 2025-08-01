import Image from 'next/image';
import Link from 'next/link';
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
  return paths.map(path => ({
    id: path.params.id
  }));
}

const PostPage = async ({ params }: Props) => {
  try {
    const postData = await getPostData(params.id);

    return (
      <article className="max-w-4xl mx-auto">
        {/* Titlu si informatii autor */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">{postData.title}</h1>
          <p className="text-lg text-gray-400 mt-4">
            Publicat la {postData.date} de {postData.author}
          </p>
        </header>

        {/* Imagine reprezentativa */}
        <Image
          src={postData.image}
          alt={`Imagine pentru ${postData.title}`}
          width={1200}
          height={630}
          className="w-full rounded-lg shadow-lg mb-8"
          priority
        />

        {/* Continut articol */}
        <div 
          className="prose prose-invert max-w-none prose-lg"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />

        {/* Sectiune Tag-uri */}
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
  } catch (error) {
    notFound();
  }
};

export default PostPage;
