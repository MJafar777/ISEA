import { useTranslation } from "react-i18next";
const MyLinks = () => {
  const { t } = useTranslation();
  const links = [
    {
      name: t("Navbar.2"),
      submenu: true,
      sublinks: [
        {
          Head: t("Navbar.Renewables.1"),
          link: "/benefits",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.Renewables.2"),
          link: "/climate-change",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.Renewables.3"),
          link: "energy-transition",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.Renewables.4"),
          link: "/finance-and-investment",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.Renewables.5"),
          link: "/heating-cooling",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.Renewables.6"),
          link: "/innovation-technology",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.Renewables.7"),
          link: "/costs",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.Renewables.8"),
          link: "/power",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.Renewables.9"),
          link: "/inductry-transport",
          isSublink: false,
          sublink: [],
        },
      ],
    },
    {
      name: t("Navbar.3"),
      submenu: true,
      sublinks: [
        {
          Head: t("Navbar.About.1"),
          link: "/about",
          isSublink: false,
          sublink: [],
        },
        // {
        //   Head: "ISEA LIDERSHIP",
        //   link: "/isea-leadership",
        //   isSublink: false,
        //   sublink: [],
        // },
        {
          Head: t("Navbar.About.2"),
          link: "/contact",
          isSublink: false,
          sublink: [],
        },
        {
          Head: t("Navbar.About.3"),
          link: "/ourwork",
          isSublink: false,
          sublink: [],
        },
        // {
        //   Head: "History",
        //   link: "/history",
        //   isSublink: false,
        //   sublink: [],
        // },
        // {
        //   Head: "Institutional Structure",
        //   link: "/institutional-structure",
        //   isSublink: false,
        //   sublink: [],
        // },
        // {
        //   Head: "ISEA Membership",
        //   link: "/isea-membership",
        //   isSublink: false,
        //   sublink: [],
        // },
        // {
        //   Head: "OfficialDocuments",
        //   link: "/official-documents",
        //   isSublink: false,
        //   sublink: [],
        // },
        // {
        //   Head: "Senior Management",
        //   link: "/abodut",
        //   isSublink: false,
        //   sublink: [],
        // },
        // {
        //   Head: "Statute, Vision & Mission",
        //   link: "/asbout",
        //   isSublink: false,
        //   sublink: [],
        // },
      ],
    },
  ];
  return links;
};
export default MyLinks;
