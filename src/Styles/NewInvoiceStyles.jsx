import { createUseStyles } from "react-jss";

export default function NewInvoiceStyles() {
  const useStyles = createUseStyles({
    invoiceBtn: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#7C5DFA",
      width: "130px",
      padding: "10px 7px",
      color: "white",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
      gap: "5px",
    },
    icon: {
      borderRadius: "50%",
      backgroundColor: "white",
      width: "30px",
      height: "20px",
      margin: {
        right: "7px",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "none",

      "& i": {
        color: "#7C5DFA",
        fontSize: "12px",
        pointerEvents: "none",
      },
    },
    text: {
      pointerEvents: "none",
      fontWeight: "600",
      fontSize: "14px",
      width: "100%",
    },
    textNew: {
      display: "none",
    },

    "@media screen and (max-width: 590px)": {
      invoiceBtn: {
        backgroundColor: "#7C5DFA",
        padding: "8px 8px",
        // flex: 1,
        maxWidth: "100px",
        borderRadius: "25px",
      },

      icon: {
        borderRadius: "20px",
        backgroundColor: "white",
        width: "30px",
        height: "30px",

        "& i": {
          fontSize: "12px",
        },
      },
      text: {
        display: "none",
      },
      textNew: {
        display: "block",
        // textAlign: "center",
      },
    },
  });

  const classes = useStyles();
  return classes;
}
