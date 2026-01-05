"use client";

import Image from "next/image";
import { config } from "@/public/config";
import { useState } from "react";

// Process bio text: single line break = space, double line break = paragraph
function processBio(text: string): string {
  return text
    .split(/\n\n+/) // Split on double line breaks (or more)
    .map(paragraph =>
      paragraph
        .split(/\n/) // Split on single line breaks
        .map(line => line.trim())
        .join(' ') // Join with spaces
        .trim()
    )
    .filter(p => p.length > 0) // Remove empty paragraphs
    .map(p => `<p class="mb-4">${p}</p>`) // Wrap in <p> tags with margin
    .join('');
}

export default function Home() {
  const [activeFilterId, setActiveFilterId] = useState<string>(config.filterCategories[0].id);

  // Get the active filter function
  const activeFilter = config.filterCategories.find(f => f.id === activeFilterId)?.filter || (() => true);

  // Filter publications based on active filter
  const filteredPublications = config.publications.filter(activeFilter);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 mb-16">
        {/* Left: Photo and Links */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={config.photo}
            alt={config.name}
            width={220}
            height={220}
            className="w-44 h-auto md:w-full mb-6"
          />
          <div className="flex flex-col gap-2 text-sm">
            <a href={`mailto:${config.email}`} className="link-hover">
              Email
            </a>
            <a
              href={config.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover"
            >
              Google Scholar
            </a>
            {/* <a href={config.cv} className="link-hover">
              CV
            </a> */}
          </div>
        </div>

        {/* Right: Bio and News */}
        <div>
          <h1 className="mb-1">{config.name}</h1>
          <p className="text-gray-600 mb-6">{config.chineseName}</p>

          <div
            className="bio-content text-base leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: processBio(config.bio) }}
          />

          {/* News */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Recent News</h3>
            <ul className="space-y-2 text-sm">
              {config.news.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-gray-600 shrink-0">{item.date}</span>
                  <span>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="link-hover"
                        onClick={(e) => {
                          // Check if the linked publication is currently visible
                          if (item.link?.startsWith("#")) {
                            const pubId = item.link.substring(1);
                            const pub = config.publications.find(
                              (p) => p.id === pubId
                            );
                            // If publication exists but is not visible in current filter,
                            // switch to "all" filter
                            if (pub && !activeFilter(pub)) {
                              e.preventDefault();
                              setActiveFilterId("all");
                              // Wait for state update, then scroll
                              setTimeout(() => {
                                document
                                  .getElementById(pubId)
                                  ?.scrollIntoView({ behavior: "smooth" });
                              }, 100);
                            }
                          }
                        }}
                      >
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Publications */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="mb-0">Publications</h2>
          <div className="flex gap-2 text-sm flex-wrap">
            {config.filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilterId(category.id)}
                className={`px-3 py-1 rounded ${activeFilterId === category.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              id={pub.id}
              className="grid md:grid-cols-[180px_1fr] gap-6"
            >
              {/* Publication Image */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  width={180}
                  height={120}
                  className="w-full max-w-[180px] h-auto"
                />
              </div>

              {/* Publication Details */}
              <div>
                <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                <p className="text-sm text-gray-700 mb-1">
                  {pub.authors.split(/(Tiancheng Sun)/g).map((part, i) =>
                    part === "Tiancheng Sun" ? (
                      <strong key={i}>{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {pub.venue} {pub.year}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3 text-sm">
                  {pub.links.map((link, idx) => {
                    if (link.type === "award") {
                      return link.url ? (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 font-medium hover:text-red-800 transition-colors"
                        >
                          🏆 {link.text}
                        </a>
                      ) : (
                        <span key={idx} className="text-red-600 font-medium">
                          🏆 {link.text}
                        </span>
                      );
                    }
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-hover"
                      >
                        [{link.type}]
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Awards & Services */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2>Awards & Honors</h2>
          <ul className="space-y-2 text-sm">
            {config.awards.map((award, idx) => (
              <li key={idx}>
                <span className="text-gray-600">{award.year}</span> —{" "}
                {award.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Professional Services</h2>
          <ul className="space-y-2 text-sm">
            {config.services.map((service, idx) => (
              <li key={idx}>
                {service.role}, {service.venue}
                {service.year && ` (${service.year})`}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>Last updated: January 2026</p>
      </footer>
    </main>
  );
}
