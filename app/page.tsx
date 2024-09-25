'use client';
import DetailSection from '@/components/detail-section';
import HeroSection from '@/components/hero-section';
import QuotesSection from '@/components/quotes-section';

export default function Home() {
  return (
    <main className='bg-[#f7f7f7]'>
      <HeroSection />
      <DetailSection />
      <QuotesSection />
    </main>
  );
}
