import { Container } from "@mui/material";
import Header from "./component/Header";
import Filter from "./component/Filter";
import { useEffect, useState } from "react";
import RestaurantList from "./component/RestaurantList";
import axios from "axios";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [payload, setPayload] = useState({});

  var targetUrl = "/search?location=Houston";
  var requestOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer 6oAO5dG1iDnRJGQO_MKIpZMjV3xVnOHLTEbvsrYavrbPddNC-XDFk5QlAoyGdrHySxa9TmLjDAFUCeBuHwjVRPSnnR6Yu_bJ9o8fYxX56jMxPXU3plphPjYoGH0SZHYx",
    },
    params: payload,
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(targetUrl, requestOptions);
      setFetchData(res.data.businesses);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);

  useEffect(() => {
    console.log(fetchData);
  }, [fetchData]);

  const onClearFilter = () => {
    setisOpen(false);
    setPayload({});
  };

  const isOpenFilter = () => {
    setisOpen(!isOpen);
    setPayload({ ...payload, open_now: !isOpen });
  };

  const onChangeCategories = (e) => {
    setPayload({ ...payload, categories: e.target.value });
  };

  const onChangePrice = (e) => {
    setPayload({ ...payload, price: e.target.value });
  };

  return (
    <Container>
      <Header />
      <Filter
        isOpenFilter={isOpen}
        onClick={isOpenFilter}
        price={payload.price ? payload.price : ""}
        onChangePrice={onChangePrice}
        categories={payload.categories ? payload.categories : ""}
        onChangeCategories={onChangeCategories}
        onClearFilter={onClearFilter}
      />
      <RestaurantList RestauranList={fetchData} />
    </Container>
  );
}

export default App;
