import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";
import moment from "moment";
import { gsap } from "gsap";
import EditForm from "../../Components/EditForm";
import InvoiceDetailsStyles from "../../Styles/InvoiceDetailsStyles";
import useLocalStorage from "../../CustomHooks/useLocalStorage";
import arrowLeft from "../../assets/icon-arrow-left.svg";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function InvoiceDetails(props) {
  //localstorage
  const [data, setData] = useLocalStorage("invoices");

  //Parameters
  const params = useParams();
  const [invoice, setInvoice] = useState(
    data.filter((d) => d.id === params.id)
  );

  //Navigation
  const navigate = useNavigate();

  const classes = InvoiceDetailsStyles();
  const date = new Date(invoice[0].date);
  date.setDate(date.getDate() + parseInt(invoice[0].payment));
  const dateString = moment(date).format("YYYY-MM-DD");

  //Mark as paid function
  const markAsPaid = () => {
    const changedData = [];
    for (let e of data) {
      if (e.id === params.id) e.status = "Paid";
      changedData.push(e);
    }

    const newInvoice = changedData.filter((i) => i.id === params.id);
    setData(changedData);
    setInvoice(newInvoice);
  };

  //Delete function
  const deleteItem = () => {
    const newData = data.filter((i) => i.id !== params.id);
    setData(newData);
    navigate(-1);
  };

  //Edit  function
  const [hideForm, setHideForm] = useState(true);

  const editItem = () => {
    setHideForm(!hideForm);
  };

  //set new data
  const getDataHandler = (values) => {
    setInvoice([values]);
  };

  useLayoutEffect(() => {
    gsap.from(an.current, {
      duration: 1.5,
      // x: "100%",
    });
  }, []);

  const an = useRef();

  document.title = `Invoice #${invoice[0].id
    .slice(0, 5)
    .toUpperCase()} - Invoice App`;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <EditForm
        hide={hideForm}
        formStatus={editItem}
        id={invoice[0].id}
        data={getDataHandler}
      />

      <div className={classes.InvoiceDetails} ref={an}>
        <button className="back" onClick={() => navigate(-1)}>
          <img src={arrowLeft} alt="" /> Go back
        </button>
        <div className="option flexbox">
          <div className="status-details">
            <div className="text">Status</div>
            <div className={`status ${invoice[0].status}`}>
              <span></span> {invoice[0].status}
            </div>
          </div>
          <div className="btns flexbox">
            {invoice[0].status === "Paid" ? (
              <button className="gray" disabled>
                Edit
              </button>
            ) : (
              <button className="edit" onClick={editItem}>
                Edit
              </button>
            )}

            <Button variant="danger" className="delete" onClick={handleShow}>
              Delete
            </Button>

            {invoice[0].status === "Paid" ? (
              <button className=" gray" disabled>
                Mark As Paid
              </button>
            ) : (
              <button className="paid" onClick={markAsPaid}>
                Mark As Paid
              </button>
            )}
          </div>
        </div>

        <div className="invoice">
          <div className="header headers flexbox">
            <div className="id-service">
              <div className="id bold">
                <span>#</span>
                {invoice[0].id.slice(0, 5).toUpperCase()}
              </div>
              <div className="service">{invoice[0].description}</div>
            </div>
            <div className="address">
              <div className="street">{invoice[0].street}</div>
              <div className="country-address">
                <div className="city">{invoice[0].city}</div>
                <div className="post"> {invoice[0].post}</div>
                <div className="country"> {invoice[0].country}</div>
              </div>
            </div>
          </div>
          <div className="body aaa flexbox">
            <div className="date-due">
              <div>
                <div className="title">Invoice Date</div>
                <div className=" bold">{invoice[0].date}</div>
              </div>
              <div>
                <div className="title">Payment Due</div>
                <div className="due bold">{dateString}</div>
              </div>
            </div>
            <div className="bill-to">
              <div className="title">Bill To</div>
              <div className="name bold">{invoice[0].clientName}</div>
              <div className="client-street">{invoice[0].clientStreet}</div>
              <div className="client-city">{invoice[0].clientCity}</div>
              <div className="client-post">{invoice[0].clientPost}</div>
              <div className="client-country">{invoice[0].clientCountry}</div>
            </div>
            <div className="sent-to">
              <div className="title">Sent to</div>
              <div className="email bold">{invoice[0].clientEmail}</div>
            </div>
          </div>
          <div className="footer">
            <div className="all-items">
              <div className="item-header  flexbox">
                <div className="item-name wide">Item Name</div>
                <div className="qty small">Qty.</div>
                <div className="price small">Price</div>
                <div className="total small">Total</div>
              </div>
              {invoice[0].items.map((i) => (
                <div className="item-details flexbox" key={i.id}>
                  <div className="item-name wide black">
                    <b>{i.itemName}</b>
                  </div>
                  <div className="qty small">
                    <b>{i.qty}</b>
                  </div>
                  <div className="price small">
                    <b>₵{parseInt(i.price).toLocaleString()}</b>
                  </div>
                  <div className="total small black">
                    <b>₵{i.total.toLocaleString()}</b>
                  </div>
                </div>
              ))}
            </div>
            <div className="invoice-total flexbox">
              <div>Amount Due</div>
              <div className="grandTotal">
                &#8373; {invoice[0].granTotal.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="options flexboxs">
          <div className="btns flexbox">
            <button className="edit" onClick={editItem}>
              Edit
            </button>
            <Button variant="primary" className="delete" onClick={handleShow}>
              Delete
            </Button>
            <button className="paid" onClick={markAsPaid}>
              Mark As Paid
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className={classes.deleteModal}>
        <Modal.Header>
          <Modal.Title>Complete Deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete invoice #
          {invoice[0].id.slice(0, 5).toUpperCase()}? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteItem}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
