import 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';
import { blogPosts } from '../data/blog-posts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-16">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <BlogPost post={post} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;