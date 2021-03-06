import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h1">Home</Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href="/create">Create a new card</Link>
          </Grid>
          <Grid item xs={12}>
            <Image
              src="/lean-coffee.jpg"
              alt="Lean Coffe"
              width={640}
              height={428}
              layout="responsive"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
