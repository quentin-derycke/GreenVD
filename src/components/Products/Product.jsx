import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import { Link, Form } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const Product = (props) => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });



  return (
    <Grid item xs={2} sm={4} md={4}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Link to={`/product/${props.item.id}`}>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                {props.item.image.length > 0 ? (
                  <>
                    <Img
                      src={"http://127.0.0.1:8000" + props.item.image[0].path}
                      alt={props.item.image[0].alt}
                    ></Img>
                  </>
                ) : (
                  ""
                )}
              </ButtonBase>
            </Link>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="div">
                  {props.item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.item.reference}
                </Typography>

                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    {props.item.price}€
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {props.item.categoryId.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.item.supplier.name}
                  </Typography>
                </Grid>
                <Link to={`/product/${props.item.id}`}>
                  <Fab color="success" size="small" aria-label="edit">
                    <EditIcon />
                  </Fab>
                </Link>

                <Form
                  action={`/products/${props.item.id}/delete`}
                  method="delete"
                >
              
                    <Fab color="error" size="small"  type="submit" aria-label="delete">
                      <CancelIcon />
                    </Fab>
                 
                </Form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
