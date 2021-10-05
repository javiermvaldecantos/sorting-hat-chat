const styles = {
  'interactive-chat-controls': {
    borderTop: (theme) => '1px solid ' + theme.palette.divider,
    padding: (theme) => ({
      xs: theme.spacing(2),
      sm: theme.spacing(4),
    })
  },

  'interactive-chat-controls--inner': {
    display: 'block',
    margin: 'auto',
    paddingLeft: (theme) => theme.spacing(1),
    paddingRight: (theme) => theme.spacing(1),
    maxWidth: (theme) => theme.contentMaxWidthPx + 'px'
  }
};

export default styles;