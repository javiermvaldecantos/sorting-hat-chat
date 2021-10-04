const styles = {
  'app-body': {
    height: '100%',
    paddingTop: (theme) => ({
      xs: '56px',
      sm: '64px !important'
    }),

    '@media (min-width: 0px) and (orientation: landscape)': {
      paddingTop: '48px'
    },
  },

  'app-body--content': {
    height: '100%',
  }
}

export default styles;