import { useEffect, useState } from "react";
import axios from "axios";
import GridWrapper from "./components/GridWrapper";
import Header from "./components/Header";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import ApplyNow from "./components/ApplyNow";
import Zeptolab from "./components/Zeptolab";
import About from "./components/About";
import Squares from "./components/Squares";
import Cards from "./components/Cards";
import Accord from "./components/Accord";
import Footer from "./components/Footer";
import FullWidthWrapper from "./components/FullWidthWrapper";
import BodyGrid from "./components/BodyGrid";
import moment from "moment";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: green[500],
  height: "160px",
  width: "160px",
  borderRadius: "50%",
  marginTop: "150px",
  fontWeight: "100px",
  fontSize: "22px",
  lineHeight: "26px",
}));

function App() {
  const [info, setInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
      );
      if (data !== "") {
        const arrayObj = data;
        setInfo(arrayObj);

        console.log(data);
      }
    };

    fetchData();
  }, []);

  return (
    <GridWrapper headerHeight="100px">
      {info && (
        <Header
          headerBackground={`url(${info.og_meta.image_url})`}
          title={<h1>{info.meta.title}</h1>}
          action={
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          }
          applyButton={<ColorButton variant="contained">APPLY NOW</ColorButton>}
        ></Header>
      )}
      <FullWidthWrapper>
        {info && (
          <BodyGrid>
            {" "}
            <div style={{ gridColumn: "span 12", display: "flex" }}>
              <ApplyNow paragraph={info.og_meta.desc} />
              <Zeptolab
                closeIn={moment(info.scholarship.application_end_date).format(
                  "DD MMM YYYY"
                )}
                // logo={`url(${info.scholarship.company.color_logo.src})`}
                location={info.scholarship.location.name}
                startDate={moment(
                  info.scholarship.scholarship_start_date
                ).format("DD MMM YYYY")}
                duration={info.scholarship.duration}
                endDate={moment(info.scholarship.application_end_date).format(
                  "DD MMM YYYY"
                )}
              />
            </div>
            <About paragraph={info?.scholarship?.about?.[0]?.data} />
            <Squares
              value={info.scholarship.total_value}
              studyCommitment={info.scholarship.study_commitment}
              workCommitment={info.scholarship.work_commitment}
              studyCommitmentPara={info.scholarship.study_commitment_text}
              workCommitmentPara={info.scholarship.work_commitment_type}
              livingStipendPerMonth={info.scholarship.stipend_per_month}
              livingStipend={info.scholarship.stipend_per_year}
              tuition={info.scholarship.tuition}
              remaining={info.scholarship.remaining}
            />
            <Cards />
            <Accord />
            <Footer
              closeIn={info.scholarship.application_end_date}
              // logo={`url(${info.scholarship.company.color_logo.src})`}
              location={info.scholarship.location.name}
              startDate={moment(info.scholarship.scholarship_start_date).format(
                "DD MMM YYYY"
              )}
              duration={info.scholarship.duration}
              endDate={moment(info.scholarship.application_end_date).format(
                "DD MMM YYYY"
              )}
            />
          </BodyGrid>
        )}
      </FullWidthWrapper>
    </GridWrapper>
  );
}

export default App;
