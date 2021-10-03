export default {
  'wrapper': {
    flexGrow: 1,
    minWidth: 0
  },

  'header-spacing': {
    visibility: 'hidden',
  },

  'content': {
    padding: (theme) => ({
      xs: theme.spacing(2),
      md: theme.spacing(4),
    }),
    paddingBottom: (theme) => ({
      xs: theme.spacing(4),
      md: theme.spacing(8),
    }),
  }
}