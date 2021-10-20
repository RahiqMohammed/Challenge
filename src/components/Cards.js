import GridWrapper from "./GridWrapper";
import Header from "./Header";
import Typography from "@mui/material/Typography";
import image from "../Image.png";

export default function Cards() {
  return (
    <div
      style={{
        width: "800px",
        height: "459.92px",
        display: "flex",
        flexDirection: "row",
        JustifyContent: "space-between",
        gridColumn: "span 12",
      }}
    >
      <GridWrapper headerHeight="148px">
        <Header
          headerColor="#FFFFFF"
          title={
            <img
              src={image}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginTop: "35px",
                marginRight: "60px",
              }}
            />
          }
          sideTitle={
            <div
              style={{
                marginLeft: "64px",
                fontFamily: "apercu-font",
                color: "#535353",
                fontSize: "16px",
                letterSpacing: "-0.145455px",
                lineHeight: "24px",
                width: "230px",
              }}
            >
              <Typography
                style={{
                  marginTop: "21px",
                  fontWeight: "bold",
                }}
              >
                Irene Pereyra
              </Typography>
              <Typography> Interaction Design Fellow ‘19</Typography>
            </div>
          }
        ></Header>
        <div
          style={{
            gridColumn: "span 12",
            backgroundColor: "#FBFBFB",
            width: "800px",
            marginTop: "0px",
            height: "310.54px",
          }}
        >
          <Typography
            style={{
              //  marginLeft: "200px",
              marginTop: "40px",
              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "22px",
              width: "479px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              opacity: "0.5",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            This Fellowship was a turning point in my career. I wouldn’t be
            where I am today without the financial support and experienced
            offered through the program.
          </Typography>
        </div>
      </GridWrapper>
    </div>
  );
}
