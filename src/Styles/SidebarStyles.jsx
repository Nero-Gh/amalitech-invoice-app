import { createUseStyles } from "react-jss";

export default function SidebarStyles() {
  const useStyles = createUseStyles({
    Sidebar: {
      zIndex: "4",
      backgroundColor: "#373B53",
      height: "100vh",
      width: "80px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      position: "fixed",

      "& .bottom-elements": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        height: "100px",

        "& .line-break": {
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "red",
          width: "157%",
          height: "1px",
        },
      },

      "& .Sidebar-Logo": {
        width: "100%",
        height: "80px",
        backgroundColor: "#7C5DFA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        borderRadius: "0 10px 10px 0",

        "& img": {
          width: "60px",
          zIndex: "1",
        },

        "& .light-overlay": {
          width: "100%",
          height: "60%",
          backgroundColor: "rgba(255,255,255,0.2)",
          zIndex: "2",

          position: "absolute",
          bottom: "-6px",
          left: "5px",
          borderRadius: "10px",
        },
      },

      "@media screen and (max-width: 890px)": {
        "&": {
          height: "80px",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",

          "& .Sidebar-Logo": {
            width: "90px",
            height: "80px",

            "& img": {
              width: "30px",
            },
          },

          "& .bottom-elements": {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0px",
            marginRight: "30px",
            width: "100px",
            height: "100%",
            position: "relative",

            "& .line-break": {
              transform: "rotate(90deg)",
              position: "absolute",
              left: "-2.7rem",
              bottom: "5rem",
            },
          },
        },
      },
    },
  });

  const classes = useStyles();
  return classes;
}
