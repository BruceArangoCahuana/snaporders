import {
  AppBar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
interface Props {
  anchorEl: any;
  setAnchorEl: any;
  handleMenu: (value: boolean) => void;
  handleProfile: (event: any) => void;
  handleClose: () => void;
}

export default function ToolbarMenu({
  anchorEl,
  setAnchorEl,
  handleMenu,
  handleProfile,
  handleClose,
}: Props) {
  const [value, setValue] = React.useState(0);
  return (
    <AppBar position="static" sx={{ margin: 0, backgroundColor: "white" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon sx={{ color: "black" }} onClick={() => handleMenu(true)} />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black" }}
        >
          SnapOrder
        </Typography>
        <div>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            
            <BottomNavigationAction 
              icon={
                <IconButton
                  size="small"
                  aria-label="notificaciones"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="default"
                  sx={{ p: 0 }} 
                >
                  <Badge badgeContent={4} color="info">
                    <NotificationsIcon color="action" />
                  </Badge>
                </IconButton>
              } 
              />
            <BottomNavigationAction 
              onClick={handleProfile}
              icon={<IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="default"
                sx={{ p: 2 }}
              >
                <AccountCircle />
              </IconButton>}
            />
            
          </BottomNavigation>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>Brandon Arango</MenuItem>
            <Divider />
            <MenuItem>
              <LogoutIcon />
              Cerrar session
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
