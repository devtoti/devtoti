import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/projects.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Chip from '@mui/material/Chip';
import {medizenLabels} from './Projects'


export default function ProjectCard(props, {lbls}) {
    const { name, description, img, url, repo, id, labels } = props

    console.log(medizenLabels)
    console.log(lbls)
    const router = useRouter()
    const sendToPage = (e) => {
        e.preventDefault()
        window.location.assign(`https://${url}/`)
    }
    const sendToGithub = (e) => {
        e.preventDefault()
        window.location.assign(`https://github.com/devtoti/${repo}`)
    }

 
    const chipsForLabels = labels => {
        console.log(labels)
        // const obj = {...labels}
        // console.log(Object.values(obj))
        // console.log(Array.isArray(labels))
        // return labels.map((el, id) => <Chip label={el} size="small" variant="outlined" key={id}/>)
    }

    return ( 
        <div className={styles.proyect} id={name}>
            <h3>{name}</h3>
            <div className="content">
                <div className="image" style={{ position: "relative" }}>
                    {/* <Image
                        src={img}
                        alt="`project ${name} illustration"
                        layout='fill'
                        objectFit='contain'
                    /> */}
                </div>
                <p>{description}</p>
            </div>
            <div className="chips">
                {/* {chipsForLabels(lbls)} */}
            <div className="links">

                <h4 onClick={sendToPage}>
                    <LinkIcon />
                </h4>
                <h4 onClick={sendToGithub}>
                    <GitHubIcon />
                </h4>
            </div>
            </div>


        </div>
    )
}


// export async function getStaticProps(medizenLabels) {
//     const lbls = medizenLabels
//     return {
//         props: {
//             lbls
//         }
//     }
//   }
  