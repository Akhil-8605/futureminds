"use client"

import { useState, useEffect } from "react"
import "./navbar.css"
import logo from "../Images/futuremindslogo.png"
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <div className="logo">
                            <img src={logo} alt="" width={75} height={25}/>
                        </div>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="navbar-menu" style={{alignItems: "center"}}>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                    <a href="/activities" className="nav-link">
                        Activities
                    </a>
                    <a href="/about" className="nav-link">
                        About Us
                    </a>
                    
                    <a href="/contact" className="nav-link">
                        Contact
                    </a>
                    <div className="navbar-actions">
                    <a href="/contact">
                        <button className="enroll-button enroll-button-navbar">Enroll Now</button>
                    </a>
                </div>
                </nav>

                

                {/* Mobile Menu Button */}
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <span className="close-icon">✕</span> : <span className="menu-icon">☰</span>}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <a href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </a>
                    <a href="/about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                        About Us
                    </a>
                    <a href="/activities" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Activities
                    </a>
                    <a href="/gallery" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Gallery
                    </a>
                    <a href="/contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </a>
                    <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                        <button className="mobile-enroll-button">Enroll Now</button>
                    </a>
                </div>
            )}
        </header>
    )
}

