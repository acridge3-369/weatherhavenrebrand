import Header from '../components/Header'
import Footer from '../components/Footer'
import './Company.css'
import WeatherhavenText from '../components/WeatherhavenText'

function Company() {
    const leadershipTeam = [
        {
            name: "Ray Castelli",
            role: "Chief Executive Officer",
            bio: <span>Ray Castelli has been the CEO of <WeatherhavenText /> since 2008. Under his leadership, the company has expanded its global footprint and product portfolio.</span>,
            image: "https://placehold.co/400x400/333333/ffffff?text=Ray+Castelli"
        },
        {
            name: "Heather Pauls",
            role: "Chief Financial Officer",
            bio: <span>Heather Pauls brings over 20 years of financial leadership experience to <WeatherhavenText />, overseeing the company's global financial operations.</span>,
            image: "https://placehold.co/400x400/333333/ffffff?text=Heather+Pauls"
        },
        {
            name: "Mikhail Zalesky",
            role: "Chief Commercial Officer",
            bio: <span>Mikhail Zalesky leads <WeatherhavenText />'s global sales and marketing efforts, driving growth in new and existing markets.</span>,
            image: "https://placehold.co/400x400/333333/ffffff?text=Mikhail+Zalesky"
        }
    ]

    const regionalDirectors = [
        {
            name: "Martin Vella",
            role: "Managing Director, EMEA",
            bio: <span>Martin Vella oversees <WeatherhavenText />'s operations in Europe, the Middle East, and Africa.</span>,
            image: "https://placehold.co/400x400/333333/ffffff?text=Martin+Vella"
        },
        {
            name: "Jose Luis Roldan",
            role: "Managing Director, Latin America",
            bio: "Jose Luis Roldan leads the company's expansion and operations across Latin America.",
            image: "https://placehold.co/400x400/333333/ffffff?text=Jose+Luis+Roldan"
        },
        {
            name: "Bill Sault",
            role: "Managing Director, North America",
            bio: <span>Bill Sault is responsible for <WeatherhavenText />'s business development and operations in North America.</span>,
            image: "https://placehold.co/400x400/333333/ffffff?text=Bill+Sault"
        }
    ]

    const boardDirectors = [
        {
            name: "Frank Giustra",
            role: "Director",
            bio: <span>Frank Giustra is a Canadian businessman and philanthropist, and a long-time director of <WeatherhavenText />.</span>,
            image: "https://placehold.co/400x400/333333/ffffff?text=Frank+Giustra"
        },
        {
            name: "General (Ret) Walter Natynczyk",
            role: "Director",
            bio: "General Natynczyk served as the Chief of the Defence Staff of the Canadian Armed Forces.",
            image: "https://placehold.co/400x400/333333/ffffff?text=Walter+Natynczyk"
        },
        {
            name: "Dr. Ken Spencer",
            role: "Director",
            bio: "Dr. Ken Spencer is a co-founder of Creo Products and an experienced technology executive.",
            image: "https://placehold.co/400x400/333333/ffffff?text=Ken+Spencer"
        }
    ]

    return (
        <div className="company-page">
            <Header />

            <section className="company-hero">
                <div className="hero-content">
                    <h1><WeatherhavenText /></h1>
                    <p><WeatherhavenText /> is a leading international supplier of mobile temporary infrastructure for key military, commercial, government and medical applications worldwide.</p>
                    <a href="#contact" className="hero-button">Contact Us</a>
                </div>
            </section>

            <section className="company-section">
                <div className="section-content">
                    <h2 className="section-title">Leadership Team</h2>
                    <div className="team-grid">
                        {leadershipTeam.map((member, index) => (
                            <div key={index} className="team-member">
                                <img src={member.image} alt={member.name} className="member-image" />
                                <div className="member-info">
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="company-section">
                <div className="section-content">
                    <h2 className="section-title">Regional Managing Directors</h2>
                    <div className="team-grid">
                        {regionalDirectors.map((member, index) => (
                            <div key={index} className="team-member">
                                <img src={member.image} alt={member.name} className="member-image" />
                                <div className="member-info">
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="company-section">
                <div className="section-content">
                    <h2 className="section-title">Board of Directors</h2>
                    <div className="team-grid">
                        {boardDirectors.map((member, index) => (
                            <div key={index} className="team-member">
                                <img src={member.image} alt={member.name} className="member-image" />
                                <div className="member-info">
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <div className="contact-content">
                    <h2>Contact Us</h2>
                    <p className="contact-info">
                        Have questions about our products or services? Our team is ready to help you find the perfect solution for your needs.
                    </p>
                    <button className="contact-button">Get in Touch</button>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Company
