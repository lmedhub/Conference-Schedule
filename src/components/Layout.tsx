import { Box } from "@mui/material";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
  const router = useRouter();
  const isntContactPage = router.pathname != "/contact";

  return (
    <>
      <Box sx={{ px: { xs: 1, md: 3 } }}>
        <NavBar />
        {children}
        {isntContactPage && <Footer />}
      </Box>
    </>
  );
}
