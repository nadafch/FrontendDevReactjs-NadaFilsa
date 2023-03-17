import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard";
import { CircularProgress, Grid } from "@mui/material";
import ModalDetail from "../ModalDetail";

export default function RestaurantList(props) {
  const { RestauranList } = props;

  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {RestauranList ? (
        RestauranList.map((index, _label) => (
          <Grid key={_label} item>
            <RestaurantCard
              title={index.name}
              image={index.image_url}
              rating={index.rating}
              price={index.price}
              category={index.categories[0].title}
              isClosed={index.is_closed}
              onClick={() => {
                setOpenModal(!openModal);
                setData(index);
              }}
            />
          </Grid>
        ))
      ) : (
        <Grid marginTop={10}>
          <CircularProgress />
        </Grid>
      )}
      <ModalDetail
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
        data={data}
      />
    </Grid>
  );
}
