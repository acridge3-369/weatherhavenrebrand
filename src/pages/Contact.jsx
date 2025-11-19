import Header from '../components/Header'
import Footer from '../components/Footer'
import './Contact.css'

function Contact() {
    const regionalOffices = [
        {
            region: "Canada",
            name: "Weatherhaven Global Resources Ltd.",
            address: [
                "#130-8610 Glenlyon Parkway",
                "Burnaby, BC",
                "Canada, V5J 0B6"
            ],
            contact: [
                "Tel: 604-451-8900",
                "Fax: 604-451-8999"
            ]
        },
        {
            region: "Canada",
            name: "Weatherhaven Global Resources Ltd.",
            address: [
                "100 Strowger Blvd., Suite 117",
                "Brockville, ON",
                "Canada, K6V 5J9"
            ],
            contact: [
                "Tel: 343-320-0020"
            ]
        },
        {
            region: "USA",
            name: "Weatherhaven Resources Inc.",
            address: [
                "889 Erie Avenue",
                "North Tonawanda, New York",
                "14120",
                "United States"
            ],
            contact: [
                "Tel: 571-444-9964"
            ]
        },
        {
            region: "UK",
            name: "Weatherhaven Global Solutions",
            address: [
                "Oakley's Yard Gatehouse Road",
                "Rotherwas Industrial Estate",
                "Hereford",
                "HR2 6LR UK"
            ],
            contact: [
                "Tel: + 44 (0) 1432 373000",
                "uk.weatherhaven.com"
            ]
        },
        {
            region: "Africa",
            name: "Redeployable Camp Systems (RCS)",
            subname: "A Weatherhaven Canvas & Tent Co",
            address: [
                "DENEL Office Park",
                "Nellmapius Drive",
                "Irene, 0157"
            ],
            contact: [
                "Tel: +27 12 671 1010/1207",
                "Fax: +27 12 671 1438",
                "www.rcsa.com"
            ]
        },
        {
            region: "Brasil",
            name: "Weatherhaven Brasil",
            address: [
                "Av. Joao Paulo I, 400",
                "Galpao 2 - 1o. andar",
                "Embu das Artes, SP - Brasil",
                "06817-000"
            ],
            contact: [
                "Telefone: +55 11 4704.0696",
                "+55 11 4704.1458"
            ]
        },
        {
            region: "Peru",
            name: "WHC del Peru",
            subname: "Weatherhaven del Peru",
            address: [
                "Carretera Panamericana Sur km 38",
                "Almacén G02-A, Punta Hermosa",
                "Lima, Peru"
            ],
            contact: [
                "Tel: 51-940 416 424"
            ]
        },
        {
            region: "UAE",
            name: "Weatherhaven Middle East",
            address: [
                "Sheikh Zayed Road",
                "Dubai",
                "PO Box 392229 UAE"
            ],
            contact: [
                "Tel: + 971 4 5215191",
                "Mob: + 971 52 162 8881"
            ]
        }
    ]

    return (
        <div className="contact-page">
            <Header />

            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">Contact Us</h1>
                    <p className="contact-hero-subtitle">Tell us your needs and we'll work with you to deliver a redeployable shelter capability that suits your operation.</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-section-content">
                    <h2 className="contact-section-title">Corporate Office</h2>
                    <div className="office-card">
                        <h3 className="office-title">Headquarters</h3>
                        <div className="office-info">
                            <p><strong>Weatherhaven Global Resources Ltd.</strong></p>
                            <p>#130-8610 Glenlyon Parkway</p>
                            <p>Burnaby, BC</p>
                            <p>Canada, V5J 0B6</p>
                            <br />
                            <p>Tel: 604-451-8900</p>
                            <p>Fax: 604-451-8999</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-section-content">
                    <h2 className="contact-section-title">Regional Offices</h2>
                    <div className="regional-grid">
                        {regionalOffices.map((office, index) => (
                            <div key={index} className="office-card">
                                <h3 className="office-title">{office.region}</h3>
                                <div className="office-info">
                                    <p><strong>{office.name}</strong></p>
                                    {office.subname && <p><strong>{office.subname}</strong></p>}
                                    {office.address.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                    <br />
                                    {office.contact.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="contact-cta-section">
                <div className="contact-cta-content">
                    <h2 className="contact-cta-title">Contact Us</h2>
                    <p className="contact-cta-text">Tell us your needs and we'll work with you to deliver a redeployable shelter capability that suits your operation.</p>
                    <button className="contact-cta-button">Contact Us</button>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact
