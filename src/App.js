import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./sences/global/TopBar";
import Sidebar from "./sences/global/Sidebar";
import DashBoard from "./sences/dashboard";
import Team from "./sences/team";
import Contact from "./sences/contacts";
import Invoices from "./sences/invoices/index";
import Form from "./sences/form/index";
import Calendar from "./sences/calendar/index";
import FAQ from "./sences/faq";
import Bar from "./sences/bar"; 
import Pie from "./sences/pie";
import Line from "./sences/line";
import Geography from "./sences/geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
