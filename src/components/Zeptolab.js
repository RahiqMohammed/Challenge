import Pattern from "../Pattern.png";
import Logo from "../Logo.png";
import Typography from "@mui/material/Typography";

export default function Zeptolab({
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
        justifyContent: "flex-end",
        marginLeft: "50px",
        backgroundImage: `url(${Pattern})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top  513px  left 240px",
        backgroundSize: "560px 257px",
        height: "800px",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          alt=""
          src={Logo}
          style={{
            marginLeft: "113.8px",
            // marginRight: "14.42%",
            width: "80px",
            height: "80px",
            marginTop: "161px",
            //  display: "flex",
            justifyContent: "flex-start",
          }}
        />
        <div style={{ justifyContent: "center" }}>
          <Typography
            style={{
              //  marginLeft: "200px",
              marginTop: "169px",
              marginLeft: "40px",
              font: "Apercu Pro",
              fontStyle: "normal",
              opacity: "0.5",
              color: "#000000",
              fontWeight: "300px",
              fontSize: "18px",
              letterSpacing: "-0.18 px",
              lineHeight: "24px",
              // display: "flex",
              // alignItems: "flex-start",
            }}
          >
            Powered by:{title}
          </Typography>
          <Typography
            style={{
              //  marginLeft: "200px",
              marginTop: "10px",
              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "27px",
              letterSpacing: "-0.27px",
              lineHeight: "24px",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            Zeptolab
          </Typography>
        </div>
      </div>
      <div
        style={{
          width: "480px",
          height: "116px",
          backgroundColor: "#FFFFFF",
          marginTop: "41px",
          marginLeft: "113.8px",

          border: "1px solid #DADADA",
        }}
      >
        <Typography
          style={{
            //  marginLeft: "200px",
            marginTop: "10px",
            marginLeft: "40px",
            fontFamily: "apercu-font",
            fontStyle: "normal",
            color: "#685DC5",
            fontWeight: "500px",
            fontSize: "16px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",
            // display: "flex",
            // alignItems: "flex-start",
            // justifyContent: "center",
          }}
        >
          Application closes in
        </Typography>
        <Typography
          style={{
            //  marginLeft: "200px",
            marginTop: "16px",
            marginLeft: "40px",
            fontFamily: "apercu-font",
            fontStyle: "normal",
            color: "#535353",
            fontWeight: "500px",
            fontSize: "27px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",
            opacity: "0.5",

            // display: "flex",
            // alignItems: "flex-start",
            // justifyContent: "center",
          }}
        >
          {closeIn}
        </Typography>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: "30px ",
          marginLeft: "113.8px",
          width: "480px",
          height: "200px",
          border: "1px solid #DADADA",
          display: "flex",
        }}
      >
        <div style={{ justifyContent: "flex-start" }}>
          <Typography
            style={{
              //  marginLeft: "200px",
              marginTop: "40px",
              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#685DC5",
              fontWeight: "300px",
              fontSize: "16px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            Location
          </Typography>
          <Typography
            style={{
              //  marginLeft: "200px",

              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "16px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              opacity: "0.5",

              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            {location}
          </Typography>
          <Typography
            style={{
              //  marginLeft: "200px",
              marginTop: "23px",
              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#685DC5",
              fontWeight: "300px",
              fontSize: "16px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            Start date
          </Typography>
          <Typography
            style={{
              //  marginLeft: "200px",

              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "16px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              opacity: "0.5",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            {startDate}
          </Typography>
        </div>
        <div
          style={{
            justifyContent: "flex-end",
            marginLeft: "96px",
            marginTop: "40px",
          }}
        >
          <Typography
            style={{
              //  marginLeft: "200px",

              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#685DC5",
              fontWeight: "300px",
              fontSize: "16px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            Duration
          </Typography>
          <Typography
            style={{
              //  marginLeft: "200px",

              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "16px",
              width: "106px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              opacity: "0.5",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            {duration} Year Full-Time
          </Typography>
          <Typography
            style={{
              //  marginLeft: "200px",

              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#685DC5",
              fontWeight: "300px",
              fontSize: "16px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            End date
          </Typography>
          <Typography
            style={{
              //  marginLeft: "200px",

              marginLeft: "40px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "16px",
              width: "106px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              opacity: "0.5",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            {endDate}
          </Typography>
        </div>
      </div>
    </div>
  );
}
