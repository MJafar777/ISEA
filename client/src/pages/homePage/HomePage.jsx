import React, { useEffect, useState } from "react";
import AboutLanding from "../../components/AboutLanding/AboutLanding";
import CompanyMembers from "../../components/CompanyMembers/CompanyMembers";
import EnergySources from "../../components/EnergySources/EnergySources";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import NewsLanding from "../../components/NewsLanding/NewsLanding";
import PublicationLanding from "../../components/PublicationLanding/PublicationLanding";
import Topic from "../../components/Topics/Topic";
import { useSelector, useDispatch } from "react-redux";
import { BooksGet } from "../../store/bookSlice";
import HeaderVideo from "../../components/HeaderVideo/HeaderVideo";

const HomePage = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  useEffect(() => {
    dispatch(BooksGet());
    setStatus(true);
  }, []);

  return (
    <main>
      <HeaderVideo />
      <IntroLanding />
      <div className="container">
        <AboutLanding />
        <NewsLanding />
      </div>
      <PublicationLanding />
      <CompanyMembers />
      <Topic />
      <EnergySources />
    </main>
  );
};

export default HomePage;
