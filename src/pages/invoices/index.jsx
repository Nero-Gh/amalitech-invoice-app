import {
  useState,
  useEffect,
  useRef,
  useContext,
  useLayoutEffect,
} from "react";
import Filter from "../../Components/Filter";
import NewInvoice from "../../Components/NewInvoice";
import Invoice from "../../Components/Invoice";
import { Link } from "react-router-dom";
import useLocalStorage from "../../CustomHooks/useLocalStorage";
import { gsap } from "gsap";
import checkLocalStorage from "../../CustomHooks/checkLocalStorage";
import InvoicesStyle from "../../Styles/InvoicesStyles";
import { FormContext } from "../../Context/showForm";
import emptyIllustration from "../../assets/illustration-empty.svg";
import PdfEmail from "../../Components/PdfEmail";
import GenerateEmail from "../../Components/GenerateEmail";
import MySelect from "../../Components/SomeFilter";
// import MySelect from "../../Components/SomeFilter";

export default function Invoices(props) {
  checkLocalStorage();
  const { changeState } = useContext(FormContext);

  //State to hold the data
  const [permanent, setPermanent] = useLocalStorage("invoices", []);
  const [data] = useLocalStorage("invoices");
  const [invoices, setInvoices] = useState(data);

  //filtering
  const filterHandler = (value) => {
    // value !== "All"
    //   ? setInvoices([...data.filter((d) => d.status === value)])
    //   : setInvoices([...data]);

    if (value === "All") return setInvoices([...data]);
    else {
      setInvoices([...data.filter((d) => d.status === value)]);
    }
  };

  //useEffect
  useEffect(() => {
    if (props.fetch) setPermanent([props.fetch, ...permanent]);
    setInvoices(data);
  }, [props.fetch]);

  //animation
  useLayoutEffect(() => {
    gsap.from(an.current, {
      duration: 1.5,
      // x: "-100%",
    });
  }, []);

  const an = useRef();

  const classes = InvoicesStyle();
  // document title
  document.title = `(${invoices.length}) Invoices - Invoice App`;

  const ItemList = () => {
    if (invoices.length < 1) {
      return (
        <div>
          <div className="wrapper">
            <img src={emptyIllustration} alt="empty files" />
            <h2>There is nothing here</h2>
            <p style={{ textAlign: "center", marginTop: "-5px" }}>
              Create an invoice by clicking the <br />
              New button and get started
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {invoices.map((d) => (
            <Link
              to={`/id/${d.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              key={d.id}
            >
              <Invoice
                id={d.id.slice(0, 5).toUpperCase()}
                date={d.date}
                name={d.clientName}
                price={d.granTotal.toLocaleString()}
                status={d.status}
              />
            </Link>
          ))}
          <GenerateEmail />
        </div>
      );
    }
  };

  return (
    <div className={classes.InvoiceDetails} ref={an}>
      <div className="flexbox">
        <div className="first-columm">
          <h1>Invoices</h1>
          <div className="Counter2">{invoices.length} invoices</div>
          <div className="Counter">
            There are {invoices.length} total invoices
          </div>
        </div>
        <div className="second-columm">
          <div className="column-1">
            <MySelect change={filterHandler} />
            {/* <Filter change={filterHandler} /> */}
          </div>
          <div className="column-2">
            <NewInvoice showForm={changeState} />
          </div>
        </div>
      </div>

      <ItemList />
    </div>
  );
}
