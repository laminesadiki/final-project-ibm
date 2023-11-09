import React from "react";
const About = () => {
  return (
    <section className="container">
      <main>
        <article className="">
          <h2>Burger Shop</h2>
          <p>
            Nous sommes Burger Shop. L’endroit où l’on trouve les burgers les
            plus savoureux du monde.
          </p>
          <p>
            Découvrez les différents plats et burgers. Cliquez ci-dessous pour
            consulter notre carte
          </p>
        </article>
        <div className="container bg-black text-white">
          <h2 style={{ paddingTop: "30px" }}>Fondateur</h2>
          <article className="row">
            <div className="col-md-3" style={{ marginLeft: "100px" }}>
              <img
                src={"assets/skj.jpg"}
                alt="Fondateur"
                style={{ borderRadius: "50%" }}
              />
              <h3>Nelson</h3>
            </div>
            <p
              className="col-md-6"
              style={{ marginTop: "100px", fontSize: "25px" }}
            >
              Je suis Nelson, le fondateur de Burger Shop, <br /> Affilié à God
              Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};
export default About;
