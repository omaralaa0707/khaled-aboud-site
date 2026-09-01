import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Collection } from "@/components/site/collection";
import { Hub, Footer } from "@/components/site/hub";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Collection />
        <Hub />
      </main>
      <Footer />
    </>
  );
}
