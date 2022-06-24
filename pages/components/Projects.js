import styles from '../../styles/projects.module.scss'
import ProjectCard from '../components/projectCard'
import medizenImg from '../../public/images/medizen.png'
import newiconImg from '../../public/images/newicon.jpg'
import lomadiamanteImg from '../../public/images/lomadiamante.png'
import Image from 'next/image'

const medizenLabels = [
  "react", "css", "figma"
]
const newIconLabels = [
  "nextjs", "css", "photoshop"
]
const lomaDiamanteLabels = [
  "nextjs", "sass", "figma", "revit"
]

export default function Projects() {
  console.log(medizenImg)
  return (
    <div className={styles.main}
    style={{border: "1px solid blue"}}>
    <h3 data-title> Projects
    </h3>
    {/* <Image
                src={medizenImg}
                layout='fill'
                /> */}
    <ProjectCard 
    name="medizen"
    description="Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo." 
    img={medizenImg}
    labels={medizenLabels}
    url="devtoti.github.io/medizen"
    repo="medizen"
    id="1"
    />
    <ProjectCard 
    name="newicon"
    description="Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo." 
    img={newiconImg}
    labels={newIconLabels}
    url="totistyles.vercel.app"
    repo="totistyles"
    id="2"
    />
    <ProjectCard 
    name="loma residencial"
    description="Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo." 
    img={lomadiamanteImg}
    labels={lomaDiamanteLabels}
    url="lomadiamante.vercel.app"
    repo="loma-diamante"
    id="3"
    />
  </div>
  )
}

