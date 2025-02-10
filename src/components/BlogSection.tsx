import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';

const BlogSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const postsToShow = 3;
  const totalPosts = blogPosts.length;

  const handleNext = () => {
    setVisibleIndex(prev => Math.min(prev + 1, totalPosts - postsToShow));
  };

  const handlePrev = () => {
    setVisibleIndex(prev => Math.max(prev - 1, 0));
  };

  const visiblePosts = blogPosts.slice(visibleIndex, visibleIndex + postsToShow);

  return (
    <section className="relative py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif font-bold text-h2 text-text-primary">
            Latest Updates
          </h2>
          <p className="max-w-2xl mx-auto text-body text-text-secondary">
            Insights and stories from the frontlines of criminal legal system reform
          </p>
        </div>

        <div className="relative">
          {visibleIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-3 -translate-y-1/2 rounded-full shadow-lg top-1/2 hover:bg-black/5"
              aria-label="Previous posts"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {visiblePosts.map((blog) => (
              <article key={blog.id} className="overflow-hidden rounded-lg shadow-md card-hover">
                <img
                  src={blog.image}
                  alt={blog.imageAlt}
                  className="object-cover w-full h-48 image-loading"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blog.date}
                  </div>
                  <h3 className="text-xl font-semibold text-[#000080] mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-[#000000] mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {blog.author.name}</span>
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-[#B0C4DE] hover:text-[#B0C4DE]/80 font-medium inline-flex items-center group"
                    >
                      Read More <span className="transition-transform transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visibleIndex < totalPosts - postsToShow && (
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-3 -translate-y-1/2 rounded-full shadow-lg top-1/2 hover:bg-black/5"
              aria-label="Next posts"
            >
              {visibleIndex === totalPosts - postsToShow - 1 ? (
                'See All Blogs'
              ) : (
                <ChevronRight className="w-6 h-6" />
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
