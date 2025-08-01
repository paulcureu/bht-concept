import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/posts';
import { slugify } from '@/lib/utils';

const BlogPage = async () => {
  const allPosts = await getSortedPostsData();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-yellow-400">Blog</h1>
      <p className="mt-4 text-lg text-center text-gray-300">
        Articole, ghiduri și noutăți din domeniul electric și al energiei verzi.
      </p>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        {allPosts.map(({ id, title, date, excerpt, image, author, tags }) => (
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

export default BlogPage;
