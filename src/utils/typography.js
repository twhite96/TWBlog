import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

altonTheme.overrideThemeStyles = () => ({
  a: {
    color: '#06D7D9',
    // textDecoration: 'underline',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'p': {
    fontSize: '1.3rem'
  },
  'h1': {
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  'blockquote': {
    padding: '.5rem 1rem',
    margin: '.8rem 0',
    color: '#7a7a7a',
    borderLeft: '.25rem solid #06D7D9',
    fontStyle: 'italic'
  },
  'pre, code': {
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
