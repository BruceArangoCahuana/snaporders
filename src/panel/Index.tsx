import React, { Fragment } from "react";
import DrawerList from "./Login/Components/DrawerList ";
import { Box, Button, Drawer } from "@mui/material";
import ToolbarMenu from "./Login/Components/Toolbar";
import { Outlet } from "react-router-dom";

export default function Panel() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
        ></DrawerList>
      </Drawer>
      <Outlet />
    </Fragment>
  );
}
