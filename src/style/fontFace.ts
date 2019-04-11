import { css } from '@emotion/core';

export default css`
  /* montserrat-100 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100;
    src: local('Montserrat Thin'), local('Montserrat-Thin'),
      url('static/fonts/montserrat-v13-latin-100.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-100.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-100italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 100;
    src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'),
      url('static/fonts/montserrat-v13-latin-100italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-100italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-200italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 200;
    src: local('Montserrat ExtraLight Italic'),
      local('Montserrat-ExtraLightItalic'),
      url('static/fonts/montserrat-v13-latin-200italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-200italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-300 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local('Montserrat Light'), local('Montserrat-Light'),
      url('static/fonts/montserrat-v13-latin-300.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-200 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),
      url('static/fonts/montserrat-v13-latin-200.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-300italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 300;
    src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),
      url('static/fonts/montserrat-v13-latin-300italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-300italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
      url('static/fonts/montserrat-v13-latin-regular.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    src: local('Montserrat Italic'), local('Montserrat-Italic'),
      url('static/fonts/montserrat-v13-latin-italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
      url('static/fonts/montserrat-v13-latin-500.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-500italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
    src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'),
      url('static/fonts/montserrat-v13-latin-500italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-500italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-600italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'),
      url('static/fonts/montserrat-v13-latin-600italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-600italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-600 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
      url('static/fonts/montserrat-v13-latin-600.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
      url('static/fonts/montserrat-v13-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-700italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
      url('static/fonts/montserrat-v13-latin-700italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-700italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-800 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
      url('static/fonts/montserrat-v13-latin-800.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-800italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 800;
    src: local('Montserrat ExtraBold Italic'),
      local('Montserrat-ExtraBoldItalic'),
      url('static/fonts/montserrat-v13-latin-800italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/montserrat-v13-latin-800italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* source-sans-pro-200 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 200;
    src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'),
      url('static/fonts/source-sans-pro-v12-latin-200.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-200italic - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 200;
    src: local('Source Sans Pro ExtraLight Italic'),
      local('SourceSansPro-ExtraLightItalic'),
      url('static/fonts/source-sans-pro-v12-latin-200italic.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-200italic.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-300 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 300;
    src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
      url('static/fonts/source-sans-pro-v12-latin-300.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-300italic - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 300;
    src: local('Source Sans Pro Light Italic'),
      local('SourceSansPro-LightItalic'),
      url('static/fonts/source-sans-pro-v12-latin-300italic.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-300italic.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-regular - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
      url('static/fonts/source-sans-pro-v12-latin-regular.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-regular.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-italic - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 400;
    src: local('Source Sans Pro Italic'), local('SourceSansPro-Italic'),
      url('static/fonts/source-sans-pro-v12-latin-italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-600 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'),
      url('static/fonts/source-sans-pro-v12-latin-600.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-600italic - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 600;
    src: local('Source Sans Pro SemiBold Italic'),
      local('SourceSansPro-SemiBoldItalic'),
      url('static/fonts/source-sans-pro-v12-latin-600italic.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-600italic.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-700 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
      url('static/fonts/source-sans-pro-v12-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-700italic - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 700;
    src: local('Source Sans Pro Bold Italic'), local('SourceSansPro-BoldItalic'),
      url('static/fonts/source-sans-pro-v12-latin-700italic.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-700italic.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-900 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 900;
    src: local('Source Sans Pro Black'), local('SourceSansPro-Black'),
      url('static/fonts/source-sans-pro-v12-latin-900.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* source-sans-pro-900italic - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 900;
    src: local('Source Sans Pro Black Italic'),
      local('SourceSansPro-BlackItalic'),
      url('static/fonts/source-sans-pro-v12-latin-900italic.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/source-sans-pro-v12-latin-900italic.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* assistant-200 - latin */
  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 200;
    src: local('Assistant ExtraLight'), local('Assistant-ExtraLight'),
      url('static/fonts/assistant-v3-latin-200.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/assistant-v3-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* assistant-300 - latin */
  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 300;
    src: local('Assistant Light'), local('Assistant-Light'),
      url('static/fonts/assistant-v3-latin-300.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/assistant-v3-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* assistant-regular - latin */
  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 400;
    src: local('Assistant'), local('Assistant-Regular'),
      url('static/fonts/assistant-v3-latin-regular.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/assistant-v3-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* assistant-600 - latin */
  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 600;
    src: local('Assistant SemiBold'), local('Assistant-SemiBold'),
      url('static/fonts/assistant-v3-latin-600.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/assistant-v3-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* assistant-700 - latin */
  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 700;
    src: local('Assistant Bold'), local('Assistant-Bold'),
      url('static/fonts/assistant-v3-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/assistant-v3-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* assistant-800 - latin */
  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 800;
    src: local('Assistant ExtraBold'), local('Assistant-ExtraBold'),
      url('static/fonts/assistant-v3-latin-800.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('static/fonts/assistant-v3-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;
