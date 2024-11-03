import React, { Fragment, useEffect } from "react";
import DrawerList from "./Login/Components/DrawerList ";
import { Box, Button, Drawer } from "@mui/material";
import ToolbarMenu from "./Login/Components/Toolbar";
import { Outlet } from "react-router-dom";
import routesConfig from "../Routes/router";
import { IRouteConfig } from "../Interfaces";

export default function Panel() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [routers, setRouters] = React.useState<IRouteConfig[]>([]);
  
  useEffect(() =>{
    fetchRouter()
  },[])
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchRouter = () =>{
    setRouters(routesConfig as IRouteConfig[])
  }
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <ToolbarMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleMenu={toggleDrawer}
          handleProfile={handleProfile}
          handleClose={handleClose}
        ></ToolbarMenu>
      </Box>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <DrawerList
          toggleDrawer={(newOpen) => toggleDrawer(newOpen)}
          routers={routers as IRouteConfig[]}
        ></DrawerList>
      </Drawer>
      <Outlet />
    </Fragment>
  );
}
