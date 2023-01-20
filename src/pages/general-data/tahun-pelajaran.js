import React from 'react'
import Layout from '../../layout/Layout'
import { Grid, Paper } from '@mui/material'

export default function TahunPelajaran() {
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
            <div>
                <p>Tahun Pelajaran</p>
            </div>
          </Paper>
        </Grid>
        </Layout>
    </>
  )
}
