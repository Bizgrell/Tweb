import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const MenuComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className={classes.menuButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        менню выбора
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>страница 1</MenuItem>
        <MenuItem onClick={handleClose}>страница 2</MenuItem>
        <MenuItem onClick={handleClose}>страница 3</MenuItem>
      </Menu>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <MenuComponent />
    </div>
  );
}

export default App;