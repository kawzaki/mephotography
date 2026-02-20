import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Camera, Calendar, Award } from 'lucide-react'
import Navbar from '../components/Navbar'
import './About.css'

const About = () => {
    return (
        <div className="about-page">
            <Navbar />

            {/* Hero Section */}
            <header className="about-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="subtitle">رحلتنا وشغفنا</span>
                        <h1 className="title">نبذة عنا</h1>
                    </motion.div>
                </div>
            </header>

            {/* Story Section */}
            <section className="about-content">
                <div className="container">
                    <div className="story-section">
                        <motion.div
                            className="story-image-stack"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="/files/Saudi-arabia-newborn-photography-1-1.gif" alt="Studio Moment" className="story-img" />
                            <img src="/files/Joud-13.gif" alt="Photography Work" className="story-img-secondary" />
                        </motion.div>

                        <motion.div
                            className="story-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>قصة بدأت بالحب والإتقان</h2>
                            <p>
                                M.E. Photography هو نتاج عمل جماعي بين زوجين يجمعهما الشغف بالفن. إسراء مصورة محترفة، تعشق التفاصيل الدقيقة وتولي عناية فائقة لكل طفل تلتقطه عدستها.
                            </p>
                            <p>
                                أما مرتضى، فهو الشخصية التي تهتم بالرؤية الشاملة، يعشق براءة الأطفال، والأهم من ذلك أنه يعرف كيف يحول الأفكار إلى واقع ملموس.
                            </p>
                            <p>
                                هنا وجدا شغفهما، ومن خلال خبرتهما وحبهم للمثالية، بدأت رحلة M.E. Photography في توثيق أثمن اللحظات.
                            </p>
                        </motion.div>
                    </div>

                    {/* Team Section */}
                    <div className="team-grid">
                        <motion.div
                            className="team-member"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Camera className="member-icon" size={40} style={{ color: '#E6A4B4', marginBottom: '1.5rem' }} />
                            <span className="member-role">المصورة المبدعة</span>
                            <h3 className="member-name">إسراء</h3>
                            <p>دقة في التفاصيل، وشغف لا ينتهي بتصوير براءة الأطفال وحديثي الولادة.</p>
                        </motion.div>

                        <motion.div
                            className="team-member"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Award className="member-icon" size={40} style={{ color: '#E6A4B4', marginBottom: '1.5rem' }} />
                            <span className="member-role">الرؤية الاستراتيجية</span>
                            <h3 className="member-name">مرتضى</h3>
                            <p>الاهتمام بالصورة الكبيرة، والعمل على تقديم تجربة استوديو لا تُنسى.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <Calendar size={48} style={{ color: '#E6A4B4', marginBottom: '1rem' }} />
                            <h3>10+</h3>
                            <p>سنوات من الخبرة</p>
                        </div>
                        <div className="stat-item">
                            <Heart size={48} style={{ color: '#E6A4B4', marginBottom: '1rem' }} />
                            <h3>1000+</h3>
                            <p>لحظة تم توثيقها</p>
                        </div>
                        <div className="stat-item">
                            <Award size={48} style={{ color: '#E6A4B4', marginBottom: '1rem' }} />
                            <h3>2013</h3>
                            <p>عام التأسيس</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="location-section" style={{ padding: '8rem 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>موقعنا</h2>
                        <p style={{ maxWidth: '600px', margin: '1.5rem auto', color: 'var(--text-secondary)' }}>
                            يقع الاستوديو الخاص بنا في المنطقة الشرقية بالمملكة العربية السعودية، حيث نرحب بكم لاستكشاف وتوثيق أجمل لحظات عائلتكم.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content text-center">
                    <p>© 2024 M.E. Photography. جميع الحقوق محفوظة.</p>
                </div>
            </footer>
        </div>
    )
}

export default About
