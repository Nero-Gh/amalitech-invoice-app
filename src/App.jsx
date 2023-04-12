import { useState, useEffect, useLayoutEffect, useContext } from "react";
import Invoices from "./pages/invoices";
import Sidebar from "./Components/Sidebar";
import Form from "./Components/Form";
import PageNotFound from "./pages/404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceDetails from "./pages/invoice-details";
import "./App.css";
import HideForm from "./Context/showForm";
import PdfEmail from "./Components/PdfEmail";

function App() {
  const [data, setData] = useState("");

  const getDataHandler = (values) => {
    setData(values);
  };

  useEffect(() => {
    return () => {
      setData("");
    };
  }, [data]);

  useLayoutEffect(() => {
    const theme = document.querySelector("body");
    JSON.parse(window.localStorage.getItem("mode"))
      ? theme.classList.add("dark")
      : theme.classList.remove("dark");
  }, []);

  return (
    <Router>
      <div className="App">
        <HideForm>
          <Sidebar />
          <Form data={getDataHandler} />
          <div className="container">
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route index element={<Invoices fetch={data} />} />
              <Route path="/invoices" element={<Invoices fetch={data} />} />
              <Route path="/generatepdf" element={<PdfEmail />} />
              <Route path="/id/:id" element={<InvoiceDetails />} />
            </Routes>
          </div>
        </HideForm>
      </div>
    </Router>
  );
}

export default App;
