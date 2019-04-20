const themes = {
  light: {
    id: 'light',
    header: 'rgb(6, 215, 217)',
    inlineCode: {
      background: 'rgba(255,229,100,0.2)',
      color: '#1a1a1a',
    },
    primary: {
      background: '#ffffff',
      text: {
        normal: '#000000',
        title: '#000000',
        link: 'rgb(6, 215, 217)',
      },
    },
    secondary: {
      background: 'rgb(249, 250, 251)',
      text: {
        normal: '#000000',
        title: '#000000',
        link: '#04AAAD',
      },
    },
  },
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  dark: {
    id: 'dark',
    header: '#ffffff',
    inlineCode: {
      background: 'rgba(63,63,63,1)',
      color: '#e6e6e6',
    },
    primary: {
      background: 'rgba(40, 44, 53, 1.00)',
      text: {
        normal: 'rgba(255, 255, 255, 0.95)',
        title: '#ffffff',
        link: 'rgb(6, 215, 217)',
      },
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.3)',
      text: {
        normal: '#ffffff',
        quote: 'rgba(244,244,244,.85)',
        title: '#ffffff',
        link: 'rgb(6, 215, 217)',
      },
    },
  },
  transition: {
    ease: 'all 200ms ease',
  }
};

export default themes;
