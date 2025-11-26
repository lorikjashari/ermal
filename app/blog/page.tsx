import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { getAllPosts } from "../../lib/mdx";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-bold">Blog</h1>
          <div className="mt-6 space-y-4">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block card p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-white/60">{p.excerpt}</p>
                <p className="mt-1 text-white/40 text-sm">{new Date(p.date).toLocaleDateString("sq")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
