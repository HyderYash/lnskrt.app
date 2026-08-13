import Link from "next/link";

const detailHref = "/orders/order-list/1348342058?itemId=895433576";

function HelpLink() {
  return (
    <a className="help-link" href="mailto:support@lenskart.com" aria-label="Contact Lenskart help">
      <span className="whatsapp-icon">◔</span>
      <span>Help</span>
    </a>
  );
}

export function OrderList() {
  return (
    <main className="page-shell orders-page">
      <header className="site-header">
        <div className="header-inner">
          <h1 className="page-title"><span className="back-arrow" aria-hidden="true">←</span>My Orders</h1>
          <HelpLink />
        </div>
      </header>

      <section className="orders-wrap">
        <div className="other-orders-banner">
          <div className="other-orders-copy">
            <span className="contacts-mark" aria-hidden="true"><i /><i /></span>
            <div>
              <h2>Your Other Orders</h2>
              <p>View orders for branded contact lenses &amp; devices</p>
              <div className="brand-row" aria-label="Bausch and Lomb, Alcon, Johnson and Johnson, Acuvue">
                <b className="brand-bl">B+L</b><span />
                <b className="brand-alcon">Alcon</b><span />
                <b className="brand-jj">J&amp;J</b><span />
                <b className="brand-acuvue">ACUVUE</b>
              </div>
            </div>
          </div>
          <button type="button" className="view-orders-btn">View Orders</button>
        </div>

        <div className="order-row">
          <aside className="order-meta">
            <strong>13 Aug 2026</strong>
            <span>1 Item ₹ 879</span>
            <span>#1348342058</span>
          </aside>

          <Link className="order-card" href={detailHref} aria-label="View order 1348342058 details">
            <div className="order-status">
              <div>
                <h2>Arriving at Store by 19 Aug <span aria-hidden="true">›</span></h2>
                <p>Preparing your Order</p>
              </div>
              <span className="status-icon" aria-hidden="true">▣</span>
            </div>
            <div className="order-product">
              <div className="product-copy">
                <h3>Meller Binti All Black</h3>
                <p>Medium</p>
                <div>Meller Regular Tinted (default Grey)</div>
              </div>
              <img src="/assets/meller-binti-all-black.png" alt="Meller Binti All Black sunglasses" />
            </div>
          </Link>
        </div>

        <p className="end-copy">No more items to load</p>
      </section>
    </main>
  );
}
