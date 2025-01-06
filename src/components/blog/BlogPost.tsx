import React from 'react';
import { Calendar, User, Tag, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { BlogPost as BlogPostType } from '../../types/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <>
      <Helmet>
        <title>{post.seo.metaTitle || post.title}</title>
        <meta name="description" content={post.seo.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.seo.keywords?.join(', ')} />
        {post.seo.canonicalUrl && <link rel="canonical" href={post.seo.canonicalUrl} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={post.seo.ogTitle || post.title} />
        <meta property="og:description" content={post.seo.ogDescription || post.excerpt} />
        <meta property="og:image" content={post.seo.ogImage || post.image} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={post.seo.twitterCard || 'summary_large_image'} />
        <meta name="twitter:title" content={post.seo.ogTitle || post.title} />
        <meta name="twitter:description" content={post.seo.ogDescription || post.excerpt} />
        <meta name="twitter:image" content={post.seo.ogImage || post.image} />
        
        {/* Article Metadata */}
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        {post.lastModified && (
          <meta property="article:modified_time" content={new Date(post.lastModified).toISOString()} />
        )}
        <meta property="article:author" content={post.author.name} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>

      <article className="max-w-4xl mx-auto" itemScope itemType="http://schema.org/BlogPosting">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-4" itemProp="headline">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <time itemProp="datePublished" dateTime={new Date(post.date).toISOString()}>
                {post.date}
              </time>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span itemProp="author" itemScope itemType="http://schema.org/Person">
                <span itemProp="name">{post.author.name}</span>
                {post.author.title && (
                  <span className="text-gray-500 ml-2">({post.author.title})</span>
                )}
              </span>
            </div>
            {post.readingTime && (
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readingTime} read</span>
              </div>
            )}
          </div>
        </header>

        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
          itemProp="image"
        />

        <div className="prose max-w-none" itemProp="articleBody">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-gray-600" />
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {post.lastModified && (
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Last updated: {post.lastModified}
              </div>
            )}
          </div>
        </footer>
      </article>
    </>
  );
};

export default BlogPost;