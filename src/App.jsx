import AppBanner from "./components/AppBanner/AppBanner.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy.jsx";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
    </main>
  )
}


