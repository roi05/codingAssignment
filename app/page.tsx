'use client';
import DetailSection from '@/components/detail-section';
import FeedbackSection from '@/components/feedback-section';
import FormSection from '@/components/form-section';
import HeroSection from '@/components/hero-section';
import QuotesSection from '@/components/quotes-section';
import ToursSection from '@/components/tours-section';

export default function Home() {
  return (
    <main className='bg-[#f7f7f7]'>
      <HeroSection />
      <DetailSection />
      <QuotesSection />
      <ToursSection />
      <FeedbackSection />
      <FormSection />
    </main>
  );
}
