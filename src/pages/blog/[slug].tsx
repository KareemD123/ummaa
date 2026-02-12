import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "@/components/footer";
import blogPosts from "@/data/blog-posts.json";
import Main from "@/layouts/Main";

interface BlogPostProps {
  post: {
    id: string;
    slug: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    featuredImage?: string;
    images?: Array<{
      src: string;
      caption: string;
    }>;
    content: Array<{
      type: string;
      text?: string;
      author?: string;
      src?: string;
      caption?: string;
      link?: string;
    }>;
  };
}

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p key={index} className="blog-post-paragraph">
            {item.text}
          </p>
        );
      case "heading":
        return (
          <h2 key={index} className="blog-post-heading">
            {item.text}
          </h2>
        );
      case "quote":
        return (
          <blockquote key={index} className="blog-post-quote">
            <p>{item.text}</p>
            {item.author && <cite>— {item.author}</cite>}
          </blockquote>
        );
      case "image":
        return (
          <figure key={index} className="blog-post-image">
            <div className="blog-post-image-wrapper">
              <Image
                src={item.src}
                alt={item.caption || ""}
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {item.caption && (
              <figcaption className="blog-post-image-caption">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );
      case "cta":
        return (
          <div key={index} className="blog-post-cta">
            <Link href={item.link} className="btn btn--rounded">
              {item.text}
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} - UMMAA Blog</title>
        <meta name="description" content={post.excerpt} />
        {post.featuredImage && (
          <meta property="og:image" content={post.featuredImage} />
        )}
      </Head>
      <Main>
        <div className="blog-post-page">
          <article className="blog-post">
            <div className="blog-post-header">
              <div className="container">
                <Link href="/blog" className="blog-post-back">
                  ← Back to Blog
                </Link>
                <h1 className="blog-post-title">{post.title}</h1>
                <div className="blog-post-meta">
                  <span className="blog-post-author">{post.author}</span>
                  <span className="blog-post-date">
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
              </div>
            </div>

            {post.featuredImage && (
              <div className="blog-post-featured-image">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={1920}
                  height={1080}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 45%",
                  }}
                  priority
                />
              </div>
            )}

            <div className="blog-post-content">
              <div className="container">
                {post.content.map((item, index) => renderContent(item, index))}
              </div>
            </div>

            <div className="blog-post-footer">
              <div className="container">
                <Link href="/blog" className="btn btn--rounded">
                  ← Back to All Posts
                </Link>
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </Main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPost;
