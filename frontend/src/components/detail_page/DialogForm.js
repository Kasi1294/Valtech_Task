import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";

import { addItem, updateItem, deleteItem } from "../../redux/actions/cardActions";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "auto",
  },
  container: {
    padding: theme.spacing(2),
  },
  designTextField: {
    [`& fieldset`]: {
      borderRadius: 25,
    },
  },
  textPadding: {
    padding: theme.spacing(1, 0, 2, 0),
  },
  button: {
    padding: 5,
  },
  buttonDesign: {
    borderRadius: 30,
    minWidth: 200,
  },
  dialogAction: {
    display: "flex",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  closeRoot: {
    margin: 0,
    padding: theme.spacing(2),
  },
}));

const SampleDialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.closeRoot} {...other}>
      <Typography variant="h5" color="textSecondary" display={"inline"}>
        Featured &thinsp;
        <Typography variant="h5" color="textPrimary" display={"inline"}>
          Developers
        </Typography>
      </Typography>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  );
});

export default function DialogForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = props.data.fieldData;
  const [open, setOpen] = React.useState(props.open);
  const [logo_url, setLogoUrl] = React.useState(data.logo);
  const [des, setDes] = React.useState(data.desc);
  const [dev_name, setDevName] = React.useState(data.title);
  const [year_exp, setYearExp] = React.useState(data.totalExp);
  const [prj_count, setPrjCount] = React.useState(data.totalProjects);
  const [prj_name, setPrjName] = React.useState(data.imgTitle);
  const [prj_loc, setPrjLoc] = React.useState(data.location);
  const [prj_loc_url, setPrjLocUrl] = React.useState(data.imgURL);
  const [mode] = React.useState(props.data.mode);
  const [id] = React.useState(data.id);

  const handleAdd = () => {
    let addPayLoad = getDataToSave();
    dispatch(addItem(addPayLoad));
  };

  const handleUpdate = () => {
    let updatePayLoad = getDataToSave();
    dispatch(updateItem(updatePayLoad));
  };

  const handleDelete = () => {
    let deletePayLoad = getDataToSave();
    dispatch(deleteItem(deletePayLoad));
  };

  const getDataToSave = () => {
    let saveData = {};
    data.logo_url = logo_url;
    data.des = des;
    data.dev_name = dev_name;
    data.year_exp = year_exp;
    data.prj_count = prj_count;
    data.prj_name = prj_name;
    data.prj_loc = prj_loc;
    data.prj_loc_url = prj_loc_url;
    data.open = open;
    data.mode = mode;
    data.id = id;
    return saveData;
  };
  return (
    <div>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth={"md"}
      >
        <SampleDialogTitle id="customized-dialog-title" />
        <DialogContent>
          <form className={classes.form} noValidate autoComplete="off">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              xs={12}
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
                  <InputLabel htmlFor="prj_loc_url">
                    Project Image Url
                  </InputLabel>
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
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogAction }}>
          {mode === "Add" ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              classes={{ root: classes.buttonDesign }}
              onClick={handleAdd}
            >
              SAVE
            </Button>
          ) : mode === "Update" ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              classes={{ root: classes.buttonDesign }}
              onClick={handleUpdate}
            >
              UPDATE
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              classes={{ root: classes.buttonDesign }}
              onClick={handleDelete}
            >
              DELETE
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
