import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">By {post.author.name}</span>
              <Link
                to={`/blog/${post.slug}`}
                className="text-navy hover:text-teal inline-flex items-center group"
              >
                Read More 
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
