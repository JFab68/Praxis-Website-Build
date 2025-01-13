import 'react';
import BlogList from '../components/blog/BlogList';
import { blogPosts } from '../data/blog-posts';

const BlogPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Updates
            </h1>
            <p className="text-xl text-gray-200">
              Insights and stories from the frontlines of criminal legal system reform
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BlogList posts={blogPosts} />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;