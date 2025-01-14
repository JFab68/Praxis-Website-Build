import Card from '../ui/Card';
import CardContent from '../ui/CardContent';
import { Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
  title: string;
  content: string;
  date?: string;
  author?: {
    name: string;
    title?: string;
  };
  readTime?: number;
  image?: string;
  imageAlt?: string;
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
        <h1 className="text-4xl font-bold text-center text-black mb-6">
          {post.title.split(':').map((line, i) => (
            <span key={i} className="block">
              {line.trim()}
              {i < post.title.split(':').length - 1 ? ':' : ''}
            </span>
          ))}
        </h1>
        {post.image && (
          <img
            src={post.image}
            alt={post.imageAlt || ''}
            className="w-full h-[400px] object-cover rounded-lg mb-4"
          />
        )}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8 justify-center items-center">
          {post.date && (
            <>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              {(post.author || post.readTime) && <span className="text-gray-300">|</span>}
            </>
          )}
          {post.author && (
            <>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author.name}
                {post.author.title && (
                  <span className="text-gray-500 ml-1">({post.author.title})</span>
                )}
              </span>
              {post.readTime && <span className="text-gray-300">|</span>}
            </>
          )}
          {post.readTime && (
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
          )}
        </div>
        <div 
          className="prose prose-slate max-w-none mt-6"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }} 
        />
      </CardContent>
    </Card>
  );
};

export default BlogRenderer;
