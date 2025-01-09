import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'independent-oversight-2025',
    title: 'Our Fifth Year in the Fight for Independent Oversight of the ADCRR and We Have Never Been More Stoked',
    date: 'December 4, 2024',
    author: {
      name: 'John Fabricius',
      title: 'Executive Director & Co-founder',
      bio: 'Formerly incarcerated for 15 years in the Arizona Department of Corrections',
      image: '/src/assets/images/John.webp'
    },
    excerpt: 'As we approach the 2025 legislative session, momentum continues to build with Governor Hobbs\' Executive Order and growing lawmaker support for independent oversight of Arizona\'s corrections system.',
    content: `
      <h1>Our Fifth Year in the Fight for Independent Oversight</h1>
      <p>As we approach the 2025 legislative session, momentum continues to build with Governor Hobbs' Executive Order and growing lawmaker support for independent oversight of Arizona's corrections system.</p>
      <h2>Legislative Progress</h2>
      <p>Our bill is returning to the 2025 legislative session with unprecedented bipartisan support. The groundwork laid by Governor Hobbs' Executive Order has created a strong foundation for comprehensive oversight reform.</p>
      <h2>Executive Order Impact</h2>
      <p>Governor Hobbs' Executive Order establishing preliminary oversight measures has demonstrated the immediate positive impact of external monitoring. Initial findings have reinforced the urgent need for permanent, independent oversight.</p>
      <h2>Growing Support</h2>
      <p>Current discussions with lawmakers show increasing recognition of oversight's importance. The oversight committee's recent report has provided compelling evidence for reform, strengthening our position heading into January.</p>
      <h2>Looking Ahead</h2>
      <p>With the 2025 session approaching, we're optimistic about achieving our goal of establishing permanent, independent oversight of Arizona's corrections system. The combination of executive support, legislative momentum, and public awareness creates an unprecedented opportunity for meaningful reform.</p>
    `,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    imageAlt: 'Arizona State Capitol building',
    tags: ['oversight', 'reform', 'legislation'],
    seo: {
      metaTitle: 'Fifth Year Fighting for Independent Prison Oversight in Arizona',
      metaDescription: 'Progress update on Arizona prison oversight legislation and growing support for reform in 2025.',
      keywords: ['prison oversight', 'Arizona corrections', 'ADCRR reform', 'criminal justice'],
      twitterCard: 'summary_large_image'
    },
    category: 'Advocacy',
    readingTime: '5 min',
    lastModified: 'December 5, 2024'
  },
  {
    id: '2',
    slug: 'new-approach-recovery',
    title: 'Breaking the Cycle: A New Approach to Recovery',
    date: 'December 8, 2024',
    author: {
      name: 'J Alexandria Hunt-Garcia',
      title: 'Policy Director & Co-founder',
      bio: 'Expert in evidence-based recovery programs and policy reform',
      image: '/src/assets/images/J_Alex.webp'
    },
    excerpt: 'Evidence-based practices and risk mitigation strategies are transforming recovery support nationwide, offering new hope and proven results.',
    content: `
      <h1>Breaking the Cycle: A New Approach to Recovery</h1>
      <p>Evidence-based practices and risk mitigation strategies are transforming recovery support nationwide, offering new hope and proven results.</p>
      <h2>Medicated Assistant Treatment Overview</h2>
      <p>Recent advances in medicated assistant treatment have shown remarkable success rates, particularly when combined with comprehensive support services and individualized care plans.</p>
      <h2>Evidence-Based Practices</h2>
      <p>Nationwide implementation of evidence-based practices has demonstrated significant improvements in recovery outcomes. Risk mitigation strategies have proven particularly effective in supporting long-term recovery success.</p>
      <h2>Specialized Support Programs</h2>
      <p>Our Substance Use Disorder Trained (SUDT) doula program provides specialized support for expecting mothers, combining recovery support with comprehensive prenatal and postpartum care.</p>
      <h2>Future Implementation</h2>
      <p>Plans are underway to expand these successful programs into jails and prisons, ensuring continuity of care and support for individuals throughout their recovery journey.</p>
    `,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    imageAlt: 'Medical professionals discussing treatment plans',
    tags: ['recovery', 'health', 'reform'],
    seo: {
      metaTitle: 'New Evidence-Based Approaches to Recovery Support',
      metaDescription: 'How modern recovery strategies are transforming addiction treatment and support services.',
      keywords: ['recovery support', 'addiction treatment', 'evidence-based practices'],
      twitterCard: 'summary_large_image'
    },
    category: 'Healthcare',
    readingTime: '4 min',
    lastModified: 'December 9, 2024'
  },
  {
    id: '3',
    slug: 'legislative-update-2025',
    title: 'Legislative Update - January 2025',
    date: 'December 11, 2024',
    author: {
      name: 'Jessica Johnson',
      title: 'Legislative Director & Co-founder',
      bio: 'Leading legislative advocacy efforts for criminal justice reform',
      image: '/src/assets/images/Jessica.webp'
    },
    excerpt: 'Comprehensive coverage of upcoming reforms including independent oversight, home confinement, and SNAP benefits.',
    content: `
      <h1>Legislative Update - January 2025</h1>
      <p>Comprehensive coverage of upcoming reforms including independent oversight, home confinement, and SNAP benefits.</p>
      <h2>Independent Oversight Progress</h2>
      <p>The push for independent oversight of Arizona's Department of Corrections continues to gain momentum, with new legislative support and detailed implementation plans ready for the upcoming session.</p>
      <h2>Home Confinement Program</h2>
      <p>Proposed expansion of home confinement options aims to reduce prison populations while maintaining public safety through evidence-based supervision methods.</p>
      <h2>SNAP Benefits Reform</h2>
      <p>Critical changes to SNAP benefit eligibility for formerly incarcerated individuals are advancing, with bipartisan support for removing barriers to successful reentry.</p>
      <h2>Political Landscape</h2>
      <p>With several new lawmakers joining the legislature, we're seeing increased openness to evidence-based reforms and a growing recognition of the need for systemic changes.</p>
    `,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    imageAlt: 'Arizona State Legislature building',
    tags: ['legislation', 'reform', 'oversight'],
    seo: {
      metaTitle: '2025 Arizona Criminal Justice Reform Legislative Update',
      metaDescription: 'Latest updates on criminal justice reform legislation in Arizona for 2025.',
      keywords: ['Arizona legislature', 'criminal justice reform', 'SNAP benefits', 'home confinement'],
      twitterCard: 'summary_large_image'
    },
    category: 'Policy',
    readingTime: '6 min',
    lastModified: 'December 12, 2024'
  },
];
