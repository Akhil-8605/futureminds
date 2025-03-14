import "./activity-card.css"

export default function ActivityCard({ title, description, color, link }) {
    const cardClass = `activity-activity-card ${color}-card`

    return (
        <a href={link || `/activities/`} className="activity-card-link">
            <div className={cardClass}>
                <div className="activity-card-header">
                    {/* <div className="activity-card-icon">
                        <img src={icon || "/placeholder.svg"} alt={title} className="activity-icon-image" />
                    </div> */}
                    <h3 className="card-title" style={{marginLeft: "0rem"}}>{title}</h3>
                </div>
                <div className="activity-card-contents">
                    <p className="activity-card-description">{description}</p>
                </div>
                <div className="activity-card-footer">
                    <span className="activity-learn-more">Learn More</span>
                    <span className="activity-arrow-icon"></span>
                </div>
            </div>
        </a>
    )
}

