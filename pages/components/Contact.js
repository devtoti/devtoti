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
  );
}