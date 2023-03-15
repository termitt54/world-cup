import React  from "react";
import { useSelector } from "react-redux";

export const PageHistory = () => {
  const history = useSelector((state) => state.history.prize);
  return (
      <table className="history">
        <thead style={{order: "1"}}>
          <tr>
            <th className="num">Сезон</th>
            <th className="gold">Золото</th>
            <th className="serebro">Серебро</th>
            <th className="bronze">Бронза</th>
          </tr>
        </thead>

        {history.map((prz, idx) => {
          return (
            <tbody >
                <tr className="prize history__prize">
                    <td className="prize__num">{idx + 1}</td>
                    <td className="prize__gold">
                        <img className="prize__flag" src={prz.gold.flag} alt="" />
                        {prz.gold.name}</td>
                    <td className="prize__serebro">
                        <img className="prize__flag" src={prz.serebro.flag} alt="" />
                        {prz.serebro.name}</td>
                    <td className="prize__bronze">
                        <img className="prize__flag" src={prz.bronze.flag} alt="" />
                        {prz.bronze.name}</td>
                </tr>
            </tbody>
          )
        })}
      </table>
  );
};
