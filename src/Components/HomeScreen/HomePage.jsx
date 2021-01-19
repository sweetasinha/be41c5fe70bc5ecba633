import React, { useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  GetAsteroidInfo,
  GetRandomAsteroidInfo,
} from "./../../Services/NasaAsteroidServices";
import { STATUS_OK } from "../../Helpers/Constants";

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
  error: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "red",
  },
  submitBtn: {
    backgroundColor: "#191a62e3",
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#191a62e3",
    },
  },
}));

const validate = (values) => {
  let errors = {};
  if (!values.asteroidId) {
    errors.asteroidId = "Please enter AsteroidId";
    return errors;
  }
};

const HomePage = React.memo(() => {
  const classes = useStyles();
  const [asteroidInfo, setAsteroidInfo] = useState();

  const getRandomAsteroidInfo = useCallback(async () => {
    const response = await GetRandomAsteroidInfo();
    if (response.data && response.status === STATUS_OK) {
      formik.setFieldValue(
        "asteroidId",
        response.data.near_earth_objects[0].id
      );
    } else {
      toast.error("Something went wrong");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      asteroidId: "",
    },
    validateOnChange: false,
    validate,
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
              onChange={formik.handleChange}
            ></textarea>
            {formik.errors && formik.errors.asteroidId && (
              <div className={classes.error}>{formik.errors.asteroidId}</div>
            )}
            <div className={classes.btnDiv}>
              <Button
                disabled={!formik.values.asteroidId}
                type="submit"
                variant="contained"
                className={classes.submitBtn}
              >
                Submit
              </Button>
            </div>
          </form>
          <br />
          <div>
            <Button
              type="button"
              variant="contained"
              className={classes.submitBtn}
              onClick={() => getRandomAsteroidInfo()}
            >
              Random Asteroid
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
});

export default HomePage;
