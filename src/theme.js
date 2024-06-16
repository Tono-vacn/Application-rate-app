import { Platform } from 'react-native';

const platform = Platform.OS;

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#ffffff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    // main: 'System',
    main: platform === 'android' ? 'Roboto': (platform==='ios'?'Arial':'System'),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;