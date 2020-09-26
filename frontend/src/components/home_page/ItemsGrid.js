import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import { initialLoad } from "../../redux/actions/cardActions";
import DetailCard from "./DetailCard"

const ItemsGrid = () => {
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
    padding : '15px'
  };


  return items !== undefined ? (
    <GridList cols={3} style={style}>
      {items.map((item) => {
        return <GridListTile key={item.id}>
          <DetailCard data={item}/>
        </GridListTile>;
      })}
    </GridList>
  ) : (
    ""
  );
};

export default ItemsGrid;
