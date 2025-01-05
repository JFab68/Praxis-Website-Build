import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface BlogEditorProps {
  initialValue?: string;
  onChange: (content: string) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ initialValue = '', onChange }) => {
  return (
    <Editor
      apiKey={process.env.VITE_TINYMCE_API_KEY}
      initialValue={initialValue}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
      }}
      onEditorChange={onChange}
    />
  );
};

export default BlogEditor;