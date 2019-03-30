import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

altonTheme.overrideThemeStyles = () => ({
  a: {
    color: '#06D7D9'
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none'
  },
  'p': {
    fontSize: '1.2rem',
    fontFamily: 'Lato',
    textDecoration: 'none'
  },
  'h1': {
    marginTop: '2rem',
    marginBottom: '2rem',
    fontFamily: 'Montserrat, sans-serif',
  },
  'h2': {
    fontFamily: 'Montserrat, sans-serif'
  },
  'h3': {
    fontFamily: 'Montserrat, sans-serif'
  },
  'blockquote': {
    padding: '.5rem 1rem',
    margin: '.8rem 0',
    color: '#7a7a7a',
    borderLeft: '.25rem solid #06D7D9',
    fontStyle: 'italic'
  },
  'pre, code': {
    fontSize: '100%',
    whiteSpace: 'pre-wrap',
    /*overflow: 'scroll',
    wordSpacing: 'normal',*/
    fontFamily: 'Fira Code'
  }
})

delete altonTheme.googleFonts

// googleFonts: [
//   {
//     name: 'Open Sans',
//     styles: [
//       '700',
//     ],
//   },
//   {
//     name: 'Merriweather',
//     styles: [
//       '400',
//       '400i',
//       '700',
//       '700i',
//     ],
//   },
// ],

const typography = new Typography(altonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
