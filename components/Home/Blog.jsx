import React from 'react'

import Section from '../Customs/Section'
import BlogCard from '../Customs/BlogCard'
import { HiOutlineArrowRight, HiOutlineEye } from 'react-icons/hi'

const Blog = () => {
  const categories = [
    { name: "", slug: "web3" },
    { name: "", slug: "crypto-currency" },
    { name: "", slug: "daily-news" },

  ]
  const articles = [
    {
      thumbnail: "",
      title: "",
      description: "",
      categories: [categories[2]],
      authorName: "",
      timeToRead: "",
      publishedAt: ""
    },
    {
      thumbnail: "/images/blog/blog-2.jpg",
      title: "Microsoft New Windows 11 is Amazing",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam minima omnis dolorem, excepturi autem.",
      categories: [categories[1], categories[2]],
      authorName: "admin",
      timeToRead: "8 minutes",
      publishedAt: "20 may 2022"
    },
    {
      thumbnail: "/images/blog/blog-3.jpg",
      title: "Web 2.0 is better than web 2.0",
      description: "Lorem, ipsum dolor elit. Nostrum ipsam minima omn, nostrum ipsam minima omn.",
      categories: [categories[0], categories[2]],
      authorName: "admin",
      timeToRead: "6 minutes",
      publishedAt: "28 april 2022"
    },
  ]
  return (
    <Section
      id="blog"
      title=""
      description=""
      subtitle=""
    >
      <div className="flex flex-wrap justify-center items-start">
        {/* {articles.map((article, index) => (
          <BlogCard key={index} {...article} />
        ))} */}
      </div>

    </Section>
  );
}

export default Blog