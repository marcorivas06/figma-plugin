import { gradientController } from './gradient_controller'

figma.showUI(__html__, { width: 450, height: 500 });

figma.ui.onmessage = (msg) => {
  const toggleFunctionality = msg.type;
  switch (toggleFunctionality) {
    case 'create-gradient':
      gradientController(msg, figma);
      break;

    default:
      console.log('default');
      break;
  }
  figma.closePlugin();
};

