import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  designTextField: {
    [`& fieldset`]: {
      borderRadius: 25,
    },
  },
  textPadding: {
    padding: theme.spacing(0.9, 0, 2, 0),
  },
}));

export default function Form() {
  const classes = useStyles();
  const [logo_url, setLogoUrl] = React.useState("");
  const [des, setDes] = React.useState("");
  const [dev_name, setDevName] = React.useState("");
  const [year_exp, setYearExp] = React.useState("");
  const [prj_count, setPrjCount] = React.useState("");
  const [prj_name, setPrjName] = React.useState("");
  const [prj_loc, setPrjLoc] = React.useState("");
  const [prj_loc_url, setPrjLocUrl] = React.useState("");

  return (
    <React.Fragment>
      <Container
        disableGutters={true}
        fixed={true}
        maxWidth={"md"}
        className={classes.container}
      >
        <form className={classes.root} noValidate autoComplete="off">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            xs={5}
          >
            <FormControl fullWidth variant="outlined">
              <div className={classes.textPadding}>
                <InputLabel
                  htmlFor="logo_url"
                  classes={{ focused: classes.label }}
                >
                  Logo Image Url
                </InputLabel>
                <OutlinedInput
                  fullWidth={true}
                  required
                  id="logo_url"
                  value={logo_url}
                  classes={{ root: classes.designTextField }}
                  onChange={(value) => setLogoUrl(value.target.value)}
                />
              </div>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <div className={classes.textPadding}>
                <InputLabel htmlFor="dev_name">Developer Name</InputLabel>
                <OutlinedInput
                  fullWidth={true}
                  required
                  id="dev_name"
                  value={dev_name}
                  classes={{ root: classes.designTextField }}
                  onChange={(value) => setDevName(value.target.value)}
                />
              </div>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <div className={classes.textPadding}>
                <InputLabel htmlFor="year_exp">Year Experience</InputLabel>
                <OutlinedInput
                  fullWidth={true}
                  required
                  id="year_exp"
                  variant="outlined"
                  value={year_exp}
                  classes={{ root: classes.designTextField }}
                  onChange={(value) => setYearExp(value.target.value)}
                />
              </div>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <div className={classes.textPadding}>
                <InputLabel htmlFor="prj_count">Project Count</InputLabel>
                <OutlinedInput
                  fullWidth={true}
                  required
                  id="prj_count"
                  variant="outlined"
                  value={prj_count}
                  classes={{ root: classes.designTextField }}
                  onChange={(value) => setPrjCount(value.target.value)}
                />
              </div>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <div className={classes.textPadding}>
                <InputLabel htmlFor="des">Description</InputLabel>
                <OutlinedInput
                  fullWidth={true}
                  multiline={true}
                  required
                  id="des"
                  variant="outlined"
                  value={des}
                  classes={{ root: classes.designTextField }}
                  onChange={(value) => setDes(value.target.value)}
                />
              </div>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <div className={classes.textPadding}>
                <InputLabel htmlFor="prj_name">Project Name</InputLabel>
                <OutlinedInput
                  fullWidth={true}
                  required
                  id="prj_name"
                  variant="outlined"
                  value={prj_name}
                  classes={{ root: classes.designTextField }}
                  onChange={(value) => setPrjName(value.target.value)}
                />
              </div>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <div className={classes.textPadding}>
                <InputLabel htmlFor="prj_loc">Project Location</InputLabel>
                <OutlinedInput
                  fullWidth={true}
                  required
                  id="prj_loc"
                  variant="outlined"
                  value={prj_loc}
                  classes={{ root: classes.designTextField }}
                  onChange={(value) => setPrjLoc(value.target.value)}
                />
              </div>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <div className={classes.textPadding}>
                <InputLabel htmlFor="prj_loc_url">Project Image Url</InputLabel>
                <OutlinedInput
                  fullWidth={true}
                  required
                  id="prj_loc_url"
                  variant="outlined"
                  value={prj_loc_url}
                  classes={{ root: classes.designTextField }}
                  onChange={(value) => setPrjLocUrl(value.target.value)}
                />
              </div>
            </FormControl>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
