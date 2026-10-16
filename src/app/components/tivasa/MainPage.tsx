import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import VRFInstallation from "./VRFInstallation";
import Products from "./Products";
import Contact from "./Contact";

import { getDirection, type Locale } from "@/i18n/config";

interface MainPageProps {
  locale: Locale;
}

export default function MainPage({ locale }: MainPageProps) {
  return (
    <main
      id="main-content"
      dir={getDirection(locale)}
      className="min-h-screen overflow-hidden bg-surface text-background"
    >
      <Hero locale={locale} />
      <About locale={locale} />
      <Projects locale={locale} />
      <Products locale={locale} />
      <VRFInstallation locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
