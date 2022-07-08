import {useState, useEffect} from 'react'
import styles from '../../styles/_cover.module.scss'
import ForestBg from '../../public/svg/ForestBg'
export default function Cover() {
  
  const [winHeight, setWinHeight] = useState(0)
  useEffect(() => {
    // window is accessible here.
    setWinHeight(window.innerHeight);
    // console.log("window.innerHeight", window.innerHeight);
  }, []);

  return (
    <div className={styles.container} style={{minHeight: winHeight}}>
      <section>
        <h2><span>_</span>devtoti</h2>
        <h4>work portfolio</h4>
      </section>
      <ForestBg />
      <div className={styles.moon}>
        <div className={styles.outer}></div>
        <div className={styles.inner}></div>
      </div>
    </div>
  )
}
