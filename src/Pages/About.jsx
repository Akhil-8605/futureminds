import React from "react"
import AboutBg from "../Images/aboutusbg.webp"
import "./about.css"

export default function AboutPage() {
    return (
        <main className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">About FutureMinds</h1>
                        <p className="hero-description">
                            Nurturing young minds through creativity, innovation, and fun learning experiences.
                        </p>
                    </div>
                </div>
                <div className="hero-pattern"></div>
            </section>

            {/* Our Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2 className="section-title">Our Story</h2>
                            <p className="story-paragraph">
                                FutureMinds was founded with a simple yet powerful vision: to create a space where children can
                                explore, learn, and grow in a fun and supportive environment. We believe that every child has unique
                                talents and potential that can be nurtured through the right guidance and opportunities.
                            </p>
                            <p className="story-paragraph">
                                What started as a small summer camp with just a handful of activities has now grown into a comprehensive
                                program offering a wide range of activities designed to develop various skills in children. Our team of
                                dedicated instructors and mentors are passionate about child development and committed to providing the
                                best learning experience.
                            </p>
                            <p className="story-paragraph">
                                At FutureMinds, we focus not just on teaching skills but also on building character, fostering
                                creativity, and instilling values that will help children succeed in all aspects of life.
                            </p>
                        </div>
                        <div className="story-image">
                            <div className="image-glow"></div>
                            <div className="image-frame">
                                <img
                                    src={AboutBg}
                                    alt="FutureMinds Story"
                                    width={600}
                                    height={400}
                                    className="image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Values</h2>
                        <p className="section-description">
                            At FutureMinds, our values guide everything we do. We believe in creating an environment where children
                            can thrive, learn, and grow into confident individuals ready to face the world.
                        </p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon excellence-icon"></div>
                            <h3 className="value-title">Excellence</h3>
                            <p className="value-description">
                                We strive for excellence in everything we do, from our curriculum to our teaching methods.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon inclusivity-icon"></div>
                            <h3 className="value-title">Inclusivity</h3>
                            <p className="value-description">
                                We welcome children from all backgrounds and abilities, creating a diverse and inclusive community.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon innovation-icon"></div>
                            <h3 className="value-title">Innovation</h3>
                            <p className="value-description">
                                We embrace new ideas and approaches to make learning engaging and effective for children.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon care-icon"></div>
                            <h3 className="value-title">Care</h3>
                            <p className="value-description">
                                We provide a safe, nurturing environment where every child feels valued and supported.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">FutureMinds is Under <a href="https://vishwalatarati.in/">Vishwalatarati</a></h2>
                        <p className="section-description">
                            This FututreMinds is proudly managed by Vishwalatarati Pvt Limited—a dynamic company committed to excellence and innovation. With a strong focus on quality, creativity, and client satisfaction, our team works relentlessly to deliver top-notch solutions and services that set new standards in the industry. We blend technology, strategy, and passion to drive progress and success in every project. Join us as we redefine excellence in the modern business landscape.
                        </p>
                    </div>
                </div>
            </section>


            {/* Our Team Section */}
            {/* <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Team</h2>
                        <p className="section-description">
                            Meet our dedicated team of instructors and mentors who are passionate about nurturing young minds.
                        </p>
                    </div>

                    <div className="team-grid">
                        <div className="team-card">
                            <div className="team-avatar">
                                <img
                                    src="/placeholder.svg?height=96&width=96"
                                    alt="Team Member"
                                    width={96}
                                    height={96}
                                    className="avatar-image"
                                />
                            </div>
                            <h3 className="team-name">Rajesh Sharma</h3>
                            <p className="team-role">Founder & Director</p>
                            <p className="team-bio">
                                With over 15 years of experience in education, Rajesh is passionate about creating innovative learning
                                experiences for children.
                            </p>
                            <div className="team-social">
                                <a href="#" className="social-link linkedin-icon"></a>
                                <a href="#" className="social-link twitter-icon"></a>
                                <a href="#" className="social-link email-icon"></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <div className="team-avatar">
                                <img
                                    src="/placeholder.svg?height=96&width=96"
                                    alt="Team Member"
                                    width={96}
                                    height={96}
                                    className="avatar-image"
                                />
                            </div>
                            <h3 className="team-name">Priya Patel</h3>
                            <p className="team-role">Program Coordinator</p>
                            <p className="team-bio">
                                Priya oversees all our programs and ensures that they meet our high standards of quality and
                                effectiveness.
                            </p>
                            <div className="team-social">
                                <a href="#" className="social-link linkedin-icon"></a>
                                <a href="#" className="social-link twitter-icon"></a>
                                <a href="#" className="social-link email-icon"></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <div className="team-avatar">
                                <img
                                    src="/placeholder.svg?height=96&width=96"
                                    alt="Team Member"
                                    width={96}
                                    height={96}
                                    className="avatar-image"
                                />
                            </div>
                            <h3 className="team-name">Amit Kumar</h3>
                            <p className="team-role">Lead Instructor</p>
                            <p className="team-bio">
                                Amit brings creativity and enthusiasm to our activities, making learning fun and engaging for all
                                children.
                            </p>
                            <div className="team-social">
                                <a href="#" className="social-link linkedin-icon"></a>
                                <a href="#" className="social-link twitter-icon"></a>
                                <a href="#" className="social-link email-icon"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="cta-section">
                <div className="about-container">
                    <div className="about-cta-content">
                        <h2 className="about-cta-title">Ready to Join FutureMinds?</h2>
                        <p className="about-cta-description">
                            Enroll your child in our summer camp program and watch them learn, grow, and have fun!
                        </p>
                        <a href="/contact" className="about-cta-link" style={{ textDecoration: "none" }}>
                            <button className="about-cta-button">
                                Enroll Now
                                <span className="about-arrow-icon"></span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

