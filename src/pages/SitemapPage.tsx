import React from 'react';
import { Link } from 'react-router-dom';

const SitemapPage = () => {
  const siteStructure = [
    {
      section: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Action Center", path: "/action" },
        { name: "Get Involved", path: "/get-involved" },
        { name: "Events", path: "/events" },
        { name: "Resources", path: "/resources" },
        { name: "Partners", path: "/partners" },
      ]
    },
    {
      section: "Programs",
      links: [
        { name: "Programs Overview", path: "/programs" },
        { name: "Prison Oversight", path: "/programs/prison-oversight" },
        { name: "Legal System Reform", path: "/programs/legal-system" },
        { name: "Substance Use Risk Mitigation", path: "/programs/substance-use" },
        { name: "SUDT Doula Program", path: "/programs/doula-program" },
      ]
    },
    {
      section: "Support",
      links: [
        { name: "Support Our Mission", path: "/support-mission" },
        { name: "Donate", path: "/donate" },
      ]
    },
    {
      section: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Accessibility", path: "/accessibility" },
      ]
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-h1 font-serif font-bold mb-6">Sitemap</h1>
          <p className="text-xl text-gray-200">
            A complete guide to all pages on our website
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {siteStructure.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.section}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.path}
                          className="text-navy hover:text-teal transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;