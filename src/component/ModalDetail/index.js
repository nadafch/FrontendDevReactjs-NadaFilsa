import {
  Box,
  CircularProgress,
  Grid,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { review } from "../../data";
import ReviewCard from "../ReviewCard";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 5,
};

export default function ModalDetail(props) {
  const { data } = props;
  const [fetchReview, setFetchReview] = useState([]);
  const [totalReview, setTotalReview] = useState("");
  const [targetUrl, setTargetUrl] = useState("");

  useEffect(() => {
    setTargetUrl(`${data.id}/reviews?limit=20&sort_by=yelp_sort`);
  }, [data.id]);

  var requestOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer 6oAO5dG1iDnRJGQO_MKIpZMjV3xVnOHLTEbvsrYavrbPddNC-XDFk5QlAoyGdrHySxa9TmLjDAFUCeBuHwjVRPSnnR6Yu_bJ9o8fYxX56jMxPXU3plphPjYoGH0SZHYx",
    },
    params: {
      id: data.id,
    },
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(targetUrl, requestOptions);
      setFetchReview(res.data.reviews);
      setTotalReview(res.data.total);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetUrl, data.id]);

  return (
    <Modal open={props?.open} onClose={props?.onClose}>
      <Box sx={style}>
        {fetchReview ? (
          <Grid display="flex" gap={4}>
            <Grid xs={6}>
              <img
                src={data.image_url}
                alt=""
                style={{ width: 300, height: 200, objectFit: "cover" }}
              />
              <Typography variant="h6">{data.name}</Typography>
              <Grid display="flex" justifyContent="space-between">
                <Grid xs={12} display="flex">
                  <Rating
                    name="read-only"
                    defaultValue={data.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography>{data.rating}</Typography>
                </Grid>
                <Grid xs={4}>
                  <Typography>{totalReview}</Typography>
                </Grid>
              </Grid>
              {data.location && (
                <Typography>{data.location.address1}</Typography>
              )}
            </Grid>
            <Grid xs={6} container>
              {fetchReview.map((index, label) => (
                <Grid key={label}>
                  <ReviewCard
                    avatar={index.user.image_url}
                    name={index.user.name}
                    review={index.text}
                    rating={index.rating}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Grid
            display="flex"
            alignContent="center"
            justifyContent="center"
            height={400}
          >
            <CircularProgress />
            <Typography variant="h4">Loading</Typography>
          </Grid>
        )}
      </Box>
    </Modal>
  );
}
