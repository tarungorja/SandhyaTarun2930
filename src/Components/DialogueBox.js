import './1Components.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const DialogueBox = ({ date, title, letter }) => {
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
    <div className="date-btn">
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        aria-label={date}
        type="button"
        className="date-btn"
        style={{
          backgroundColor: isHovering
            ? 'white'
            : `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        }}
        onClick={handleClickOpen}
      >
        {date}
      </button>
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
          {title}
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
            {letter}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default DialogueBox;
