import Typography from "@mui/material/Typography";

export default function Footer({
  closeIn,
  logo,
  title,
  location,
  startDate,
  duration,
  endDate,
}) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        position: "fixed",
        height: "86.08px",
        width: "100%",
        bottom: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "86.08px",
          marginLeft: "80px",
        }}
      >
        <div
          style={{
            marginLeft: "64px",
            fontFamily: "apercu-font",
            color: "#535353",
            fontSize: "16px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",
          }}
        >
          <Typography
            style={{
              marginTop: "21px",
              fontWeight: "bold",
            }}
          >
            Zeptolab
          </Typography>
          <Typography> Marketing Performance</Typography>
        </div>
        <div
          style={{
            marginLeft: "64px",
            fontFamily: "apercu-font",
            color: "#535353",
            fontSize: "16px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",
          }}
        >
          <Typography
            style={{
              marginTop: "21px",
              fontWeight: "bold",
            }}
          >
            Location
          </Typography>
          <Typography> {location} </Typography>
        </div>
        <div
          style={{
            marginLeft: "64px",
            fontFamily: "apercu-font",
            color: "#535353",
            fontSize: "16px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",
          }}
        >
          <Typography
            style={{
              marginTop: "21px",
              fontWeight: "bold",
            }}
          >
            Duration
          </Typography>

          <Typography>{duration} Year Full-Time</Typography>
        </div>
        <div
          style={{
            marginLeft: "64px",
            fontFamily: "apercu-font",
            color: "#535353",
            fontSize: "16px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",
          }}
        >
          <Typography
            style={{
              marginTop: "21px",
              fontWeight: "bold",
            }}
          >
            Start date
          </Typography>
          <Typography> {startDate} </Typography>
        </div>
        <div
          style={{
            marginLeft: "64px",
            fontFamily: "apercu-font",
            color: "#535353",
            fontSize: "16px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",
          }}
        >
          <Typography
            style={{
              marginTop: "21px",
              fontWeight: "bold",
            }}
          >
            Application deadline
          </Typography>
          <Typography>{endDate}</Typography>
        </div>
        <div
          style={{
            marginLeft: "64px",
            fontFamily: "apercu-font",
            color: "#535353",
            fontSize: "16px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",
          }}
        >
          <Typography
            style={{
              marginTop: "21px",
              fontWeight: "bold",
            }}
          >
            Application closes in
          </Typography>
          <Typography> {endDate}</Typography>
        </div>
      </div>
    </div>
  );
}
