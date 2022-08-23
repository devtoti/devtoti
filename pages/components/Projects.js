import styles from '../../styles/projects.module.scss'
import ProjectCard from '../components/projectCard'
import { info_cards } from "../components/info_cards.js";

export default function Projects(props) {


  // const cards2= info_cards.map(card => ({id: card.id}))
  
  const info_cards_sort = info_cards.sort((a,b) => (a.id < b.id) ?  -1 : 1)
  
  // console.log(info_cards_sort)

  return (
    <>
     <h3 data-title className={styles.title}> Projects
        </h3>
    <div className={`${styles.container} ${styles.grid}`}>
    {info_cards_sort.map((card, ix) => (
      <ProjectCard
      name={card.name}
      description={card.description}
      about={card.about}
      img={card.img}
      labels={card.labels}
      url={card.pageUrl}
      repo={card.githubUrl}
        id={card.id}
        category={card.category}
        key={ix}
        dribbble={card.dribbbleUrl}
        />
        ))}
  </div>
        </>
  ) 
}

