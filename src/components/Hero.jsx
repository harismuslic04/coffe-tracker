import React from "react";

export default function Hero() {
  return (
    <>
      <h1>
        Coffe Tracking for Coffe{" "}
        <abbr title="An enthusiast or devotee">Fiends</abbr>!
      </h1>
      <div className="benefits-list">
        <h3>
          Try <span className="text-gradient">Caffiend</span>
          and start...
        </h3>
        <p>✅ Tracking every coffee</p>
        <p>✅ Measuring your blood caffeine levels</p>
        <p>✅ Costing and quanitifying your addition</p>
      </div>
      <div className="card info-card">
        <div>
          {" "}
          <i class="fa-solid fa-circle-info"></i>
          <h3>Did you know...</h3>
        </div>
        <h5>That caffeine's half-life is about 5 hours?</h5>
        <p>
          This means that after 5 hours,half the caffeine you consumed is still
          in your system,keeping you alert logener!So if you drink a cup of
          coffe with 200mg of caffeine,5 hours,kater,you'll still have about
          100mg of caffeine in your system.
        </p>
      </div>
    </>
  );
}
