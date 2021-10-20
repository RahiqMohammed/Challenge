import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Squares({
  value,
  studyCommitment,
  workCommitment,
  studyCommitmentPara,
  workCommitmentPara,
  livingStipendPerMonth,
  livingStipend,
  tuition,
  remaining,
}) {
  return (
    <div style={{ display: "flex", height: "1000px", gridColumn: "span 12" }}>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: "30px ",
          marginLeft: "201px",
          width: "320px",
          height: "524px",
          border: "1px solid #DADADA",
          justifyContent: "flex-start",
        }}
      >
        {" "}
        <Typography
          style={{
            //  marginLeft: "200px",
            marginTop: "32px",
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
          Scholarship value
        </Typography>
        <Typography
          style={{
            //  marginLeft: "200px",
            marginTop: "33px",
            marginLeft: "40px",
            fontFamily: "apercu-font",
            fontStyle: "normal",
            color: "#535353",
            fontWeight: "300px",
            fontSize: "48px",
            letterSpacing: "-0.145455px",
            lineHeight: "24px",

            // display: "flex",
            // alignItems: "flex-start",
            // justifyContent: "center",
          }}
        >
          €{value}
        </Typography>
        <Divider
          style={{
            marginTop: "188px",
            marginRight: "27px",
            marginLeft: "27px",
          }}
        />
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ justifyContent: "flex-start" }}>
              <Typography
                style={{
                  //  marginLeft: "200px",
                  marginTop: "61px",
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
                Tuition covered
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "44px",
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
                {" "}
                €{tuition}
              </Typography>
            </div>
            <div style={{ justifyContent: "flex-end" }}>
              <Typography
                style={{
                  //  marginLeft: "200px",
                  marginTop: "61px",
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
                Remaining
              </Typography>
              <Typography
                style={{
                  //  marginLeft: "200px",

                  marginLeft: "44px",
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
                {" "}
                €{remaining}
              </Typography>
            </div>
          </div>
          <Typography
            style={{
              //  marginLeft: "200px",
              marginTop: "23px",
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
            Living stipend
          </Typography>
          <Typography
            style={{
              //  marginLeft: "200px",

              marginLeft: "44px",
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
            {" "}
            €{livingStipend} (€{livingStipendPerMonth}/month)
          </Typography>
        </div>
      </div>
      <div style={{ justifyContent: "flex-end" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: "30px ",
              marginLeft: "40px",
              width: "320px",
              height: "274px",
              border: "1px solid #DADADA",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              style={{
                //  marginLeft: "200px",
                marginTop: "32px",
                marginLeft: "25px",
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
              Study commitment
            </Typography>
            <Typography
              style={{
                marginTop: "8px",

                marginLeft: "25px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#535353",
                fontWeight: "300px",
                fontSize: "26px",
                letterSpacing: "-0.145455px",
                lineHeight: "24px",
                opacity: "0.5",
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              {" "}
              {studyCommitment} hours / day
            </Typography>
            <Divider
              style={{
                marginLeft: "25px",
                marginTop: "22px",
                width: "27.82px",
              }}
            />
            <Typography
              style={{
                marginTop: "16px",
                width: "270px",
                marginLeft: "25px",
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
              {studyCommitmentPara}
            </Typography>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: "30px ",
              marginLeft: "40px",
              width: "320px",
              height: "274px",
              border: "1px solid #DADADA",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              style={{
                //  marginLeft: "200px",
                marginTop: "32px",
                marginLeft: "25px",
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
              Work commitment
            </Typography>
            <Typography
              style={{
                marginTop: "8px",

                marginLeft: "25px",
                fontFamily: "apercu-font",
                fontStyle: "normal",
                color: "#535353",
                fontWeight: "300px",
                fontSize: "26px",
                letterSpacing: "-0.145455px",
                lineHeight: "24px",
                opacity: "0.5",
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "center",
              }}
            >
              {workCommitment} hours / day
            </Typography>
            <Divider
              style={{
                marginLeft: "25px",
                marginTop: "22px",
                width: "27.82px",
              }}
            />
            <Typography
              style={{
                marginTop: "16px",
                width: "270px",
                marginLeft: "25px",
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
              {workCommitmentPara}
            </Typography>
          </div>
        </div>
        <Divider style={{ marginTop: "24px", marginLeft: "40px" }}>
          <Typography
            style={{
              marginTop: "0px",
              marginLeft: "25px",
              marginRight: "25px",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            GRADUATION
          </Typography>
        </Divider>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: "24px ",
            marginLeft: "40px",
            width: "680px",
            height: "178px",
            border: "1px solid #DADADA",
            alignItems: "flex-end",
          }}
        >
          <Typography
            style={{
              //  marginLeft: "200px",
              marginTop: "32px",
              marginLeft: "25px",
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
            A full-time contract
          </Typography>
          <Typography
            style={{
              marginTop: "8px",

              marginLeft: "25px",
              fontFamily: "apercu-font",
              fontStyle: "normal",
              color: "#535353",
              fontWeight: "300px",
              fontSize: "26px",
              letterSpacing: "-0.145455px",
              lineHeight: "24px",
              opacity: "0.5",
              // display: "flex",
              // alignItems: "flex-start",
              // justifyContent: "center",
            }}
          >
            1 Year / Full-Time
          </Typography>
          <Divider
            style={{
              marginLeft: "25px",
              marginTop: "22px",
              width: "27.82px",
            }}
          />
          <Typography
            style={{
              marginTop: "16px",
              width: "596px",
              marginLeft: "25px",
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
            You’ll be guaranteed a 1 year contract with SCG upon graduation.
          </Typography>
        </div>
      </div>
    </div>
  );
}
