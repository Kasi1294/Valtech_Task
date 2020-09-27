import React, { useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { initialLoad } from "../../redux/actions/cardActions";
import DetailCard from "./DetailCard";
import DialogForm from "../detail_page/DialogForm"

//useStyles is used to style ItemGrid
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
  tile: {
    position : "relative",
    overflow: "initial",
  },
  gridList:{
    padding:theme.spacing(0, 0, 0, 4.5),
    margin: "0 !important",
  }
}));

{
  /**
   * ItemsGrid is a react function component 
   * used to show the item
   * 
   * @return{ItemsGrid}
   */
}
const ItemsGrid = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [data, setData] = React.useState({
    fieldData : {},
    mode : null
  });

  // dispatch - redux dispatch function
  const dispatch = useDispatch();

  //Load the data form backend when screen load
  useEffect(() => {
    dispatch(initialLoad());
  }, []);

  {
    /**
     * editData is function used to handle the 
     * item update 
     *  
     * @param{data}
     */
  }
  let editData = (data) => {
    setOpenDialog(true);
    setData({fieldData:data, mode : "Update"});
  };

  {
    /**
     * deleteData is function used to handle the 
     * item delete 
     *  
     * @param{data}
     */
  }
  let deleteData = (data) => {
    setOpenDialog(true);
    setData({fieldData:data, mode : "Delete"});
  };

  //All item in current state
  const items = useSelector((state) => {
    return state.cardReducer.allItems;
  });

  //addItem is used to handle add
  let addItem = () => {
    setOpenDialog(true);
    setData({fieldData:{}, mode:"Add"})
  }
    
  return items !== undefined ? (
    <div>
    {  openDialog ? <DialogForm open={openDialog} data={data} onClose={()=> {setOpenDialog(false);}}/> : null }
      <Grid
        container
        justify="space-between"
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
            onClick={addItem}
          >
            Add New Member
          </Button>
        </Grid>
      </Grid>
      <GridList
        cols={3}
        classes ={{root:classes.gridList}}
        xs={3}
      >
        {items.map((item) => {
          return (
            <GridListTile
              key={item.id}
              classes={{ root: classes.muigridlistroot, tile: classes.tile }}
            >
              <DetailCard data={item} edit={editData} delete={deleteData}/>
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  ) : (
    null
  );
};

export default ItemsGrid;
