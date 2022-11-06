import "./Techs.css";

function Techs() {
  return (
    <section className="Techs">
      <h2 className="Techs__title">Технологии</h2>
      <p className="Techs__body-title">7 технологий</p>
      <p className="Techs__body-text">
        На курсе Веб-разработки мы освоили технологии, которые применили в
        дипломном проекте
      </p>
      <div className="Techs__labels">
        <div className="Techs__labels-sign">
          <p className="Techs__labels-text">HTML</p>
        </div>
        <div className="Techs__labels-sign">
          <p className="Techs__labels-text">CSS</p>
        </div>
        <div className="Techs__labels-sign">
          <p className="Techs__labels-text">JS</p>
        </div>
        <div className="Techs__labels-sign">
          <p className="Techs__labels-text">React</p>
        </div>
        <div className="Techs__labels-sign">
          <p className="Techs__labels-text">Git</p>
        </div>
        <div className="Techs__labels-sign">
          <p className="Techs__labels-text">Express.js</p>
        </div>
        <div className="Techs__labels-sign">
          <p className="Techs__labels-text">MongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
