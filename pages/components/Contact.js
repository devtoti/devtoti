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

<<<<<<< HEAD
=======
import DribbbleLogo from '../../public/svgIcons/DribbbleLogo'
import LinkedinLogo from '../../public/svgIcons/LinkedinLogo'
import GitHubIcon from '@mui/icons-material/GitHub';
>>>>>>> design-3.0

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
<<<<<<< HEAD
  console.log(errors);
=======
  // console.log(errors);
>>>>>>> design-3.0


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
<<<<<<< HEAD
         <Divider variant="middle" />
    <h3 data-title style={{textAlign: "center", paddingTop: "1rem"}}> Contact
    </h3>
    <div className={styles.main} id="contact">
      <h3>Come say hello!</h3>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
      {errors.firstName && <span>First name is required</span>}
      <input type="email" placeholder="Email" {...register("Email", {required: true, maxLength: 36})} />
       <input type="text" placeholder="Title" {...register("First name", {required: true, maxLength: 80, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Message" {...register("Message", {required: true, maxLength: 100, pattern: /^\S+@\S+$/i})} />

      <input type="submit" />
    </form> */}
      <div className="mail-section" id="mail-section">

        <Stack spacing={1} sx={{ width: 'auto' }}>
          
            <ContentCopyIcon onClick={(e) => handleClick(e)} value="toti.webdev@gmail.com"/>

          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Copied to clipboard!
            </Alert>
          </Snackbar>
        </ Stack>
        <input type="text" value="toti.webdev@gmail.com"></input>
        <SendIcon onClick={() => console.log('asd')} />
      </div>

    </div>
      </>
=======
      <div className={styles.container} id="contact">
        <div className={styles.divider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className={styles.contact}>

          <h3 data-title style={{ textAlign: "center", paddingTop: "1rem" }}> Contact
          </h3>
          <Divider variant="middle" />

          <div className="mail-section" id="mail-section">

            {/* <input type="text" value="toti.webdev@gmail.com"></input> */}
            <h5>
              toti.webdev@gmail.com
            </h5>
            <Stack spacing={1} sx={{ width: 'auto' }}>

              <ContentCopyIcon onClick={(e) => handleClick(e)} value="toti.webdev@gmail.com" />

              <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Copied to clipboard!
                </Alert>
              </Snackbar>
            </ Stack>
            {/* <SendIcon onClick={() => console.log('asd')} /> */}
          </div>
        <section>
          <GitHubIcon onClick={()=> window.open('https://github.com/devtoti/', "_blank")} />
          <DribbbleLogo onClick={()=> window.open('https://dribbble.com/totisketches', "_blank")}/>
          <LinkedinLogo onClick={()=> window.open('https://www.linkedin.com/in/devtoti/', "_blank")}/>
        </section>
        </div>
      </div>
    </>
>>>>>>> design-3.0
  );
}