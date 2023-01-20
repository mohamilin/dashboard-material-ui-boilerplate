import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../layout/Layout";
import { Grid, Paper } from "@mui/material";

export default function Profile() {
  return (
    <>
      <Layout>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            Data
          </Paper>
        </Grid>
      </Layout>
      <Outlet />
    </>
  );
}
