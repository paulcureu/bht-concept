import Link from 'next/link';
import Image from 'next/image';
import { getPostsByTag, getAllTags } from '@/lib/posts';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map(tag => ({
    tag: slugify(tag), // Generează pagini pe baza slug-ului
  }));
}

const TagPage = async ({ params: paramsPromise }: { params: Promise<{ tag: string }> }) => {
  const { tag: slug } = await paramsPromise;
  
  const allTags = await getAllTags();
  // Găsește tag-ul original care corespunde slug-ului
  const originalTag = allTags.find(t => slugify(t) === slug);

  if (!originalTag) {
    notFound();
  }

  const posts = await getPostsByTag(originalTag);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-yellow-400">
        Articole în categoria: <span className="text-white">{originalTag}</span>
      </h1>
      
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        {posts.map(({ id, title, date, excerpt, image, author, tags }) => (
          <article key={id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <Link href={`/blog/${id}`} className="block">
              <Image
                src={image}
                alt={`Imagine reprezentativă pentru articolul ${title}`}
                width={600}
                height={315}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-6 flex-grow flex flex-col">
               <div className="mb-4">
                {tags.map(t => (
                  <Link key={t} href={`/blog/tag/${slugify(t)}`} className="inline-block bg-gray-700 text-yellow-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full hover:bg-gray-600">
                    {t}
                  </Link>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-yellow-400">
                <Link href={`/blog/${id}`} className="hover:underline">
                  {title}
                </Link>
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                {date} de {author}
              </p>
              <p className="mt-4 text-gray-300 flex-grow">{excerpt}</p>
              <Link href={`/blog/${id}`} className="inline-block mt-4 text-yellow-500 hover:text-yellow-400 font-bold self-start">
                Citește mai mult →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default TagPage;