import JourneyHeader from '@/components/JourneyHeader';
import HorizontalJourney from '@/components/HorizontalJourney';
import SlideHero from '@/components/SlideHero';
import SlideAbout from '@/components/SlideAbout';
import SlideSkills from '@/components/SlideSkills';
import SlideCertifications from '@/components/SlideCertifications';
import SlideProjects from '@/components/SlideProjects';
import SlideExperience from '@/components/SlideExperience';
import SlideContact from '@/components/SlideContact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <JourneyHeader />
      <HorizontalJourney>
        <SlideHero />
        <SlideAbout />
        <SlideSkills />
        <SlideCertifications />
        <SlideProjects />
        <SlideExperience />
        <SlideContact />
      </HorizontalJourney>
    </div>
  );
}
