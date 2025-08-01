import Image from 'next/image';
import Link from 'next/link';
import { getPostData, getAllPostIds } from '@/lib/posts';
import { slugify } from '@/lib/utils';
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
        className="prose prose-invert max-w-none prose-xl prose-slate 
                   prose-headings:text-yellow-400 prose-headings:font-bold prose-headings:text-center
                   prose-h1:text-5xl prose-h1:mt-16 prose-h1:mb-8
                   prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
                   prose-h3:text-3xl prose-h3:mt-10 prose-h3:mb-5
                   prose-p:text-gray-300 prose-p:leading-loose prose-p:mb-12 prose-p:text-lg prose-p:tracking-wide
                   prose-strong:text-yellow-300 prose-strong:font-semibold prose-strong:bg-yellow-400/10 prose-strong:px-1 prose-strong:py-0.5 prose-strong:rounded
                   prose-a:text-yellow-400 prose-a:underline hover:prose-a:text-yellow-300 prose-a:font-medium
                   prose-li:text-gray-300 prose-li:mb-3 prose-li:text-lg prose-li:leading-relaxed
                   prose-ul:space-y-3 prose-ul:my-8 prose-ul:pl-6
                   prose-ol:space-y-3 prose-ol:my-8 prose-ol:pl-6
                   prose-blockquote:border-l-4 prose-blockquote:border-l-yellow-400 prose-blockquote:bg-gray-800/50 
                   prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-300 
                   prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-lg
                   prose-code:bg-gray-800 prose-code:text-yellow-300 prose-code:px-3 prose-code:py-1.5 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
                   prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 prose-pre:p-6 prose-pre:rounded-lg prose-pre:my-8
                   prose-hr:border-gray-600 prose-hr:my-12"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
      <footer className="mt-12 pt-8 border-t border-gray-700">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Categorii</h3>
        <div className="flex flex-wrap gap-2">
          {postData.tags.map(tag => (
            <Link key={tag} href={`/blog/tag/${slugify(tag)}`} className="inline-block bg-gray-700 text-yellow-400 text-sm font-semibold px-3 py-1 rounded-full hover:bg-gray-600">
              {tag}
            </Link>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default PostPage;