export const routes = {
  home: "home",
  example: "example",
}

export const baseStyles = {
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}
export const styles = {
  ...baseStyles,
  flexCenterColumn: {
    ...baseStyles.flexCenter,
    flexDirection: "column",
  },
  flexCenterRow: {
    ...baseStyles.flexCenter,
    flexDirection: "row",
  },
}
