import { Avatar, Grid, Rating, Typography } from "@mui/material";
import React from "react";

export default function ReviewCard(props) {
  return (
    <Grid display="flex" alignContent="center" gap={2} marginBottom={3}>
      <Grid xs={2}>
        <Avatar alt={props?.avatar} src={props?.avatar} />
      </Grid>
      <Grid xs={10}>
        <Typography style={{ fontSize: 12, marginBottom: 10 }}>
          {props?.review}
        </Typography>
        <Grid display="flex">
          <Grid display="flex" xs={10}>
            <Rating
              size="small"
              name="read-only"
              defaultValue={props?.rating}
              precision={0.5}
              readOnly
            />
            <Typography style={{ fontSize: 13 }}>{props?.rating}</Typography>
          </Grid>
          <Grid xs={4} justifyContent="flex-end">
            <Typography style={{ fontSize: 10, fontStyle: "italic" }}>
              - {props?.name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
