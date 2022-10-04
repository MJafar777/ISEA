import React, { useEffect, useState } from "react";
import AboutLanding from "../../components/AboutLanding/AboutLanding";
import CompanyMembers from "../../components/CompanyMembers/CompanyMembers";
import EnergySources from "../../components/EnergySources/EnergySources";
import NewsLanding from "../../components/NewsLanding/NewsLanding";
import PublicationLanding from "../../components/PublicationLanding/PublicationLanding";
import Topic from "../../components/Topics/Topic";
import { useSelector, useDispatch } from "react-redux";
import { BooksGet } from "../../store/bookSlice";
import HeaderVideo from "../../components/HeaderVideo/HeaderVideo";
import News from "../../components/News/News";
import PublicationSlider from "../Publication2/PublicationSlider/PublicationSlider";
import BookPublick from "../Publication2/Publication_books/BookPublick";
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
      <AboutLanding />
      <News />
      {/* <NewsLanding /> */}
      <PublicationLanding />
      <CompanyMembers />
      <Topic />
      <EnergySources />
    </main>
  );
};

export default HomePage;
