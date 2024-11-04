import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { IPaginate, IProduct } from "../../../Interfaces";
import { fetchProduct } from "../../../service/Product/product.service";
import React, { useEffect } from "react";

export default function Sales() {
  const [product, setProduct] = React.useState<IProduct[]>([]);
  const [paginate, setPaginate] = React.useState<IPaginate>();
  const [initialPage, setInitialPage] = React.useState<number>(1);
  useEffect(() => {
    productList(initialPage);
  }, [initialPage]);
  const productList = async (page: number) => {
    try {
      const result = await fetchProduct(page);
      setProduct(result.data as IProduct[]);
      setPaginate(result.meta as IPaginate);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setInitialPage(value);
  };
  return (
    <Grid container justifyContent="center" sx={{ mt: 3 }}>
      <Paper
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 1650,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          Overview
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          Sales Product
        </Typography>
        <Grid container spacing={2} rowSpacing={5} sx={{ mt: 5 }}>
          {product.map((item: IProduct, index: number) => (
            <Grid
              item
              md={3.5}
              xs={12}
              key={index}
              sx={{
                padding: 3,
              }}
            >
              <Card sx={{ width: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://trexperienceperu.com/sites/default/files/ceviche.webp"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Chip label={item.status} color="success" size="small" />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        s/. {item.price}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      detalle de producto
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            count={paginate?.lastPage}
            onChange={handlePageChange}
            shape="rounded"
          />
        </Box>
      </Paper>
    </Grid>
  );
}
