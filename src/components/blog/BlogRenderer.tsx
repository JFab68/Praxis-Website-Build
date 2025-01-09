import React from 'react';
import Card from '../ui/Card';
import CardContent from '../ui/CardContent';

interface BlogPost {
  title: string;
  content: string;
  date?: string;
}

const BlogRenderer = ({ post }: { post: BlogPost }) => {
  const sanitizeHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const tempDiv = doc.body;
    
    // Remove scripts
    const scripts = tempDiv.getElementsByTagName('script');
    while (scripts.length > 0) {
      scripts[0].parentNode?.removeChild(scripts[0]);
    }

    // Remove dangerous attributes
    const elements = tempDiv.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const attrs = element.attributes;
      for (let j = attrs.length - 1; j >= 0; j--) {
        const attr = attrs[j];
        if (attr.name.startsWith('on') || attr.name === 'href' && attr.value.startsWith('javascript:')) {
          element.removeAttribute(attr.name);
        }
      }
    }

    return tempDiv.innerHTML;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="pt-6">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        {post.date && (
          <p className="text-gray-500 mb-4">
            {new Date(post.date).toLocaleDateString()}
          </p>
        )}
        <div 
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }} 
        />
      </CardContent>
    </Card>
  );
};

export default BlogRenderer;
