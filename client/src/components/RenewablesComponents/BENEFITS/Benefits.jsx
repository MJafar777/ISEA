import React from "react";
import Title from "../../Title/Title";
import Shablon from "../ShablonRenewables/Shablon";

import s from "./Benefits.module.css";

import img1 from "../../../img/Renewables/benefits/1.jpg";
import img2 from "../../../img/Renewables/benefits/2.jpg";
import img3 from "../../../img/Renewables/benefits/3.jpg";
import img4 from "../../../img/Renewables/benefits/4.jpg";
import img5 from "../../../img/Renewables/benefits/5.jpg";
import img6 from "../../../img/Renewables/benefits/benefitsOther.png";
import img7 from "../../../img/Renewables/benefits/benefitsother2.jpg";

const Benefits = () => {
  return (
    <div className={s.benefits}>
      <div className="container">
        <div className={s.titleTop}>
          <Title name={"Benefits"} />
          <h1>
            Here are 7 benefits related to this renewable source of energy.
          </h1>
        </div>
        <div className={s.informationBenefits}>
          <div className={s.contentCard}>
            <h2>Impact on the Environment</h2>
            <div className={s.cardChild}>
              <img className={s.right1} src={img1} alt="img1" />

              <h3>
                Solar energy has the least negative impact on the environment
                compared to any other energy source. It does not produce
                greenhouse gases and does not pollute the water. It also
                requires very little water for its maintenance, unlike nuclear
                power plants for example, needing 20 times more water. Solar
                energy production does not create any noise, which is major
                benefit, since a lot of solar installations are in urban areas,
                such as domestic solar panels.
              </h3>
              <img className={s.right} src={img1} alt="img1" />
            </div>
          </div>
          <div className={s.contentCard}>
            <h2>Reduce Your Energy Bill</h2>
            <div className={s.cardChild}>
              <img className={s.left} src={img2} alt="img1" />
              <h3>
                Generating your own electricity means that you will be using
                less from the utility supplier. This will immediately translate
                to savings on your energy bill. Plus, you can also make money by
                selling the unused electricity, which you have generated, back
                to the grid. Through solar panel grants offered, you can make
                your green investment even more beneficial. The more energy you
                produce, the less you will need from the supplier which will
                increase your energy self reliance.
              </h3>
            </div>
          </div>
          <div className={s.contentCard}>
            <h2>Energy Production during Peak Hours</h2>
            <div className={s.cardChild}>
              <img className={s.right1} src={img3} alt="img1" />
              <h3>
                Energy demand tends to be higher in the 11:00-16:00 time frame
                and then early in the evening. Naturally, this is the period
                when the price of the electricity peaks. Solar energy happens to
                reach its maximum production capacity during those hours.
                Electricity produced at that time has higher value than if it
                was generated at night. With the additional electricity input of
                solar energy, prices in those time frames could be driven down
                to a level close to those of night hours.
              </h3>
              <img className={s.right} src={img3} alt="img1" />
            </div>
          </div>
          <div className={s.contentCard}>
            <h2>Solar Energy Is Applicable Everywhere</h2>
            <div className={s.cardChild}>
              <img className={s.left} src={img4} alt="img1" />
              <h3>
                As long as there is sunshine, solar energy can be deployed
                anywhere. This is particularly useful for remote regions with no
                access to any other source of electricity. There is a vast
                amount of people around the world with no access to electricity.
                Independent solar systems could be deployed in those regions and
                improve the lives of millions of people. Moreover, solar energy
                is also used to power up spacecrafts and boats.
              </h3>
            </div>
          </div>
          <div className={s.contentCard}>
            <h2>Less Electricity Lost During Long-Distance Transport</h2>
            <div className={s.cardChild}>
              <img className={s.right1} src={img6} alt="img1" />
              <h3>
                Some of the energy, around 3-5%, is lost during transportation
                and distribution. The longer the distances between the
                production and the supply points, the more energy is lost. Those
                losses might not seem significant but they can influence the
                performance of the installation in regions with high population
                density. Having solar panels on the roof or in the yard
                significantly reduces this distance, therefore increasing the
                efficiency of the solar panels.
              </h3>
              <img className={s.right} src={img6} alt="img1" />
            </div>
          </div>
          <div className={s.contentCard}>
            <h2>Improves Grid Security</h2>
            <div className={s.cardChild}>
              <img className={s.left} src={img7} alt="img1" />
              <h3>
                The grid is less vulnerable to blackouts if there are many power
                plants which are spread out. A grid with high penetration of
                solar energy has thousands of energy production centres which
                are widely spread out. This improves the security of the grid in
                case of overload, natural or human-caused disasters.
              </h3>
            </div>
          </div>
          <div className={s.contentCard}>
            <h2>Job Creation</h2>
            <div className={s.cardChild}>
              <img className={s.right1} src={img5} alt="img1" />
              <h3>
                The are many advantages of solar energy, and another one is job
                creation. Large part of the cost associated with solar systems
                comes from the installation of the panels. This contributes to
                local job creation. Using solar systems boosts the economy and
                positively affects the local community. Sign up to our contact
                form and get free non-obligation quotes from trusted suppliers
                in your region!
              </h3>
              <img className={s.right} src={img5} alt="img1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
