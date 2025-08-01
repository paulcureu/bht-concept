import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

const BlogPage = () => {
  const allPosts = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-yellow-400">Blog</h1>
      <p className="mt-4 text-lg text-center text-gray-300">
        Articole, ghiduri și noutăți din domeniul electric și al energiei verzi.
      </p>

      <section className="mt-12 space-y-8">
        {allPosts.map(({ id, title, date, excerpt }) => (
          <article key={id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400">
              <Link href={`/blog/${id}`} className="hover:underline">
                {title}
              </Link>
            </h2>
            <p className="text-sm text-gray-400 mt-1">{date}</p>
            <p className="mt-4 text-gray-300">{excerpt}</p>
            <Link href={`/blog/${id}`} className="inline-block mt-4 text-yellow-500 hover:text-yellow-400 font-bold">
              Citește mai mult →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
