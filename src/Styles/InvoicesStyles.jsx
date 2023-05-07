import { createUseStyles } from "react-jss";

export default function InvoicesStyle() {
  const useStyles = createUseStyles({
    InvoiceDetails: {
      zIndex: "1",
      maxWidth: "700px",
      // minWidth: "450px",
      margin: "0 auto",
      "& .flexbox": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "50px",

        "& h1": {
          margin: "5px 0",
          color: "#000",
        },
        "& .Counter2": {
          display: "none",
        },
      },

      ".dark & h1": {
        color: "#fff !important",
      },

      "& .second-columm": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "45%",
      },
      "& .wrapper": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        "& img": {
          width: "70%",
          height: "70%",
          marginTop: "10px",
        },
      },

      "@media screen and (max-width: 700px)": {
        "& .second-columm": {
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "flex-end",
          justifyContent: "space-between",
          height: "100px",
        },
      },

      //Mobile Style
      "@media screen and (max-width: 590px)": {
        "& .flexbox": {
          "& h1": {
            fontSize: "1.2rem",
          },

          "& .Counter": {
            display: "none",
          },

          "& .Counter2": {
            display: "block",
            color: "white !important",
          },
        },
        "& .second-columm": {
          display: "flex",
          flexDirection: "row",
          padding: "17px",
          alignItems: "center",
          gap: "10px",
          width: "45%",
          // backgroundColor: "red",
        },
      },

      "@media screen and (max-width: 470px)": {
        "& .second-columm": {
          flexGrow: "1",
          "& .column-1": {
            marginLeft: "10%",
          },
        },
      },
    },
  });

  const classes = useStyles();
  return classes;
}
