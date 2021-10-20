import React from "react";
import Button from "@mui/material/Button";
import Icon from "../Icon.png";
import Typography from "@mui/material/Typography";

export default function ApplyNow({ paragraph }) {
  return (
    <div
      style={{
        justifyContent: "flex-start",
        backgroundImage: `url(${Icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top  62.98px  left 421.98px  ",
        height: "600px",
        width: "660px",
        marginRight: "0px",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        style={{
          marginLeft: "200px",
          marginTop: "161px",
          width: "440px",
          font: "Apercu Pro",
          color: "#685DC5",
          fontWeight: "500px",
          fontSize: "48px",
          letterSpacing: "-0.6px",
          lineHeight: "56px",
        }}
      >
        Interaction Design Apprenticeship
      </Typography>
      <Typography
        style={{
          marginLeft: "200px",
          marginTop: "48px",
          width: "440px",
          font: "Apercu Pro",
          color: "#535353",
          fontWeight: "500px",
          fontSize: "22px",
          letterSpacing: "-0.33 px",
          lineHeight: "32px",
        }}
      >
        <b>A fully funded work-study program to launch your tech career</b>{" "}
      </Typography>
      <Typography
        style={{
          marginLeft: "200px",
          marginTop: "48px",
          width: "440px",
          font: "Apercu Pro",
          color: "#535353",
          fontWeight: "300px",
          fontSize: "22px",
          letterSpacing: "-0.33 px",
          lineHeight: "32px",
        }}
      >
        {paragraph}
      </Typography>
      <Typography
        style={{
          marginLeft: "200px",
          marginTop: "40px",
          width: "440px",
          font: "Apercu Pro",
          color: "#535353",
          fontWeight: "300px",
          fontSize: "22px",
          letterSpacing: "-0.33 px",
          lineHeight: "32px",
        }}
      >
        <b> Position: </b>Marketing Performance
      </Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#685DC5",
          borderRadius: "29px",
          height: "58px",
          width: "166px",
          marginLeft: "200px",
          marginTop: "48px",
        }}
      >
        APPLY NOW
      </Button>
    </div>
  );
}
