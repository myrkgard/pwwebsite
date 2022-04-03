import React from "react";
import "./Legal.scss";

export default function Legal() {
  return (
    <div className="main-container">
      <div className="legal-container">
        <section>
          <h1>Impressum</h1>
          <p>
            The website under this domain is provided by Patrick Wieland.
            <br />
            <br />
            Mail:
            <br />
            Patrick Wieland
            <br />
            Alte Salzstraße 31
            <br />
            59069 HAMM
            <br />
            ALLEMAGNE
            <br />
            <br />
            E-mail: myrkgard@gmail.com
            <br />
            <br />
            Mobile: +49.1514.7868019
          </p>
        </section>
        <section>
          <h1>Data Protection</h1>
          <p>
            The webserver logs the IP addresses of all accesses. The log is used
            for problem analysis and to generate access statistics.
          </p>
        </section>
      </div>
    </div>
  );
}
