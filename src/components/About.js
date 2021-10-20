import Pattern from "../Pattern.png";
import photo from "../photo.png";
import Typography from "@mui/material/Typography";

export default function About({ paragraph }) {
  return (
    <div
      style={{
        height: "692px",
        gridColumn: "span 12",
        display: "flex",
      }}
    >
      <div style={{ justifyContent: "flex-start" }}>
        <img
          alt=""
          src={Pattern}
          style={{
            position: "absolute",
            marginLeft: "203px",
            width: "438px",
            height: "438px",
            borderRadius: "50%",
            marginTop: "200px",
            justifyContent: "flex-start",
            border: "1px solid #EEEEEE",
            zIndex: "-1",
          }}
        />
        <img
          alt=""
          src={photo}
          style={{
            position: "relative",
            marginLeft: "232px",
            width: "390px",
            height: "390px",
            borderRadius: "50%",
            marginTop: "229px",
            border: "1px solid #EEEEEE",
          }}
        />
      </div>
      <div
        style={{
          justifyContent: "flex-end",
          marginLeft: "219px",
          marginTop: "236px",
        }}
      >
        <Typography
          style={{
            //  marginLeft: "200px",
            width: "479px",
            marginLeft: "40px",
            fontFamily: "apercu-font",
            fontStyle: "normal",
            color: "#685DC5",
            fontWeight: "500px",
            fontSize: "48px",
            letterSpacing: "-0.145455px",
            lineHeight: "56px",
            // display: "flex",
            // alignItems: "flex-start",
            // justifyContent: "center",
          }}
        >
          About the apprenticeship
        </Typography>
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
          {paragraph}
        </Typography>
      </div>
    </div>
  );
}
