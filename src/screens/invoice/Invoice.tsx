import React, { useEffect } from "react";
import NavBar from "../../components/nav/NavBar";
import InvoiceContainer from "../../components/checkoutCards/InvoiceContainer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jsPDF from "jspdf";

const Invoice = () => {
    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth["userid"]) {
            toast.info("Please sign in first");
            navigate("/products");
        }
    }, []);

    const printThePDF = () => {
        const doc = new jsPDF("p", "pt", "a1");
        const x = document.querySelector("#toPrint") as HTMLCanvasElement;

        doc.html(x, {
            callback: function (pdf: any) {
                pdf.save("my-pdf.pdf");
            },
        });
    };
    return (
        <div className="std-bg">
            <NavBar />

            <button
                className="std-btn std-btnOrange"
                style={{ margin: "3rem auto", width: "20%" }}
                onClick={printThePDF}
            >
        Save as pdf
            </button>
      
            <div className={"container"} id="toPrint">
                <InvoiceContainer />
            </div>
            <button
                className="std-btn std-btnOrange"
                style={{ margin: "3rem auto", width: "20%" }}
                onClick={printThePDF}
            >
        Save as pdf
            </button>
        </div>
    );
};

export default Invoice;
