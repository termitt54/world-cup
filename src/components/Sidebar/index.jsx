import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./index.scss";

export const Sidebar = () => {
  const teams = useSelector((state) => state.teams);
  const allTeams = [
    ...teams.europe,
    ...teams.asia,
    ...teams.africa,
    ...teams.oceania,
    ...teams.southAmerica,
    ...teams.northAmerica,
  ];
  const [visible, setVisible] = useState(true);
  const [visibleWC, setVisibleWC] = useState(false);
  const [visibleDraw, setVisibleDraw] = useState(false);
  const [visibleQual, setVisibleQual] = useState(false);
  const [visibleDrawQual, setVisibleDrawQual] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.history);
  const [place, setPlace] = useState({});
  useEffect(() => {
    setPlace({
      gold: state.gold,
      serebro: state.serebro,
      bronze: state.bronze,
    });
  }, [state.gold, state.serebro, state.bronze]);

  const qualLink = [
    {
      id: 1,
      title: "Европа",
      to: "/qual/europe",
    },
    {
      id: 2,
      title: "Африка",
      to: "/qual/africa",
    },
    {
      id: 3,
      title: "Азия",
      to: "/qual/asia",
    },
    {
      id: 4,
      title: "Южная Америка",
      to: "/qual/south-america",
    },
    {
      id: 5,
      title: "Северная Америка",
      to: "/qual/north-america",
    },
    {
      id: 6,
      title: "Океания",
      to: "/qual/oceania",
    },
    {
      id: 7,
      title: "Стыковые матчи",
      to: "/qual/stack-matches",
    },
  ];
  const drawQualDraw = [
    {
      id: 1,
      title: "Европа",
      to: "/draw/qualificate-stage/europe",
    },
    {
      id: 2,
      title: "Африка",
      to: "/draw/qualificate-stage/africa",
    },
    {
      id: 3,
      title: "Азия",
      to: "/draw/qualificate-stage/asia",
    },
    {
      id: 4,
      title: "Южная Америка",
      to: "/draw/qualificate-stage/south-america",
    },
    {
      id: 5,
      title: "Северная Америка",
      to: "/draw/qualificate-stage/north-america",
    },
    {
      id: 6,
      title: "Океания",
      to: "/draw/qualificate-stage/oceania",
    },
    {
      id: 7,
      title: "Стыковые матчи",
      to: "/draw/qualificate-stage/stack-matches",
    },
  ];

  const onClick = () => {
    dispatch({ type: "PRIZE", payload: place });
    allTeams.map(function (team) {
      team.rat = [...team.rat, 0];
      team.rat.shift();
      team.wc = {
        game: 0,
        win: 0,
        draw: 0,
        lose: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
      };
      dispatch({ type: "NEW", payload: [team.id, team.rat, team.wc] });
      return team
    });
  };

  const onToggleVisible = () => {
    setVisible(!visible);
  };
  const onToggleVisibleWC = () => {
    setVisibleWC(!visibleWC);
  };
  const onToggleVisibleDraw = () => {
    setVisibleDraw(!visibleDraw);
  };
  const onToggleVisibleQual = () => {
    setVisibleQual(!visibleQual);
  };
  const onToggleVisibleDrawQual = () => {
    setVisibleDrawQual(!visibleDrawQual);
  };
  return (
    <section className={visible ? "sidebar" : "sidebar_hidden"}>
      <button
        onClick={onToggleVisible}
        className={visible ? "sidebar__btn" : "sidebar__btn_hidden"}
      >
        {visible ? <>&#8656;</> : <>&#8658;</>}
      </button>
      <div className="sidebar__title">World Cup</div>
      <ul className="sidebar__links">
        <li onClick={onToggleVisibleWC} className="link__dropdown">
          <span>Чемпионат мира</span>
          <span style={{ fontSize: 10 }}>
            {visibleWC ? <>&#9650;</> : <>&#9660;</>}
          </span>
        </li>
        <ul className={visibleWC ? "links" : "links_hidden"}>
          <li>
            <NavLink
              to={"/world-cup/group-stage"}
              className={({ isActive }) => (isActive ? "link_active" : "link")}
            >
              Групповой этап
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/world-cup/play-off"}
              className={({ isActive }) => (isActive ? "link_active" : "link")}
            >
              Плей-офф
            </NavLink>
          </li>
        </ul>
        <li onClick={onToggleVisibleDraw} className="link__dropdown">
          <span>Жеребьевка</span>
          <span style={{ fontSize: 10 }}>
            {visibleDraw ? <>&#9650;</> : <>&#9660;</>}
          </span>
        </li>
        <ul className={visibleDraw ? "links" : "links_hidden"}>
          <li>
            <NavLink
              to={"/draw/world-cup"}
              className={({ isActive }) => (isActive ? "link_active" : "link")}
            >
              Основного этапа
            </NavLink>
          </li>
          <li onClick={onToggleVisibleDrawQual} className="link__dropdown-qual">
            <span>Отборочного этапа</span>
            <span style={{ fontSize: 10 }}>
              {visibleDrawQual ? <>&#9650;</> : <>&#9660;</>}
            </span>
          </li>
          <li>
            <ul className={visibleDrawQual ? "links" : "links_hidden"}>
              {drawQualDraw.map((link) => {
                return (
                  <li key={link.id}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? "link-draw_active" : "link-draw"
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <li onClick={onToggleVisibleQual} className="link__dropdown">
          <span>Отборочный турнир</span>
          <span style={{ fontSize: 10 }}>
            {visibleQual ? <>&#9650;</> : <>&#9660;</>}
          </span>
        </li>
        <ul className={visibleQual ? "links" : "links_hidden"}>
          {qualLink.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "link_active" : "link"
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <li className="link__dropdown">
          <NavLink
            to={"/rating"}
            className={({ isActive }) => (isActive ? "link_active" : "link")}
          >
            Рейтинг команд
          </NavLink>
        </li>
        <li className="link__dropdown">
          <NavLink
            to={"/history"}
            className={({ isActive }) => (isActive ? "link_active" : "link")}
          >
            История
          </NavLink>
        </li>
        <li className="link__dropdown">
          <NavLink
            to={"/teams"}
            className={({ isActive }) => (isActive ? "link_active" : "link")}
          >
            Команды
          </NavLink>
        </li>
      </ul>

      <button onClick={onClick}>Новый сезон</button>
    </section>
  );
};
