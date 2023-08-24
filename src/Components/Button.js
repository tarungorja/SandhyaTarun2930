import './1Components.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const WishPage = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="btn-div">
      <Button
        variant="outlined"
        style={{
          borderBlockWidth: '0',
          color: 'black',
          fontWeight: '999',
          fontFamily: 'Rockwell Extra Bold,Rockwell Bold,monospace',
        }}
        onClick={handleClickOpen}
      >
        <h1 style={{ fontFamily: 'Brush Script MT,cursive' }}>
          Click to Open the Surprise
        </h1>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{
            fontFamily:
              'Merienda One ,Fontdiner Swanky,Brush Script MT,cursive',
            fontWeight: 'bolder',
            backgroundColor: isHovering
              ? `#${Math.floor(Math.random() * 16777215).toString(16)}`
              : `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          }}
        >
          Wish You a Very Happy Anniversary Papa!!!
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{
            padding: '0',
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUHnciTByU1nRSs-JXtUsW9GVZnK9wHMtGw&usqp=CAU")',
            backgroundSize: '100dvw',
          }}
        >
          <Typography
            gutterBottom
            sx={{
              border: '0',
              padding: '0rem',
              fontFamily: 'Papyrus,fantasy',
              fontWeight: 'bolder',
            }}
          >
            Undoubtedly, our memories, whether sweet or bitter, were crafted by
            both of us, and regardless of their flavor, they're destined to
            journey with us. Sweet memories hold the true essence of our shared
            life, akin to how flowers release their fragrances, while bitter
            memories can be transformed into our most valuable life lessons.Just
            as the sun and moon, distant in the sky, still manage to radiate
            their warmth and coolness, I will forever feel the embrace of your
            warmth and the soothing touch of your presence, no matter the
            physical distance. Much like only the lotus petals grace the surface
            of a pond, concealing the depth of its submerged stem, our love
            might be observed and judged superficially by others, but they
            remain unaware of its true profundity. People often claim that
            there's no end to hunger, but our love is beyond such limitations.
            Yes, my love does come with a single condition: your companionship
            by my side for the entirety of my life. Even if that means staying
            as friends, it's something I am more than content with. Please bare
            my immaturity forever papa. Love a lot papa and Happy
            Anniversary❤️❤️!!!
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default WishPage;
