/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AccreditationStrip } from './components/AccreditationStrip';
import { CoursesSection } from './components/CoursesSection';
import { CurriculumSection } from './components/CurriculumSection';
import { CertificationProcessSection } from './components/CertificationProcessSection';
import { CalendarSection } from './components/CalendarSection';
import { EligibilityAdvisor } from './components/EligibilityAdvisor';
import { VerificationTool } from './components/VerificationTool';
import { LegalObligations } from './components/LegalObligations';
import { BlogSection } from './components/BlogSection';
import { BlogDetailModal } from './components/BlogDetailModal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { RegistrationModal } from './components/RegistrationModal';
import { PosterModal } from './components/PosterModal';
import { TrainingCohort, CertificateLevel, BlogPost } from './types/lifeguard';

export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState<boolean>(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('bronz');
  const [selectedCohort, setSelectedCohort] = useState<TrainingCohort | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleOpenRegistration = (courseId: string = 'bronz') => {
    setSelectedCourseId(courseId);
    setSelectedCohort(null);
    setIsRegistrationOpen(true);
  };

  const handleSelectCohort = (cohort: TrainingCohort) => {
    setSelectedCohort(cohort);
    setSelectedCourseId(cohort.courseType);
    setIsRegistrationOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-[#0B2545] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenRegistration={handleOpenRegistration}
        onOpenEligibilityQuiz={() => scrollToSection('asistan')}
      />

      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero Section */}
        <Hero
          onOpenRegistration={handleOpenRegistration}
          onOpenPosterModal={() => setIsPosterModalOpen(true)}
          onOpenEligibilityQuiz={() => scrollToSection('asistan')}
        />

        {/* Accreditation & Federation Strip */}
        <AccreditationStrip />

        {/* Courses & Certification Levels */}
        <CoursesSection onSelectCourse={handleOpenRegistration} />

        {/* Detailed Curriculum Section */}
        <CurriculumSection />

        {/* Step-by-Step Certification Roadmap & Documents */}
        <CertificationProcessSection onStartRegistration={() => handleOpenRegistration('bronz')} />

        {/* Interactive Tools Container: Eligibility Finder & e-Devlet License Check */}
        <section id="asistan" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold text-sky-800 uppercase tracking-wider font-condensed">
                DİJİTAL ASİSTAN & DOĞRULAMA
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Cankurtaranlık Rehberi ve Tescil Sorgulama
              </h2>
              <p className="text-base text-slate-600 mt-2">
                Hangi belgenin size uygun olduğunu belirleyin veya mevcut belgelerin TSSF ve e-Devlet
                sistemindeki güncelliğini anında kontrol edin.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Eligibility Advisor */}
              <div className="lg:col-span-6">
                <EligibilityAdvisor
                  onSelectRecommended={(level: CertificateLevel) => handleOpenRegistration(level)}
                />
              </div>

              {/* Right Column: e-Devlet Verification Tool */}
              <div className="lg:col-span-6">
                <VerificationTool />
              </div>
            </div>
          </div>
        </section>

        {/* Calendar & Venues */}
        <CalendarSection onSelectCohort={handleSelectCohort} />

        {/* Blog & News Section: Regulations, Safety Tips, Industry News */}
        <BlogSection onSelectPost={(post) => setSelectedPost(post)} />

        {/* Legal Obligations & Ministerial Regulations */}
        <LegalObligations />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Mobile Bottom Action Bar (<=15% viewport height cap) */}
      <MobileBottomBar onOpenRegistration={() => handleOpenRegistration('bronz')} />

      {/* Blog Article Detail Reading Modal */}
      <BlogDetailModal
        post={selectedPost}
        isOpen={Boolean(selectedPost)}
        onClose={() => setSelectedPost(null)}
        onEnroll={handleOpenRegistration}
      />

      {/* Pre-Registration Application Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        initialCourseId={selectedCourseId}
        initialCohort={selectedCohort}
      />

      {/* Official Poster High-Res Viewer Modal */}
      <PosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
        onEnroll={() => handleOpenRegistration('bronz')}
      />
    </div>
  );
}
