import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2, ChevronLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import './SitterGallery.css'

const galleryImages = [
    {
        id: 1,
        src: `${import.meta.env.BASE_URL}files/Saudi-arabia-newborn-photography-8.jpg`,
        tag: 'بهجة النمو',
        size: 'large'
    },
    {
        id: 2,
        src: `${import.meta.env.BASE_URL}files/package_standard_sitter_1771587941716.png`,
        tag: 'براءة ملموسة',
        size: 'small'
    },
    {
        id: 3,
        src: `${import.meta.env.BASE_URL}files/package_premium_sitter_1771587959309.png`,
        tag: 'حكاية ضحكة',
        size: 'medium'
    },
    {
        id: 4,
        src: `${import.meta.env.BASE_URL}files/package_basic_sitter_1771587796000.png`,
        tag: 'تفاصيل صغيرة',
        size: 'tall'
    },
    {
        id: 5,
        src: `${import.meta.env.BASE_URL}files/Saudi-Arabia-newborn-and-kids-photography-outdoor-7.jpg`,
        tag: 'نبض الحياة',
        size: 'medium'
    },
    {
        id: 6,
        src: `${import.meta.env.BASE_URL}files/Saudi-Arabia-newborn-and-kids-photography-outdoor-10.jpg`,
        tag: 'إشراقة أولى',
        size: 'small'
    },
    {
        id: 7,
        src: `${import.meta.env.BASE_URL}files/Saudi-arabia-newborn-photography-9.jpg`,
        tag: 'هدوء تام',
        size: 'large'
    },
    {
        id: 8,
        src: `${import.meta.env.BASE_URL}files/Salman-13-2-1.jpg`,
        tag: 'حلم وردي',
        size: 'tall'
    }
]

const SitterGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [direction, setDirection] = useState(0)

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    const handleNext = useCallback(() => {
        if (!selectedImage) return
        setDirection(1)
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
        const nextIndex = (currentIndex + 1) % galleryImages.length
        setSelectedImage(galleryImages[nextIndex])
    }, [selectedImage])

    const handlePrev = useCallback(() => {
        if (!selectedImage) return
        setDirection(-1)
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
        setSelectedImage(galleryImages[prevIndex])
    }, [selectedImage])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return
            if (e.key === 'Escape') setSelectedImage(null)
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === 'ArrowLeft') handlePrev()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImage, handleNext, handlePrev])

    return (
        <div className="sitter-gallery-page">
            <Navbar />

            {/* Gallery Hero */}
            <header className="gallery-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <p className="subtitle">عمر الجلوس</p>
                        <h1 className="title">حكايات بصرية للنمو</h1>
                    </motion.div>
                </div>
            </header>

            {/* Masonry Grid */}
            <section className="gallery-section">
                <div className="container">
                    <div className="masonry-grid">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={img.id}
                                className={`masonry-item ${img.size}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => {
                                    setDirection(0)
                                    setSelectedImage(img)
                                }}
                            >
                                <div className="image-container">
                                    <img src={img.src} alt={img.tag} />
                                    <div className="image-overlay">
                                        <div className="emotional-tag">{img.tag}</div>
                                        <Maximize2 className="zoom-icon" size={24} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox-overlay"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="close-btn" onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImage(null)
                        }}><X size={32} /></button>
                        <div className="lightbox-content-wrapper">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={selectedImage.id}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="lightbox-img-container"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img src={selectedImage.src} alt={selectedImage.tag} />
                                    <div className="lightbox-caption">{selectedImage.tag}</div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content text-center">
                    <p>© 2024 M.E. Photography. جميع الحقوق محفوظة.</p>
                </div>
            </footer>
        </div>
    )
}

export default SitterGallery
