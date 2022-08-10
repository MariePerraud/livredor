import messages from "./messages";
import "./App.css";

export default function App() {
  return (
    <div id="wrapper">
      <div id="container">
        <div className="open-book">
          <header>
            <h1>Promo mars 2022</h1>
            <h6>Promo mars 2022</h6>
          </header>
          <article>
            <h2 className="chapter-title">livre d'or</h2>
            <p style={{ textAlign: "justify" }}>
              Karl, n'ayant pas pu te dire au revoir, nous t'envoyons nos
              remerciements par le biais de ce livre d'or.
            </p>
            <br />
            {messages.map((message) => (
              <dl>
                <dd style={{ textAlign: "justify" }}>{message.message}</dd>
                <dt style={{ textAlign: "right" }}>
                  <strong>{message.nom}</strong>
                </dt>
              </dl>
            ))}
          </article>
          <footer>
            <ol id="page-numbers">
              <li>1</li>
              <li>2</li>
            </ol>
          </footer>
        </div>
      </div>
    </div>
  );
}
