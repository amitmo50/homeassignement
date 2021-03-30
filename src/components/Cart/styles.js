import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    cartContainer: {
      backgroundColor: '#b8b5ff',
      padding: "10px"
    },
    title: {
      margin: "0 0 20px 0",
      fontSize: '2.2rem',
      fontFamily: "'Dela Gothic One', cursive",
      color: '#fff',
    },
    emptyButton: {
      minWidth: '150px',
      
    },
    checkoutButton: {
      minWidth: '150px',
    },
    link: {
      textDecoration: 'none',
    },
    totalPrice: {
      fontFamily: "'Dela Gothic One', cursive",
      fontSize: '1.6rem',
    },
    cardDetails: {
      display: 'flex',
      marginTop: '10%',
      width: '100%',
      justifyContent: 'space-between',
    },
    media: {
      height: 260,
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    cartActions: {
      justifyContent: 'space-between',
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
    },
    itemName: {
      fontSize: '0.9rem',
    },
    itemPrice: {
      fontSize: '0.9rem',
    }
  }));