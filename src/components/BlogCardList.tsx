'use client'

import BlogCard from './BlogCard'

interface BlogCardListProps {
  count: number
}

export default function BlogCardList({ count }: BlogCardListProps) {
  const blogCard = Array.from({ length: count }, (_, index) => (
    <BlogCard key={index} />
  ))

  return <>{blogCard}</>
}
