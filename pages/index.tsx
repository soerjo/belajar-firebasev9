import type { GetServerSideProps, NextPage } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";

const Home: NextPage<{ response: object }> = (props) => {
  const { response } = props;

  const handleAddButton = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };
  const handleUpdateButton = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };
  const handleRefresButton = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  console.log(response);
  return (
    <Container>
      <Box
        my={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" component="h1">
          Welcome to firebas project
        </Typography>
      </Box>
      <Box>
        <Button
          onClick={handleAddButton}
          variant="contained"
          sx={{ marginRight: 3 }}
        >
          add Firebase
        </Button>
        <Button
          onClick={handleUpdateButton}
          variant="contained"
          sx={{ marginRight: 3 }}
        >
          Update Firebase
        </Button>
        <Button
          onClick={handleRefresButton}
          variant="contained"
          sx={{ marginRight: 3 }}
        >
          refress Data
        </Button>
      </Box>
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
