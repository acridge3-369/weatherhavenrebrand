import { useState } from 'react'
import Header from '../components/Header'
import ProductModal from '../components/ProductModal'
import './SoftShelters.css'

function SoftShelters() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      title: 'Modular Tent System',
      description: 'The Tactical, Versatile Shelter Solution. The Modular Tentage System (MTS) is one of the most thermally efficient and robust tactical shelters in the world. This capability comes in a selection of sizes, and is used for a number of field applications. The MTS is particularly popular with military forces due to its flexibility in design to form larger complexes, such as operations centres and medical facilities.',
      images: ['/554_uk_MTS-Shelters-in-the-Middle-East.jpg', '/command post.jpg', '/military dining hall.jpg', '/hosptial.jpg'],
      features: [
        'Complete Kitchens & Dining Facilities',
        'Offices',
        'Accommodation/Sleeping Quarters',
        'Recreation',
        'Command Posts',
        'Workshops',
        'Medical Facilities'
      ],
      specificationSections: [
        {
          title: 'Rapid Deployment & Set Up',
          items: [
            'Compact and lightweight for easy mobilization',
            'Modular design for tactical versatility',
            'Durable fabric carrying bags sized for a maximum four-person lift'
          ]
        },
        {
          title: 'Superior Flexibility & Performance',
          items: [
            'Can be deployed in varying lengths using standard-length modules',
            'Performs in both over-pressure and under-pressure conditions',
            'Interconnects to other shelters',
            'Comes with hard- and soft-door configurations'
          ]
        },
        {
          title: 'Durable, Robust Design',
          items: [
            'Framework under tension for superior strength',
            'Fully insulated for optimal performance in all weather conditions',
            'Waterproof, fire-retardant, UV-stabilized, and blackout-cover material'
          ]
        }
      ],
      additionalInfo: []
    },
    {
      title: 'Series 4',
      description: 'The Original Weatherhaven Shelter. The Series 4 is a high-performance mobile shelter used worldwide in all climates, including the polar regions. This shelter is widely utilized for workforce housing, as well as by military forces for accommodation, recreation, and first-aid units.',
      images: ['/404_uk_Series-4-Staff-Camp-Canada-2048x1419.jpeg', '/hosptial.jpg', '/military dining hall.jpg', '/storage.jpg'],
      features: [
        'Complete Kitchen & Dining Facilities',
        'Offices',
        'Personal Accommodations (Sleepers)',
        'Washhouse',
        'Laundry',
        'Recreation',
        'First-Aid Facility',
        'Equipment and Storage Facility',
        'Sewage',
        'Water Purifications',
        'Generator & Systems Buildings'
      ],
      specificationSections: [
        {
          title: 'Performance & Durability',
          items: [
            'Durable, engineered frame',
            'Resistant to extreme heat and cold',
            'Wind and rain proof',
            'UV-light stabilized cover'
          ]
        },
        {
          title: 'Setup & Transport',
          items: [
            'Quick and easy to set up and transport',
            'Performs in tough, demanding conditions',
            'Ideal for applications where an extended-height structure is required',
            'Multi-purpose, portable structure designed for industrial use'
          ]
        },
        {
          title: 'Customization & Options',
          items: [
            'Many options, including entries, floors, insulation, and support systems',
            'Can be customized to meet your unique requirements',
            'Includes many options, such as insulation, heating, and lighting kits',
            'Rot and mildew resistant'
          ]
        }
      ],
      additionalInfo: []
    },
    {
      title: 'Series 8',
      description: 'The Lightweight Version Of The Series 4. The Series 8 shelter is designed for warmer climates, specifically locations without high winds or snow loads. With a lower price point and fewer components than the Series 4, this shelter is typically used for equipment maintenance, storage, or temporary manufacturing facilities.',
      images: ['/soft shelter.jpg', '/storage.jpg', '/military maintenance.jpg', '/expandablecontainer1.jpg'],
      features: [
        'Equipment and storage facility',
        'Complete kitchen and dining facilities',
        'Office/personnel',
        'Accommodations (Sleepers)',
        'Washhouse',
        'Laundry',
        'Recreation',
        'First-Aid Facility'
      ],
      specificationSections: [
        {
          title: 'Performance & Durability',
          items: [
            'Comes in Tropical models, with maximum ventilation, special Cool White™ materials, and the addition of a Tropical Thermal Cap for insulation',
            'Waterproof and UV light-stabilized cover',
            'Provides extreme heat and cold resistance',
            'Is fire retardant'
          ]
        },
        {
          title: 'Setup & Transport',
          items: [
            'Quick and easy to set up and deploy',
            'Compact and lightweight',
            'Is economical, strong, and durable',
            'Is quick and easy to set up'
          ]
        },
        {
          title: 'Customization & Options',
          items: [
            'Many options, including Thermal Cap insulation, doors, and floor systems',
            'Includes many options, such as insulation, heating, and lighting kits',
            'The Tropical Series 8 Shop also includes screened windows in the barrel cover to enhance cross-ventilation',
            'Rot and mildew resistant'
          ]
        }
      ],
      additionalInfo: []
    },
    {
      title: 'MEX-26',
      description: 'Built For Demanding Logistics & Operations. The MEX-26™ (Maintenance Extended Height 26\' wide) fabric shelter is a modular structure designed specifically for the tactical frontline and second-line applications of vehicle and aircraft maintenance.',
      images: ['/soft shelter.jpg', '/military maintenance.jpg', '/command post.jpg', '/storage.jpg'],
      features: [
        'Military deployments, such as armoured vehicle and helicopter maintenance',
        'Armoured vehicle repairs on optics and weapons requiring a dust-free environment'
      ],
      specificationSections: [
        {
          title: 'Heavy-Duty Design + Superior Flexibility',
          items: [
            'Designed and manufactured to meet the demanding logistics and rigorous use of military deployments',
            'Frame pieces are made of aluminum to reduce weight',
            'Straight and pre-curved arches are sprung into tension upon set up, for excellent performance in high-wind or snow-loading conditions',
            'Fire retardant, and rot and mildew resistant',
            'Many door options (hard and soft), including a custom-fabricated, industrial-zipper kit, for vehicle and personnel entry doors',
            'Options for insulation, electrical, lighting, flooring, and carrying cases',
            'Can be linked together for longer shelter complexes'
          ]
        },
        {
          title: 'Built For Efficient Transportation',
          items: [
            'Can be packed in rugged, well-marked portable case with packing-load lists, to facilitate rapid deployments and inventory management',
            'The first-line system fits on a standard 463L aircraft pallet: 108" x 88" x 60" (274 cm x 224 cm x 152.4 cm)',
            'Numerous options are available to suit specific transportation requirements',
            'For rapid identification of contents, all frame and cover components are organized and packed in well-labeled, nylon, person-portable bags'
          ]
        },
        {
          title: 'Readily Deployed & Redeployed',
          items: [
            'The MEX-26 does not require a foundation for set up, just a level and compact site',
            'Can be set up using spikes and stakes, or set up on hard ground, such as asphalt or cement',
            'Complete set up can be accomplished by 10 people in three hours or less, without the use of any special tools'
          ]
        }
      ],
      additionalInfo: []
    },
    {
      title: 'Polar Shelters',
      description: 'Shelter In Extreme Cold & Dry Locations. Weatherhaven supplies Polar fabric shelters to several national science organizations and private-sector operators for use in places like Antarctica, the High Canadian Arctic & Greenland.',
      images: ['/384_uk_Union-Glacier-Camp-scaled-e1755698384522-1024x450.jpg', '/mountainphoto.png', '/soft shelter.jpg', '/command post.jpg'],
      features: [
        'Arctic Expeditions',
        'Advanced Base Camps',
        'Scientific Studies',
        'Tourism',
        'Workforce Camps'
      ],
      specificationSections: [
        {
          title: 'Polar Structures Overview',
          items: [
            'The Polar shelter line includes three structures-the Polarhaven, the Polar Chief, and the Endurance',
            'Polarhaven: Performs in high winds, snow, and extremely low temperatures. Is lightweight and compact for efficient transport. Comes in a selection of sizes',
            'Polar Chief: Designed for extremely cold and dry regions, performing well in severe wind conditions. Includes convenient octagonal geometry to ensure no large, flat surface is exposed to swirling winds',
            'Endurance: Quick-erect, expeditionary mobile shelter designed to resist extreme winds, cold temperatures, and heavy snow loads. Comes in 16\' and 21\' long models with a roomy interior'
          ]
        },
        {
          title: 'Insulation & Performance',
          items: [
            'The Polarhaven and the Polar Chief are both available with two different insulation kits',
            'First insulation type: Translucent-spun polyester mat, which allows light to be transmitted through to the interior of the shelter. This insulation allows either shelter to be kept warm by way of solar gain',
            'Second insulation type: Aluminum-foil-coated bubble wrap. Of the two options, this is a better insulator, but is totally opaque, and does require internal lighting and heat source',
            'Endurance has a lightweight fabric liner for increased thermal efficiency'
          ]
        },
        {
          title: 'Setup & Transport',
          items: [
            'Polarhaven: Is easy to set up. Is lightweight and compact for efficient transport',
            'Polar Chief: Is fully insulated. Is easy to set up and transport. Comes with an insulated vestibule',
            'Endurance: Is quickly set up from within, reducing exposure of personnel. Is lightweight and compact, for ease of transport. Has clamshell ends to expedite medivacs or equipment access'
          ]
        }
      ],
      additionalInfo: []
    },
    {
      title: 'RDMSS',
      description: 'Rapidly Deployed Modular Shelter System (RDMSS). The RDMSS is the most advanced softwall shelter system in Weatherhaven\'s fleet. Driven by stringent military requirements, the RDMSS offers users a rapidly deployed capability for any geographic and/or climatic zone in the world. The RDMSS includes all of the time-proven and trusted shelter features of Weatherhaven\'s global product line, providing Commanders with the convenience of deploying a single shelter system for both initial standard (0-6 months) and temporary standard (6-24 months) missions. The RDMSS comes in three models: RDMSS-O, RDMSS-P, and RDMSS-Op, and can be supplied in multiple colours.',
      images: ['/387_uk_RDMSS-Deployed-Behind-Barbed-Wire-1024x683.jpg', '/command post.jpg', '/soft shelter.jpg', '/military maintenance.jpg'],
      features: [
        'Full blackout',
        'Operational temperature range: -51°C to +49°C',
        'Interchangeable frame parts between shelter models',
        'Deployment in less than 10 minutes by three people for most models',
        'Multiple egress points facilitating interconnectivity to other shelters and vehicles'
      ],
      specificationSections: [
        {
          title: 'Standard Components',
          items: [
            'Fully insulated',
            'Solar Shade',
            'ECU and cable ports',
            'Interchangeable, rapid-install soft and hard doors',
            'Internal ducting',
            'Rugged, soft floor system sealed for weather, vermin and vectors',
            'Screened window vents with a clear view-flex shield and external blackout covers',
            'Lightweight aluminum frame'
          ]
        },
        {
          title: 'Options & Customization',
          items: [
            'Tactical lighting kit',
            'HVAC',
            'Diesel-fired heater',
            'Rapid placement rigid flooring',
            'Black-out Vestibule',
            'Shelter Connector Hub',
            'Vehicle boot',
            'Can be supplied in multiple colours'
          ]
        },
        {
          title: 'Performance & Deployment',
          items: [
            'Rapidly deployed capability for any geographic and/or climatic zone in the world',
            'Designed for both initial standard (0-6 months) and temporary standard (6-24 months) missions',
            'Comes in three models: RDMSS-O, RDMSS-P, and RDMSS-Op',
            'Includes all of the time-proven and trusted shelter features of Weatherhaven\'s global product line'
          ]
        }
      ],
      additionalInfo: []
    }
  ]

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="app">
      <Header />
      <section className="soft-shelters-hero-section">
        <div className="soft-shelters-hero-content">
          <h1 className="soft-shelters-hero-title">Soft Shelters</h1>
          <p className="soft-shelters-hero-subtitle">High-Performance Mobile Shelters for Tactical Applications</p>
        </div>
      </section>
      
      <section className="soft-shelters-intro-section">
        <div className="soft-shelters-intro-content">
          <h2 className="soft-shelters-section-title">About Soft Shelters</h2>
          <p className="soft-shelters-description">
            As a result of ongoing customer feedback and 39-40 years of engineering, designing, and manufacturing tensioned fabric structures, Weatherhaven's softwall shelters have evolved into the high-performance mobile shelters that they are today. Readily shipped to any corner of Earth - and functional in even the harshest, most demanding locations and climates - these robust mobile shelters were built for tactical or semi-permanent applications with the end user in mind.
          </p>
          <div className="soft-shelters-image-wrapper">
            <img 
              src="/soft shelter.jpg" 
              alt="Soft Shelters"
              className="soft-shelters-main-image"
            />
          </div>
          <div className="soft-shelters-products-grid">
            {products.map((product, index) => (
              <div 
                key={index}
                className="soft-shelters-product-item"
                onClick={() => handleProductClick(product)}
              >
                <h3 className="soft-shelters-product-title">{product.title}</h3>
                <div className="soft-shelters-product-image-wrapper">
                  <img 
                    src={product.images[0] || '/placeholder.jpg'} 
                    alt={product.title}
                    className="soft-shelters-product-image"
                  />
                </div>
                <p className="soft-shelters-product-description">
                  {product.description}
                </p>
              </div>
            ))}
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

export default SoftShelters

