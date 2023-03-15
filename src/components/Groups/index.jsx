import React, { useEffect, useState } from "react";
import "./index.scss";

export const Groups = ({ groups }) => {
  const [visible, setVisible] = useState(true)
  const [getGroups, setGetGroups] = useState([])
  useEffect(() => {
    setGetGroups(groups)
  }, [groups])
  return (
    <>
      <button className="qual-groups__btn" onClick={() => setVisible(!visible)}>Скрыть таблицу</button>
      <div className={visible ? "qual-groups" : "qual-groups_hidden"}>
      {getGroups.map((group, idx) => {
        const num = idx + 1;
        return (
          <div key={idx + 1} className={"qual-group qual-group" + num}>
            <table className="table group__table">
              <thead>
                <tr>
                  <th className="table__number">№</th>
                  <th className="table__text">Группа {idx + 1}</th>
                  <th className="table__number">И</th>
                  <th className="table__number">В</th>
                  <th className="table__number">Н</th>
                  <th className="table__number">П</th>
                  <th className="table__number">ЗГ</th>
                  <th className="table__number">ПГ</th>
                  <th className="table__number">Раз</th>
                  <th>Очки</th>
                </tr>
              </thead>

              {group.map((team, idx) => {
                return (
                  <thead key={idx + 1}>
                    <tr>
                      <td>{idx + 1}</td>
                      <td className="table__text">
                        <img className="table__flag" src={team.flag} alt="" />
                        {team.name}
                      </td>
                      <td>{team.game}</td>
                      <td>{team.win}</td>
                      <td>{team.draw}</td>
                      <td>{team.lose}</td>
                      <td>{team.gf}</td>
                      <td>{team.ga}</td>
                      <td>{team.gd}</td>
                      <td>{team.points}</td>
                    </tr>
                  </thead>
                );
              })}
            </table>
          </div>
        );
      })}
    </div>
    </>
    
  );
};
