import React from "react";
import s from "./ourWork.module.css";
import Title from "../../components/Title/Title";
import Iframe from "react-iframe";
const OurWork = () => {
  return (
    <div className="container">
      <Title name={"Our Work"} />
      <Iframe
        className={s.videos}
        src="https://www.youtube.com/embed/U6oaXQ_w0_g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Iframe>
      <div className={s.main}>
        <div className={s.leftContainer}>
          <p>
            Основной целью организации является содействие эффективному
            использованию передовых технологий в области солнечной энергетики на
            основе подготовки и переподготовки кадров в соответствии с
            международными стандартами и требованиями, стратегический анализ
            крупных проектов и управление проектами, реализуемых за счет
            внутренних и иностранных инвестиций, а также содействие в реализации
            работ направленных на трансфер технологий.
          </p>
          <p>
            With a mandate from countries around the world, ISEA encourages
            governments to adopt enabling policies for renewable energy
            investments, provides practical tools and policy advice to
            accelerate renewable energy deployment, and facilitates knowledge
            sharing and technology transfer to provide clean, sustainable energy
            for the world’s growing population.
          </p>
          <p>
            Для достижения своих целей организация выполняет следующие задачи:
          </p>

          <ul style={{ listStyleType: "circle" }}>
            <li>
              проведение фундаментальных, прикладных и инновационных
              исследований в области <span>солнечной энергии</span>;
            </li>
            <li>
              внедрение целевых научных программ на уровне мировых требований и
              стандартов, содействие в организации типовых{" "}
              <span>научно-исследовательских институтов</span>;
            </li>
            <li>
              содействие в организации и организация сертификационных услуг
              солнечных технологий и их компонентов <span>компонентов</span>;
            </li>
            <li>
              <span>содействие в организации</span> - проектно-изыскательских
              работ с участием иностранных специалистов;
            </li>
            <li>
              The <span>Global</span>- содействие в разработке и подготовке
              технико-экономических обоснований (ТЭО) и предварительных
              технико-экономических обоснований (ПТЭО) наряду с реализацией
              местных и инвестиционных проектов по внедрению солнечных
              технологий;
            </li>
            <li>
              содействие в разработке передовых технологий и технических решений
              солнечной и ветровой энергии на основе передовых материалов;
            </li>
            <li>
              развитие эффективных форм сотрудничества, интеграция науки и
              техники.
            </li>
            <li>
              содействие укреплению потенциала науки и инноваций путем
              организации научных конференций, семинаров и практикумов с
              местными и зарубежными университетами, учебными и
              научно-исследовательскими учреждениями;
            </li>
            <li>
              содействие развитию международного научно-технического
              сотрудничества через международные научно-исследовательские и
              образовательные учреждения, инновационные центры, зарубежных
              партнеров, научно-технические и инновационные проекты, обмен
              знаниями и специалистами и реализацию совместных проектов;
            </li>
            <li>
              привлечение грантовых средств из международных проектов и фондов
              для реализации крупных исследовательских проектов;
            </li>
          </ul>
          <p>
            организация и проведение конкурсов, конкурсов и конкурсов по
            солнечным энергетическим технологиям, проблемам и решениям.
          </p>
        </div>
        <div className={s.main2}>
          <div className={s.content2}>
            <div>
              <h3>Business and Investors Group</h3>
              <p>
                Engages in activities address barriers to scaling up renewable
                energy investments in both emerging and more mature markets.
                Building on its white paper on this topic, the Group conducts
                country-specific work in high-potential markets through expert
                webinars, country papers and public-private dialogues and puts
                forward key recommendations to policy makers.
              </p>
            </div>
            <div>
              <h3>Business and Investors Group</h3>
              <p>
                Engages in activities address barriers to scaling up renewable
                energy investments in both emerging and more mature markets.
                Building on its white paper on this topic, the Group conducts
                country-specific work in high-potential markets through expert
                webinars, country papers and public-private dialogues and puts
                forward key recommendations to policy makers.
              </p>
            </div>
            <div>
              <h3>Business and Investors Group</h3>
              <p>
                Engages in activities address barriers to scaling up renewable
                energy investments in both emerging and more mature markets.
                Building on its white paper on this topic, the Group conducts
                country-specific work in high-potential markets through expert
                webinars, country papers and public-private dialogues and puts
                forward key recommendations to policy makers.
              </p>
            </div>
            <div>
              <h3>Business and Investors Group</h3>
              <p>
                Engages in activities address barriers to scaling up renewable
                energy investments in both emerging and more mature markets.
                Building on its white paper on this topic, the Group conducts
                country-specific work in high-potential markets through expert
                webinars, country papers and public-private dialogues and puts
                forward key recommendations to policy makers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
