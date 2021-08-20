import React from 'react'
import {Wrapper, Flex, Paper} from './styles'
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Backdrop, Fade} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      width: '950px',
      height: '500px',
    //   padding: theme.spacing(2, 4, 3),
        
    },
    close: {
        color: 'white',
        cursor: 'pointer'
    },
    closesm: {
        position: 'absolute',
        color: 'black',
        marginTop: '5px',
        marginRight: '5px'
    }
    
}));

const Modals = ({src, open, handleClose, title, description, date}) => {
    const classes = useStyles();

    return(
        <Wrapper>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}  >
                    <div>
                        <Flex direction="column">
                            <Flex direction="row" justify="flex-end" >
                                <CloseIcon className={window.innerWidth > 700 ? classes.close : classes.closesm} onClick={handleClose} />
                            </Flex>
                            <Paper className="paper">
                                <Flex direction="row" justify="space-around" alignItems="center" className="content-wrap">
                                    <img src={src} alt="event_pic" />
                                    <Flex direction="column" alignItems="space-around" justify="flex-start" className="detail-wrap">
                                        <div className="title">
                                            <p>Promo</p>
                                            <h1>{title}</h1>
                                        </div>
                                        <div className="date">
                                            <h2>Date</h2>
                                            <p>{date}</p>
                                        </div>
                                        <div className="description">
                                            <h2>Description</h2>
                                            <p>{description}</p>
                                        </div>
                                        <div className="location">
                                            <h2>Location</h2>
                                            <p>Coffee Ruci</p>
                                        </div>
                                    </Flex>
                                </Flex>
                            </Paper>
                        </Flex>
                        
                    </div>
                </Fade>
            </Modal>
        </Wrapper>
    )
}

export default Modals