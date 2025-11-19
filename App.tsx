import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import MedicalContext from './components/MedicalContext';
import FaithSection from './components/FaithSection';
import Footer from './components/Footer';
import { MISSIONARIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen text-stone-200 selection:bg-red-900 selection:text-white overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />

        {/* Profiles Grid */}
        <section id="profiles" className="py-24 bg-stone-950">
          <div className="container mx-auto px-6">
            <div className="mb-16 border-b border-stone-800 pb-6">
              <h2 className="font-cinzel text-4xl text-stone-200 mb-2">Perfis de Sacrifício</h2>
              <p className="font-serif text-stone-500 italic">Homens e mulheres de quem o mundo não era digno.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MISSIONARIES.map((missionary, index) => (
                <ProfileCard key={missionary.id} missionary={missionary} index={index} />
              ))}
            </div>
          </div>
        </section>

        <MedicalContext />
        <FaithSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;