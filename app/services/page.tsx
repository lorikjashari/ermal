import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = { title: "Shërbimet" };

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-white/80">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-bold">Shërbimet</h1>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Section
              title="A. Import & Logjistikë"
              items={[
                "Konsolidim mallrash",
                "Ngarkim / shkarkim",
                "Depo profesionale 1000m²",
                "Konsultë për furnitorët",
                "Transport detar & ajror",
                "Foto/video nga ngarkimi",
              ]}
            />
            <Section
              title="B. Viza Biznesi për Kinë"
              items={[
                "Garanci vizash",
                "Letra ftese",
                "Rezervim hoteli",
                "Ndihmë mbushje formulari",
                "Shpjegimi i procesit",
              ]}
            />
            <Section
              title="C. Shërbime në Kinë"
              items={[
                "Airport pickup",
                "Shofer dedikuar",
                "Përkthyes profesionist",
                "Shëtitje në tregje",
                "Negocim dhe mbikëqyrje porosive",
              ]}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
