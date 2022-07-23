import React from 'react'
import styles from '../../styles/_skills.module.scss'
export default function Skills() {

    const languageSkills = [
        'JavaScript (ES6)',
        'HTML5',
        'CSS/Sass'
    ]
    const frameworkSkills = [
        'Reactjs',
        'Nextjs',
    ]
    const designSkills = [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Figma'
    ]
    const toolingSkills = [
        'Github',
        'Chrome DevTools',
    ]
    const communicationSkills = [
        'Spanish',
        'English',
        'French',
        'German'
    ]
   
    const mySkills = [languageSkills, frameworkSkills, designSkills, toolingSkills, communicationSkills]

    const SkillSet = ({ set, title }) => {
        return (
            <div className={styles.skillset} id={title}>
                <h3>{title}</h3>
                <ul>
                    {set.map((el, id) => <li className={id} key={id}>{el}</li>)}
                </ul>
            </div>
        )
    }

    return (
        <div className={styles.container} id="section-three">
            <h3 data-title>Skills</h3>
            <div className={styles.skills}>
            <SkillSet set={languageSkills} title="languages"/>
            <SkillSet set={frameworkSkills} title="FW's & Libraries"/>
            <SkillSet set={communicationSkills} title="communication"/>
            <SkillSet set={designSkills} title="design"/>
            <SkillSet set={toolingSkills} title="tools"/>
            </div>
        </div>
    )
}
