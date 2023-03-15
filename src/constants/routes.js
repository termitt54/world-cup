import { PageDrawAfrica } from "../pages/Draw/PageDrawAfrica";
import { PageDrawAsia } from "../pages/Draw/PageDrawAsia";
import { PageDrawEurope } from "../pages/Draw/PageDrawEurope";
import { PageDrawNorthAmerica } from "../pages/Draw/PageDrawNorthAmerica";
import { PageDrawOceania } from "../pages/Draw/PageDrawOceania";
import { PageDrawSouthAmerica } from "../pages/Draw/PageDrawSouthAmerica";
import { PageDrawStackMatches } from "../pages/Draw/PageDrawStackMatches";
import { PageDrawWC } from "../pages/Draw/PageDrawWC";
import { PageCurrentTeam } from "../pages/PageCurrentTeam";
import { PageHistory } from "../pages/PageHistory";
import { PageRating } from "../pages/PageRating";
import { PageTeams } from "../pages/PageTeams";
import { PageQualAfrica } from "../pages/Quals/PageQualAfrica";
import { PageQualAsia } from "../pages/Quals/PageQualAsia";
import { PageQualEurope } from "../pages/Quals/PageQualEurope";
import { PageQualNorthAmerica } from "../pages/Quals/PageQualNorthAmerica";
import { PageQualOceania } from "../pages/Quals/PageQualOceania";
import { PageQualSouthAmerica } from "../pages/Quals/PageQualSouthAmerica";
import { PageQualStackGames } from "../pages/Quals/PageQualStackGames";
import { PageGroupStage } from "../pages/WC/PageGroupStage";
import { PagePlayOff } from "../pages/WC/PagePlayOff";

export const routes = [
  {
    path: "/world-cup/group-stage",
    page: <PageGroupStage/>,
  },
  {
    path: "/world-cup/play-off",
    page: <PagePlayOff/>,
  },
  {
    path: "/draw/world-cup",
    page: <PageDrawWC/>,
  },
  {
    path: "/draw/qualificate-stage/europe",
    page: <PageDrawEurope/>,
  },
  {
    path: "/draw/qualificate-stage/africa",
    page: <PageDrawAfrica/>,
  },
  {
    path: "/draw/qualificate-stage/asia",
    page: <PageDrawAsia/>,
  },
  {
    path: "/draw/qualificate-stage/south-america",
    page: <PageDrawSouthAmerica/>,
  },
  {
    path: "/draw/qualificate-stage/north-america",
    page: <PageDrawNorthAmerica/>,
  },
  {
    path: "/draw/qualificate-stage/oceania",
    page: <PageDrawOceania/>,
  },
  {
    path: "/draw/qualificate-stage/stack-matches",
    page: <PageDrawStackMatches/>,
  },
  {
    path: "/qual/europe",
    page: <PageQualEurope/>,
  },
  {
    path: "/qual/africa",
    page: <PageQualAfrica/>,
  },
  {
    path: "/qual/asia",
    page: <PageQualAsia/>,
  },
  {
    path: "/qual/south-america",
    page: <PageQualSouthAmerica/>,
  },
  {
    path: "/qual/north-america",
    page: <PageQualNorthAmerica/>,
  },
  {
    path: "/qual/oceania",
    page: <PageQualOceania/>,
  },
  {
    path: "/qual/stack-matches",
    page: <PageQualStackGames/>,
  },
  {
    path: "/rating",
    page: <PageRating />,
  },
  {
    path: "/history",
    page: <PageHistory />,
  },
  {
    path: "/teams",
    page: <PageTeams />,
  },
  {
    path: "teams/:name",
    page: <PageCurrentTeam/>
  }
];
