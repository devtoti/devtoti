import styles from  '../../styles/_navbar.module.scss';
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '../../public/svgIcons/MenuIcon'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react'
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

function openMenu() {
  setOpenDialog((a)=> !a)
}
  return (
    <div className={styles.nav}>
      {openDialog && 
        <div className={styles.menu}>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
        </div>
      }
      <div className={styles.rightMenu}>
      <ThemeProvider theme={theme}>
      <Switch defaultChecked labelStyle={{color: 'red'}}/>
        </ThemeProvider>
      </div>
      <MenuIcon onClick={openMenu}/>
    </div>
  )
}
