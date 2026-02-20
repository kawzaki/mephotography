import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Phone, MapPin } from 'lucide-react'
import Gallery from '../components/Gallery'
import Packages from '../components/Packages'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div className="home-page">
            <Navbar />

            {/* Hero Section */}
            <header id="home" className="hero">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    poster={`${import.meta.env.BASE_URL}files/Saudi-arabia-newborn-photography-9.jpg`}
                >
                    <source src={`${import.meta.env.BASE_URL}files/babies.mp4`} type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <p className="hero-subtitle">لحظات تستحق التخليد</p>
                        <h1 className="hero-title">نحول ذكرياتكم إلى حكايات بصرية</h1>
                        <p className="hero-description">
                            نحن في M.E. Photography نؤمن بأن كل طفل يحكي قصة، وكل لحظة هي فصل من فصول الجمال الذي لا يتكرر.
                        </p>
                        <div className="hero-actions">
                            <a href="#packages" className="btn btn-primary">احجز جلستك الآن</a>
                            <a href="#gallery" className="btn btn-outline">استكشف أعمالنا</a>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Story Intro */}
            <section className="story-intro">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="section-title">كل صورة هي حكاية</h2>
                        <p className="section-lead Arabic">
                            من نبض القلوب المنتظرة (الحمل)، إلى أنفاس الوليد الأولى (مواليد)، وتلك اللحظات العابرة التي تصبح أروع الذكريات.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery />

            {/* Packages Section */}
            <Packages />

            {/* About Section Snippet */}
            <section id="about" className="about-snippet">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder shadow-lg"></div>
                        </motion.div>
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="subtitle">من نحن</p>
                            <h2 className="title">إسراء ومرتضى</h2>
                            <p>M.E. Photography هو نتاج شغف مشترك بين زوجين. إسراء؛ تفتخر بكونها مصورة محترفة، تهتم بالتفاصيل وتعشق الأطفال. ومرتضى؛ يرى الصورة الكبيرة ويدير الأمور لضمان تجربة مثالية لكل عميل.</p>
                            <p>منذ عام 2013، ونحن نرافق عائلات المنطقة الشرقية في توثيق أجمل بداياتهم.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="container text-center">
                    <h2 className="title">هل تودين تخليد هذه اللحظات؟</h2>
                    <p className="section-lead">نحن هنا للإجابة على جميع استفساراتكم وتنسيق جلستكم القادمة.</p>
                    <div className="contact-actions">
                        <a href="https://wa.me/966500000000" className="btn btn-primary">تواصل معنا عبر واتساب</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-logo">
                        <img src={`${import.meta.env.BASE_URL}files/logo.png`} alt="M.E. Photography" className="logo-img" />
                    </div>
                    <div className="social-links">
                        <Instagram size={20} />
                        <Phone size={20} />
                        <MapPin size={20} />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
