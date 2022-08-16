import React from "react";

import s from "../AboutPage.module.css";

const About = () => {
  return (
    <>
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
          With a mandate from countries around the world, IRENA encourages
          governments to adopt enabling policies for renewable energy
          investments, provides practical tools and policy advice to accelerate
          renewable energy deployment, and facilitates knowledge sharing and
          technology transfer to provide clean, sustainable energy for the
          world’s growing population.
        </p>
        <p>
          Для достижения своих целей организация выполняет следующие задачи:
        </p>

        <ul style={{ listStyleType: "circle" }}>
          <li>
            проведение фундаментальных, прикладных и инновационных исследований
            в области <span>солнечной энергии</span>;
          </li>
          <li>
            - внедрение целевых научных программ на уровне мировых требований и
            стандартов, содействие в организации типовых{" "}
            <span>научно-исследовательских институтов</span>;
          </li>
          <li>
            Renewable energy <span>cost studies</span>;
          </li>
          <li>
            <span>Renewables Readiness Assessments</span> , conducted in
            partnership with governments and regional organisations, to help
            boost renewable energy development on a country by country basis;
          </li>
          <li>
            The <span>Global</span> Atlas, which maps resource potential by
            source and by location;
          </li>
          <li>
            Renewable energy <span>benefits studies</span>;
          </li>
          <li>
            <span>REmap</span>, a roadmap to double renewable energy use
            worldwide by 2030;
          </li>
          <li>Renewable energy technology briefs;</li>
          <li>Facilitation of regional renewable energy planning;</li>
          <li>
            Renewable energy project development tools like the Project
            Navigator, the Sustainable Energy Marketplace and the IRENA/ADFD
            Project Facility.
          </li>
        </ul>
        <p>
          With more than 180 countries actively engaged, IRENA promotes
          renewable resources and technologies as the key to a sustainable
          future and helps countries achieve their renewable energy potential.
        </p>
      </div>
    </>
  );
};

export default About;
