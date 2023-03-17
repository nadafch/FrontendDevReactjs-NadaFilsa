import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

export default function RestaurantCard(props) {
  return (
    <Card sx={{ width: 345, height: 400, marginTop: 5 }}>
      <CardMedia sx={{ maxWidth: 345, height: 170 }} image={props?.image} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props?.title}
        </Typography>
        <Grid display="flex">
          <Grid xs={5}>
            <Rating
              name="read-only"
              defaultValue={props?.rating}
              precision={0.5}
              readOnly
            />
          </Grid>
          <Grid xs={1}>
            <Typography>{props?.rating}</Typography>
          </Grid>
        </Grid>
        <Grid display="flex" pt={2}>
          <Grid xs={8}>
            <Typography>
              {props?.category} - {props?.price}
            </Typography>
          </Grid>
          <Grid xs={4} justifyContent="flex-end">
            {props?.isClosed === false ? (
              <Typography>OPEN NOW</Typography>
            ) : (
              <Typography>CLOSED</Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={props?.onClick}>
          SHOW MORE
        </Button>
      </CardActions>
    </Card>
  );
}
