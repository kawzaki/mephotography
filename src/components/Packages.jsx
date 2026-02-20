import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './Packages.css'

const packages = [
    {
        title: 'جلسة المواليد',
        price: 'يبدأ من 3500 ر.س',
        features: [
            'جلسة تصوير لمدة 3-4 ساعات',
            'تنسيقات وإكسسوارات متنوعة',
            '20 صورة معدلة باحترافية',
            'USB عالي الجودة'
        ],
        highlight: true
    },
    {
        title: 'عمر الجلوس',
        price: 'يبدأ من 3500 ر.س',
        features: [
            'جلسة تصوير لمدة ساعة ونصف',
            'اختيار فستانين من الاستوديو',
            '10 صور معدلة باحترافية',
            'تسليم الصور خلال أسبوع'
        ],
        highlight: false
    },
    {
        title: 'جلسة الـ 48 ساعة',
        price: 'يبدأ من 3000 ر.س',
        features: [
            'تصوير في المستشفى',
            'توثيق اللحظات العفوية الأولى',
            'جميع الصور الأصلية',
            '10 صور معدلة باحترافية'
        ],
        highlight: false
    }
]

const Packages = () => {
    return (
        <section id="packages" className="packages-section">
            <div className="container">
                <div className="section-header text-center">
                    <p className="subtitle">الباقات</p>
                    <h2 className="title">استثمار في صنع الذكريات</h2>
                </div>

                <div className="packages-grid">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.title}
                            className={`package-card ${pkg.highlight ? 'highlight' : ''}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {pkg.highlight && <div className="badge">الأكثر طلباً</div>}
                            <h3>{pkg.title}</h3>
                            <div className="price">{pkg.price}</div>
                            <ul className="features">
                                {pkg.features.map(feat => (
                                    <li key={feat}><Check size={16} /> {feat}</li>
                                ))}
                            </ul>
                            <button className="btn btn-package">احجز الآن</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Packages
