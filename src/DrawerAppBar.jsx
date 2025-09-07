import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";

const LinkTag = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const drawerWidth = 240;

const navItems = [
  "Home",
  "About",
  "Course Details",
  "Contact",
  "Students profits",
];
const navlinks = [
  "home",
  "about",
  "course-details",
  "contact",
  "students-profits",
];
function DrawerAppBar(props) {
  const { window: windowProp } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState("home");

  React.useEffect(() => {
    const handler = () => {
      const toolbar = document.querySelector('.MuiToolbar-root');
      const offset = toolbar ? toolbar.offsetHeight + 8 : 72;
      let current = "home";
      navlinks.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top - offset;
          if (top <= 0) {
            current = id;
          }
        }
      });
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Solo Trader Tamil
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              selected={active === navlinks[i]}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(navlinks[i]);
                if (target) {
                  const toolbar = document.querySelector('.MuiToolbar-root');
                  const offset = toolbar ? toolbar.offsetHeight : 64;
                  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
                setMobileOpen(false);
              }}
            >
              <LinkTag
                href={`#${navlinks[i]}`}
                aria-current={active === navlinks[i] ? "page" : undefined}
                style={{
                  width: '100%',
                  color: active === navlinks[i] ? "#6647F2" : "inherit",
                  fontWeight: active === navlinks[i] ? 700 : 500,
                  display: 'block'
                }}
              >
                <ListItemText primary={item} />
              </LinkTag>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    windowProp !== undefined ? () => windowProp().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} id="home">
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#6647F2" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Solo Trader Tamil
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <LinkTag href={`#${navlinks[i]}`} key={item}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(navlinks[i]);
                  if (target) {
                    const toolbar = document.querySelector('.MuiToolbar-root');
                    const offset = toolbar ? toolbar.offsetHeight : 64;
                    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
              >
                <Button
                  sx={{
                    color: active === navlinks[i] ? "#FFE082" : "#fff",
                    fontWeight: active === navlinks[i] ? 700 : 500,
                  }}
                  aria-current={active === navlinks[i] ? "page" : undefined}
                >
                  {item}
                </Button>
              </LinkTag>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
