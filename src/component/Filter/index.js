import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useMemo } from "react";

export default function Filter(props) {
  const RenderMain = useMemo(
    () => (
      <Grid container borderTop={1} borderBottom={1}>
        <Grid xs={8} p={2} display="flex" alignItems="center" gap={4}>
          <Typography>Filter By</Typography>
          <FormControl>
            <FormControlLabel
              control={<Checkbox />}
              label="Open Now"
              checked={props?.isOpenFilter}
              onClick={props?.onClick}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="price">Price</InputLabel>
            <Select
              labelId="price-label"
              id="price"
              value={props?.price}
              label="Price"
              onChange={props?.onChangePrice}
            >
              <MenuItem value={1}>$</MenuItem>
              <MenuItem value={2}>$$</MenuItem>
              <MenuItem value={3}>$$$</MenuItem>
              <MenuItem value={4}>$$$$</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="categories">Categories</InputLabel>
            <Select
              labelId="categories-label"
              id="categories"
              value={props?.categories}
              label="categories"
              onChange={props?.onChangeCategories}
            >
              <MenuItem value="japanese">Japanese</MenuItem>
              <MenuItem value="american">American</MenuItem>
              <MenuItem value="mediterranean">Mediterranean</MenuItem>
              <MenuItem value="french">French</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={4} display="flex" alignItems="center" justifyContent="end">
          <Button variant="outlined" onClick={props?.onClearFilter}>
            CLEAR ALL
          </Button>
        </Grid>
      </Grid>
    ),
    [
      props?.categories,
      props?.onChangeCategories,
      props?.onChangePrice,
      props?.onClearFilter,
      props?.onClick,
      props?.price,
    ]
  );
  return RenderMain;
}
