import { createUseStyles } from "react-jss";

export default function FilterStyles() {
  const useStyles = createUseStyles({
    Filter: {
      "& .mob": {
        display: "none",
      },
      "& select": {
        padding: "10px 20px",
        backgroundColor: "inherit",
        border: "none",
        borderBottom: "1px solid #7C5DFA",
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
