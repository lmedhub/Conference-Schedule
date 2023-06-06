import Head from "next/head";
import Hero from "../src/components/Hero";
import Speakers from "../src/components/Speaker";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>Conferencio</title>
      </Head>
      <Box>
        <Hero />
        <Speakers speakers={data} />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://localhost:1337/api/Conferences"
  );
  const data = await response.json();

  // Return the data as props
  return {
    props: {
      data,
    },
  };
}
