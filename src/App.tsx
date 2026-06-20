import type { Locale } from './i18n';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problems } from './components/sections/Problems';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { Team } from './components/sections/Team';
import { LeadForm } from './components/sections/LeadForm';
import { Solutions } from './components/sections/Solutions';

type AppProps = {
  locale: Locale;
};

export default function App({ locale }: AppProps) {
  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Features />
        <Pricing />
        <Team />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
