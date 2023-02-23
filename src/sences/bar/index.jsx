import Header from "../../component/Header";
import { Box } from "@mui/system";
import BarChart from "../../component/BarChart";

const Bar = () => {
  return (
    <>
      <Box m="20px">
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />

        <Box height="73vh">
          <BarChart />
        </Box>
      </Box>
    </>
  );
};

export default Bar;
