export default {
  app: {
    block: {
      margin: '0 auto',
      padding: 20,
      md: {
				width: 600
			},
			lg: {
				width: 800
			}
    }
  },

  header: {
    block: {
      marginBottom: 40
    },
    h1: {
      fontSize: 32,
      textAlign: 'center',
      md: {
        color: 'red'
      }
    },
    small: {
      fontSize: 20,
      fontWeight: 200,
      md: {
				fontSize: 28
			},
			lg: {
				fontSize: 28
			}
    }
  },

  footer: {
    block: {
      marginTop: 40,
      marginBottom: 40,
    },
    p: {
      margin: '0 auto',
      flexBasis: '100%',
      textAlign: 'center',
      fontSize: 12
    }
  },

  wrap: {
    block: {
      width: 200,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  aligned: {
    block: {
      height: 120
    }
  },

  flexible: {
    block: {
      height: 250
    }
  },

  centered: {
    block: {
      height: 200
    }
  },

  nested: {
    transparent: {
      margin: 0,
      padding: 0,
      background: 'transparent'
    },

    common: {
      margin: 4,
      padding: 12,
      background: 'white'
    },

    sidebar: {
      maxWidth: 200,
      flexBasis: 200
    },

    search: {
      width: 200
    },

    widget: {
      height: 100
    }
  }
}
