import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { useFormik } from "formik";

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  appbar: {
    background: "#191a62e3",
  },
  title: {
    color: "#ffffff",
    fontWeight: 600,
  },
  textbox: {
    padding: "15px",
    border: "1px solid black",
    borderRadius: "5px",
    width: "100%",
  },
  btnDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "3%",
  },
}));

const HomePage = React.memo(() => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      asteroidId: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Nasa Asteroid
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid className={classes.mainContainer} container>
        <Grid item xs={10}>
          <form onSubmit={formik.handleSubmit}>
            <textarea
              value={formik.values.asteroidId}
              name="asteroidId"
              className={classes.textbox}
              placeholder="Enter Asteroid ID"
              required
              fullWidth
              onChange={formik.handleChange}
            ></textarea>
            <div className={classes.btnDiv}>
              <Button variant="contained">Submit</Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  );
});

export default HomePage;
