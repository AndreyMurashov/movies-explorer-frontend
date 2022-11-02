import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="AboutProject">
      <h2 className="AboutProject__title" id="project">
        О проекте
      </h2>
      <div className="AboutProject__body">
        <div className="AboutProject__column">
          <div className="AboutProject__column-top">
            Дипломный проект включал 5 этапов
          </div>
          <div className="AboutProject__column-bottom">
            Составление плана, работу над бэкендом, верстку, добавление
            функциональности и финальные доработки
          </div>
        </div>
        <div className="AboutProject__column">
          <div className="AboutProject__column-top">
            На выполнение диплома ушло 5 недель
          </div>
          <div className="AboutProject__column-bottom">
            У каждого этапа был мягкий и жесткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься
          </div>
        </div>
      </div>

      <div className="AboutProject__scale">
        <div className="AboutProject__scale-left  AboutProject__scale-top_green">
          <p className="AboutProject__scale-text AboutProject__scale_top">
            1 неделя
          </p>
        </div>
        <div className="AboutProject__scale-right AboutProject__scale-top_gray">
          <p className="AboutProject__scale-text AboutProject__scale_top">
            4 недели
          </p>
        </div>
        <div className="AboutProject__scale-left">
          <p className="AboutProject__scale-text AboutProject__scale_bottom">
            Back-end
          </p>
        </div>
        <div className="AboutProject__scale-right">
          <p className="AboutProject__scale-text AboutProject__scale_bottom">
            Front-end
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
