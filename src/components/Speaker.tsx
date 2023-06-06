import { Grid, Box, Typography, Card } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Speakers(props) {
  return (
    <Grid container spacing={3}>
      {props.speakers.map((speaker) => (
        <Grid key={speaker.id} item xs={3}>
          <Card>
            <Box
              sx={{
                backgroundColor: "purple",
                width: "100%",
                height: "250px",
                position: "relative",
              }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={speaker.image}
                alt="conferencer"
              />
            </Box>
            <Typography variant="h6" textAlign="center">
              {speaker.speaker}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
