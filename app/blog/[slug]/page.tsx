import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getPost } from "../../../lib/mdx";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let post;
  try {
    post = getPost(slug);
  } catch (e) {
    return notFound();
  }
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container prose prose-invert max-w-3xl">
          <h1 className="text-3xl font-bold">{post.meta.title}</h1>
          <article className="mt-6 whitespace-pre-wrap leading-relaxed">
            {post.content}
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
