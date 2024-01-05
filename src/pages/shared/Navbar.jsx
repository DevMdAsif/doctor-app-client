import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const pages = (
  <>
    <Link className="linkStyle" to="/">
      Home
    </Link>
    <Link className="linkStyle" to="/doctors">
      Doctors
    </Link>
    <Link className="linkStyle" to="/about">
      About Us
    </Link>
    <Link className="linkStyle" to="/">
      Home
    </Link>
    <Link className="linkStyle" to="/">
      Home
    </Link>
  </>
);
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  // TODO : user add here

  const user = false;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="bg-white py-4 ">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img className="w-40 xl:ml-20" src={logo} alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="text-black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{pages}</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <img className=" sm:w-40 w-32" src={logo} alt="" />
          </Typography>
          <Box
            className="xl:ml-60 ml-40"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages}
          </Box>

          <div className="xl:mr-20">
            {user ? (
              <>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </>
            ) : (
              <div className="inline-flex">
                <Link to="login">
                  <button className="text-black mr-5 mt-2 hover:text-[#1976d2] ">
                    <PersonOutlineIcon className="ml-1" /> Log in
                  </button>
                </Link>
                <Link to="singUp">
                  <button
                    className="text-white bg-[#0e82fd] p-2 duration-500 rounded-lg hover:bg-white hover:text-[#1976d2]
               border-2 hover:border-[#1976d2] hidden sm:block "
                  >
                    <PersonOutlineIcon className="text-xs mr-1" /> Sing Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
