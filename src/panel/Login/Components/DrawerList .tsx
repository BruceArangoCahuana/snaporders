import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import { useTheme } from "@emotion/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StoreIcon from '@mui/icons-material/Store';
import { IRouteConfig } from "../../../Interfaces";
import { useNavigate } from "react-router-dom";

interface Props {
  toggleDrawer: (newOpen: any) => void;
  routers:IRouteConfig[]
}

export default function DrawerList({ toggleDrawer,routers }: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
 

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{ width: 250, background: "#3498db", height: "100vh" }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <ListItem sx={{display:"flex",justifyContent:"end"}}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon sx={{ color: "white" }}  />
        </IconButton>
      </ListItem>
      <Divider />
      <List>
        {routers.map((item:IRouteConfig, index:number) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon sx={{ color: "white" }}>
                  {item.id === 1 && (<RestaurantIcon />)}
                  {item.id === 2 && (<ProductionQuantityLimitsIcon />)}
                  {item.id === 3 && (<StoreIcon />)}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
