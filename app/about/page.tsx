import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = { title: "Rreth Nesh" };

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-bold">Rreth QIWO Global Logistic</h1>
          <p className="mt-4 text-white/80">
            QIWO është partneri juaj i besueshëm për importin nga Kina drejt Kosovës. Me një depo 1000m² në Kinë dhe ekip profesional në të dy vendet, ofrojmë shërbime të plota logjistike dhe asistencë biznesi.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="font-semibold">Besim Sallahu – Owner (Kosovë)</h3>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Ermal Sallahu – CEO Kosovë</h3>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Ana – CEO Kinë</h3>
            </div>
          </div>

          <div className="mt-10 card p-6">
            <h2 className="text-xl font-semibold">Harta Interaktive</h2>
            <p className="mt-2 text-white/70">Zyrë në Kosovë + Depo 1000m² në Kinë.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <iframe
                title="Kosovo Office"
                src="https://www.google.com/maps?q=Pristina&output=embed"
                className="h-64 w-full rounded"
              />
              <iframe
                title="China Depot"
                src="https://www.google.com/maps?q=Guangzhou&output=embed"
                className="h-64 w-full rounded"
              />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Timeline i Rritjes</h2>
            <ol className="mt-4 space-y-3">
              <li className="card p-4">2018 – Fillimet e QIWO.</li>
              <li className="card p-4">2020 – Depo 1000m² në Kinë.</li>
              <li className="card p-4">2023 – Zgjerim i shërbimeve biznesi.</li>
            </ol>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
