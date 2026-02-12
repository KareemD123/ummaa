import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "@/components/footer";
import blogPosts from "@/data/blog-posts.json";
import Main from "@/layouts/Main";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog - University Muslim Alumni Association</title>
        <meta
          name="description"
          content="Read the latest news, stories, and updates from the UMMAA community."
        />
      </Head>
      <Main>
        <div className="blog-page">
          <div className="blog-hero">
            <div className="container">
              <h1>UMMAA Blog</h1>
              <p>
                Stories, reflections, and updates from our community of Muslim
                alumni at the University of Toronto.
              </p>
            </div>
          </div>

          <div className="blog-content">
            <div className="container">
              <div className="blog-grid">
                {blogPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    {post.featuredImage && (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="blog-card-image-link"
                      >
                        <div className="blog-card-image">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </Link>
                    )}
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span className="blog-card-author">{post.author}</span>
                        <span className="blog-card-date">
                          {new Date(post.date + "T00:00:00").toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                      <h2 className="blog-card-title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="blog-card-link"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {blogPosts.length === 0 && (
                <div className="blog-empty">
                  <h3>No blog posts yet</h3>
                  <p>Check back soon for updates from our community.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </Main>
    </>
  );
};

export default Blog;
