import React, { useEffect, useState } from 'react';
// import test from '../assets/test.svg';
// import { ListItem, Typography, Box, Grid, Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Gradient, Capital, BarChart, AI, SideBar } from './components';

export function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedPlugin, setSelectedPlugin] = useState('gradient');

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleSelectedPlugin = (plugin) => {
    setSelectedPlugin(plugin);
    handleDrawerClose();
  };

  const plugginMapping = {
    gradient: <Gradient/>,
    Capital: <Capital/>,
    BarChart: <BarChart/>,
    AI: <AI/>,
  }

  const selectedComponent = plugginMapping[selectedPlugin];

  useEffect(() => {
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-gradient') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <SideBar
      mobileOpen={mobileOpen}
      isClosing={isClosing}
      selectedPlugin={selectedPlugin}
      handleDrawerClose={handleDrawerClose}
      handleDrawerTransitionEnd={handleDrawerTransitionEnd}
      handleDrawerToggle={handleDrawerToggle}
      handleSelectedPlugin={handleSelectedPlugin}
      selectedComponent={selectedComponent}
    />
  );
}
