import React from "react";
import "./contact.css"
import { ArrowRight } from "lucide-react";
export default function ContactPage() {
    return (
        <main className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero" style={{ minHeight: "100vh",paddingTop: "0" ,alignContent: "center",marginTop: "0"}}>
                <div className="container">
                    <div className="hero-content" style={{ alignItems: "center" }}>
                        <h1 className="hero-title" style={{fontSize: "5rem"}}>Error !</h1>
                        <p className="hero-description">
                            Oops! The page you are looking for does not exist.
                        </p>
                        <a href="/" className="primary-button">
                                Back To Home
                                <ArrowRight className="button-icon" />
                            </a>
                    </div>
                </div>
                <div className="hero-pattern"></div>
            </section>
        </main>
    )
}

