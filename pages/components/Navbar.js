import styles from  '../../styles/_navbar.module.scss';
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '../../public/svgIcons/MenuIcon';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect} from 'react'
import Link from 'next/link'
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#F2C34B',
      darker: '#fff',
    },
    unchecked: {
      main: '#F2C34B',
      darker: '#fff',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
export default function Navbar() {
const [openDialog, setOpenDialog] = useState(false)
const [winHeight, setWinHeight] = useState(0)

useEffect(()=> {
  setWinHeight(window.innerHeight)
}, [])
function openMenu() {
  setOpenDialog((a)=> !a)
}

const navigateTo = section => {
  console.log(section.target.tagName)
  setOpenDialog((a)=> !a)
}
  return (
    <div className={styles.nav}>
      {openDialog && 
        <div className={styles.menu} id="ul-navigation" style={{height: winHeight}}>
          <CloseIcon onClick={() => setOpenDialog(a=>!a)}/>
      <ul onClick={(e) => navigateTo(e)}>
        <Link href="#section-one">
        <li>About</li>
        </Link>
        <Link href="#section-two">
        <li>Projects</li>
        </Link>
        <Link href="#section-three">
        <li>Skills</li>
        </Link>
        <Link href="#contact">
        <li>Contact</li>
        </Link>
      </ul>
        </div>
      }
      <div className={styles.rightMenu}>
      {/* <ThemeProvider theme={theme}>
      <Switch defaultChecked labelStyle={{color: 'red'}}/>
        </ThemeProvider> */}
      </div>
      <MenuIcon onClick={openMenu}/>
    </div>
  )
}
