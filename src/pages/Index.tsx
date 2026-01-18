import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIsSection from '@/components/WhatIsSection';
import ForWhoSection from '@/components/ForWhoSection';
import WaitlistSection from '@/components/WaitlistSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <WhatIsSection />
      <ForWhoSection />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
