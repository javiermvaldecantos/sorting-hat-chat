const styles = {
  'interactive-chat-messages': {
    display: 'flex',
    flexDirection: 'column-reverse',
    height: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
    paddingTop: (theme) => theme.spacing(4),
    paddingLeft: (theme) => ({
      xs: theme.spacing(2),
      md: theme.spacing(4),
    }),
    paddingBottom: (theme) => theme.spacing(4),
    paddingRight: (theme) => ({
      xs: theme.spacing(2),
      md: theme.spacing(4),
    }),
  },
  'interactive-chat-messages--message-wrapper': {
    display: 'block',
    margin: 'auto',
    paddingTop: (theme) => theme.spacing(0.5),
    paddingLeft: (theme) => theme.spacing(1),
    paddingBottom: (theme) => theme.spacing(0.5),
    paddingRight: (theme) => theme.spacing(1),
    width: '100%',
    maxWidth: (theme) => theme.contentMaxWidthPx + 'px',

    '&[data-type="sent"] + &[data-type="received"]': {
      paddingTop: (theme) => theme.spacing(2)
    },

    '&[data-type="received"] + &[data-type="sent"]': {
      paddingTop: (theme) => theme.spacing(2)
    },
  },
  'interactive-chat-messages--message': {
    display: 'table',
    position: 'relative',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: (theme) => theme.spacing(1),
    borderRadius: '10px',
    maxWidth: '90%',
    boxShadow: (theme) => theme.shadows[2],
    outlineOffset: '-2px',
    wordBreak: 'break-all',

    '&[data-type="sent"]': {
      marginRight: '0px',
      borderBottomRightRadius: '0px',
      outline: (theme) => '2px solid ' + theme.palette.primary.main,
    },
    '&[data-type="received"]': {
      marginLeft: '0px',
      borderBottomLeftRadius: '0px',
      outline: (theme) => '2px solid ' + theme.palette.secondary.main,
    }
  }
};

export default styles;