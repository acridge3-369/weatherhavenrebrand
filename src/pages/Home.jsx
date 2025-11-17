import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import ModelViewer from '../components/ModelViewer'
import Header from '../components/Header'
import NewsModal from '../components/NewsModal'
import '../App.css'

function Home() {
  const [showMap, setShowMap] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNewsModal, setShowNewsModal] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(null)
  
  const slides = [
    '/387_uk_RDMSS-Deployed-Behind-Barbed-Wire-1024x683.jpg',
    '/002_peru_weatherhaven-peru-home-military.jpg',
    '/384_uk_Union-Glacier-Camp-scaled-e1755698384522-1024x450.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="app">
      <Header />
      <section className="home-section">
        <div className="title-container">
          <h1 className="title">weatherhaven</h1>
          <p className="slogan">Rapidly Deploying Mobile Infrastructure Anywhere in the World</p>
        </div>
      </section>
      <section className="applications-section">
        <div className="applications-content">
          <h2 className="applications-title">Operating Where Others Can't</h2>
          <ul className="applications-list">
            <li>Sheltering Troops</li>
            <li>Mobile Centres and Field Hospitals</li>
            <li>Mining, Construction and Research/Exploration</li>
          </ul>
          <div className="slideshow-container">
            {slides.map((slide, index) => {
              const position = (index - currentSlide + slides.length) % slides.length
              return (
                <img
                  key={index}
                  src={slide}
                  alt={`Weatherhaven deployment ${index + 1}`}
                  className={`slideshow-image ${position === 0 ? 'active' : ''} position-${position}`}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="global-reach-section">
        <div className="global-reach-content">
          <h2 className="global-reach-title">Global Reach</h2>
          <p className="global-reach-text">95 countries across all 7 continents. Founded in 1981.</p>
          <button className="deployment-map-button" onClick={() => setShowMap(!showMap)}>
            Deployment Map
          </button>
          {showMap && (
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1WjBWwEmcEb7M-4sl1pXu_b3MwyBTUm96&ehbc=2E312F" 
                width="100%" 
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>
      <section className="showcase-section">
        <div className="showcase-content">
          <div className="canvas-container">
            <Canvas
              camera={{ position: [2.5, 3, 13], fov: 50 }}
              gl={{ antialias: true }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} />
              <Suspense fallback={null}>
                <ModelViewer 
                  enableInteractions={true}
                  enableZoom={false}
                  target={[0, 0, 0]}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="bullet-points">
            <ul className="bullet-list">
              <li>Rapid & Redeployable</li>
              <li>Customized to Your Deployment Needs</li>
              <li>Built to LAST</li>
            </ul>
          </div>
          <h3 className="customize-title">Customize to Your Needs</h3>
          <p className="customize-bullet">Fully Customizable Models, With Different Colours, Sizes, Interiors and Deployments</p>
          <a 
            href="https://configurator-ecru.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="configure-button"
          >
            Configure Shelter
          </a>
        </div>
      </section>
      <section className="news-section">
        <div className="news-content">
          <h2 className="news-title">News & Updates</h2>
          <div className="news-grid">
            <article 
              className="news-item" 
              onClick={() => {
                setSelectedArticle('compotech')
                setShowNewsModal(true)
              }}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="news-item-title">Weatherhaven and Compotech Partner to Market International Ballistic Protection Solutions</h3>
              <p className="news-item-date">26 May 2023</p>
              <p className="news-item-text">This is the abstract text about this article</p>
            </article>
            <article 
              className="news-item"
              onClick={() => {
                setSelectedArticle('advisory-board')
                setShowNewsModal(true)
              }}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="news-item-title">Weatherhaven Appoints US Advisory Board</h3>
              <p className="news-item-date">5 October 2022</p>
              <p className="news-item-text">This is the abstract text about this article</p>
            </article>
            <article 
              className="news-item"
              onClick={() => {
                setSelectedArticle('40th-anniversary')
                setShowNewsModal(true)
              }}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="news-item-title">Weatherhaven 40th Anniversary Book</h3>
              <p className="news-item-date">2 August 2022</p>
              <p className="news-item-text">This is the abstract text about this article</p>
            </article>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq-content">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">How quickly can a Weatherhaven shelter be deployed?</h3>
              <p className="faq-answer">Weatherhaven shelters are designed for rapid deployment, typically set up in hours rather than days, depending on the configuration and site conditions.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What environments can Weatherhaven shelters operate in?</h3>
              <p className="faq-answer">Our shelters are engineered to operate in extreme environments, from arctic conditions to desert climates, and can withstand harsh weather conditions.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can the shelters be customized for specific needs?</h3>
              <p className="faq-answer">Yes, Weatherhaven offers extensive customization options to meet specific deployment requirements, whether for military, medical, research, or industrial applications.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What is the typical lifespan of a Weatherhaven shelter?</h3>
              <p className="faq-answer">Built to last, Weatherhaven shelters are designed for durability and can provide reliable service for many years with proper maintenance.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How do I get started with a Weatherhaven deployment?</h3>
              <p className="faq-answer">Contact our team through the configurator or reach out directly to discuss your specific needs and deployment requirements.</p>
            </div>
          </div>
        </div>
      </section>
      <NewsModal
        isOpen={showNewsModal}
        onClose={() => {
          setShowNewsModal(false)
          setSelectedArticle(null)
        }}
        article={
          selectedArticle === 'compotech' ? {
            title: "Weatherhaven and Compotech Partner to Market International Ballistic Protection Solutions",
            date: "Friday, May 26, 2023 (Vancouver, BC, Canada and Brewer, Maine, USA)",
            content: [
              "Weatherhaven Global Resources Ltd. (\"Weatherhaven\"), one of the world's leading providers of interim infrastructure solutions, and Compotech Inc. (\"Compotech\"), a global leader in blast and ballistic protection have signed a partnership agreement to exclusively market Compotech's protection solutions internationally, beginning with the Canadian, NATO, ANZAC, and Saudi Arabian markets.",
              "The initial product set will include Compotech's Expeditionary Shelter Protection System (\"ESPS\"). The ESPS is a modular armor protection system developed to protect vulnerable soldiers and critical assets from blast and ballistic threats during initial deployment of military bases. ESPS was designed and built to conform with the US military performance specification standard number MIL-PRF-32521C.",
              "\"Weatherhaven chose Compotech because we found their ballistic solution to be the most protective and highly mobile solution we have seen in the marketplace,\" said Ray Castelli, CEO of Weatherhaven. \"Our global customers are increasingly asking for robust, light-weight and mobile ballistic protection for shelters and camps. We felt, given Compotech's proven track record with this technology – principally with the US Army's Force Provider program - this solution was best-in-class,\" he added.",
              "ESPS is an innovative solution, composed of advanced composite armor technology, providing immediate protection to soldiers from blast and ballistic threats. The speed of deployment and redeployment is the number one advantage of such system when compared to other conventional solutions like sandbags or concrete walls.",
              "\"We were drawn to Weatherhaven because of their international reach and position as the leading global provider of mobile military shelter solutions,\" said Tyler Jolicoeur, CEO of Compotech Inc. \"We are excited to offer our best selling modular deployable ballistic protection system to global customers and we see Weatherhaven to be the perfect partner to do so given their impressive international presence,\" he added.",
              "The two companies have also agreed to collaborate on developing additional product solutions tailored to Weatherhaven's family of \"next generation shelter solutions\"."
            ],
            sections: [
              {
                title: "ABOUT WEATHERHAVEN:",
                text: "Weatherhaven is a leading international supplier of mobile temporary infrastructure for key military, commercial, government and medical applications worldwide. With more than 50 patents and production operations in Canada, US, Peru, Brazil, South Africa, Turkey, UAE and the UK, the company has engineered, produced, and installed their solutions in more than 96 countries and on seven continents."
              },
              {
                title: "ABOUT COMPOTECH INC:",
                text: "Compotech Inc. is a defense technology company focused on transforming the US military's capabilities through innovative hardware and software solutions. The company is on a mission to transform the defense manufacturing industry using AI and Machine learning. Compotech is a global leader in the field of blast and ballistic protection with over 10 years of proven track record supplying innovative solutions to the US DoD."
              }
            ],
            contacts: [
              {
                name: "Ray Castelli",
                title: "Chief Executive Officer, Weatherhaven",
                phone: "778-998-4717"
              },
              {
                name: "Tyler Jolicoeur",
                title: "Chief Executive Officer, Compotech Inc.",
                phone: "207-333-7363"
              }
            ],
            link: "https://compotechinc.com/wp-content/uploads/2023/02/Compotech-ESPS-Brochure23_6-3.pdf"
          } : selectedArticle === 'advisory-board' ? {
            title: "Weatherhaven Appoints US Advisory Board",
            date: "Wednesday, October 6, 2022 (Washington, DC)",
            content: [
              "Weatherhaven is pleased to announce the creation of a US Advisory Board and the appointment of five highly decorated individuals to serve as the initial board members.",
              "The purpose of the Advisory Board will be to provide advice and feedback to the company as it implements its US business strategy and focus on the development of the company's \"Next Generation\" rapidly mobilized infrastructure solutions.",
              "\"We are delighted to have attracted the interest of so many highly accomplished and respected people to serve as the initial members of our newly created Advisory Board,\" said Ray Castelli, Chief Executive Officer. \"The added depth and knowledge this highly experienced group brings will help ensure our new solutions are designed to put the best kit possible into the hands of our men and women in uniform,\" Castelli added.",
              "The initial five members of the US Advisory Board include:",
              "• Retired Lieutenant General Guy C. Swan III, a former US Army Commanding General and recently retired Vice President of AUSA",
              "• Retired Lieutenant General Mark Brilakis, who served in several command roles with US Marine Corps",
              "• Retired Lieutenant General Chris Nowland, who has held several senior roles within the US Air Force",
              "• Retired Brigadier General Les Fuller, a former Commanding General within US Special Forces Command",
              "• Mr. Craig Fugate, former Administrator of the Federal Emergency Management Agency (FEMA) from March 2008 to January 2017",
              "All five members of the Weatherhaven US Advisory Board will be attending the AUSA Conference in Washington, DC, starting October 10th, 2022 and can be reached by visiting our indoor display at booth #3555.",
              "Weatherhaven is a leading global provider of rapidly redeployable mobile infrastructure solutions, ranging from military operations in the desert to climate research stations in ultra-cold Polar regions to sophisticated medical, humanitarian and disaster relief solutions. For 40 years, we've provided our customers with rapid and effective responses to challenges, overcoming every terrain and climate imaginable, with deployments in over 95 countries and across all 7 continents."
            ],
            boardMembers: [
              {
                name: "Lieutenant General Guy C. Swan III",
                bio: "Lieutenant General Guy C. Swan III currently serves as an AUSA Vice President. During more than 35 years of active service, he commanded at every level through Army Service Component Command. A career armor/cavalry officer, his general officer assignments included: Commanding General, United States Army North/Fifth Army; Commanding General, United States Army Military District of Washington and Commander, Joint Force Headquarters-National Capital Region; Commanding General, 7th Army Training Command, United States Army Europe/Seventh Army; Chief of Staff and Director of Operations, Multi-National Force-Iraq during Operation Iraqi Freedom; Director of Operations, United States Northern Command; and Chief of Army Legislative Liaison. General Swan's other key assignments included Commander, 11th Armored Cavalry Regiment; Assistant Deputy Director for Strategy and Policy for the Joint Staff; and Deputy Operations Officer for the 1st Armored Division during Operations Desert Shield/Desert Storm. A 1976 graduate of the United States Military Academy at West Point, General Swan holds a Master of Military Art and Science degree from the United States Army's School of Advanced Military Studies. He also holds a Master of Arts degree in National Security Studies from Georgetown University and was a National Security Fellow at the John F. Kennedy School of Government at Harvard University. General Swan is a member of the Council on Foreign Relations and the Homeland Security Experts Group. He is also a Certified Emergency Manager (CEM) and a Certified Protection Professional (CPP), board certified in security management."
              },
              {
                name: "Lieutenant General Mark Andrew Brilakis",
                bio: "He graduated from Franklin and Marshall College, Lancaster, Pennsylvania, and was commissioned in May 1981. Trained as an artillery officer, he served in operational force, supporting establishment, and headquarters assignments, to include three tours at Camp Lejeune, NC, as a company and field grade officer. Assignments as a General Officer included: Deputy J-3, U.S. European Command, Deputy Commanding General, III Marine Expeditionary Force, Commanding General 3d Marine Expeditionary Brigade and 3d Marine Division, Assistant Deputy Commandant, Programs and Resources Department, HQMC, Commanding General, Marine Corps Recruiting Command, Deputy Commandant, Manpower and Reserve Affairs, HQMC, and Commander, U.S. Marine Corps Forces Command. General Brilakis retired from the Marine Corps on 1 September, 2019, concluding 38 years of active service. He currently serves on several corporate and volunteer boards, has a consulting company, and is a Senior Fellow with the Center for Naval Analyses."
              },
              {
                name: "Lieutenant General Mark C. \"Chris\" Nowland",
                bio: "Mark C. \"Chris\" Nowland (born February 6, 1962) is a retired United States Air Force Lieutenant General. He last served as the Deputy Chief of Staff for Operations, Plans and Requirements, Headquarters, United States Air Force from October 2016 to October 2018. In that role, he was responsible to the Secretary of the Air Force and the Chief of Staff for formulating policy supporting air, space, cyber, and irregular warfare, counter proliferation, homeland security and weather operations. As the Air Force operations deputy to the Joint Chief of Staff, the general determined operational requirements, capabilities and training necessary to support national security objectives and military strategy. General Nowland is a 1985 graduate from the U.S. Air Force Academy. He has commanded at the squadron, wing and numbered Air Force levels. He also served on the Joint Staff, U.S. Southern Command and two Air Force major command staffs. The general has flown combat operations in support of operations Southern Watch and Iraqi Freedom. He is also a graduate of the School of Advanced Air and Space Studies and was a National Security Fellow at the Olin Institute at Harvard University. Prior to his final assignment as Deputy Chief of Staff for Operations, Plans and Requirements, General Nowland was the Commander, 12th Air Force, Air Combat Command and Commander, Air Forces Southern, U.S. Southern Command, Davis-Monthan Air Force Base, Arizona."
              },
              {
                name: "Brigadier General Leslie L. Fuller",
                bio: "Brigadier General Leslie L. Fuller is a native of Covington, Georgia. He was commissioned into the Infantry following graduation from Middle Tennessee State University in May 1973. Brigadier General Fuller has served in a variety of conventional company and field grade assignments. He was a mechanized infantry rifle platoon leader, mortar platoon leader, and battalion maintenance officer at Fort Carson, Colorado. He commanded a rifle company in Panama and was an assistant division G3, mechanized infantry battalion S3, and battalion executive officer in the 1st Armored Division. Brigadier General Fuller's special operations assignments include: Detachment Commander, 3rd Battalion, 7th Special Forces Group (Airborne) Panama Canal Zone; Battalion Commander of 3rd Battalion, 5th SFG (A) Fort Campbell KY; and Group Commander of 10th SFG (A) Fort Carson, CO. He served as Group Executive Officer for 10th SFG (A) during Operations Desert Shield, Desert Storm and Provide Comfort. He served as the senior special operations observer/controller for the Battle Command Training Program at Fort Leavenworth. Additionally, he commanded the Stabilization Force's Combined Joint Special Operations Task Force headquartered in Sarajevo, Bosnia-Herzegovina from March to August 1997. Brigadier General Fuller was the Commanding General, Special Operations Command Europe (SOCEUR) and the Director, Special Operations Directorate, United States European Command (ECSO) from June 2000 to July 2002. Brigadier General Fuller led EUCOM's missions in Africa, the Caucasus and the Baltic Countries. Following SOCEUR, Brigadier General Fuller served as DCG of US Army Recruiting Command for three years. He also served as CG, Fort Jackson, SC, and as Chief of Staff for NATO Forces in Afghanistan during ISAF-V. Brigadier General Fuller is a graduate of the Special Forces Qualification Course; the Infantry Officer Basic and Advanced Courses; the Army Command and General Staff College and Army War College. His has earned the Expert Infantryman's Badge, Master Parachutist Badge, Special Forces Tab and Ranger Tab."
              },
              {
                name: "W. Craig Fugate",
                bio: "W. Craig Fugate served as Administrator of the Federal Emergency Management Agency (FEMA) from May 2009 to January 2017. At FEMA, Fugate promulgated the \"whole community\" approach to emergency management, emphasizing and improving collaboration with all levels of government (federal, tribal, state, and local) and external partners, including voluntary agencies, faith-based organizations, the private sector and citizens. Prior to FEMA, Mr. Fugate served as Director of the Florida Division of Emergency Management (FDEM). In that role since 2001, he managed 138 full-time staff and a budget of $745 million. His agency coordinated disaster response, recovery, preparedness and mitigation efforts with each of the state's 67 counties and local governments. Mr. Fugate began his emergency management career as a volunteer firefighter, Emergency Paramedic, and finally as a Lieutenant with the Alachua County Fire Rescue. Eventually, he moved from exclusive fire rescue operations to serving as the Emergency Manager for Alachua County in Gainesville, Florida. He spent a decade in that role until May 1997 when he was appointed Bureau Chief for Preparedness and Response for FDEM. Within FDEM, Mr. Fugate's role as Chief of the State Emergency Response Team (SERT) kept him busy during 1998. That year, the SERT team was active for more than 200 days as a result of numerous floods, tornadoes, wildfires, and Hurricane Georges. In September 2003, again under Mr. Fugate's stewardship, the Florida Emergency Management Program became the first statewide emergency management program in the nation to receive full accreditation from the Emergency Management Accreditation Program (EMAP). In 2004, Mr. Fugate managed the largest federal disaster response in Florida history as four major hurricanes impacted the state in quick succession (Charley, Frances, Ivan, and Jeanne). In 2005, Florida was again impacted by major disasters when three more hurricanes made landfall in the state (Dennis, Katrina, and Wilma). The impact from Hurricane Katrina was felt more strongly in the Gulf Coast states to the west but under the Emergency Management Assistance Compact or EMAC, Florida launched the largest mutual aid response in its history in support of those states."
              }
            ],
            contacts: [
              {
                name: "Ray Castelli",
                title: "Chief Executive Officer",
                email: "rcastelli@weatherhaven.com",
                phone: "571-444-9964 (o), 778-998-4717 (c)"
              }
            ]
          } : selectedArticle === '40th-anniversary' ? {
            title: "Weatherhaven 40th Anniversary Book",
            date: "2021",
            content: [
              "Weatherhaven reached an important milestone in 2021, one which we are very proud of: 40 years of providing bespoke solutions and cutting-edge technology to thousands of satisfied customers across the globe.",
              "To commemorate the occasion, we decided to create something that we felt was just as special: a coffee table book -- 150 beautifully printed and bound pages that delve deeply into our legacy, showcased by spectacular photography and a richly told history of the company.",
              "With only 500 copies in print and plenty of demand, there simply weren't enough copies to go around, so we decided to offer everyone the chance to download a digital version of the book for themselves.",
              "If you are interested in Weatherhaven's 40-year history, just click the link below to download a PDF file in high resolution, with all the amazing imagery and words that can be found in the hard copy version of the book.",
              "Thanks, we hope you enjoy reading it as much as we did making it!"
            ],
            link: "https://eiec269001.blob.core.windows.net/site-content/BOOK%20WH%2040%20YEARS%20v12.pdf",
            linkText: "Download 40th Anniversary Book (PDF)"
          } : null
        }
      />
    </div>
  )
}

export default Home

