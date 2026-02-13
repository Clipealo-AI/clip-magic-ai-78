import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksPreview from '@/components/HowItWorksPreview';
import DemoSection from '@/components/DemoSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhatIsNotSection from '@/components/WhatIsNotSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ForWhoSection from '@/components/ForWhoSection';
import BetaInfoSection from '@/components/BetaInfoSection';
import BetaAccessSection from '@/components/BetaAccessSection';
import BetaBenefitsSection from '@/components/BetaBenefitsSection';
import WhatWeNeedSection from '@/components/WhatWeNeedSection';
import WaitlistFormSection from '@/components/WaitlistFormSection';

import TeamSection from '@/components/TeamSection';
import RoadmapSection from '@/components/RoadmapSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <HowItWorksPreview />
      <DemoSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <WhatIsNotSection />
      <HowItWorksSection />
      <ForWhoSection />
      <BetaInfoSection />
      <BetaAccessSection />
      <BetaBenefitsSection />
      <WhatWeNeedSection />
      <WaitlistFormSection />
      <TeamSection />
      <RoadmapSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
