"use client"

import { useEffect } from "react"
import "./hero-section.css"
import herobg from "./herobg.png"
export default function HeroSection() {
    useEffect(() => {
        // Animation for the floating elements
        const animateFloatingElements = () => {
            const elements = document.querySelectorAll(".floating-element")
            elements.forEach((element, index) => {
                // Add random animation delay to each element
                element.style.animationDelay = `${index * 0.5}s`
            })
        }

        // Text animation
        const animateText = () => {
            const headingElements = document.querySelectorAll(".animate-text")
            headingElements.forEach((element, index) => {
                element.style.animationDelay = `${0.3 + index * 0.1}s`
            })
        }

        animateFloatingElements()
        animateText()

        // Parallax effect on scroll
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const heroImage = document.querySelector(".hero-image-container")
            const heroContent = document.querySelector(".hero-content")

            if (heroImage && heroContent) {
                heroImage.style.transform = `translateY(${scrollPosition * 0.05}px)`
                heroContent.style.transform = `translateY(${scrollPosition * 0.03}px)`
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <section className="hero-section">
            {/* Animated background elements */}
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
            <div className="floating-element element-4"></div>
            <div className="floating-element element-5"></div>

            <div className="hero-container" style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                <div className="hero-content">
                    {/* <div className="badge">Summer Vacation 2025 • 45 Days of Fun</div> */}

                    <h1 className="hero-title">
                        <span className="gradient-text animate-text">Explore, Create, Innovate</span>
                        <br />
                        <span className="animate-text">with FutureMinds Camp!</span>
                    </h1>

                    <p className="hero-description animate-text">
                        Join our exciting summer program designed to nurture young minds through creativity, innovation, and fun
                        activities. Limited spots available!
                    </p>

                    <div className="hero-buttons" style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                        <a href="/contact">
                            <button className="enroll-button">
                                Enroll Now
                                <span className="arrow-icon-hero"></span>
                            </button>
                        </a>
                        <a href="/activities">
                            <button className="explore-button">Explore Activities</button>
                        </a>
                    </div>

                    <div
                        className="hero-features"
                        style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}
                    >
                        <div className="feature-item">
                            <div className="feature-icon swimming-icon"></div>
                            <span>Swimming</span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon dance-icon"></div>
                            <span>Dance</span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon space-icon"></div>
                            <span>Space Exploration</span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon spirituality-icon"></div>
                            <span>Spirituality</span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon more-icon"></div>
                            <span>More</span>
                        </div>
                    </div>
                </div>

                {/* <div className="hero-image-container">
                    <div className="image-glow"></div>
                    <div className="image-frame">
                        <img
                            src={herobg}
                            alt="FutureMinds Summer Camp"
                            width={600}
                            height={800}
                            className="hero-image"
                        />
                        <div className="price-badge">
                            <div className="price-content">
                                <div className="price-label">Only</div>
                                <div className="price-amount">₹3K</div>
                            </div>
                        </div>
                    </div>

                    <div className="age-badge">Ages 6-13</div>
                    <div className="duration-badge">45 Days</div>
                </div> */}
            </div>

            {/* Wave divider */}
            {/* <div className="wave-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div> */}

        </section>
    )
}