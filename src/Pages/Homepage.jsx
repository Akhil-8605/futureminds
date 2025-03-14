import HeroSection from "../Components/HeroSection"
import ActivityCard from "../Components/activity-card"
import CountdownTimer from "../Components/count-down-timer"
import "./homepage.css"

import whowearebg from "../Images/whowearebg.png"

export default function Home() {
    return (
        <main className="home-page">
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Who Are We?</h2>
                        <div className="section-divider"></div>
                        <p className="section-description">
                            FutureMinds is a platform that nurtures young minds through creativity and innovation. We empower the next
                            generation with skills, knowledge, and hands-on learning experiences.
                        </p>
                    </div>

                    <div className="about-content">
                        <div className="about-image">
                            <img
                                src={whowearebg}
                                alt="FutureMinds"
                                width={600}
                                height={400}
                                className="image"
                            />
                        </div>
                        <div className="about-cards">
                            <div className="about-card mission-card">
                                <h3 className="card-title">Our Mission</h3>
                                <p className="card-text">
                                    To create a fun and engaging environment where children can explore their potential and develop
                                    essential life skills. <br />

                                    To become the leading platform for holistic child development, combining fun with learning in
                                    innovative ways.
                                </p>
                            </div>

                            <div className="about-card why-card">
                                <h3 className="card-title">Why Choose Us?</h3>
                                <ul className="card-list">
                                    <li>Expert instructors with experience in child education</li>
                                    <li>Safe and nurturing environment</li>
                                    <li>Comprehensive program covering various skills</li>
                                    <li>Limited batch size ensuring personal attention</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section id="activities" className="activities-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Activities</h2>
                        <div className="section-divider"></div>
                        <p className="section-description">
                            Discover our wide range of engaging and educational activities designed to develop various skills in
                            children.
                        </p>
                    </div>

                    <div className="activities-grid">
                        <ActivityCard
                            title="Swimming"
                            description="Learn swimming techniques in a safe environment with certified instructors."
                            color="blue"
                        />
                        <ActivityCard
                            title="Drawing & Painting"
                            description="Explore creativity through colors, shapes, and artistic expressions."
                            color="red"
                        />
                        <ActivityCard
                            title="Kathak (For Girls)"
                            description="Experience the grace and elegance of this classical Indian dance form."
                            color="pink"
                        />
                        <ActivityCard
                            title="Freestyle Dance (For Boys)"
                            description="Develop rhythm, coordination, and self-expression through modern dance styles."
                            color="orange"
                        />
                        <ActivityCard
                            title="Space Exploration Program"
                            description="Journey through the cosmos and learn about stars, planets, and space science."
                            color="indigo"
                        />
                        <ActivityCard
                            title="Character Development & Yoga"
                            description="Build physical strength, mental wellness, and positive character traits."
                            color="purple"
                        />
                    </div>

                    <div className="view-more">
                        <a href="/activities">
                            <button className="view-more-button">
                                View All Activities
                                <span className="arrow-icon"></span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Enrollment Section */}
            <section id="enroll" className="enrollment-section">
                <div className="floating-element float-1"></div>
                <div className="floating-element float-2"></div>

                <div className="container">
                    <div className="enrollment-card">
                        <div className="enrollment-header">
                            <h2 className="enrollment-title">Join Our Summer Camp!</h2>
                            <div className="enrollment-divider"></div>
                            <p className="enrollment-description">
                                Limited spots available for our summer program. Enroll now to secure your child's spot!
                            </p>
                        </div>

                        <div className="enrollment-content" style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                            {/* <div className="enrollment-details">
                                <div className="detail-item">
                                    <div className="detail-icon age-icon"></div>
                                    <div className="detail-text">
                                        <h3 className="detail-title">Age Group</h3>
                                        <p className="detail-description">6 to 13 years</p>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <div className="detail-icon date-icon"></div>
                                    <div className="detail-text">
                                        <h3 className="detail-title">Start Date</h3>
                                        <p className="detail-description">April 10, 2025</p>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <div className="detail-icon fee-icon"></div>
                                    <div className="detail-text">
                                        <h3 className="detail-title">Fees</h3>
                                        <p className="detail-description">₹3,000 for the full program</p>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <div className="detail-icon duration-icon"></div>
                                    <div className="detail-text">
                                        <h3 className="detail-title">Duration</h3>
                                        <p className="detail-description">45 days of fun-filled learning</p>
                                    </div>
                                </div>
                            </div> */}

                            <div className="enrollment-timer">
                                <h3 className="timer-title">Registration Closing In:</h3>
                                <CountdownTimer targetDate="2025-04-01T00:00:00" />
                                <div className="enroll-button-container">
                                    <a href="/contact">
                                        <button className="enroll-now-button">Enroll Now</button>
                                    </a>
                                </div>
                                <p className="limited-slots">Limited slots available. Reserve your spot today!</p>
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

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Parents Say</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">S</div>
                                <div className="testimonial-author">
                                    <h4 className="author-name">Sunita Sharma</h4>
                                    <p className="author-info">Parent of Aryan, 8</p>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                "FutureMinds has transformed my son. He's more confident, creative, and happy. The swimming classes were
                                particularly beneficial!"
                            </p>
                            <div className="testimonial-rating">
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar green-avatar">R</div>
                                <div className="testimonial-author">
                                    <h4 className="author-name">Rajesh Kumar</h4>
                                    <p className="author-info">Parent of Priya, 11</p>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                "The Kathak classes have given my daughter a wonderful cultural experience. The instructors are very
                                professional and caring."
                            </p>
                            <div className="testimonial-rating">
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar blue-avatar">A</div>
                                <div className="testimonial-author">
                                    <h4 className="author-name">Anisha Patel</h4>
                                    <p className="author-info">Parent of Rohan, 7</p>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                "The Space Exploration program sparked my son's interest in science. The way they make learning fun is
                                truly remarkable!"
                            </p>
                            <div className="testimonial-rating">
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

