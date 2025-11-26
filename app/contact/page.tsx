import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = { title: "Kontakt" };

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold">Na kontaktoni</h1>
            <form className="mt-6 card p-6 space-y-4">
              <input className="w-full rounded bg-white/10 px-3 py-2" placeholder="Emri" />
              <input className="w-full rounded bg-white/10 px-3 py-2" placeholder="Email" />
              <input className="w-full rounded bg-white/10 px-3 py-2" placeholder="Telefoni" />
              <textarea className="w-full rounded bg-white/10 px-3 py-2" placeholder="Mesazhi" rows={5} />
              <button className="btn btn-primary" type="submit">Dërgo</button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold">Kosovë</h3>
              <p className="mt-2 text-white/70">Besim Sallahu – Owner • +383 44 118 665</p>
              <p className="text-white/70">Ermal Sallahu – CEO • +383 48 118 665</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold">Kinë</h3>
              <p className="mt-2 text-white/70">Ana – CEO China • 0086152 0589 3338</p>
              <p className="text-white/70">Email: supercompani@hotmail.com</p>
            </div>
            <iframe title="Kosovo Office" src="https://www.google.com/maps?q=Pristina&output=embed" className="w-full h-64 rounded" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
