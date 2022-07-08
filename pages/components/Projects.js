import styles from '../../styles/projects.module.scss'
import ProjectCard from '../components/projectCard'
import medizenImg from '../../public/images/medizen.png'
import newiconImg from '../../public/images/newicon.jpg'
import lomadiamanteImg from '../../public/images/lomadiamante.png'
import Image from 'next/image'
import Divider from '@mui/material/Divider';

export const medizenLabels = [
  "react", "css", "figma"
]
const newIconLabels = [
  "nextjs", "css", "photoshop"
]
const lomaDiamanteLabels = [
  "nextjs", "sass", "figma", "revit"
]
const webIllustrationsLabels = [
  "photoshop", "illustrator", "figma"
]
const xavierLabels = [
  "photoshop", "figma", "graphics"
]



export default function Projects(props) {
  console.log(medizenImg)
  console.log(medizenImg.src)
  console.log(newiconImg.src)

  return (
    <>
    <div className={styles.container}>
       <Divider variant="middle" />
    {/* <h3 data-title> Projects</h3> */}
  
    <ProjectCard 
    name="Medizen"
    description="A beautiful App design made for meditating purposes, allowing users to customize a timer and relax while listening to ambient sounds." 
    img={medizenImg}
    labels={props.props}
    url="devtoti.github.io/medizen"
    repo="medizen"
    id="1"
    />
    <ProjectCard 
    name="Xavier Web Design"
    description="Built and designed custom maps, schemes and graphics for a startup company growing in data science and product analytics." 
    img={medizenImg}
    labels={xavierLabels}
    url="devtoti.github.io/medizen"
    repo="xavier"
    id="2"
    />
    <ProjectCard 
    name="Modeling Portfolio"
    description="Digital modeling book built from scratch for self-promotion purposes. Made for professional photoshootings and casting opportunities." 
    img={newiconImg}
    labels={newIconLabels}
    url="totistyles.vercel.app"
    repo="totistyles"
    id="2"
    />
    <ProjectCard 
    name="Loma Diamante"
    description="Designed the main website for a Mexican real estate development company that sells, rents and renovates existing houses and appartments in Mexico City." 
    img={lomadiamanteImg}
    labels={lomaDiamanteLabels}
    url="lomadiamante.vercel.app"
    repo="loma-diamante"
    id="3"
    />
       <ProjectCard 
    name="Web Illustrations Pack"
    description="Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo." 
    img={lomadiamanteImg}
    labels={webIllustrationsLabels}
    url="lomadiamante.vercel.app"
    repo="loma-diamante"
    id="3"
    />
    {/* <div className={styles.divider}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> */}
  </div>
</>
  )
}

