const theme = {
  color: {
    primaryColor: "#FF385C",
    secondaryColor: "#00848A"
  },
  text: {
    color: "#484848",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms;
      &:hover {
        box-shadow: 0px 1px 2px 2px #48484828;
      }
    `
  }
}

export default theme