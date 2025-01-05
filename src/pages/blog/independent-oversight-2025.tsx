import React from 'react';
import RelatedPosts from '../../components/RelatedPosts';
import { Image } from '../../components/Image';

const currentPost = {
  title: "Our Fifth Year in the Fight for Independent Oversight",
  excerpt: "As we approach the 2025 legislative session, momentum continues to build...",
  date: "December 4, 2024",
  author: "John Fabricius",
  image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
  link: "/blog/independent-oversight-2025",
  tags: ["oversight", "reform", "legislation"]
};

const allPosts = [
  {
    title: "Breaking the Cycle: A New Approach to Recovery",
    excerpt: "Evidence-based practices and risk mitigation strategies are transforming recovery support nationwide.",
    date: "December 8, 2024",
    author: "J Alexandria Hunt-Garcia",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    link: "/blog/new-approach-recovery",
    tags: ["recovery", "health", "reform"]
  },
  {
    title: "Legislative Update - January 2025",
    excerpt: "Comprehensive coverage of upcoming reforms including independent oversight.",
    date: "December 11, 2024",
    author: "Jessica Johnson",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    link: "/blog/legislative-update-2025",
    tags: ["legislation", "reform", "oversight"]
  }
];

const IndependentOversightArticle = () => {
  return (
    <div className="pt-24">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Our Fifth Year in the Fight for Independent Oversight of the ADCRR and We Have Never Been More Stoked
          </h1>
          <div className="text-gray-600 mb-4">December 4, 2024</div>
          <div className="text-gray-600">By John Fabricius</div>
        </header>

        <div className="prose max-w-none">
          <p className="lead mb-8">
            As we approach the 2025 legislative session, momentum continues to build with Governor Hobbs' Executive Order and growing lawmaker support for independent oversight of Arizona's corrections system.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Legislative Progress</h2>
          <p>
            Our bill is returning to the 2025 legislative session with unprecedented bipartisan support. The groundwork laid by Governor Hobbs' Executive Order has created a strong foundation for comprehensive oversight reform.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Executive Order Impact</h2>
          <p>
            Governor Hobbs' Executive Order establishing preliminary oversight measures has demonstrated the immediate positive impact of external monitoring. Initial findings have reinforced the urgent need for permanent, independent oversight.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Growing Support</h2>
          <p>
            Current discussions with lawmakers show increasing recognition of oversight's importance. The oversight committee's recent report has provided compelling evidence for reform, strengthening our position heading into January.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Looking Ahead</h2>
          <p>
            With the 2025 session approaching, we're optimistic about achieving our goal of establishing permanent, independent oversight of Arizona's corrections system. The combination of executive support, legislative momentum, and public awareness creates an unprecedented opportunity for meaningful reform.
          </p>
        </div>
      </article>
      <RelatedPosts currentPost={currentPost} allPosts={allPosts} />
    </div>
  );
};

export default IndependentOversightArticle;