import NewInvoiceStyles from "../Styles/NewInvoiceStyles";
import arrowAdd from "../assets/icon-plus.svg";
export default function NewInvoice(props) {
  const classes = NewInvoiceStyles();
  return (
    <button className={classes.invoiceBtn} onClick={props.showForm}>
      <div className={classes.icon}>
        <img src={arrowAdd} alt="" />
      </div>
      <div className={classes.text}>New Invoice</div>
      <div className={classes.textNew}>New</div>
    </button>
  );
}
