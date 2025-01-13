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
    <section className="py-20 bg-[#F8F8F8] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
            Latest Updates
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Insights and stories from the frontlines of criminal legal system reform
          </p>
        </div>

        <div className="relative">
          {visibleIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 z-10"
              aria-label="Previous posts"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visiblePosts.map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img
                  src={blog.image}
                  alt={blog.imageAlt}
                  className="w-full h-48 object-cover image-loading"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
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
                      Read More <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visibleIndex < totalPosts - postsToShow && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 z-10"
              aria-label="Next posts"
            >
              {visibleIndex === totalPosts - postsToShow - 1 ? (
                'See All Blogs'
              ) : (
                <ChevronRight className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
