import React, {useState} from 'react'
import styled from 'styled-components'
import bannerImage from '../../images/image-hero-desktop.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

const Styles = styled.div`
    nav {
        display: flex;
        justify-content: space-between;
        width: 98%;
        padding: 10px;
        height: 29vh;
    .hvr-grow {
        display: inline-block;s
        vertical-align: middle;
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        transition-duration: 0.3s;
        transition-property: transform;
}

    .hvr-grow:hover,
    .hvr-grow:focus,
    .hvr-grow:active {
        transform: scale(1.1);
    }
    },
    h3 {
        color: white;
        font-size: 1.2em;
    }

    p {
        cursor: pointer;
        font-weight: bolder;
        margin-left: 15px;
    }
`
const style = {
  position: 'absolute',
  top: '7%',
  left: '70%',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  // border: '1px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const MenuOptions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-right: 35px;
`

function Nav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
      <Styles>
        <nav style={{ backgroundImage: `url(${bannerImage})`}}>        
          <h3> crowdfund </h3>
          <MenuOptions>
              <p className="hvr-grow">About</p>
              <p className="hvr-grow">Discover</p>
              <p> <ShoppingCartOutlinedIcon data-testid="cart-test-id" onClick={handleOpen} /></p>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
            <Box sx={style}>
              <Typography style={{fontWeight: "bolder" , color: "black"}} id="modal-modal-title" variant="h5" component="h2">
              Shopping cart
              </Typography>
              <Divider style={{marginTop: "10px"}} />
              <Typography  id="modal-modal-description" sx={{ mt: 2 }}>
                   Your cart is empty.
              </Typography>
            </Box>
            </Modal>
                </MenuOptions>
          </nav>

      </Styles>
    )
}

export default Nav
