import React from "react";
import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@mui/material/Link";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/styles";
import { fontSize } from "@mui/system";

function Footer() {
  return (
    <footer>
      <Box
        width="100%"
        height="100vh"
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        style={{ backgroundColor: "#B9B0B7", color: "#555" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item sx={12} sm={4}>
              <Box
                borderBottom={1}
                style={{
                  color: "#fff",
                }}
              >
                Help
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>

            <Grid item sx={12} sm={4}>
              <Box
                borderBottom={1}
                style={{
                  color: "#fff",
                }}
              >
                Account
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  LogIn
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  SignUP
                </Link>
              </Box>
            </Grid>

            <Grid item sx={12} sm={4}>
              <Box
                borderBottom={1}
                style={{
                  color: "#fff",
                }}
              >
                Messages
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  BackUP
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Discussion{" "}
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pd={{ xs: 5, sm: 0 }}
            className={ClassNames.copyright}
          >
            © Copyright 2022 JIBI
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
