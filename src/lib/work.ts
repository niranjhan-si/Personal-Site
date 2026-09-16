export type WorkProject = {
  name: string;
  company: string;
  description: string;
  url: string;
  live: boolean;
  video?: string;
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    name: "Project Audience",
    company: "Junglee Games",
    description:
      "An internal no-code platform that lets product, marketing, and retention teams build targeted user journeys and run experiments across channels without developer involvement.",
    url: "https://www.linkedin.com/pulse/meet-project-audience-our-no-code-swiss-army-knife-product-bharti",
    live: false,
  },
  {
    name: "BackItOrBinIt",
    company: "Betfair",
    description:
      "A free-to-play sports prediction game where user predictions are mapped to live bets on Betfair.",
    url: "https://backitorbinit.betfair.com/",
    live: true,
  },
  {
    name: "Superswipes",
    company: "Sky Bet",
    description:
      "A free-to-play, Tinder-style swipe game with gamified reward mechanics, where user predictions are linked to live bets on Sky Bet.",
    url: "https://superswipes.skybet.com/",
    live: true,
    video: "/videos/superswipes-demo.mp4",
  },
  {
    name: "ITV7 Football",
    company: "ITV / Sky Betting and Gaming",
    description:
      "A free-to-play football prediction game where players can win up to £100,000, with predictions linked to live bets on Sky Bet.",
    url: "https://itv7.itv.com/football",
    live: true,
  },
];
