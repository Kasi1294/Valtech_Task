import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    flex: "5 0 auto",
  },
  muiavatar_root: {
    width: 100,
    height: 100,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  }
}));

export default function DetailCard(props) {
  const data = props.data;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised={true} className={classes.root}>
      <CardHeader
        classes={{ avatar: classes.avatar }}
        avatar={
          <Avatar
            variant="square"
            src={data.logo}
            classes={{ root: classes.muiavatar_root }}
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
      </CardContent>

      <CardMedia
        className={classes.media}
        image={data.imgURL}
        title={data.imgTitle}
      />
      <CardActions disableSpacing>
      <IconButton aria-label="edit icon">
          <EditIcon onClick={(event) => {
            props.edit(event, data)
          }}/>
        </IconButton>
        <IconButton aria-label="delete icon">
          <DeleteIcon onClick={(event) => {
            props.delete(event, data)
          }}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
