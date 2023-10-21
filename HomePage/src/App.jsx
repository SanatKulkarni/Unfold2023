import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";


export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web3-Ticket-Bookings
              </a>
            </span>
          </h1>


          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <div className="grid">
          <a
            href="#"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/hackathon.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-1">Hackathon Tickets ➜</h2>
              <p>
                Buy Hackathon Tickets.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/concert.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-2">Concert Tickets ➜</h2>
              <p>
                Buy Concert Tickets.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/carshow.png"
              alt="Placeholder preview of templates"
            />
            <div className="card-text">
              <h2 className="gradient-text-3">Car Show Tickets ➜</h2>
              <p>
                Buy Car Show Tickets
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
