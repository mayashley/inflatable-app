export const navbarData = [
  {
    title: "Home",
    route: "/",
    subcats: [],
  },
  {
    title: "Inflatables",
    route: null,
    stateValue: "infOpen",
    subcats: [
      { subtitle: "Bounce Houses", subroute: "/BounceHouses" },
      { subtitle: "Bounce House Slide Combos", subroute: "/BounceCombo" },
      { subtitle: "Slides", subroute: "/Slides" },
      { subtitle: "Obstacle Courses", subroute: "/ObstacleCourse" },
      { subtitle: "Water Friendly", subroute: "/WaterFriendly" },
      { subtitle: "Interactives", subroute: "/Interactives" },
      { subtitle: "Party Packages", subroute: "/SelfPickUp" },
    ],
  },
  {
    title: "Games",
    route: null,
    stateValue: "gamesOpen",
    subcats: [{ subtitle: "Dunk Booth", subroute: "/DunkBooth" }],
  },
  {
    title: "Party Equipment",
    route: null,
    stateValue: "partyOpen",
    subcats: [
      { subtitle: "Concessions", subroute: "/Concessions" },
      { subtitle: "Tables and Chairs", subroute: "/TablesAndChairs" },
      { subtitle: "Portable Cinema", subroute: "/Cinema" },
      { subtitle: "Tents", subroute: "/Tents" },
      { subtitle: "Generators", subroute:"/Generators"},
    ],
  },
  {
    title: "More",
    route: null,
    stateValue: "contactOpen",
    subcats: [
      { subtitle: "FAQ's", subroute: "/Faq" },
      { subtitle: "Contact Us", subroute: "/Contact" },
      // { subtitle: "Pay Deposit", subroute: "/Deposit" },
    ],
  },
];
