import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import carousel component
import { AlertOctagon } from 'react-feather';

//array of projects
const projects = [
  // {
  //   name: 'Event Platform',
  //   description: 'A platform to display a online event',
  //   site: 'https://event-platform-etdp6plb8-marceloarraes.vercel.app/',
  //   image: '/eventplatform.png',
  //   darkimage: true,
  //   siteIcon: '/adamintericon.svg',

  //   active: true,
  //   tecDescription: 'Reactjs, Vite, Graphql, vime, tailwindcss',
  //   tecIcon1: '/reacticon.png',
  //   tecIcon2: '/typescripticon.png',
  //   tecIcon3: '/tailwindcssLogo.png',
  // },
  {
    name: 'GeoCapital stock Tracker',
    description: 'A stock tracker for GeoCapital',
    site: 'https://geo-capital-online-portfolio.vercel.app/',
    image: '/GeoCapitalTest.png',
    darkimage: true,
    siteIcon: '/nutriNotes.png',

    active: true,
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: '/typescripticon.png',
    tecIcon2: '/nextjsicon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
  {
    name: 'Nutri Notes',
    description: 'Nutritional information for health professionals',
    site: 'https://nutri-notes.vercel.app/',
    image: '/nutrinotesbg.png',
    darkimage: false,

    active: true,
    siteIcon: '/nutriNotes.png',
    tecDescription: 'Nextjs, Supabase, MaterialUi',
    tecIcon1: '/nextjsicon.png',
    tecIcon2: '/supabaseicon.png',
    tecIcon3: '/muiicon.png',
  },
  // {
  //   name: 'Web Widget',
  //   description: 'A web widget for the web',
  //   site: 'https://vercel.com/marceloarraes/web-widget',
  //   image: '/webwidgetbg.png',
  //   darkimage: true,
  //   siteIcon: '/webwidgetIcon.png',

  //   active: false,
  //   tecDescription: 'Vite, Typescript, Tailwindcss',
  //   tecIcon1: '/vitelogo.svg',
  //   tecIcon2: '/typescripticon.png',
  //   tecIcon3: '/tailwindcssLogo.png',
  // },
  {
    name: 'Bem Paggo Form',
    description: 'A front-end site for Bem Paggo company',
    site: 'https://bem-pago-form.vercel.app/',
    image: '/bempagobg.png',
    darkimage: false,
    siteIcon: '/bempaggoicon2.png',

    active: true,
    tecDescription: 'Typescript, MaterialUI, Styled Components',
    tecIcon1: '/typescripticon.png',
    tecIcon2: '/muiicon.png',
    tecIcon3: '/styledcomponentsicon3.png',
  },
  // {
  //   name: 'My Portfolio',
  //   description: 'My portfolio with some projects.',
  //   site: 'https://marcelosportfolio.vercel.app/',
  //   image: '/marcelosPortfolioImage.png',
  //   darkimage: true,

  //   active: true,
  //   siteIcon: '/nutriNotes.png',
  //   tecDescription: 'Typescript, Nextjs, Tailwindcss',
  //   tecIcon1: '/typescripticon.png',
  //   tecIcon2: '/nextjsicon.png',
  //   tecIcon3: '/tailwindcssLogo.png',
  // },
  // {
  //   name: 'Nasa Project',
  //   description: 'Space mission scheduler',
  //   site: 'https://gold-expensive-bream.cyclic.app/',
  //   image: '/nasaProjectBack.png',
  //   darkimage: true,
  //   siteIcon: '/adamintericon.svg',

  //   active: false,
  //   tecDescription: 'Nodejs, Reactjs, MongoDb',
  //   tecIcon1: '/nodejsicon.png',
  //   tecIcon2: '/reacticon.png',
  //   tecIcon3: '/nodejsicon.png',
  // },
  // {
  //   name: 'Adaminter.org',
  //   description: 'Nft Creator on Cardano blockchain',
  //   site: 'https://www.adaminter.org',
  //   image: '/adaminterback.png',
  //   darkimage: false,
  //   siteIcon: '/adamintericon.svg',

  //   active: false,
  //   tecDescription: 'Blockchain, Nextjs, Django, Nodejs',
  //   tecIcon1: '/reacticon.png',
  //   tecIcon2: '/djangoicon.png',
  //   tecIcon3: '/nodejsicon.png',
  // }
]
const mobileProjects = [
  {
    name: 'App Helper',
    description: 'A tickering platform for technical support',
    site: '',
    image: '/144203-720x1604_AdobeExpress.gif',
    darkimage: true,
    siteIcon: '',

    active: false,
    tecDescription: 'React-Native, native-base, MongoDB, firestore',
    tecIcon1: '/reacticon.png',
    tecIcon2: '/typescripticon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
  // {
  //   name: 'App Helper',
  //   description: 'A tickering platform for technical support',
  //   site: '',
  //   image: '/144203-720x1604_AdobeExpress.gif',
  //   darkimage: true,
  //   siteIcon: '',

  //   active: false,
  //   tecDescription: 'React-Native, native-base, MongoDB, firestore',
  //   tecIcon1: '/reacticon.png',
  //   tecIcon2: '/typescripticon.png',
  //   tecIcon3: '/tailwindcssLogo.png',
  // },
  // {
  //   name: 'App Helper',
  //   description: 'A tickering platform for technical support',
  //   site: '',
  //   image: '/144203-720x1604_AdobeExpress.gif',
  //   darkimage: true,
  //   siteIcon: '',

  //   active: false,
  //   tecDescription: 'React-Native, native-base, MongoDB, firestore',
  //   tecIcon1: '/reacticon.png',
  //   tecIcon2: '/typescripticon.png',
  //   tecIcon3: '/tailwindcssLogo.png',
  // },
]


const MyCarousel = () => {
  const [inactive, setInactive] = useState(false);

  const handleClick = (props: any) => {
    if (projects[props].active) {
      window.open(projects[props].site, '_blank');
    } else {
      setInactive(!inactive);
    }
  };

  const renderSlides = projects.map((project, index) => {
    let inactiveLabelColor = project.darkimage ? 'text-red-800' : 'text-black';
  return (<div key={`index${index}`} className=''>
    <img src={project.image} alt={`Image`} />
    <p className="legend">{project.description} using {project.tecDescription}</p>
  </div>)
});

  return (
    <div className='max-w-lg'>
      <Carousel autoPlay infiniteLoop onClickItem={handleClick} onChange={() => setInactive(false)} preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50} className="carousel-container">
        {projects.map((project, index) => {
          let inactiveLabelColor = project.darkimage ? 'text-red-800' : 'text-black';
          return (
            <div className='max-w-fit justify-center items-center' key={`index${index}`}>
              <img src={project.image} alt={`Image ${index}`}/>
              {inactive && (
                <div className='absolute inset-0 flex items-center justify-center animate-pulse delay-500 opacity-0 transition-opacity duration-300'>
                  <div className='flex items-center justify-center'>
                    <AlertOctagon size={200} className={`flex ${inactiveLabelColor}`} />
                    <p className={`${inactiveLabelColor} font-bold text-lg `}>Deployment offline :/</p>
                  </div>
                </div>
              )}
              <p className='legend absolute overflow-hidden text-ellipsis w-full text-center'>{project.description} using {project.tecDescription}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

const MyMobileCarousel = () => {
  const [inactive, setInactive] = useState(false);

  const handleClick = (props: any) => {
    if (mobileProjects[props].active) {
      window.open(projects[props].site, '_blank');
    } else {
      setInactive(!inactive);
    }
  };

  const renderSlides = mobileProjects.map((project, index) => {
    let inactiveLabelColor = project.darkimage ? 'text-red-800' : 'text-black';
  return (<div key={`index${index}`} className=''>
    <img src={project.image} alt={`Image`} />
    <p className="legend">{project.description} using {project.tecDescription}</p>
  </div>)
});


  return (
    <div className='h-1/4'>
      <Carousel autoPlay infiniteLoop onClickItem={handleClick} onChange={() => setInactive(false)} preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50} className="carousel-container">
        {mobileProjects.map((project, index) => {
          let inactiveLabelColor = project.darkimage ? 'text-red-800' : 'text-black';
          return (
            <div className='justify-center items-center' key={`index${index}`}>
              <img src={project.image} alt={`Image ${index}`}/>
              {inactive && (
                <div className='absolute inset-0 flex items-center justify-center animate-pulse delay-500 opacity-0 transition-opacity duration-300'>
                  <div className='flex items-center justify-center'>
                    <AlertOctagon size={200} className={`flex ${inactiveLabelColor}`} />
                    <p className={`${inactiveLabelColor} font-bold text-lg `}>Deployment offline :/</p>
                  </div>
                </div>
              )}
              <p className='legend absolute overflow-hidden text-ellipsis w-full text-center'>{project.description} using {project.tecDescription}</p>
            </div>
          );
        })}

      </Carousel>
    </div>
  );
};



export { MyCarousel, MyMobileCarousel}
