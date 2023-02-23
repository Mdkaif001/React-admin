import { Box } from "@mui/material";
import Header from "../../component/Header";
import GeographyChart from "../../component/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m="20px">
        <Header title="Geography Chart" subtitle="Simple Geography Chart" />

        <Box
          mt="15px"
          height="73vh"
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="4px"
        >
          <GeographyChart />
        </Box>
      </Box>
    </>
  );
};

export default Line;
