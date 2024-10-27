import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {
  Logo,
  SidebarAccount,
  SidebarAnalytics,
  SidebarBilling,
  SidebarCompany,
  SidebarHelp,
  SidebarLogout,
  SideBarQrCodeSVG,
} from "./SVGIcon";
import apis from "../services";
import { logout } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  console.log("user", user?.user);
  // State to control the sidebar and toggle between MenuIcon and CloseIcon
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [state, setState] = React.useState({
    left: false,
  });
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openHelp, setOpenHelp] = React.useState(false);
  const handleCompanyClick = () => {
    setOpenCompany(!openCompany);
  };
  const handleHelpClick = () => {
    setOpenHelp(!openHelp);
  };

  const isMobile = useMediaQuery("(max-width:600px)");
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setIsDrawerOpen(open); // Toggle the drawer open/close state
  };

  //LOGOUT API
  const logoutHandler = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      await apis.logout(token);
      toast.success("Logout Successfully");
      localStorage.removeItem("token");
      dispatch(logout());
      navigate("/");
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 278 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{}} className="logo" onClick={() => navigate("/")}>
        <Logo color={"#fcfcfc"} />
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              "&:hover": {
                opacity: 0.8,
                borderLeft: "4px solid #307fe2",
                backgroundColor: "#0a335c !important",
              },
              borderLeft: "4px solid transparent",
              transition: "all 0.3s ease",
              margin: "0px 30px 0px 30px",
            }}
            component={Link}
            to="/my-qr-codes"
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>
              {/* <HomeIcon /> */}
              <SideBarQrCodeSVG />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "#fcfcfc",
              }}
              primary={"QR Codes"}
              className=""
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/my-qr-analytics"
            sx={{
              "&:hover": {
                opacity: 0.8,
                borderLeft: "4px solid #307fe2",
                backgroundColor: "#0a335c !important",
              },
              borderLeft: "4px solid transparent",
              transition: "all 0.3s ease",
              margin: "0px 30px 0px 30px",
            }}
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <SidebarAnalytics />
            </ListItemIcon>
            <ListItemText
              primary={"Analytics"}
              sx={{
                color: "#fcfcfc",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              "&:hover": {
                opacity: 0.8,
                borderLeft: "4px solid #307fe2",
                backgroundColor: "#0a335c !important",
              },
              borderLeft: "4px solid transparent",
              transition: "all 0.3s ease",
              margin: "0px 30px 0px 30px",
            }}
            component={Link}
            to="/my-account"
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <SidebarAccount />
            </ListItemIcon>
            <ListItemText
              primary={"Account"}
              sx={{
                color: "#fcfcfc",
                fontFamily: '"Nunito Sans", sans-serif',
                fontSize: "16px",
                font: "inherit",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ marginBottom: "20px" }}>
          <ListItemButton
            sx={{
              "&:hover": {
                opacity: 0.8,
                borderLeft: "4px solid #307fe2",
                backgroundColor: "#0a335c !important",
              },
              borderLeft: "4px solid transparent",
              transition: "all 0.3s ease",
              margin: "0px 30px 0px 30px",
            }}
            component={Link}
            to="/my-billing"
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <SidebarBilling />
            </ListItemIcon>
            <ListItemText primary={"Billing"} sx={{ color: "#fff" }} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        sx={{
          opacity: "1",
          backgroundColor: "#307fe2",
          borderwwidth: "1px",
          height: "1px",
          margin: "0px 30px 0px 30px",
        }}
      />

      {/* COMPANY */}
      <ListItem disablePadding sx={{ padding: "10px 0" }}>
        <ListItemButton
          onClick={handleCompanyClick}
          sx={{
            margin: "0px 30px 0px 30px",
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <SidebarCompany />
          </ListItemIcon>
          <ListItemText primary={"Company"} sx={{ color: "#fff" }} />
          {openCompany ? (
            <ExpandLess sx={{ color: "#fff" }} />
          ) : (
            <ExpandMore sx={{ color: "#fff" }} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openCompany} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ paddingLeft: "70px" }}>
          <ListItemButton
            sx={{ padding: "10px 0" }}
            component={Link}
            to="/who-we-are"
          >
            <ListItemText primary="Who We Are" sx={{ color: "#fff" }} />
          </ListItemButton>
          <ListItemButton
            sx={{ padding: "10px 0" }}
            component={Link}
            to="/pricing"
          >
            <ListItemText primary="Prices" sx={{ color: "#fff" }} />
          </ListItemButton>
          <ListItemButton
            sx={{ padding: "10px 0" }}
            component={Link}
            to="/terms-and-conditions"
          >
            <ListItemText
              primary="Terms and Conditions"
              sx={{ color: "#fff" }}
            />
          </ListItemButton>
          <ListItemButton
            sx={{ padding: "10px 0" }}
            component={Link}
            to="/terms-of-use"
          >
            <ListItemText primary="Terms of Use" sx={{ color: "#fff" }} />
          </ListItemButton>
          <ListItemButton
            sx={{ padding: "10px 0" }}
            component={Link}
            to="/privacy-policy"
          >
            <ListItemText primary="Privacy policy" sx={{ color: "#fff" }} />
          </ListItemButton>
          <ListItemButton
            sx={{ padding: "10px 0" }}
            component={Link}
            to="/cookies-policy"
          >
            <ListItemText primary="Cookies policy" sx={{ color: "#fff" }} />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider
        sx={{
          opacity: "1",
          backgroundColor: "#307fe2",
          borderwwidth: "1px",
          height: "1px",
          margin: "0px 30px 0px 30px",
        }}
      />
      {/* HELP */}
      <ListItem disablePadding sx={{ padding: "10px 0" }}>
        <ListItemButton
          onClick={handleHelpClick}
          sx={{
            margin: "0px 30px 0px 30px",
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <SidebarHelp />
          </ListItemIcon>
          <ListItemText primary={"Help"} sx={{ color: "#fff" }} />
          {openHelp ? (
            <ExpandLess sx={{ color: "#fff" }} />
          ) : (
            <ExpandMore sx={{ color: "#fff" }} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openHelp} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ paddingLeft: "70px" }}>
          <ListItemButton
            sx={{ padding: "10px 0" }}
            component={Link}
            to="/contact-us"
          >
            <ListItemText primary="Contact us" sx={{ color: "#fff" }} />
          </ListItemButton>
          <ListItemButton sx={{ padding: "10px 0" }} component={Link} to="/faq">
            <ListItemText primary="FAQ" sx={{ color: "#fff" }} />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider
        sx={{
          opacity: "1",
          backgroundColor: "#307fe2",
          borderwwidth: "1px",
          height: "1px",
          margin: "0px 30px 60px 30px",
        }}
      />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              "&:hover": {
                opacity: 0.8,
                borderLeft: "4px solid #307fe2",
                backgroundColor: "#0a335c !important",
              },
              borderLeft: "4px solid transparent",
              transition: "all 0.3s ease",
              margin: "0px 30px 0px 30px",
            }}
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>
              {/* <HomeIcon /> */}
              <SidebarLogout />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "#6f7b87",
              }}
              primary={"Log Out"}
              className=""
              onClick={logoutHandler}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        sx={{
          opacity: "1",
          backgroundColor: "#307fe2",
          borderwwidth: "1px",
          height: "1px",
          margin: "0px 30px 0px 30px",
        }}
      />

      <ListItemText
        sx={{
          color: "#fff",
          margin: "20px 30px 30px 50px",
        }}
        primary={user?.user?.email || user?.email}
        className=""
      />
      {/* 
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#fff", fontSize: "30px", cursor: "pointer" }}
        >
          <path d="m11 17-5-5 5-5"></path>
          <path d="m18 17-5-5 5-5"></path>
        </svg> */}
    </Box>
  );

  return (
    <>
      {!isMobile && (
        <Box
          className="sidebar"
          sx={{ width: 278, flexShrink: 0 }}
          role="presentation"
        >
          {list("left")}
        </Box>
      )}
      {isMobile && (
        <>
          <IconButton
            onClick={toggleDrawer("left", !isDrawerOpen)}
            style={{ position: "fixed", top: 10, left: 10, zIndex: 1300 }}
          >
            {isDrawerOpen ? (
              <CloseIcon sx={{ color: "#fff" }} />
            ) : (
              <MenuIcon sx={{ color: "#000" }} />
            )}
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </>
      )}
    </>
  );
};

export default Sidebar;
