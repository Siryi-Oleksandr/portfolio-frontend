import './components/ThemeToggler/colorsThemeToggler.css';

export const theme = {
  colors: {
    accentColor: '#FE390C',
    lightGray: '#F7F7F7',
    mediumtGray: '#DDDDDD',
    grayIcon: '#A7AAB4',
    burgerIconGray: '#57595D',
    inputBgColor: '#CACDD1',
    white: '#FFFFFF',
    blackTitle: '#171820',
    black: '#111111',
    mainYellow: '#F3B249',
    redColor: '#DA1414',
    redErrorLight: '#E74A3B',
    mainRed: '#EA3D65',
    greenValid: '#3CBC81',
    textarea: '#CACDD1',
    disabled: '#c9cdd3',
    tagBgColor: '#313131',
    tagTextColor: '#999999',

    // Theme toggler

    background_switch: 'var(--background)',
    //light #ffffff => dark #0C0C0E

    second_background_switch: 'var(--second-background)',
    //light #fff => dark #111214

    primary_text_switch: 'var(--primary-text)',
    //light #111214 => dark #fff

    second_text_switch: 'var(--second-text)',
    //light #a9a9aa => dark #a9a9aa

    accent_color_switch: 'var(--accent-color)',

    slider_hover_color_switch: 'var(--slider-hover-color)',

    auth_button_background_switch: 'var(--auth-button-bacground)',

    auth_button_color_switch: 'var(--auth-button-color)',
  },

  fonts: {
    title: 'Anton',
    heading: 'Montserrat',
    text: 'Montserrat',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '40px',
    xxl: '120px',
  },

  fontWeights: {
    title: 400,
    normal: 500,
    heading: 600,
    bold: 700,
  },

  radii: {
    none: '0',
    tiny: '4px',
    small: '8px',
    medium: '16px',
    big: '32px',
    round: '50%',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  shadows: {
    boxShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
    modalShadow: '0px 4px 57px rgba(17, 17, 17, 0.05)',
    textShadow: `-1px -1px 0 #3f3f3f, -1px 0 0 #3f3f3f, -1px 1px 0 #3f3f3f,
    0 -1px 0 #3f3f3f, 0 0 0 #3f3f3f, 0 1px 0 #3f3f3f, 1px -1px 0 #3f3f3f,
    1px 0 0 #3f3f3f, 1px 1px 0 #3f3f3f`,
  },

  breakpoints: {
    mobile: '375px',
    mobileStart: '376px',
    mobileMax: '767px',
    tablet: '768px',
    desktop: '1440px',
  },

  transition: {
    hover: 'all 250ms ease-in-out',
  },
};
