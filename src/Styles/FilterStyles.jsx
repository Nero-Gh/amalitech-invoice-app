import { createUseStyles } from "react-jss";

export default function FilterStyles() {
  const useStyles = createUseStyles({
    Filter: {
      width: "400px",

      "& .mob": {
        display: "none",
      },
      "& select": {
        padding: "10px 20px",
        backgroundColor: "#fff",
        borderBottom: "none",
        border: "none",

        // borderBottom: "1px solid #7C5DFA",

        "& option": {
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: "10px",
          color: "#111",
        },

        "& option::after": {
          position: "absolute",
          left: "0",
          width: "10px",
          height: "10px",
          content: "#",
          background: "red",
          color: "#111",
        },
      },
      ".dark & select": {
        color: "#fff",
        backgroundColor: "#141625",
      },
    },

    "@media screen and (max-width: 590px)": {
      Filter: {
        "& .desk": {
          display: "none",
        },
        "& .mob": {
          display: "block",
        },
        "& select": {
          padding: "10px 5px",
          borderBottom: " none",
        },
      },
    },
  });

  const classes = useStyles();
  return classes;
}
