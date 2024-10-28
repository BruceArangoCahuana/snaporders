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

interface Props {
  toggleDrawer: (newOpen: any) => void;
}

export default function DrawerList({ toggleDrawer }: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

 

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
        {["Productos", "Ordenes", "Ventas"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
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
