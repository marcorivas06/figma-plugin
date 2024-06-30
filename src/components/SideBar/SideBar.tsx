import React, { useState } from 'react';
import GradientIcon from '@mui/icons-material/Gradient';
import KeyboardCapslockIcon from '@mui/icons-material/KeyboardCapslock';
import BarChartIcon from '@mui/icons-material/BarChart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuIcon from '@mui/icons-material/Menu';
import { 
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export function SideBar({
  mobileOpen,
  isClosing,
  selectedPlugin,
  handleDrawerClose,
  handleDrawerTransitionEnd,
  handleDrawerToggle,
  handleSelectedPlugin,
  selectedComponent
}) {

  const items = [
    {
      name : 'Gradient',
      icon: <GradientIcon/>,
      value:'gradient'
    },
    {
      name : 'Capital',
      icon: <KeyboardCapslockIcon/>,
      value:'capital'
    },
    {
      name : 'Bar Chart',
      icon: <BarChartIcon/>,
      value:'bar-chart'
    },
    {
      name : 'AI',
      icon: <AutoAwesomeIcon/>,
      value:'ai'
    },
    
  ]
  
  const drawer = (
    <div style={{backgroundColor:'#2C2C2C', color:'#FFF',height:'100%'}}>
      <Toolbar sx={{backgroundColor:'#008B8B'}}>
        <Box sx={{fontWeight:'bold'}}>
          Figma Plugins
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {items.map(({name, icon,value}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton onClick={() => handleSelectedPlugin(value)}>
              {icon}
              <ListItemText sx={{marginLeft:2}} primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <Box sx={{ display: 'flex', height:'100%' }} >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:'#008B8B'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Plugin
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
      {/* Body */}
      <Box
        component="main"
        sx={{ p: 3, width:'100%', height:'100%', backgroundColor:'#2C2C2C',color:'#FFF',  }}
      >
        <Toolbar />
        
        <Typography paragraph>
          {selectedComponent}
        </Typography>
      </Box>
    
    </Box>
  );
}