import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DemoSection from '@/components/DemoSection';
import HowItWorksPreview from '@/components/HowItWorksPreview';
import FAQSection from '@/components/FAQSection';
import WaitlistFormSection from '@/components/WaitlistFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <DemoSection />
      <HowItWorksPreview />
      <FAQSection />
      <WaitlistFormSection />
      <Footer />
    </main>
  );
};

export default Index;
