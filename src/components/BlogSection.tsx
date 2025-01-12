import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      title: "Our Fifth Year in the Fight for Independent Oversight of the ADCRR and We Have Never Been More Stoked",
      excerpt: "As we approach the 2025 legislative session, momentum continues to build with Governor Hobbs' Executive Order and growing lawmaker support for independent oversight of Arizona's corrections system.",
      date: "December 4, 2024",
      author: "John Fabricius",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
      link: "/blog/independent-oversight-2025"
    },
    {
      title: "Breaking the Cycle: A New Approach to Recovery",
      excerpt: "Evidence-based practices and risk mitigation strategies are transforming recovery support nationwide, offering new hope and proven results.",
      date: "December 8, 2024",
      author: "J Alexandria Hunt-Garcia",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      link: "/blog/new-approach-recovery"
    },
    {
      title: "Legislative Update - January 2025",
      excerpt: "Comprehensive coverage of upcoming reforms including independent oversight, home confinement, and SNAP benefits. New legislative support and detailed implementation plans ready for the upcoming session.",
      date: "December 11, 2024",
      author: "Jessica Johnson",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
      link: "/blog/legislative-update-2025"
    }
  ];

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
            Latest Updates
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Insights and stories from the frontlines of criminal legal system reform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <img
                src={blog.image}
                alt={blog.title}
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
                  <span className="text-sm text-gray-500">By {blog.author}</span>
                  <Link
                    to={blog.link}
                    className="text-[#B0C4DE] hover:text-[#B0C4DE]/80 font-medium inline-flex items-center group"
                  >
                    Read More <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
