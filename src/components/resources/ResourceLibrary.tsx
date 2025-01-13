import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { useResources} from '../../services/resources';

const ResourceLibrary: React.FC = () => {
  const { resources, loading, error } = useResources();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  if (loading) return <div>Loading resources...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="all">All Resources</option>
          <option value="advocacy">Advocacy Materials</option>
          <option value="education">Educational Resources</option>
          <option value="research">Research Publications</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {resource.title}
            </h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {resource.type} • {resource.size}
              </span>
              <a
                href={resource.url}
                download
                className="text-navy hover:text-teal"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;