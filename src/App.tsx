import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problems } from './components/sections/Problems';
import { Solutions } from './components/sections/Solutions';
import { GrowTogether } from './components/sections/GrowTogether';
import { Product } from './components/sections/Product';
import { Pricing } from './components/sections/Pricing';
import { Team } from './components/sections/Team';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className='page'>
      <Header />
      <main>
        <Hero />
        <div className='body-canvas stars relative'>
          <Problems />
          <Solutions />
          <GrowTogether />
          <Product />
          <Pricing />
          <Team />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
