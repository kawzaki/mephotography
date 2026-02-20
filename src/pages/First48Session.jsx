import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Instagram, Phone, MapPin, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './First48Session.css'

const packages = [
    {
        id: 'first-48-standard',
        title: 'باقة أول ٤٨ ساعة',
        price: '3,000 ر.س',
        subtitle: 'أنقى اللحظات',
        image: `${import.meta.env.BASE_URL}files/package_first_48.png`,
        features: [
            '٢٠ صورة الكترونية معدلة عالية الدقة',
            '١٠ صور مطبوعة بحجم ٤*٦ إنش',
            'عرض شرائح Slideshow فني (هدية)',
            'جلسة تصوير عائلية وثائقية في المستشفى'
        ],
        note: 'تشمل مناطق القطيف، الجبيل، الدمام، الظهران، والخبر',
        highlight: true
    }
]

const First48Session = () => {
    return (
        <div className="first48-page">
            <Navbar />

            {/* Hero Section */}
            <header className="first48-hero">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    poster={`${import.meta.env.BASE_URL}files/Saudi-arabia-newborn-photography-1-1.jpg`}
                >
                    <source src={`${import.meta.env.BASE_URL}files/99934007-74cd-4094-bd3b-1689ba77b4d2.mp4`} type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
                <div className="container first48-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-text-content"
                    >
                        <p className="subtitle">اللقاء الأول</p>
                        <h1 className="title">جلسة تصوير أول ٤٨ ساعة</h1>
                        <p className="description">
                            اللحظات التي لا تتكرر، مباشرة بعد الولادة. نوثق الدهشة الأولى، ملامح اللقاء، وتفاصيل المستشفى الصغيرة التي ترحل سرياً.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Intro Section */}
            <section className="first48-intro">
                <div className="container intro-grid">
                    <div className="intro-image">
                        <img src={`${import.meta.env.BASE_URL}files/Saudi-arabia-newborn-photography-1-1.jpg`} alt="First 48 Hours" />
                    </div>
                    <div className="intro-text">
                        <h2>خلف جدران المستشفى</h2>
                        <p>
                            هذه الجلسة تهدف لالتقاط الحياة في تلك اللحظات الأولى مباشرة بعد الولادة. ليس المقصود منها وضعيات تصوير معقدة أو إكسسوارات، بل هي جلسة وثائقية تنقل مشاعر الواقع والتعارف الأول بينكم وبين مولودكم الجديد.
                        </p>
                        <div className="important-notes">
                            <h3>ملاحظات هامة:</h3>
                            <ul>
                                <li>يفضل حجز هذه الجلسة أثناء فترة الحمل (الحجوزات محدودة).</li>
                                <li>تتم الجلسة في المستشفى خلال أول ٤٨ ساعة من الولادة.</li>
                                <li>لا يتم تسليم الصور الخام (غير المعدلة).</li>
                                <li>يتم تسليم الصور النهائية خلال ٤ إلى ٦ أسابيع.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Packages Grid */}
            <section className="first48-packages">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="subtitle">عرضنا الحصري</p>
                        <h2 className="title">تخليد الذكريات الثمينة</h2>
                    </div>

                    <div className="package-details-grid single-package">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                className={`package-detail-card ${pkg.highlight ? 'featured' : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="package-image-container">
                                    <img src={pkg.image} alt={pkg.title} className="package-visual" />
                                </div>
                                <div className="card-header">
                                    <h3>{pkg.title}</h3>
                                    <p className="package-subtitle">{pkg.subtitle}</p>
                                    <div className="package-price">{pkg.price}</div>
                                </div>
                                <ul className="package-features-list">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx}><Check size={18} className="check-icon" /> {feature}</li>
                                    ))}
                                </ul>
                                <p className="package-note">{pkg.note}</p>
                                <a href="https://wa.me/966500000000" className="btn btn-booking">
                                    حجز الجلسة الآن
                                </a>
                            </motion.div>
                        ))}
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
                <div className="container text-center copyright">
                    <p>© 2024 M.E. Photography. جميع الحقوق محفوظة.</p>
                </div>
            </footer>
        </div>
    )
}

export default First48Session
