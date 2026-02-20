import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Instagram, Phone, MapPin, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './SitterSession.css'

const packages = [
    {
        id: 'basic',
        title: 'العرض الأول',
        price: '3,500 ر.س',
        subtitle: 'الأساسيات المثالية',
        image: '/files/package_basic_sitter_1771587796000.png',
        features: [
            '٢٠ صوره الكترونية معدلة عالية الدقة',
            'USB عالي الجودة يشمل ٢٠ صوره',
            'طباعة ورقيه لـ ٣ صور بحجم ٨*١٠” (هدية)',
            'توفير ملابس واكسسوارات التصوير'
        ],
        note: '٦٠٠ ريال رسوم إضافية للصور العائلية (تشمل ٥ صور)',
        highlight: false
    },
    {
        id: 'standard',
        title: 'العرض الثاني',
        price: '6,800 ر.س',
        subtitle: 'الأكثر اكتمالاً',
        image: '/files/package_standard_sitter_1771587941716.png',
        features: [
            '٢٥ صورة الكترونية معدلة عالية الدقة',
            'USB عالي الجودة يشمل ٢٥ صوره',
            'طباعة ورقيه لـ ٣ صور بحجم ٨*١٠” (هدية)',
            'توفير ملابس واكسسوارات التصوير',
            'عرض شرائح Slideshow فني (هدية)',
            'البوم عالي الجودة بتصميم جميل'
        ],
        note: '٦٠٠ ريال رسوم إضافية للصور العائلية (تشمل ٥ صور)',
        highlight: true
    },
    {
        id: 'premium',
        title: 'العرض الثالث',
        price: '9,850 ر.س',
        subtitle: 'التجربة الفاخرة',
        image: '/files/package_premium_sitter_1771587959309.png',
        features: [
            '٣٠ صورة الكترونية معدلة عالية الدقة',
            'USB عالي الجودة يشمل ٣٠ صوره',
            'طباعة ورقيه لـ ٣ صور بحجم ٨*١٠” (هدية)',
            'توفير ملابس واكسسوارات التصوير',
            'عرض شرائح Slideshow فني (هدية)',
            'البوم عالي الجودة بتصميم جميل',
            'لوحة جدارية معدنية مقاس ٥٠*٧٠ سم',
            '٥ صور عائلية مجانية (شاملة)'
        ],
        note: 'تشمل صور الإخوة والعائلة مجاناً',
        highlight: false
    }
]

const SitterSession = () => {
    return (
        <div className="sitter-page">
            <Navbar />

            {/* Hero Section */}
            <header className="sitter-hero">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    poster="/files/Saudi-arabia-newborn-photography-8.jpg"
                >
                    <source src="/files/sitting-age.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
                <div className="container sitter-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-text-content"
                    >
                        <p className="subtitle">توثيق مراحل النمو</p>
                        <h1 className="title">جلسة تصوير عمر الجلوس</h1>
                        <p className="description">
                            عندما يبدأ طفلك باكتشاف العالم من حوله وهو جالس بطلته الجميلة، نلتقط تلك الابتسامات العفوية التي تدوم للأبد.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Intro Section */}
            <section className="sitter-intro">
                <div className="container intro-grid">
                    <div className="intro-image">
                        <img src="/files/Saudi-arabia-newborn-photography-8.jpg" alt="Sitter Session" />
                    </div>
                    <div className="intro-text">
                        <h2>لحظة استثنائية</h2>
                        <p>
                            عمر الجلوس هو أحد ألطف المراحل التصويرية، حيث تتجلى شخصية الطفل ويبدأ بالتفاعل المباشر مع الكاميرا. نركز في هذه الجلسة على إبراز براءة ملامحهم وفرحتهم بالاستقلال الصغير.
                        </p>
                        <div className="important-notes">
                            <h3>ملاحظات هامة:</h3>
                            <ul>
                                <li>لا يتم تسليم الصور الخام (غير المعدلة).</li>
                                <li>يتم تسليم الصور النهائية خلال ٤ إلى ٦ أسابيع.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Packages Grid */}
            <section className="sitter-packages">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="subtitle">عروضنا الخاصة</p>
                        <h2 className="title">استثمار في صنع الذكريات</h2>
                    </div>

                    <div className="package-details-grid">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                className={`package-detail-card ${pkg.highlight ? 'featured' : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {pkg.highlight && <div className="featured-badge">الأكثر اختياراً</div>}
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
                                    حجز العرض الآن
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
                        <img src="/files/logo.png" alt="M.E. Photography" className="logo-img" />
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

export default SitterSession
