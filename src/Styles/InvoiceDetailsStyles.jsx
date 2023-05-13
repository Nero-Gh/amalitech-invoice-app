import { createUseStyles } from "react-jss";

export default function InvoiceDetailsStyles() {
  const useStyles = createUseStyles({
    deleteModal: {
      position: "absolute !important",
      top: "10%",
      left: "50%",
      transform: "translate(-50%,0%)",
      width: "480px",
      height: "400px",
      // background: "#fff",

      borderRadius: "20px",

      "& .modal-dialog": {
        // padding: "10%",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "1px 1px 8px rgba(0,0,0,0.3)",

        "& .modal-header": {
          marginBottom: "20px",

          border: "none",

          "& .modal-title": {
            fontSize: "32px",
            paddingLeft: "7%",
            paddingTop: "7%",
          },
        },

        "& .modal-content": {
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "inherit",
          gap: "10px",
          background: "#fff",
        },

        "& .modal-body": {
          fontSize: "22px",
          marginBottom: "60px",
          paddingLeft: "10%",
          paddingRight: "7%",
          marginTop: "-55px",
        },
        "& .modal-footer": {
          position: "absolute",
          bottom: "0px",
          right: "0px",
          display: "flex",
          gap: "10px",
          paddingLeft: "7%",
          paddingRight: "7%",
          border: "none",

          "& .btn": {
            width: "89px",
            height: "48px",
            borderRadius: "10px",
            border: "none",
          },
          "& .btn-danger": {
            background: "#EC5757",
            color: "#fff",
          },
          "& .btn-secondary": {
            background: "#252945",
            color: "#fff",
          },
        },
      },
    },

    InvoiceDetails: {
      fontSize: "14px",
      maxWidth: "700px",
      margin: "0 auto",
      transitionTimingFunction: "ease-in-out",
      overflow: "hidden",
      "& .back": {
        border: "none",
        backgroundColor: "inherit",
        marginBottom: "30px",
        cursor: "pointer",

        "& i": {
          marginRight: "20px",
          color: "#7C5DFA",
          pointerEvents: "none",
        },
      },

      "& .bold": {
        fontWeight: "bold",
        fontSize: "18px",
        color: "#000",
        transition: "opacity 0.4s ease-in-out",
      },

      "& .option": {
        padding: "20px",
        backgroundColor: "#fff",
        alignItems: "center",
        marginBottom: "30px",
        borderRadius: "10px",
        transition: "opacity 0.4s ease-in-out",

        "& .btns": {
          "& button": {
            border: "none",
            padding: "15px 20px",
            borderRadius: "20px",
            marginLeft: "10px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "opacity 0.4s ease-in-out",
          },

          "& button:hover": {
            opacity: 0.8,
          },

          "& .edit": {
            backgroundColor: "rgb(249, 250, 254)",
            color: "rgb(126, 136, 195)",
          },

          "& .delete": {
            backgroundColor: " rgb(236, 87, 87)",
            color: "#fff",
          },

          "& .paid": {
            backgroundColor: "rgb(124, 93, 250)",
            color: "#fff",
          },

          "& .gray": {
            backgroundColor: "grey",
            color: "#d1d1d1",
          },
        },

        "& .status-details": {
          display: "flex",
          alignItems: "center",

          "& .text": {
            marginRight: "20px",
          },

          "& .status": {
            padding: "10px 20px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "& span": {
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "20px",
              margin: {
                right: "10px",
              },
            },
          },

          "& .Pending": {
            color: "#FF8F00",
            backgroundColor: "rgba(255, 143, 0, 0.06)",
            "& span": {
              backgroundColor: "#FF8F00",
            },
          },

          "& .Paid": {
            color: "#33D69F",
            backgroundColor: "rgba(51, 214, 159, 0.06)",
            "& span": {
              backgroundColor: "#33D69F",
            },
          },

          "& .Draft": {
            color: "#373B53",
            backgroundColor: "rgba(55, 59, 83, 0.06)",
            "& span": {
              backgroundColor: "#373B53",
            },
          },
        },
      },

      "& .flexbox": {
        display: "flex",
        justifyContent: "space-between",
      },
      "& .flexboxs": {
        display: "none",
        justifyContent: "space-between",
      },
      "& .options": {
        display: "none",
        justifyContent: "space-between",
      },

      "& .invoice": {
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        transition: "opacity 0.4s ease-in-out",

        "& .header, & .body": {
          marginBottom: "50px",
        },

        "& .id span": {
          color: "#7C5DFA",
        },
        "& .date-due": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },

        "& .footer": {
          borderRadius: "10px",
          backgroundColor: "#F9FAFE",
          transition: "opacity 0.4s ease-in-out",
          "& .all-items, & .invoice-total": {
            padding: "20px",
          },

          "& .invoice-total": {
            backgroundColor: "#373B53",
            color: "#fff",
            alignItems: "center",
            borderRadius: "0px 0px 10px 10px",
            marginTop: "30px",
            transition: "opacity 0.4s ease-in-out",
            "& .grandTotal": {
              fontWeight: "bold",
              fontSize: "20px",
            },
            paddingTop: "30px",
            paddingBottom: "30px",
          },

          "& .item-header": {
            marginBottom: "30px",
          },

          "& .item-header, & .item-details": {
            justifyContent: "space-between",
          },

          "& .wide": {
            width: "250px",
          },

          "& .small": {
            width: "90px",
          },

          "& .black": {
            color: "#000",
            transition: "opacity 0.4s ease-in-out",
          },
        },

        "& .title": {
          marginBottom: "5px",
        },

        "& .address, & .total, & .price": {
          textAlign: "right",
        },
      },

      //dark theme
      ".dark & .option .status-details .Draft": {
        color: "inherit",
        backgroundColor: "rgba(223, 227, 250, 0.06)",
        "& span": {
          backgroundColor: "#FFF",
        },
      },

      ".dark & .option, .dark & .invoice": {
        backgroundColor: "#1E2139",
      },

      ".dark & .bold": {
        color: "#fff",
      },

      ".dark & .invoice .footer": {
        backgroundColor: "#252945",
      },

      ".dark & .black": {
        color: "#fff !important",
      },

      ".dark & .invoice-total": {
        backgroundColor: "#0C0E16 !important",
      },

      ".dark & .back": {
        color: "#fff",
      },

      "@media screen and (max-width: 560px)": {
        "& .option": {
          flexWrap: "wrap",

          "& .btns": {
            marginTop: "20px",

            "& button": {
              marginLeft: "0 !important",
              marginRight: "10px",
            },
          },
        },
      },

      "@media screen and (max-width:590px)": {
        "& .headers": {
          display: "flex",
          flexDirection: "column",

          alignItems: "flex-start",

          "& .id-service": {
            marginBottom: "30px",
          },

          "& .address": {
            display: "flex",
            flexDirection: "column",

            "& .street": {
              textAlign: "left",
            },
            "& .country-address": {
              textAlign: "left",
            },
          },
        },

        "& .aaa": {
          display: "grid",
          gridTemplateColumns: "repeat(2,1)",
          gridAutoRows: "minmax(100,auto)",
          gap: "20px",

          "& .date-due": {
            gridColumn: "1",
          },
          "& .bill-to": {
            gridColumn: "2",
          },
          "& .sent-to": {
            gridColumn: "1",
            gridRow: "2",
          },
        },

        "& .footer": {
          "& .item-header": {
            display: "none",
          },

          "& .qty": {
            display: "none",
          },
          "& .price": {
            display: "none",
          },
        },

        "& .option": {
          "& .status-details": {
            display: "flex",
            justifyContent: "space-between",
            flex: 1,
          },
          "& .btns": {
            display: "none",
          },
        },
        "& .options": {
          display: "flex",
          padding: "20px",
          backgroundColor: "#1e2139",
          marginTop: "30px",
          transition: "opacity 0.4s ease-in-out",
          position: "absolute",
          right: "0",
          left: "0",

          "& .btns": {
            "& button": {
              border: "none",
              padding: "15px 20px",
              borderRadius: "20px",
              marginLeft: "10px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "opacity 0.4s ease-in-out",
            },

            "& button:hover": {
              opacity: 0.8,
            },

            "& .edit": {
              backgroundColor: "rgb(249, 250, 254)",
              color: "rgb(126, 136, 195)",
            },

            "& .delete": {
              backgroundColor: " rgb(236, 87, 87)",
              color: "#fff",
            },

            "& .paid": {
              backgroundColor: "rgb(124, 93, 250)",
              color: "#fff",
            },
          },

          "& .status-details": {
            display: "flex",
            alignItems: "center",

            "& .text": {
              marginRight: "20px",
            },

            "& .status": {
              padding: "10px 20px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              "& span": {
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "20px",
                margin: {
                  right: "10px",
                },
              },
            },

            "& .Pending": {
              color: "#FF8F00",
              backgroundColor: "rgba(255, 143, 0, 0.06)",
              "& span": {
                backgroundColor: "#FF8F00",
              },
            },

            "& .Paid": {
              color: "#33D69F",
              backgroundColor: "rgba(51, 214, 159, 0.06)",
              "& span": {
                backgroundColor: "#33D69F",
              },
            },

            "& .Draft": {
              color: "#373B53",
              backgroundColor: "rgba(55, 59, 83, 0.06)",
              "& span": {
                backgroundColor: "#373B53",
              },
            },
          },
        },

        "& .flexboxs": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },

    "@media screen and (max-width:590px) ": {
      deleteModal: {
        // width: "327px",
        // height: "220px",
      },
    },
    "@media screen and (max-width:470px) ": {
      deleteModal: {
        width: "327px",
        height: "400px",
      },
    },
  });

  const classes = useStyles();

  return classes;
}
