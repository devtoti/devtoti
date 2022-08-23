import * as React from 'react'
import styles from '../../styles/_contact.module.scss'
import { useForm } from 'react-hook-form';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';

import DribbbleLogo from '../../public/svgIcons/DribbbleLogo'
import LinkedinLogo from '../../public/svgIcons/LinkedinLogo'
import GitHubIcon from '@mui/icons-material/GitHub';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  // console.log(errors);


  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    setOpen(true);
    let myMail = "toti.webdev@gmail.com"
    navigator.clipboard.writeText(myMail)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <div className={styles.container} id="contact">
        <div className={styles.divider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className={styles.contact}>

          <h3 data-title style={{ textAlign: "center", paddingTop: "1rem" }}>
            Contact
          </h3>
          <p>
            Do you have an ongoing proyect? Feel free to reach out.
          </p>
          {/* <Divider variant="middle" /> */}

          <div className="mail-section" id="mail-section">
      
            {/* <input type="text" value="toti.webdev@gmail.com"></input> */}
            <h5 onClick={() => window.location.href='mailto:toti.webdev@gmail.com?subject=Additional information request on your web portfolio'}>
              Send Email
            </h5>
            <Stack spacing={1} sx={{ width: 'auto' }}>

              {/* <ContentCopyIcon onClick={(e) => handleClick(e)} value="toti.webdev@gmail.com" /> */}

              <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Copied to clipboard!
                </Alert>
              </Snackbar>
            </ Stack>
            {/* <SendIcon onClick={() => console.log('asd')} /> */}
          </div>
        <section>
        {/* <p data-socialmedia>
            Find me on
          </p> */}
          <GitHubIcon onClick={()=> window.open('https://github.com/devtoti/', "_blank")} />
          <DribbbleLogo onClick={()=> window.open('https://dribbble.com/totisketches/collections/', "_blank")}/>
          <LinkedinLogo onClick={()=> window.open('https://www.linkedin.com/in/devtoti/', "_blank")}/>
        </section>
        </div>
      </div>
    </>
  );
}