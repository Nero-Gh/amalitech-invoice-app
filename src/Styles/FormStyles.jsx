import { createUseStyles } from "react-jss";

export default function FormStyles() {
  //styles

  const useStyles = createUseStyles({
    Overlay: {
      boxSizing: "border-box",
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.555)",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "2",
    },

    Form: {
      zIndex: "3",
      boxSizing: "border-box",
      height: "100vh",
      width: "700px",
      backgroundColor: "white",
      padding: "20px 50px",
      borderRadius: "0 50px 50px 0",
      position: "fixed",
      left: "80px",
      "& h1": {
        marginTop: "0",
      },

      ".dark &": {
        backgroundColor: "#141625",

        "& input": {
          backgroundColor: "#1E2139",
          border: "1px solid #1E2139",
          color: "#fff",
        },

        "& .itemList": {
          color: "#777F98",
          "& button": {
            backgroundColor: "rgb(37, 41, 69)",
          },
        },
      },

      "& .wrapper": {
        height: "70vh",
        width: "100%",
        overflow: "scroll",
        overflowX: "hidden",
        margin: {
          bottom: "20px",
          top: "30px",
        },

        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
          backgroundColor: "#F5F5F5",
        },

        "&::-webkit-scrollbar": {
          width: "8px",
          backgroundColor: "#F5F5F5",
        },

        "&::-webkit-scrollbar-thumb": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
          backgroundColor: "#7C5DFA",
        },

        "& .Title": {
          color: "#7C5DFA",
          fontWeight: "600",
          marginBottom: "20px",
        },

        "& input": {
          width: "100%",
          height: "40px",
          border: "1px solid lightgray",
          borderRadius: "5px",
          margin: "10px 0",
          boxSizing: "border-box",
          padding: "0 5px",
        },

        "& section": {
          margin: {
            bottom: "20px",
            right: "30px",
          },
        },

        "& .flexbox": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          "& .country": {
            // backgroundColor: "rgb(249, 250, 254)",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            // gridAutoColumns: "minmax(50px, auto)",
            gap: "5px",
            gridAutoRows: "minmax(50px, auto)",
            "& .first-columm": {
              gridColumn: "1/2",
            },
            "& .second-columm": {
              gridColumn: "2/3",
            },
            "& .third-columm": {
              gridColumn: "3/4",
            },
          },

          "& .invoice-date": {
            display: "flex",
            alignItems: "center",
            gap: "10px",
          },
        },

        "& .itemList": {
          "& .title": {
            fontSize: "24px",
            marginBottom: "20px",
          },

          "& .item": {
            "& .flexbox": {
              "& .item-items": {
                // background: "blue",
                display: "grid",
                gridTemplateColumns: "repeat(11, 1fr)",
                gridAutoRows: "minmax(50px, auto)",
                gap: "5px",

                "& .first-columm": {
                  gridColumn: "1/3",
                },
                "& .second-columm": {
                  gridColumn: "3/6",
                },
                "& .third-columm": {
                  gridColumn: "6/9",
                },
                "& .fourth-columm": {
                  gridColumn: "9/11",
                },
                "& .fifth-columm": {
                  gridColumn: "11/12",
                  alignItems: "center",
                  marginTop: "40px",
                },
              },
            },
          },
          "& button": {
            transition: "all 0.4s ease-in-out",
            width: "100%",
            height: "50px",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "rgb(249, 250, 254)",
            fontWeight: "600",
            fontSize: "14px",
            color: "#9277FF",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "#DFE3FA",
            },
          },

          "& input": {
            // width: "100%",
            // background: "red",
          },

          "& .fifth-columm": {
            marginTop: "15px",
            cursor: "pointer",
          },
        },

        "& #payment, & #date": {
          width: "250px",
          height: "40px",
          fontWeight: "bold",
        },
      },
      "& button": {
        cursor: "pointer",
        transition: "all 0.4s ease-in-out",
      },
      "& .options": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        "& button": {
          border: "none",
          padding: "15px",
          borderRadius: "30px",
        },

        "& .discart-btn": {
          color: "#fff",
          backgroundColor: "rgb(236, 87, 87)",
          "&:hover": {
            opacity: "0.8",
          },
        },

        "& .draft-btn": {
          color: "#99C0ED",
          backgroundColor: "#363B53",
          marginRight: "10px",
          "&:hover": {
            opacity: "0.9",
          },
        },
        "& .save-btn": {
          color: "#fff",
          backgroundColor: "#7C5DFA",
          marginRight: "10px",
          "&:hover": {
            opacity: "0.9",
          },
        },
      },

      ".dark & #payment": {
        color: "#fff",
        backgroundColor: "#1E2139",
      },

      "@media screen and (max-width: 890px)": {
        "&": {
          borderRadius: "10px",
          height: "600px",
          width: "90%",
          position: "relative",
          left: "0",
          top: "100px",
          margin: "20px auto",

          "& .responsive .second-columm": {
            margin: "0px 10px",
          },
        },
      },

      "@media screen and (max-width: 750px)": {
        "& .column-flex": {
          flexDirection: "column",
          alignItems: "flex-start !important",
        },
      },
      "@media screen and (max-width: 590px)": {

        
        Form: {
          backgroundColor: "#141625",
  
          ".dark &": {
            backgroundColor: "#141625",
          },
        },
        "& .flexbox": {
          "& .country": {
            position: "relative",
            height: "200px",
            display: "flex",
            width: "100%",
            "& .first-columm": {
              position: "absolute",
              right: "-30%",
              // background: "blue",
            },
            "& .second-columm": {
              position: "absolute",
              top: "0",
              right: "-120%",
              width: "130%",
              marginLeft: "-15px",

              // background: "red",
            },
            "& .third-columm": {
              position: "absolute",
              left: "-208%",
              right: "0",
              top: "80px",
            },
          },

          "& .invoice-date": {
            flexDirection: "column",
            position: "relative",
            marginBottom: "20px",

            width: "100%",

            "& .first-columm": {
              width: "100%",

              "& #date": {
                width: "100%",
              },
            },

            "& .second-columm": {
              width: "100%",

              "& #payment": {
                width: "100%",
              },
            },
          },
        },

        "& .wrapper": {
          "& .itemList": {
            "& .item": {
              "& .flexbox": {
                "& .item-items": {
             
                  position: "relative",
                  height: "170px",
                  width:"100%",

                  "& .first-columm": {
                    gridRow: "1",
                    gridColumn: "1/12",
                   

                    "& label": {
                      width: "20rem",
                      position:"absolute",
                    },
                    "& input": {
                      position: "absolute",
                      right: "0",
                      width: "100%",
                    },
                  },
                  "& .second-columm": {
                
                    position: "absolute",
                    top: "80px",
                    
                    left:"-70%",
                  

                    "& input": {
                      width: "100%",
                    },
                  },
                  "& .third-columm": {
                  
                    position: "absolute",
                    top: "80px",
                
                  },
                  "& .fourth-columm": {
                    position: "absolute",
                    top: "80px",
                    
                  },
                  "& .fifth-columm": {
                    position: "absolute",
                    top: "80px",
                    
                  },
                },
              },
            },
          },
        },
      },
      "@media screen and (max-width: 375px)": {

        "& .flexbox": {
          "& .country": {
            position: "relative",
            height: "200px",
          
            "& .second-columm": {
              gridRow: "1",
              gridColumn: "3/4",
              marginLeft: "-5px",
            },
            "& .third-columm": {
           

              position: "absolute",
              bottom: "0",
              // left: "-8.1rem",
              right: "0",
            },
          },

          "& .invoice-date": {
            flexDirection: "column",
            "& .first-columm": {
              width: "100%",
              "& #date": {
                width: "100%",

                flexGrow: "1",
              },
            },
          },
        },

        // "& .wrapper": {
        //   "& .itemList": {
        //     "& .item": {
        //       backgroundColor:"red",
        //       "& .flexbox": {
        //         "& .item-items": {

        //           "& .first-columm": {
        //             gridRow: "1",
        //             gridColumn: "1/12",
        //           },
        //           "& .second-columm": {
        //             gridRow: "2",
        //             gridColumn: "1/3",
        //           },
        //           "& .third-columm": {
        //             gridRow: "2",
        //             gridColumn: "3/8",
        //           },
        //           "& .fourth-columm": {
        //             gridRow: "2",
        //             gridColumn: "8/12",
        //           },
        //           "& .fifth-columm": {
        //             gridRow: "2",
        //             gridColumn: "12",
        //           },
        //         },
        //       },
        //     },
        //   },
        // },
      },
    },


  });

  const classes = useStyles();
  return classes;
}
