import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'الرئيسية', path: isHome ? '#home' : '/' },
        {
            name: 'معرض الصور',
            path: '#gallery',
            submenu: [
                { name: 'عمر الجلوس', path: '/sitter-gallery' },
                { name: 'حديثي الولادة', path: '/newborn-gallery' },
                { name: 'أول ٤٨ ساعة', path: '/first-48-gallery' }
            ]
        },
        {
            name: 'الأسعار والحجز',
            path: '#packages',
            submenu: [
                { name: 'حديثي الولادة', path: '/newborn-session' },
                { name: 'عمر الجلوس', path: '/sitter-session' },
                { name: 'أول ٤٨ ساعة', path: '/first-48-session' }
            ]
        },
        { name: 'من نحن', path: '/about-us' },
        { name: 'التواصل', path: isHome ? '#contact' : '/' },
    ]

    const handleLinkClick = (path) => {
        setIsMenuOpen(false)
        if (path.startsWith('#') && isHome) {
            const element = document.querySelector(path)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <img src="/files/logo.png" alt="M.E. Photography" className="logo-img" />
                </Link>

                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="nav-item-wrapper"
                            onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.submenu && setActiveDropdown(null)}
                        >
                            {link.submenu ? (
                                <div className="nav-dropdown-trigger">
                                    {link.name} <ChevronDown size={14} />
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="nav-submenu"
                                            >
                                                {link.submenu.map((sub) => (
                                                    <Link key={sub.name} to={sub.path} className="submenu-link">
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                link.path.startsWith('#') && isHome ? (
                                    <a href={link.path} onClick={() => handleLinkClick(link.path)}>{link.name}</a>
                                ) : (
                                    <Link to={link.path}>{link.name}</Link>
                                )
                            )}
                        </div>
                    ))}
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <React.Fragment key={link.name}>
                                {link.path.startsWith('#') && isHome ? (
                                    <a href={link.path} onClick={() => handleLinkClick(link.path)}>{link.name}</a>
                                ) : (
                                    <Link to={link.path} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                                )}
                                {link.submenu && (
                                    <div className="mobile-submenu">
                                        {link.submenu.map(sub => (
                                            <Link key={sub.name} to={sub.path} className="mobile-submenu-link" onClick={() => setIsMenuOpen(false)}>
                                                - {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
