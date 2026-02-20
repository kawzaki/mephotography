import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Gallery.css'

const categories = [
    {
        id: 'newborn',
        title: 'المواليد',
        subtitle: 'أنفاس البداية',
        image: '/files/Saudi-arabia-newborn-photography-9.jpg',
        description: 'توثيق الأيام الأولى لطفلك بكل حب وهدوء.',
        link: '/newborn-session'
    },
    {
        id: 'maternity',
        title: 'الحوامل',
        subtitle: 'نبض الانتظار',
        image: '/files/Saudi-Arabia-newborn-and-kids-photography-outdoor-7.jpg',
        description: 'جمال الأمومة في أرقى حالاتها.',
        link: '#'
    },
    {
        id: 'first48',
        title: '48 ساعة',
        subtitle: 'اللقاء الأول',
        image: '/files/Salman-13-2-1.jpg',
        description: 'أولى اللحظات في المستشفى، حقيقية ومؤثرة.',
        link: '/first-48-session'
    },
    {
        id: 'sitter',
        title: 'عمر الجلوس',
        subtitle: 'بهجة النمو',
        image: '/files/Saudi-arabia-newborn-photography-8.jpg',
        description: 'احتفالاً بالخطوات الأولى والضحكات التي لا تنسى.',
        link: '/sitter-session'
    }
]

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <p className="subtitle">اعمالنا</p>
                    <h2 className="title">حكايات لمست قلوبنا</h2>
                </div>

                <div className="gallery-grid-featured">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            className={`gallery-item ${index % 3 === 0 ? 'large' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={cat.link} className="image-wrapper-link">
                                <div className="image-wrapper">
                                    <img src={cat.image} alt={cat.title} />
                                    <div className="overlay">
                                        <span className="cat-subtitle">{cat.subtitle}</span>
                                        <h3>{cat.title}</h3>
                                        <p>{cat.description}</p>
                                        <span className="view-more">عرض التفاصيل <ArrowRight size={16} /></span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
