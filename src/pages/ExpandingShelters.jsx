import { useState } from 'react'
import Header from '../components/Header'
import ProductModal from '../components/ProductModal'
import './ExpandingShelters.css'

function ExpandingShelters() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const meccProduct = {
    title: 'Mobile Expandable Container Configuration™ (MECC™)',
    description:
      "The Smart, Hybrid Shelter Design. The MECC™ combines Weatherhaven's fabric shelter technology with the world's first standard in transportation—the ISO container. The MECC mobile shelter is a fully assembled, self-contained unit, offering three times the floor space of a conventional wood- or steel-constructed module with the same shipping footprint.",
    images: ['/images/mecc 1.jpg', '/images/mecc 2.jpg', '/images/mecc 3.png', '/images/mecc 4.jpg', '/images/mecc 5.jpg', '/images/mecc interior 1.jpg', '/images/mecc interior 2.jpg', '/images/mecc interior 3.jpg', '/images/mecc interior 4.jpg', '/images/mecc interior 5.jpg'],
    slideshow1Count: 5,
    features: [
      'Smart, hybrid shelter combining fabric technology with ISO container standards',
      'Three times the floor space of conventional wood or steel modules with the same shipping footprint',
      'Ideal for command & control, medical, kitchen, ablution, laundry, workshop, and HAZMAT applications',
      'Built for efficient global transportation by air, land, or sea (ISO and CSC certified)',
      'Rapidly deployed and redeployed; two-person set up in 10–15 minutes',
      'Rugged, insulated construction designed for extreme weather and long service life',
      'Configurable in standard 20’ MECC and compact 10’ “Mini MECC” variants',
      'Interconnects and stacks with other Weatherhaven expandable containers and MTS shelters'
    ],
    specificationSections: [
      {
        title: 'Applications / Configurations',
        items: [
          'Command & Control Centers',
          'Emergency Response',
          'Kitchens',
          'Medical Facilities',
          'Ablutions',
          'Laundry Facilities',
          'Workshops (such as tire changing, aircraft maintenance, and electronic repair)',
          'HAZMAT Response'
        ]
      },
      {
        title: 'Built For Efficient Transportation',
        items: [
          'One-third the shipping footprint of the deployed floor space, for transportation efficiencies and savings',
          'ISO and CSC certification for air, land, or sea transport and stacking',
          'Can be loaded for transport using forklifts, cranes, helicopters, PLS, Bail Bar, CHU, and specialty jack stands',
          'Can be transported by truck, trailer, rail, aircraft, or ship',
          'A trailer or mobilizer to transport the MECC can be provided',
          'The unit can be locked during transit, securing equipment from theft'
        ]
      },
      {
        title: 'Readily Deployed & Redeployed',
        items: [
          'Can be easily redeployed for future missions; built to last 15–20 years in the field for reduced capital investment',
          'Set up by two people in 10–15 minutes, with no special skill or knowledge required',
          'Can be expanded without exposing personnel or internal content to outside weather',
          'Can be deployed on a truck, trailer, or wheel set for ease of mobility'
        ]
      },
      {
        title: 'Rugged, Heavy-Duty Construction',
        items: [
          'Durable construction, and latching and locking mechanisms make the MECC resistant to theft and cargo damage',
          'Protects valuable assets and reduces transport delays',
          'Insulated, spacious interior',
          'Minimal maintenance required',
          'Performs in extreme weather conditions',
          'Tested to meet military specifications (Milspec)'
        ]
      },
      {
        title: 'Top-Notch Flexibility',
        items: [
          'Can be interconnected to form larger and fully enclosed complexes',
          'Designed to International Organization for Standardization (ISO) specifications',
          'Fully outfitted with electrical, mechanical, HVAC, and furnishings',
          'Can be stacked for storage or use when the site is tight on space'
        ]
      },
      {
        title: 'Customized To Suit Any Field Need',
        items: [
          "Available in a standard length of 20' and height of 8', with other height and length options available",
          '10-foot MECC (“Mini MECC”) is ideal for applications requiring a smaller footprint',
          'Mini MECC can be configured as a kitchen, command post, ablution, or deployable lab',
          'Packed configuration is an ISO-certified container',
          'Can be manufactured with a steel or aluminum core',
          'Has almost all the options of a 20-foot MECC',
          'Links to all other Weatherhaven expandable containers and softwall MTS shelters',
          "Standard nominal sizes include 8' wide x 8' high x 10' long, or 8' wide x 8'6\" high x 10' long",
          'Also available as the 12\'-6" Extended Height Mobile Expandable Container Configuration (EHMECC™) for applications such as command and control centres and field hospital operating rooms'
        ]
      }
    ],
    additionalInfo: []
  }

  const ehmeccProduct = {
    title: 'Extended Height Mobile Expandable Container Configuration™ (EHMECC™)',
    description:
      'The new dimension of ISO container-based capability. The EHMECC™ is a fully assembled, self-contained mobile shelter that builds on the MECC™ and adds an extra 4.5 feet of interior height for maximum volume and functionality.',
    images: [
      '/images/products-ehmecc1.jpg',
      '/images/product-ehmecc2.jpg',
      '/images/products-ehmecc5.png',
      '/images/product-ehmecc-interior-1.jpg',
      '/images/products-ehmecc-interior-4.jpg'
    ],
    slideshow1Count: 3,
    features: [
      'Extended-height version of the MECC™ for applications that need more interior volume',
      'Ideal for command & control centres, medical facilities, vehicle maintenance, and specialty workshops',
      'Rapidly transported, deployed, and redeployed with minimal crew and no special tools',
      'Designed for extreme environments with rugged construction and full insulation',
      'Can be configured and complexed with other containers and softwall shelters'
    ],
    specificationSections: [
      {
        title: 'Applications / Configurations',
        items: [
          'Command & Control Centres',
          'Medical facilities, including extended-height operating rooms',
          'Vehicle maintenance and specialty workshops',
          'HAZMAT response units',
          'Simulation and training facilities'
        ]
      },
      {
        title: 'Rapid Transport & Deployment',
        items: [
          'Transport footprint is approximately one-third of the deployed floor space',
          'Deploys without exposing personnel, equipment, or internal components to outside weather',
          'Can be loaded by forklift, crane, or PLS and underslung by helicopter',
          'ISO and CSC certified for air, land, and sea transport and stacking',
          'No specialized tools or skills required for set up',
          'Unit and internal equipment are secured for transit to reduce theft and damage'
        ]
      },
      {
        title: 'Flexibility & Interior Space',
        items: [
          'Provides approximately 12\'6" of vertical interior space when deployed',
          'Insulated fabric exterior with multiple window and door configuration options',
          'Can be fully outfitted with electrical, mechanical, HVAC, generators, and furnishings',
          'Supports multiple floor system options to suit different missions',
          'Can be interconnected with other expandable containers and soft shelters to create larger complexes'
        ]
      },
      {
        title: 'Rugged, Durable Design',
        items: [
          'Steel exterior and heavy-duty, insulated vinyl cover system',
          'Weather-proof personnel doors',
          'Fully insulated walls, floors, and ceilings',
          'Optional non-slip and specialty floor systems',
          'Engineered for long service life in demanding field conditions'
        ]
      }
    ],
    additionalInfo: []
  }

  const herconProduct = {
    title: 'Hardwall Expandable Redeployable Container™ (HERCon™)',
    description:
      'The ultimate redeployable hardwall shelter. HERCon™ is an ISO-based expandable container that delivers cost-effective, semi-permanent infrastructure with up to six to eight times more deployable space than its packed footprint.',
    images: [
      '/images/hercon1.jpg',
      '/images/hercon2.jpg',
      '/images/hercon3.jpg',
      '/images/hercon5.jpg',
      '/images/hercon7.jpg',
      '/images/hercon4interior.jpg',
      '/images/hercon6interior.jpg',
      '/images/hercon8interior.jpg'
    ],
    slideshow1Count: 5,
    features: [
      'Hardwall expandable container based on ISO shipping container standards',
      "Available in 4' and 8' wide configurations to suit different missions",
      'Two 4-foot units can ship together but deploy separately for major transport savings',
      'Provides significantly more usable space than its transport footprint',
      'Ideal for workforce housing, offices, kitchens, ablutions, and medical facilities'
    ],
    specificationSections: [
      {
        title: 'Applications / Configurations',
        items: [
          'Workforce and emergency response housing',
          'Ablutions and washroom facilities',
          'Kitchens and dining halls',
          'Offices, dormitories, and accommodations',
          'Medical treatment centres'
        ]
      },
      {
        title: 'Built For Efficient Transportation',
        items: [
          "Two 4-foot-wide containers ship together like a single 8-foot-wide ISO container",
          'Space-efficient packed configuration is roughly one-sixth of the deployed size',
          'Can be transported globally by road, rail, sea, or air',
          'Acts as its own container and requires no additional packaging'
        ]
      },
      {
        title: 'Readily Deployed & Redeployed',
        items: [
          'Can be set up in minutes with a small team',
          'Requires only a reasonably level surface—no special foundations needed',
          'Can be packed up and redeployed to new locations for repeated use'
        ]
      },
      {
        title: 'Ultimate Flexibility',
        items: [
          'Provides living and working space up to six times larger than its shipping footprint',
          'Modules can be complexed end-to-end to create larger facilities',
          'Layouts can be customised for specific applications'
        ]
      }
    ],
    additionalInfo: []
  }

  const treccProduct = {
    title: 'Tactical Redeployable Expanding Container Capability™ (TRECC™)',
    description:
      'A tactical, lightweight, easy-deploy mobile shelter. The TRECC™ is an extended-height, portable container that expands in width for maximum flexibility and is engineered for efficient transport, rapid deployment, and simple setup.',
    images: [
      '/trecc6.jpg',
      '/trecc2.jpg',
      '/trecc3.jpg',
      '/trecc4.jpg',
      '/trecc5.jpg',
      '/trecc7interior.jpg'
    ],
    slideshow1Count: 5,
    features: [
      'Lightweight, extended-height expandable container shelter',
      'Designed for rapid deployment and easy setup by small teams',
      'Configurable for command posts, workshops, kitchens, medical, and more',
      'Optimized for multiple transport modes including helicopter, sealift, fixed-wing, and vehicle',
      'Can be interconnected with other shelters to create larger facilities'
    ],
    specificationSections: [
      {
        title: 'Applications / Configurations',
        items: [
          'Command posts and forward operating bases',
          'Communications hubs',
          'Workshops and maintenance spaces',
          'Kitchens and ablutions',
          'Medical facilities and forensic labs',
          'Other mission-specific configurations'
        ]
      },
      {
        title: 'Built For Efficient Transportation',
        items: [
          'Lightweight design that can ship inside a standard 20\' ISO container',
          'One-third the footprint of the deployed floor space for transport efficiency',
          'Supports helicopter, sealift, fixed-wing, and vehicle shipping configurations',
          'Forklift pockets for easy loading and unloading',
          'Interior furnishings and equipment packed inside the centre core for protection',
          'Includes anti-racking container locks for secure transit',
          'Optional wheel sets allow the unit to be towed by ATV'
        ]
      },
      {
        title: 'Rugged Design',
        items: [
          'High-strength, lightweight aluminium construction',
          'Optional removable, adjustable-height wheel sets',
          'Fully insulated, rugged fabric cover system',
          'Interchangeable floor panels to suit workshops, offices, and other uses',
          'Weather-proof personnel doors on expandable sides'
        ]
      },
      {
        title: 'Easy Set Up & Flexibility',
        items: [
          'Can be set up in minutes by one or two people',
          'Expands to approximately three times its shipping footprint',
          'Extends in height from about 5 feet to 8 feet when deployed',
          'Can be interconnected with other shelters to form larger integrated facilities'
        ]
      }
    ],
    additionalInfo: []
  }

  const atepsProduct = {
    title: 'Air-Transportable Expandable Pallet Shelter (ATEPS)',
    description:
      'A tactical, air-transportable expandable pallet shelter designed for quick, robust deployment in expeditionary and emergency response operations. ATEPS enables militaries to rapidly establish forward operating bases, medical facilities, and specialised capabilities while reducing long-term lifecycle costs.',
    images: ['/images/ateps1.jpg', '/images/ateps2.jpg'],
    slideshow1Count: 2,
    features: [
      'Tailored to fit onto a single 463L pallet and quickly expands to a much larger footprint',
      'Insulated aluminium core with PVC cover system and removable zippered fabric doors',
      'Hard-wall entrance door with built-in service opening for ECU or mission-specific equipment',
      'Rugged, military-grade aluminium construction suitable for air transport height constraints',
      'External tie-downs, top-lift sling and forklift pockets for flexible handling',
      'Two-person setup in under 10 minutes and easily interconnected with other structures',
      'Wear-resistant, non-slip floor with D-ring tiedown points for secure heavy loads',
      'External ports for rapid electrical, communications, and ECU connections'
    ],
    specificationSections: [
      {
        title: 'Key Characteristics',
        items: [
          'Configured to fit a single 463L pallet (approx. 84" x 104") and expands to a footprint of roughly 244" x 104" with an external height of about 91"',
          'Insulated aluminium core (floor, walls, and roof) with PVC cover system',
          'Removable zippered fabric doors on each side for flexible access',
          'Hard-wall entrance door in the core wall with integrated service opening'
        ]
      },
      {
        title: 'Transport & Handling',
        items: [
          'Rugged construction using military-grade aluminium, weighing approximately 2,500 lbs',
          'Suitable for transport on fixed-wing aircraft constrained to heights over roughly 92"',
          'External tie-down points and four-point sling load provisions for top lifting',
          'Four-way forklift pockets for bottom lifting and easy handling in the field'
        ]
      },
      {
        title: 'Deployment & Integration',
        items: [
          'Two-person setup in less than 10 minutes',
          'Can be easily interconnected with other structures to create larger facilities',
          'Wear-resistant, non-slip floor coating',
          'D-ring tiedown points support loads up to approximately 7,500 lbs',
          'External, built-in ports for rapid electrical, communications, and ECU connections'
        ]
      }
    ],
    additionalInfo: []
  }

  const handleMeccClick = () => {
    setSelectedProduct(meccProduct)
  }

  const handleEhmeccClick = () => {
    setSelectedProduct(ehmeccProduct)
  }

  const handleHerconClick = () => {
    setSelectedProduct(herconProduct)
  }

  const handleTreccClick = () => {
    setSelectedProduct(treccProduct)
  }

  const handleAtepsClick = () => {
    setSelectedProduct(atepsProduct)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="app">
      <Header />
      <section className="expanding-shelters-hero-section">
        <div className="expanding-shelters-hero-content">
          <h1 className="expanding-shelters-hero-title">Expanding Shelters</h1>
          <p className="expanding-shelters-hero-subtitle">Rugged Expandable Container Solutions</p>
        </div>
      </section>
      
      <section className="expanding-shelters-intro-section">
        <div className="expanding-shelters-intro-content">
          <h2 className="expanding-shelters-section-title">About Expanding Shelters</h2>
          <p className="expanding-shelters-description">
            Weatherhaven&apos;s range of rugged expandable container shelters—designed with logistical efficiency in mind—deliver superior functionality in every climate and location. Utilizing space-efficient ISO shipping container technology, Weatherhaven&apos;s expandable container shelters can be readily shipped anywhere on Earth by air, rail, road, or sea.
          </p>
          <div className="expanding-shelters-image-wrapper">
            <img 
              src="/images/expandablecontainer1.jpg" 
              alt="Expanding Shelters"
              className="expanding-shelters-main-image"
            />
          </div>
          <div className="expanding-shelters-products-grid">
            <div 
              className="expanding-shelters-product-item expanding-shelters-product-item-clickable"
              onClick={handleMeccClick}
            >
              <h3 className="expanding-shelters-product-title">Mobile Expandable Container Configuration™ (MECC™)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/images/mecc 1.jpg" 
                  alt="MECC"
                  className="expanding-shelters-product-image"
                />
                <div className="expanding-shelters-product-cta">
                  <span className="expanding-shelters-product-cta-text">Click to see more</span>
                </div>
              </div>
              <p className="expanding-shelters-product-description">
                The smart, hybrid shelter design that combines fabric shelter technology with ISO container standards. Click to learn more about applications, deployment, and configuration options.
              </p>
            </div>
            <div 
              className="expanding-shelters-product-item expanding-shelters-product-item-clickable"
              onClick={handleEhmeccClick}
            >
              <h3 className="expanding-shelters-product-title">Extended Height Mobile Expandable Container Configuration™ (EHMECC™)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/images/products-ehmecc1.jpg" 
                  alt="EHMECC"
                  className="expanding-shelters-product-image"
                />
                <div className="expanding-shelters-product-cta">
                  <span className="expanding-shelters-product-cta-text">Click to see more</span>
                </div>
              </div>
              <p className="expanding-shelters-product-description">
                The extended-height version of the MECC™, providing additional interior volume and flexible configuration options for demanding missions.
              </p>
            </div>
            <div 
              className="expanding-shelters-product-item expanding-shelters-product-item-clickable"
              onClick={handleTreccClick}
            >
              <h3 className="expanding-shelters-product-title">Tactical Redeployable Expandable Container Capability™ (TRECC™)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/trecc6.jpg" 
                  alt="TRECC"
                  className="expanding-shelters-product-image"
                />
                <div className="expanding-shelters-product-cta">
                  <span className="expanding-shelters-product-cta-text">Click to see more</span>
                </div>
              </div>
              <p className="expanding-shelters-product-description">
                A tactical, lightweight, easy-deploy container shelter that expands for maximum flexibility and is optimised for multiple transport and mission configurations.
              </p>
            </div>
            <div 
              className="expanding-shelters-product-item expanding-shelters-product-item-clickable"
              onClick={handleHerconClick}
            >
              <h3 className="expanding-shelters-product-title">Hardwall Expandable Redeployable Container™ (HERCon™)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/images/hercon1.jpg" 
                  alt="HERCon"
                  className="expanding-shelters-product-image"
                />
                <div className="expanding-shelters-product-cta">
                  <span className="expanding-shelters-product-cta-text">Click to see more</span>
                </div>
              </div>
              <p className="expanding-shelters-product-description">
                A hardwall, ISO-based expandable container system that delivers cost-effective, semi-permanent redeployable infrastructure in 4-foot and 8-foot configurations.
              </p>
            </div>
            <div 
              className="expanding-shelters-product-item expanding-shelters-product-item-clickable"
              onClick={handleAtepsClick}
            >
              <h3 className="expanding-shelters-product-title">Air-Transportable Expandable Pallet Shelter (ATEPS)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/images/ateps1.jpg" 
                  alt="ATEPS"
                  className="expanding-shelters-product-image"
                />
                <div className="expanding-shelters-product-cta">
                  <span className="expanding-shelters-product-cta-text">Click to see more</span>
                </div>
              </div>
              <p className="expanding-shelters-product-description">
                An air-transportable, quick-erect expandable pallet shelter for rapidly deploying forward operating bases, medical facilities, and specialised mission capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductModal 
        isOpen={selectedProduct !== null}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default ExpandingShelters

