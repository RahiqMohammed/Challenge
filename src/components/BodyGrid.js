import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumnGap: theme.spacing(5),
  },
}));

export default function GridWrapper({ headerHeight, children }) {
  const classes = useStyles({ headerHeight });

  return <div className={classes.wrapper}>{children}</div>;
}
