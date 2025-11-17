
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, UserGroupIcon, LightBulbIcon, StarIcon } from '../components/Icons';
import SuccessModal from '../components/SuccessModal';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string; onClick?: () => void }> = ({ icon, title, description, onClick }) => (
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_6px_rgba(212,175,55,0.35)] hover:ring-1 hover:ring-gold hover:ring-offset-2 hover:ring-offset-white hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 transition-shadow flex flex-col items-center text-center cursor-pointer" onClick={onClick} role="button" tabIndex={0}>
    <div className="text-gold mb-3 sm:mb-4">{icon}</div>
    <h3 className="text-base sm:text-lg font-bold text-dark-teal mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  const benefits = [
    { icon: <StarIcon />, title: "Certification", description: "Receive a certificate of appreciation from NidhiSetu." },
    { icon: <UserGroupIcon />, title: "Networking", description: "Connect with like-minded peers and industry professionals." },
    { icon: <LightBulbIcon />, title: "Skill Development", description: "Enhance your leadership, communication, and financial literacy skills." },
    { icon: <CheckCircleIcon />, title: "Exclusive Access", description: "Get invited to exclusive NidhiSetu events and workshops." }
  ];

  const eligibility = [
    "Students aged 16-24 years.",
    "Passionate about finance and community building.",
    "Active on social media platforms.",
    "Excellent communication and interpersonal skills."
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalChildren, setModalChildren] = useState<React.ReactNode>(null);
  const [modalCompact, setModalCompact] = useState(false);

  const openModal = (type: 'cert' | 'skills' | 'exclusive' | 'reward1' | 'reward2' | 'reward3') => {
    if (type === 'skills') {
      setModalCompact(false);
      setModalTitle('Boost Your Career-Ready Skills 🎯');
      setModalChildren(
        <div>
          <p className="text-sm">Gain practical experience in:</p>
          <ul className="mt-2 text-left space-y-1">
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Communication</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Leadership</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Team coordination</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Financial awareness</li>
          </ul>
          <p className="mt-3 text-sm">These skills make you stand out in college placements and internships.</p>
        </div>
      );
    } else if (type === 'exclusive') {
      setModalCompact(false);
      setModalTitle('🎟️ VIP Access Granted');
      setModalChildren(
        <div>
          <p className="text-sm">Get invited to special NidhiSetu events and workshops designed only for ambassadors.</p>
          <h4 className="mt-3 font-semibold">Unlock Special Perks 🚀</h4>
          <ul className="mt-2 text-left space-y-1">
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Exclusive webinars</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Ambassador-only resources</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Early feature testing</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Priority support</li>
          </ul>
          <p className="mt-3 text-sm">These benefits are only for our Ambassadors!</p>
        </div>
      );
    } else if (type === 'reward1') {
      setModalCompact(true);
      setModalTitle('1st Rank Reward 🎁');
      setModalChildren(
        <div className="space-y-3">
          <img
            src="/assets/reward%201.png"
            alt="NidhiSetu Reward"
            className="w-full max-w-[240px] h-36 mx-auto rounded-lg shadow-md object-contain"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/reward1/600/400'; }}
          />
          <p className="text-sm">This isn’t just a reward — it’s a heartfelt gift from the NidhiSetu family to you💫.</p>
        </div>
      );
    } else if (type === 'reward2') {
      setModalCompact(true);
      setModalTitle('2nd Rank Reward 🎁');
      setModalChildren(
        <div className="space-y-3">
          <img
            src="/assets/reward2.png"
            alt="NidhiSetu Reward"
            className="w-full max-w-[240px] h-36 mx-auto rounded-lg shadow-md object-contain"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/reward2/600/400'; }}
          />
          <p className="text-sm">This isn’t just a reward — it’s a heartfelt gift from the NidhiSetu family to you💫.</p>
        </div>
      );
    } else if (type === 'reward3') {
      setModalCompact(true);
      setModalTitle('3rd Rank Reward 🎁');
      setModalChildren(
        <div className="space-y-3">
          <img
            src="/assets/reward3.png"
            alt="NidhiSetu Reward"
            className="w-full max-w-[240px] h-36 mx-auto rounded-lg shadow-md object-contain"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/reward3/600/400'; }}
          />
          <p className="text-sm">This isn’t just a reward — it’s a heartfelt gift from the NidhiSetu family to you💫.</p>
        </div>
      );
    } else {
      setModalCompact(false);
      setModalTitle('You’re Officially Certified! 🏆');
      setModalChildren(
        <div>
          <p className="text-sm">Use this certificate to:</p>
          <ul className="mt-2 text-left space-y-1">
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Boost your LinkedIn profile</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Improve your CV</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Showcase your financial awareness skills</li>
            <li className="flex items-start"><span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gold"></span>Stand out in internships & campus placements</li>
          </ul>
        </div>
      );
    }
    setModalOpen(true);
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-teal text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-32 text-center relative z-10">
          <img
            src="/assets/cropped_circle_image.png"
            alt="NidhiSetu"
            className="mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full shadow-md object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/nidhisetu/200/200'; }}
          />
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            NidhiSetu <span className="text-gold">Yuva Veer</span> Program
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Become the Face of Youth Finance
          </p>
          <Link
            to="/register"
            className="mt-8 inline-block bg-gold text-dark-teal font-bold py-3 px-8 rounded-full text-base sm:text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-transform w-full sm:w-auto"
          >
            Join Now
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      
      

      {/* Program Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-dark-teal">Program Overview</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            The NidhiSetu Yuva Veer Program is a nationwide initiative to empower young individuals to become ambassadors of financial literacy. As a Yuva Veer, you will represent NidhiSetu in your campus and community, driving awareness and helping your peers achieve financial well-being.
          </p>
        </div>
      </section>
      
      {/* Banner Images */}
      <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
              <div className="relative w-32 sm:w-48 md:w-64 h-32 sm:h-52 md:h-64 bg-camel rounded-lg shadow-md p-2 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(193,154,107,0.45)] hover:ring-1 hover:ring-camel hover:ring-offset-2 hover:ring-offset-white" onClick={() => openModal('cert')} role="button" tabIndex={0}>
                  <img src="/assets/yuva-veer.png" alt="NidhiSetu Yuva Veer" className="absolute inset-0 w-full h-full object-contain object-center" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/finance1/600/400'; }}/>
              </div>
              <div className="relative w-32 sm:w-48 md:w-64 h-32 sm:h-52 md:h-64 bg-camel rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(193,154,107,0.45)] hover:ring-1 hover:ring-camel hover:ring-offset-2 hover:ring-offset-white" onClick={() => openModal('cert')} role="button" tabIndex={0}>
                  <img src="/assets/yuva-veer2.png" alt="NidhiSetu Yuva Veer 2" className="absolute inset-0 w-full h-full object-contain object-center" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/community2/600/400'; }}/>
              </div>
              <div className="relative w-32 sm:w-48 md:w-64 h-32 sm:h-52 md:h-64 bg-camel rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(193,154,107,0.45)] hover:ring-1 hover:ring-camel hover:ring-offset-2 hover:ring-offset-white" onClick={() => openModal('cert')} role="button" tabIndex={0}>
                  <img src="/assets/yuva-veer3.png" alt="NidhiSetu Yuva Veer 3" className="absolute inset-0 w-full h-full object-contain object-center" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/leadership3/600/400'; }}/>
              </div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-teal text-center">Program Benefits</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                onClick={() => openModal(index === 2 ? 'skills' : index === 3 ? 'exclusive' : 'cert')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador Responsibilities & Rewards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-teal text-center">Ambassador Responsibilities & Rewards</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 mb-6"></div>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">Understand your monthly tasks and see how NidhiSetu rewards top ambassadors every month.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h6m-6 4h4M5 19l-2 2 2-6a8 8 0 1114-6 8 8 0 01-8 8c-1.4 0-2.7-.3-3.9-.8"/></svg>}
              title="Student Interaction"
              description="Talk to students about NidhiSetu, explain saving habits, and introduce app benefits."
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 8l10-5v14l-10-5v6l-4-2V4l4-2v6z"/></svg>}
              title="Share App Updates"
              description="Share new features and app updates with your college friends and community."
            />
            <BenefitCard
              icon={<div className="flex items-center"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-gold mr-2"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-gold"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg></div>}
              title="Social Media Promotion"
              description="Promote NidhiSetu on Instagram & Facebook. No proof upload required."
            />
          </div>

          <h3 className="mt-16 text-xl sm:text-2xl font-bold text-dark-teal text-center">Monthly Rewards & Recognition</h3>
          <p className="text-center text-gray-700 mt-2 max-w-3xl mx-auto">Every month, top ambassadors are selected based on activity, awareness, and consistency.</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 mb-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="8" r="4"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l-2 6 6-3 6 3-2-6"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 2h6l-3 4-3-4z"/></svg>}
              title="1st Rank"
              description="T-shirt + Bottle + Pen + Certificate"
              onClick={() => openModal('reward1')}
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="8" r="4"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l-2 6 6-3 6 3-2-6"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 2h6l-3 4-3-4z"/></svg>}
              title="2nd Rank"
              description="Bottle + Cup + Certificate"
              onClick={() => openModal('reward2')}
            />
            <BenefitCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="8" r="4"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l-2 6 6-3 6 3-2-6"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 2h6l-3 4-3-4z"/></svg>}
              title="3rd Rank"
              description="Bottle + Pen + Certificate"
              onClick={() => openModal('reward3')}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gold">
              <h4 className="text-xl font-bold text-dark-teal">Top 15 Performers</h4>
              <p className="text-gray-700 mt-2">Top 15 ambassadors get a Certificate.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gold">
              <h4 className="text-xl font-bold text-dark-teal">How Winners Are Selected</h4>
              <p className="text-gray-700 mt-2">We evaluate based on activeness, student reach, awareness, and consistency each month. Based on proof submission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-dark-teal text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center">Who Can Apply?</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 mb-12"></div>
          <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <ul className="space-y-4">
                  {eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                          <CheckCircleIcon className="text-gold w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                      </li>
                  ))}
              </ul>
          </div>
        </div>
      </section>
      <SuccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle} showIcon={false} compact={modalCompact}>
        {modalChildren}
      </SuccessModal>
    </div>
  );
};

export default HomePage;
