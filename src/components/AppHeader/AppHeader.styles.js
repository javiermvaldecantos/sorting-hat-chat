const styles = {
  'app-header--logo-wrapper': {
    maxWidth: '32px',
    maxHeight: '32px',
    // padding: '20%'

    '& img': {
      width: '100%'
    }
  },
  'app-header--title': {
    paddingLeft: (theme) => theme.spacing(2),
    paddingRight: (theme) => theme.spacing(2)
  }
}

export default styles;