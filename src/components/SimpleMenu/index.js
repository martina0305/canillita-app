import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>           
            <IconButton
                        onClick={handleClick}
                        edge="start"
                                //className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        
                >
            <MenuIcon />
            </IconButton> 
                    
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}><Link to= "/">Home</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to= "/category/politica">Política</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to= "/category/internacionales">Internacionales</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to= "/category/tecnologia">Tecnología</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to= "/category/espectaculos">Espectáculos</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to= "/category/deportes">Deportes</Link></MenuItem>
        </Menu>
    </div>
  );
}