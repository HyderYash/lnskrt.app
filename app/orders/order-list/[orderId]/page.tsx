"use client";

import Link from "next/link";
import { useState } from "react";

export default function OrderDetailPage() {
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  return (
    <main className="page-shell detail-page">
      <header className="site-header detail-header">
        <div className="header-inner">
          <div>
            <h1 className="page-title">
              <Link className="back-arrow" href="/orders/order-list" aria-label="Back to my orders">←</Link>
              My Order
            </h1>
            <p className="breadcrumbs">My Orders&nbsp; / &nbsp;Order #1348342058</p>
          </div>
          <a className="help-link" href="mailto:support@lenskart.com" aria-label="Contact Lenskart help">
            <span className="whatsapp-icon">◔</span><span>Help</span>
          </a>
        </div>
      </header>

      <section className="detail-wrap">
        <div className="detail-topline">
          <div>
            <h2>Order #1348342058</h2>
            <p>Placed on 13 Aug 2026</p>
          </div>
          <div className="invoice-wrap">
            <button className="invoice-button" type="button" onClick={() => setInvoiceOpen(!invoiceOpen)} aria-expanded={invoiceOpen}>
              <span className={invoiceOpen ? "triangle open" : "triangle"} /> Invoice
            </button>
            {invoiceOpen && <div className="invoice-menu"><a href="/invoice-1348342058.txt" download>Download Invoice</a></div>}
          </div>
        </div>

        <div className="detail-columns">
          <div className="detail-main">
            <section className="tracking-panel">
              <div className="arrival-row">
                <span className="status-icon truck-large" aria-hidden="true">▣</span>
                <div><h2>Arriving at Store by 19 Aug</h2><p>Preparing your Order</p></div>
              </div>
              <div className="tracking-card">
                <div className="timeline">
                  <div className="timeline-line"><span className="active-dot">•</span><span className="future-dot" /></div>
                  <div className="timeline-copy">
                    <div><strong>Preparing for Dispatch</strong><span>13 Aug 2026</span></div>
                    <div><strong>On the Way</strong></div>
                  </div>
                </div>
                <a href="#updates" className="updates-link">View all updates <span>›</span></a>
              </div>
            </section>

            <h2 className="section-heading">Item</h2>
            <section className="item-card">
              <div className="bought-for">Bought for Ayushi Sharma&apos;s Power <span aria-hidden="true">▼</span></div>
              <div className="item-visual">
                <img src="/assets/meller-binti-all-black.png" alt="Meller Binti All Black sunglasses" />
              </div>
              <div className="item-name"><h3>Meller Binti All Black</h3><p>Medium</p></div>
              <div className="lens-name">Meller Regular Tinted (default Grey)</div>
              <div className="price-row"><strong>Item Price</strong><div><b>₹ 879</b><a href="#price-breakup">Price Breakup</a></div></div>
            </section>

            <section className="invoice-note" id="price-breakup">
              <h2>Price Details</h2>
              <div><span>Lenses fitted in frame</span><strong>₹879</strong></div>
              <div><span>Run for Frame coupon</span><strong>- ₹1,999</strong></div>
              <div><span>Complimentary eye checkup</span><strong>FREE</strong></div>
            </section>
          </div>

          <aside className="detail-aside">
            <h2 className="aside-heading">Delivering to</h2>
            <section className="side-card delivery-card">
              <div className="delivery-top"><strong>Dhanori</strong><span aria-hidden="true">⌁</span></div>
              <p><span className="clock-icon">◷</span> 11:00 AM–10:00 PM</p>
              <a href="https://maps.google.com/?q=Pallidium+Grand+Dhanori+Road+Pune+411015">Get Directions <span>›</span></a>
            </section>

            <h2 className="aside-heading">Bill Details</h2>
            <section className="side-card bill-card">
              <div className="bill-total"><strong>Total Order Amount</strong><div><b>₹879</b><a href="#price-breakup">Price Breakup</a></div></div>
              <div className="billing-address">
                <strong>Billing Address</strong>
                <p>Ayushi Sharma<br />Shop- 8, Pallidium Grand,<br />Lohegaon, Dhanori Road, Pune 411015,<br />Pune, Maharashtra</p>
              </div>
            </section>

            <h2 className="aside-heading">Included Benefits</h2>
            <section className="side-card benefits-card">
              <div><strong>Run for Frame coupon</strong><p>20,000 steps completed. Coupon applied to your frame.</p><a href="#price-breakup">View Price Details <span>›</span></a></div>
              <div><strong>Complimentary Eye Checkup</strong><p>Free eye checkup included with this order</p></div>
            </section>

            <h2 className="aside-heading">Need Help?</h2>
            <section className="side-card help-card">
              <a href="#faq"><div><strong>FAQ</strong><p>Check out our Frequently Asked Questions (FAQ) for quick answers!</p></div><span>›</span></a>
              <a href="mailto:support@lenskart.com"><div><strong>◔&nbsp; Chat with us</strong><p>We are here to help you</p></div><span>›</span></a>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
