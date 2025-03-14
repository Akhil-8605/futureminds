"use client"

import { useEffect, useRef, useState, forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./activities.css"

import Acivitybg from "../Images/activitisbg.jpg"

import SwimmingImg from "../Images/swimming.png"
import Painting from "../Images/paiting.jpg"
import Kathak from "../Images/kathak.jpg"
import Freestyle from "../Images/freestyle.jpg"
import Space from "../Images/space.jpg"
import Yoga from "../Images/yoga.png"
// Wrap lucide-react icons so they forward refs
import {
    CheckCircle as LucideCheckCircle,
    ChevronRight as LucideChevronRight,
    Star as LucideStar,
    Clock as LucideClock,
    Calendar as LucideCalendar,
    ArrowRight,
} from "lucide-react"

const CheckCircle = forwardRef((props, ref) => (
    <LucideCheckCircle {...props} ref={ref} />
))
const ChevronRight = forwardRef((props, ref) => (
    <LucideChevronRight {...props} ref={ref} />
))
const Star = forwardRef((props, ref) => <LucideStar {...props} ref={ref} />)
const Clock = forwardRef((props, ref) => <LucideClock {...props} ref={ref} />)
const Calendar = forwardRef((props, ref) => (
    <LucideCalendar {...props} ref={ref} />
))
export default function ActivitiesPage() {
    const [activeSection, setActiveSection] = useState("swimming")
    const heroRef = useRef(null)

    useEffect(() => {
        if (!heroRef.current) return

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e
            if (!heroRef.current) return
            const { left, top, width, height } = heroRef.current.getBoundingClientRect()

            const x = (clientX - left) / width
            const y = (clientY - top) / height

            const bubbles = document.querySelectorAll(".bubble")
            bubbles.forEach((bubble, i) => {
                const speed = 1 + (i % 3) * 0.5
                const xMove = (x - 0.5) * speed * 30
                const yMove = (y - 0.5) * speed * 30

                bubble.style.transform = `translate(${xMove}px, ${yMove}px)`
            })
        }

        document.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    const handleActivityClick = (activity) => {
        setActiveSection(activity)
    }

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6 },
        },
    }

    const activities = [
        {
            id: "swimming",
            title: "Swimming",
            image: SwimmingImg,
            badge: "Physical Development",
            description:
                "Our swimming program is designed to teach children essential water safety skills while building confidence and physical strength. Led by certified instructors, children learn proper swimming techniques in a safe and supportive environment.",
            features: [
                "Certified instructors",
                "Safe environment",
                "Different skill levels",
                "Water safety education",
            ],
            schedule: {
                days: "Monday, Wednesday, Friday",
                time: "9:00 AM - 10:30 AM",
            },
            color: "blue",
            icon: "🏊‍♂️",
        },
        {
            id: "drawing-painting",
            title: "Drawing & Painting",
            image: Painting,
            badge: "Creative Development",
            description:
                "Our art program encourages children to express themselves through various mediums including drawing, painting, and crafts. They'll learn different techniques while developing their creativity and fine motor skills.",
            features: [
                "Various art mediums",
                "Creative expression",
                "Fine motor skill development",
                "Take-home art projects",
            ],
            schedule: {
                days: "Tuesday, Thursday",
                time: "10:00 AM - 11:30 AM",
            },
            color: "pink",
            icon: "🎨",
        },
        {
            id: "kathak",
            title: "Kathak Dance (For Girls)",
            image: Kathak,
            badge: "Cultural Development",
            description:
                "Our Kathak dance program introduces girls to this classical Indian dance form, teaching them grace, rhythm, and cultural appreciation. Through regular practice, they develop coordination, discipline, and self-expression.",
            features: [
                "Classical dance techniques",
                "Cultural education",
                "Rhythm and coordination",
                "Performance opportunities",
            ],
            schedule: {
                days: "Monday, Wednesday",
                time: "2:00 PM - 3:30 PM",
            },
            color: "purple",
            icon: "💃",
        },
        {
            id: "freestyle-dance",
            title: "Freestyle Dance (For Boys)",
            image: Freestyle,
            badge: "Physical Development",
            description:
                "Our freestyle dance program for boys focuses on modern dance styles, helping them develop rhythm, coordination, and self-expression. Through energetic routines, they build confidence and physical fitness.",
            features: [
                "Modern dance styles",
                "Physical fitness",
                "Self-expression",
                "Performance opportunities",
            ],
            schedule: {
                days: "Tuesday, Thursday",
                time: "2:00 PM - 3:30 PM",
            },
            color: "green",
            icon: "🕺",
        },
        {
            id: "space-exploration",
            title: "Space Exploration Program",
            image: Space,
            badge: "Educational Development",
            description:
                "Our space exploration program takes children on a journey through the cosmos, teaching them about stars, planets, and space science. Through interactive activities and experiments, they develop curiosity and scientific thinking.",
            features: [
                "Astronomy basics",
                "Interactive experiments",
                "Scientific thinking",
                "Space-themed projects",
            ],
            schedule: {
                days: "Friday",
                time: "10:00 AM - 12:00 PM",
            },
            color: "indigo",
            icon: "🚀",
        },
        {
            id: "yoga",
            title: "Character Development & Yoga",
            image: Yoga,
            badge: "Holistic Development",
            description:
                "Our yoga and character development program focuses on building physical strength, mental wellness, and positive character traits. Children learn yoga poses, breathing techniques, and mindfulness practices.",
            features: [
                "Basic yoga poses",
                "Breathing techniques",
                "Mindfulness practices",
                "Character building",
            ],
            schedule: {
                days: "Monday, Wednesday, Friday",
                time: "8:00 AM - 9:00 AM",
            },
            color: "yellow",
            icon: "🧘‍♀️",
        },
    ]

    return (
        <main className="activities-page">
            {/* Hero Section */}
            <section className="hero-section" ref={heroRef}>
                <div className="hero-bubbles">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className={`bubble bubble-${(i % 5) + 1}`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        
                        <h1 className="hero-title" style={{marginTop: "5rem"}}>
                            <span className="text-gradient">Discover</span> Our Exciting Activities
                        </h1>
                        <p className="hero-description">
                            Join us for a world of fun, learning, and growth with our specially designed activities for
                            children
                        </p>
                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            style={{justifyContent: "center"}}
                        >
                            <a href="#activities" className="primary-button">
                                Explore Activities
                                <ArrowRight className="button-icon" />
                            </a>
                            <a href="/enroll" className="secondary-button">
                                Enroll Now
                            </a>
                        </motion.div>
                    </motion.div>
                    {/* <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={Acivitybg}
                            alt="Happy children playing"
                            width={500}
                            height={500}
                        />
                    </motion.div> */}
                </div>
                <div className="hero-wave"></div>
            </section>

            {/* Activities Navigation */}
            <section id="activities" className="activities-nav">
                <div className="container">
                    <h2 className="section-title">Our Activities</h2>
                    <p className="section-description">
                        Choose from our wide range of engaging and educational activities designed to develop various skills in
                        children
                    </p>

                    <div className="activities-tabs">
                        {activities.map((activity) => (
                            <button
                                key={activity.id}
                                className={`activity-tab ${activeSection === activity.id ? "active" : ""} ${activity.color}`}
                                onClick={() => handleActivityClick(activity.id)}
                            >
                                <span className="activity-icon">{activity.icon}</span>
                                <span className="activity-name">{activity.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activity Details */}
            <section className="activity-details">
                <div className="activity-container">
                    <AnimatePresence mode="wait">
                        {activities.map(
                            (activity) =>
                                activeSection === activity.id && (
                                    <motion.div
                                        key={activity.id}
                                        className={`activity-card ${activity.color}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="activity-card-content">
                                            <div className="activity-header">
                                                <div className={`activity-badge ${activity.color}`}>{activity.badge}</div>
                                                <h3 className="activity-title">{activity.title}</h3>
                                                <p className="activity-description">{activity.description}</p>
                                            </div>

                                            <div className="activity-body">
                                                <div className="activity-features">
                                                    <h4 className="features-title">What Children Will Learn</h4>
                                                    <div className="features-grid">
                                                        {activity.features.map((feature, index) => (
                                                            <motion.div
                                                                key={index}
                                                                className="feature-item"
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                                            >
                                                                <CheckCircle className={`feature-icon ${activity.color}`} />
                                                                <span className="feature-text">{feature}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* <div className="activity-schedule-card">
                                                    <h4 className="schedule-title">Schedule</h4>
                                                    <div className="schedule-details">
                                                        <div className="schedule-item">
                                                            <Calendar className="schedule-icon" />
                                                            <span>{activity.schedule.days}</span>
                                                        </div>
                                                        <div className="schedule-item">
                                                            <Clock className="schedule-icon" />
                                                            <span>{activity.schedule.time}</span>
                                                        </div>
                                                    </div>
                                                    <a href="/enroll" className={`schedule-button ${activity.color}`}>
                                                        Join This Activity
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="activity-card-image">
                                            <div className={`image-decoration ${activity.color}`}>
                                                <div className="decoration-circle circle-1"></div>
                                                <div className="decoration-circle circle-2"></div>
                                                <div className="decoration-circle circle-3"></div>
                                            </div>
                                            <div className="image-container">
                                                <img
                                                    src={activity.image}
                                                    alt={`${activity.title} Activity`}
                                                    width={600}
                                                    height={400}
                                                    className="activity-image"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ),
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">What Parents Say</h2>
                    <p className="section-description">Hear from parents whose children have participated in our activities</p>

                    <div className="testimonials-grid">
                        <motion.div
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="star-icon" />
                                ))}
                            </div>
                            <p className="testimonial-text">
                                "My daughter absolutely loves the Kathak dance classes! She's not only learning dance but also gaining
                                confidence and discipline."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <img src="/placeholder.svg?height=50&width=50" alt="Parent" width={50} height={50} />
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">Priya Sharma</h4>
                                    <p className="author-relation">Mother of Ananya, 8</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="star-icon" />
                                ))}
                            </div>
                            <p className="testimonial-text">
                                "The swimming program has been fantastic for my son. The instructors are patient and skilled, and he's
                                made great progress."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <img src="/placeholder.svg?height=50&width=50" alt="Parent" width={50} height={50} />
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">Rajesh Patel</h4>
                                    <p className="author-relation">Father of Arjun, 7</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="star-icon" />
                                ))}
                            </div>
                            <p className="testimonial-text">
                                "The space exploration program has ignited my child's curiosity about science. He comes home excited to
                                share what he's learned!"
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <img src="/placeholder.svg?height=50&width=50" alt="Parent" width={50} height={50} />
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">Meera Gupta</h4>
                                    <p className="author-relation">Mother of Vikram, 9</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-decoration">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="cta-shape"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`,
                            }}
                        >
                            {i % 3 === 0 ? "★" : i % 3 === 1 ? "●" : "■"}
                        </div>
                    ))}
                </div>
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">Ready to Join Our Summer Camp?</h2>
                        <p className="cta-description">
                            Enroll your child today and let them experience the joy of learning through these exciting activities!
                        </p>
                        <div className="cta-buttons">
                            <motion.a
                                href="/contact"
                                className="cta-primary-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Enroll Now
                                <ChevronRight className="button-icon" />
                            </motion.a>
                            <motion.a
                                href="/contact"
                                className="cta-secondary-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
