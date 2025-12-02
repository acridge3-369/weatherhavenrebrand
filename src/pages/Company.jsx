import Header from '../components/Header'
import './Company.css'

function Company() {
  const executiveTeam = [
    {
      name: 'Ray Castelli',
      title: 'CEO',
      credentials: 'B. Comm',
      image: '/images/raycastelli.jpg',
      bio: 'Ray joined Weatherhaven as CEO in 2008 after a 20 year international business career in technology, natural resources and government/defence. He has significant international procurement expertise, having served as co-founder and SVP of Dallas-based Quadrem (now SAP) and Chair of the Open Network for Commerce Exchange (ONCE) - an international standards body for the online commerce industry. An alumnus of the SFU Business School and the INSEAD International Executive Program in France, Ray speaks 5 languages and previously served as Chief of Staff to the Minister of National Defence and Deputy Chief of Staff to the Prime Minister of Canada.'
    },
    {
      name: 'Natalia Mederios',
      title: 'Managing Director, Weatherhaven Brazil',
      credentials: 'B. Eng, MBA',
      image: '/images/nataliamederios.jpeg',
      bio: 'Natalia graduated from Universidad Federal de Minas Gerais, with a degree in Electrical Engineering, and a post graduate major in renewable energy. She also has an MBA IBMEC in Rio de Janeiro with a post graduate major in Finance and speaks 4 languages. Her early career was in the telecom sector as a marketing and product development manager before becoming Marketing and Sales Director at ESTRE Waste Management. She later serviced as Vice President of Environmental Solutions Brazil, a Weatherhaven customer, before deciding to join our company as a director of strategy in Brazil in 2013. She was appointed Managing Director of Weatherhaven Brazil in 2014.'
    },
    {
      name: 'James Kirk',
      title: 'Chief Operating Officer',
      credentials: 'M. Eng, C. Eng',
      image: '/images/jameskirk.jpg',
      bio: 'A graduate of the UK Ministry of Defence, Engineering and Science Group, James earned a Master\'s Degree in Mechanical Engineering from the University of Sheffield. He spent 10 years within MOD leading strategic UK Defence procurement programmes before leaving to become a partner in a specialist defence engineering consultant. James proceeded to join Weatherhaven in 2008 as Technical Director. He was promoted to Managing Director UK in 2014 and responsible for the sustained growth in the European military market. James was appointed Vice President of Global Sales in 2019, and then at the start of 2021 became Chief Operating Officer (COO) for the global Weatherhaven operation.'
    },
    {
      name: 'Alberto Moreno',
      title: 'Chief Business Development Officer',
      credentials: 'B. Eng.',
      image: '/images/albertomoreno.jpg',
      bio: 'A graduate of the engineering program at UDLAP in Mexico in 1992, Alberto spent 5 years with Bauer Electronica before coming to Canada to work for Unitec International Controls and Spectrum Signal Processing. He joined Oceanworks, a privately held subsea Navy technology company in 2006 where he spent 6 years as a program manager before joining Weatherhaven in 2012. He led the newly formed Project Management Office (PMO) at Weatherhaven from 2012-2015 before he was appointed as the Chief Operations Officer overseeing all production operations, supply chain, quality, engineering, support and PMO. He was appointed as Chief Business Development Officer in November 2020.'
    },
    {
      name: 'Jessica Au',
      title: 'Chief Financial Officer',
      credentials: 'CPA, CA',
      image: "/images/jessicaau'.png",
      bio: 'Jessica was appointed Chief Financial Officer of Weatherhaven in 2025, following her progression from Vice President of Finance, a role she assumed in 2022 after joining the organization as Controller in 2018. She is responsible for guiding the company\'s global financial strategy, while overseeing critical corporate functions including legal, finance, accounting, human resources, and information technology. With more than a decade of management and leadership experience across public and private enterprises, Jessica brings deep expertise in financial governance and operational excellence. Her career spans multinational operations across the utilities, energy, technology, manufacturing, and defense sectors. Prior to joining Weatherhaven, she held senior finance positions and began her professional journey at PwC. Jessica is a Chartered Professional Accountant (CPA, CA), and holds a Bachelor of Commerce in Accounting and Management Information Systems from the University of British Columbia.'
    },
    {
      name: 'Scott Jackson',
      title: 'VP Business Development - USA',
      credentials: '',
      image: '/images/scottjackson.jpg',
      bio: 'A skilled team leader and authority in expeditionary solutions, Scott will lead Weatherhaven\'s business development efforts in the US shelter solutions and interim infrastructure market, across all branches of the Department of Defense, Other Governmental Agencies as well as the lead role in developing strategic and manufacturing partnerships. Scott brings over 18 years of business development, strategic planning, and program management experience through his prior roles as Regional Manager at DHS Systems (DRASH), AAR Mobility, and Western Shelter Systems. He has developed and fielded turn-key systems around the globe meeting customer needs for life support, command and control and the full range of emergency response. Scott is a member of Weatherhaven\'s Senior Management Team and will introduce the "Next Generation Shelter Solutions" to the US Market. Scott is a retired Air Force SMSgt with 20 years of honorable active-duty service as a Radio Communications Specialist and Additional Duty First Sergeant.'
    }
  ]

  const regionalManagingDirectors = [
    {
      name: 'Dr. Susannah Kirk',
      title: 'Managing Director, Weatherhaven Global Solutions (UK)',
      credentials: 'B.Eng PhD C. Eng MRAeS',
      image: '/images/susannahkirk.jpg',
      bio: 'Susannah has a degree in Aeronautical Engineering from Loughborough University and a PhD in Static Aeroelasticity from University of Bristol and is a Chartered Engineer with and a Member of the Royal Aeronautical Society. Prior to joining Weatherhaven in 2014, she had 10 years of experience in the application of Computational Fluid Dynamics within the engineering design process for a major aerospace company. As the Head of Engineering in the UK, she was been a key part of our global design team, specializing in Finite Element Analysis, CAD and camp design visualizations while supporting product development, innovation and the delivering of camp projects in our UK operation.'
    },
    {
      name: 'Hugo Cueva',
      title: 'Managing Director, Weatherhaven Peru',
      credentials: 'B. Eng.',
      image: '/images/huegocueva.jpg',
      bio: 'A Civil Engineer with more than 15 years of experience in projects management and control, Hugo graduated from the National University of Engineering of Peru, Hugo has strong knowledge in project management based on PMI standards. He joined Weatherhaven Peru as Logistics Coordinator in 2010, becoming the General Manager of the Peruvian branch in 2015. During his experience at Weatherhaven he has developed many processes in different areas of the company, as well as improved many more, achieving time and cost reduction in projects, loyal clients, and a well engaged team.'
    }
  ]

  const regionalSalesLeads = [
    {
      name: 'Karla Arias',
      title: 'Latin America',
      credentials: '',
      image: '/images/karlaarias.jpg',
      bio: 'As the current Business Development Director for Latin America, Karla works with clients in the Latin American military and medical markets, and supports them with providing expertise on various options for shelter requirements. She is further bilingually responsible for all aspects of sales including planning, forecasting, relationship management, among various other aspects. She obtained her diploma in Hotel and Resort Management in 1993 and started at Weatherhaven in 1993.'
    },
    {
      name: 'Mike Ball',
      title: 'Global Commercial',
      credentials: '',
      image: '/images/mikeball.jpeg',
      bio: 'Mike has over 27 years of experience in the relocatable shelter and remote site based industry, primarily focusing on the mining and gas industry with a emphasis on companies concentrated on exploration. A graduate of Economics from the University of British Columbia and having obtained a post graduate study in sales and marketing, Mike has extensive experience internationally, working for the UN and various other agencies.'
    },
    {
      name: 'Sweena Chatha',
      title: 'Canada Defence',
      credentials: '',
      image: '/images/sweenachatha.jpg',
      bio: 'Sweena is the currently the Senior Director of Sales and Marketing at Weatherhaven. A graduate of the Bachelor of Journalism at Carleton University and the Certificate of Media Techniques and Marketing Communications at BCIT, she started at Weatherhaven in 2001. Sweena focuses on the Canadian military and medical shelters ,and works with clients to provide expertise on various options for remote-site shelters, camp and medical infrastructure requirements. She is further responsible for all aspects of the sales cycle.'
    },
    {
      name: 'George Banks-Martin',
      title: 'UK and Europe',
      credentials: '',
      image: '/images/georgebanksmartin.jpg',
      bio: 'George Banks-Martin has worked at Weatherhaven Global Solutions since 2008 in a variety of roles from technical writing to training and joined the sales team in 2016. Drawing on his previous sales experience, he has particularly focused on developing business relationships with clients in the fields of polar research, commercial and emergency response deployments. Prior to working at Weatherhaven, George studied history at Oxford University and African politics at SOAS, London University before pursuing a career as a singer in classical concert and opera.'
    },
    {
      name: 'Ron Houle',
      title: 'US Business Development and Strategy',
      credentials: '',
      image: '/images/ronhule.jpg',
      bio: 'Ron Houle is Founder and President of Pivot Step Consultants, LLC. Prior to founding his consulting practice, Ron served as Vice President of Washington Operations for HDT Global, the Director for Legislative Affairs , the Chief of Staff at the National Headquarters of the American Red Cross, and the staff of the Secretary of the Army as the Director of the Programs Division, Office of Legislative Liaison, the Pentagon. Ron is a retired Army Colonel with over 24 years of Active Duty service, and a graduate of the United States Military Academy, West Point, NY. He holds a Master of Science degree in Applied Mathematics, and a Master of Science Degree in Industrial Engineering, both from Stanford University.'
    },
    {
      name: 'Michael Wyatt',
      title: 'US Central Region Manager',
      credentials: '',
      image: '/images/Mike-Wyatt-RSL.jpg',
      bio: 'Michael is the US Central Region Manager for Weatherhaven Resources Inc. Michael served 22 years in the U.S. Army as an Infantryman retiring as a Sergeant First Class with the 1st Army East at Fort Bragg, NC. After his retirement in 2008 he gained over 14 years of experience supporting DOD units and First responders as a sales representative with DHS Technologies (DRASH) and HDT Global. Michael is mission focused and possesses technical and operational expertise in both the military and civilian markets to assist customers with all aspects of mobile structure solutions.'
    },
    {
      name: 'Jeffery Lindstrom',
      title: 'US West Region Manager',
      credentials: '',
      image: '/images/RSL-Jeff-L.jpg',
      bio: 'Jeff is the US West Region Manager for Weatherhaven Resources Inc. He joins Weatherhaven Resources Inc. with over 14 years of experience as East Coast Business Development Representative and Regional Facility Manager at DHS Systems (DRASH), sales representative for SOI C4ISR Platforms and most recently as the East Coast Business Manager and Program Manager for a U.S. Air Force Program at AAR Mobility Systems. Jeff served 22 years in the U.S. Army as an Infantryman retiring as a Master Sergeant from Fort Bragg, North Carolina where he continues to serve the Warfighter.'
    },
    {
      name: 'Willie Craig',
      title: 'US East Region Manager',
      credentials: '',
      image: '/images/williecraig.png',
      bio: 'Willie is the US East Region Manager for Weatherhaven Resources Inc. Willie served over 20 years in the US Army and retired as an Infantry Platoon Sergeant with the 10th Mountain Division. Since his retirement in 2008 he has supported DoD and First responders as a sales representative with DHS Technologies (DRASH), HDT Global and SOI C4ISR Platforms. With over 14 years experience, Willie is customer focused and possesses technical and operational expertise in both the military and civilian markets to assist customers with all aspects of mobile structure solutions.'
    },
    {
      name: 'James Frost',
      title: 'US East Region Manager',
      credentials: '',
      image: '/images/jamesfrost.jpg',
      bio: 'James is the Field Service Representative and Executive Assistant to VP, Business Development for Weatherhaven Resources Inc. James spent 20 years in the U.S. Army as an Aircraft Powertrain Repairman with the 160th Special Operations Aviation Regiment (Airborne). He served as an instructor at the U.S. Army\'s Survive, Evade, Resist and Escape (SERE) school and as the Senior Advisor at Fort Campbell\'s Basic Leader Course. As a retired First Sergeant, James understands and is dedicated to the mission success of the U.S. Armed Forces. He possesses both the technical and operational experience required to assist Weatherhaven customers to develop, deploy, and sustain mission essential expeditionary systems.'
    }
  ]

  const advisoryBoard = [
    {
      name: 'Lieutenant General Guy C. Swan III',
      title: 'US Advisory Board',
      credentials: '',
      image: '/images/lieutenantgeneralguycswan.jpg',
      bio: 'Lieutenant General Guy C. Swan III currently serves as an AUSA Vice President. During more than 35 years of active service, he commanded at every level through Army Service Component Command. A career armor/cavalry officer, his general officer assignments included: Commanding General, United States Army North/Fifth Army; Commanding General, United States Army Military District of Washington and Commander, Joint Force Headquarters-National Capital Region; Commanding General, 7th Army Training Command, United States Army Europe/Seventh Army; Chief of Staff and Director of Operations, Multi-National Force-Iraq during Operation Iraqi Freedom; Director of Operations, United States Northern Command; and Chief of Army Legislative Liaison. General Swan\'s other key assignments included Commander, 11th Armored Cavalry Regiment; Assistant Deputy Director for Strategy and Policy for the Joint Staff; and Deputy Operations Officer for the 1st Armored Division during Operations Desert Shield/Desert Storm. A 1976 graduate of the United States Military Academy at West Point, General Swan holds a Master of Military Art and Science degree from the United States Army\'s School of Advanced Military Studies. He also holds a Master of Arts degree in National Security Studies from Georgetown University and was a National Security Fellow at the John F. Kennedy School of Government at Harvard University. General Swan is a member of the Council on Foreign Relations and the Homeland Security Experts Group. He is also a Certified Emergency Manager (CEM) and a Certified Protection Professional (CPP), board certified in security management.'
    },
    {
      name: 'Lieutenant General Mark Andrew Brilakis',
      title: 'US Advisory Board',
      credentials: '',
      image: '/images/Lieutenant General Mark Andrew Brilakis.jpg',
      bio: 'He graduated from Franklin and Marshall College, Lancaster, Pennsylvania, and was commissioned in May 1981. Trained as an artillery officer, he served in operational force, supporting establishment, and headquarters assignments, to include three tours at Camp Lejeune, NC, as a company and field grade officer. Assignments as a General Officer included: Deputy J-3, U.S. European Command, Deputy Commanding General, III Marine Expeditionary Force, Commanding General 3d Marine Expeditionary Brigade and 3d Marine Division, Assistant Deputy Commandant, Programs and Resources Department, HQMC, Commanding General, Marine Corps Recruiting Command, Deputy Commandant, Manpower and Reserve Affairs, HQMC, and Commander, U.S. Marine Corps Forces Command. General Brilakis retired from the Marine Corps on 1 September, 2019, concluding 38 years of active service. He currently serves on several corporate and volunteer boards, has a consulting company, and is a Senior Fellow with the Center for Naval Analyses.'
    },
    {
      name: 'Mark C. "Chris" Nowland',
      title: 'US Advisory Board',
      credentials: '',
      image: '/images/Mark C. Chris Nowland.jpg',
      bio: 'Mark C. "Chris" Nowland (born February 6, 1962) is a retired United States Air Force Lieutenant General. He last served as the Deputy Chief of Staff for Operations, Plans and Requirements, Headquarters, United States Air Force from October 2016 to October 2018. In that role, he was responsible to the Secretary of the Air Force and the Chief of Staff for formulating policy supporting air, space, cyber, and irregular warfare, counter proliferation, homeland security and weather operations. As the Air Force operations deputy to the Joint Chief of Staff, the general determined operational requirements, capabilities and training necessary to support national security objectives and military strategy. General Nowland is a 1985 graduate from the U.S. Air Force Academy. He has commanded at the squadron, wing and numbered Air Force levels. He also served on the Joint Staff, U.S. Southern Command and two Air Force major command staffs. The general has flown combat operations in support of operations Southern Watch and Iraqi Freedom. He is also a graduate of the School of Advanced Air and Space Studies and was a National Security Fellow at the Olin Institute at Harvard University. Prior to his final assignment as Deputy Chief of Staff for Operations, Plans and Requirements, General Nowland was the Commander, 12th Air Force, Air Combat Command and Commander, Air Forces Southern, U.S. Southern Command, Davis-Monthan Air Force Base, Arizona.'
    },
    {
      name: 'Brigadier General Leslie L. Fuller',
      title: 'US Advisory Board',
      credentials: '',
      image: '/images/Leslie L. Fuller.jpg',
      bio: 'Brigadier General Leslie L. Fuller is a native of Covington, Georgia. He was commissioned into the Infantry following graduation from Middle Tennessee State University in May 1973. Brigadier General Fuller has served in a variety of conventional company and field grade assignments. He was a mechanized infantry rifle platoon leader, mortar platoon leader, and battalion maintenance officer at Fort Carson, Colorado. He commanded a rifle company in Panama and was an assistant division G3, mechanized infantry battalion S3, and battalion executive officer in the 1st Armored Division. Brigadier General Fuller\'s special operations assignments include: Detachment Commander, 3rd Battalion, 7th Special Forces Group (Airborne) Panama Canal Zone; Battalion Commander of 3rd Battalion, 5th SFG (A) Fort Campbell KY; and Group Commander of 10th SFG (A) Fort Carson, CO. He served as Group Executive Officer for 10th SFG (A) during Operations Desert Shield, Desert Storm and Provide Comfort. He served as the senior special operations observer/controller for the Battle Command Training Program at Fort Leavenworth. Additionally, he commanded the Stabilization Force\'s Combined Joint Special Operations Task Force headquartered in Sarajevo, Bosnia-Herzegovina from March to August 1997. Brigadier General Fuller was the Commanding General, Special Operations Command Europe (SOCEUR) and the Director, Special Operations Directorate, United States European Command (ECSO) from June 2000 to July 2002. Brigadier General Fuller led EUCOM\'s missions in Africa, the Caucasus and the Baltic Countries. Following SOCEUR, Brigadier General Fuller served as DCG of US Army Recruiting Command for three years. He also served as CG, Fort Jackson, SC, and as Chief of Staff for NATO Forces in Afghanistan during ISAF-V. Brigadier General Fuller is a graduate of the Special Forces Qualification Course; the Infantry Officer Basic and Advanced Courses; the Army Command and General Staff College and Army War College. His has earned the Expert Infantryman\'s Badge, Master Parachutist Badge, Special Forces Tab and Ranger Tab.'
    },
    {
      name: 'W. Craig Fugate',
      title: 'US Advisory Board',
      credentials: '',
      image: '/images/Craig Fugate.jpg',
      bio: 'W. Craig Fugate served as Administrator of the Federal Emergency Management Agency (FEMA) from May 2009 to January 2017. At FEMA, Fugate promulgated the "whole community" approach to emergency management, emphasizing and improving collaboration with all levels of government (federal, tribal, state, and local) and external partners, including voluntary agencies, faith-based organizations, the private sector and citizens. Prior to FEMA, Mr. Fugate served as Director of the Florida Division of Emergency Management (FDEM). In that role since 2001, he managed 138 full-time staff and a budget of $745 million. His agency coordinated disaster response, recovery, preparedness and mitigation efforts with each of the state\'s 67 counties and local governments. Mr. Fugate began his emergency management career as a volunteer firefighter, Emergency Paramedic, and finally as a Lieutenant with the Alachua County Fire Rescue. Eventually, he moved from exclusive fire rescue operations to serving as the Emergency Manager for Alachua County in Gainesville, Florida. He spent a decade in that role until May 1997 when he was appointed Bureau Chief for Preparedness and Response for FDEM. Within FDEM, Mr. Fugate\'s role as Chief of the State Emergency Response Team (SERT) kept him busy during 1998. That year, the SERT team was active for more than 200 days as a result of numerous floods, tornadoes, wildfires, and Hurricane Georges.'
    }
  ]

  const TeamSection = ({ title, members }) => (
    <section className="company-team-section">
      <div className="company-team-content">
        <h2 className="company-section-title">{title}</h2>
        <div className="company-team-grid">
          {members.map((member, index) => (
            <div key={index} className="company-member-card">
              <div className="company-member-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="company-member-image"
                  onError={(e) => {
                    console.error(`Failed to load image: ${member.image} - Make sure the file exists in public/images/ folder`)
                    if (e.target.src !== '/images/Photo.jpeg' && !e.target.src.includes('Photo.jpeg')) {
                      e.target.src = '/images/Photo.jpeg'
                    }
                  }}
                />
              </div>
              <div className="company-member-info">
                <h3 className="company-member-name">{member.name}</h3>
                {member.credentials && (
                  <p className="company-member-credentials">{member.credentials}</p>
                )}
                <p className="company-member-title">{member.title}</p>
                <p className="company-member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="app">
      <Header />
      <section className="company-hero-section">
        <div className="company-hero-content">
          <h1 className="company-hero-title">Our Company</h1>
          <p className="company-hero-subtitle">Meet the Team Behind Weatherhaven</p>
        </div>
      </section>

      <TeamSection title="Executive Team" members={executiveTeam} />
      <TeamSection title="Regional Managing Directors" members={regionalManagingDirectors} />
      <TeamSection title="Regional Sales Leads" members={regionalSalesLeads} />
      <TeamSection title="US Advisory Board" members={advisoryBoard} />
    </div>
  )
}

export default Company

