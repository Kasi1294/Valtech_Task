import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from '@material-ui/core/Link';
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//useStyles - style to DetailCard
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    width: '30vw',
    overflow:"auto"
  },
  avatar: {
    flex: "5 0 auto",
  },
  avatar_root: {
    width: 100,
    height: 100,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

{
  /**
   * DetailCard is a react function component 
   * used to item in card
   * 
   * @return{DetailCard}
   */
}
export default function DetailCard(props) {
  const preventDefault = (event) => event.preventDefault();
  const data = props.data;
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.root}>
      
      <CardHeader
        classes={{ avatar: classes.avatar }}
        avatar={
          <Avatar
            variant="square"
            src={data.logo}
            classes={{ root: classes.avatar_root }}
          />
        }
        title={data.title}
        subheader={
          <div>
            <br />
            <Grid container spacing={1}>
              <Grid container item xs={6}>
                <Typography variant="h5" color="textPrimary">
                  {data.totalExp}
                  <br />
                  <Typography variant="body2" color="textSecondary">
                    totalExp
                  </Typography>
                </Typography>
              </Grid>
              <Grid container item xs={6}>
                <Typography variant="h5" color="textPrimary">
                  {data.totalProjects}
                  <br />
                  <Typography variant="body2" color="textSecondary">
                    project
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </div>
        }
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.desc}
        </Typography>
        <br />
        <Link href="#" onClick={preventDefault} underline={"always"}>
          {data.imgTitle}
        </Link>
      </CardContent>

      <CardMedia
        className={classes.media}
        image={data.imgURL}
        title={data.imgTitle}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="edit icon">
          <EditIcon
            onClick={(event) => {
              props.edit(data);
            }}
          />
        </IconButton>
        <IconButton aria-label="delete icon">
          <DeleteIcon
            onClick={(event) => {
              props.delete(data);
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
