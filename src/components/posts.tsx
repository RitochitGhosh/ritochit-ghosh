// Posts.jsx
import { posts } from "@/contents/posts";
import { CalendarIcon, HeartIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Posts() {
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-8">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-foreground bg-green-300 dark:bg-green-900 px-2 py-0.5 rounded">Recent Posts</h2>
          <Button variant="ghost" asChild className="text-sm text-muted-foreground hover:bg-transparent hover:text-primary hover:underline font-medium">
            <Link href="/posts">View All Posts</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {recentPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-border"
            >
              <Link href={post.content} className="block p-6">
                <h3 className="text-2xl font-bold tracking-tight mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground/80 mb-4">
                  <div className="flex items-center space-x-2">
                    <User2Icon className="w-4 h-4" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{post.publishedAt}</span>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground/70">
                    <HeartIcon className="w-4.5 h-4.5" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}