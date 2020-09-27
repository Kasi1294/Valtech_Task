import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { initialLoad } from "../../redux/actions/cardActions";
import DetailCard from "./DetailCard";

const useStyles = makeStyles((theme) => ({
  muigridlistroot: {
    height: "100% !important",
  },
  headerDetail: {
    padding: theme.spacing(3, 0, 1, 1),
  },
  title: {
    padding: theme.spacing(0, 0, 0, 3),
  },
  button: {
    padding: 5,
  },
  buttonDesign: {
    borderRadius: 30,
  },
}));

const ItemsGrid = () => {
  const classes = useStyles();

  // dispatch - redux dispatch function
  const dispatch = useDispatch();

  //Load the data form backend when screen load
  useEffect(() => {
    dispatch(initialLoad());
  }, []);

  //selectedItem - current selected item for edit
  const items = useSelector((state) => {
    return state.cardReducer.allItems;
  });

  let style = {
    padding: "35px",
  };

  return items !== undefined ? (
    <div>
      <Grid
        container
        justify="space-between"
        spacing={24}
        className={classes.headerDetail}
      >
        <Grid container xs={4}>
          <Typography variant="h4" color="textPrimary" component="p" className={classes.title}>
            Featured Developers
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p" className={classes.title}>
            Prominent developers in Bangalore
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<AddIcon />}
            classes = {{root : classes.buttonDesign}}
          >
            Add New Member
          </Button>
        </Grid>
      </Grid>
      <GridList
        cols={3}
        style={style}
      >
        {items.map((item) => {
          return (
            <GridListTile
              key={item.id}
              classes={{ root: classes.muigridlistroot }}
            >
              <DetailCard data={item} />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  ) : (
    ""
  );
};

export default ItemsGrid;
