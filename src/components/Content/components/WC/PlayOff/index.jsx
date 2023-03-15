import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Eight } from "./components/Eight";
import { FinalStage } from "./components/FinalStage";
import { QuaterFinal } from "./components/QuaterFinal";
import { SemiFinal } from "./components/SemiFinal";
import "./index.scss";

export const PlayOff = () => {
  const sheduleEight = useSelector((state) => state.playoffWC.shedule8);
  const sheduleQuaterFinal = useSelector((state) => state.playoffWC.shedule4);
  const sheduleSemiFinal = useSelector((state) => state.playoffWC.shedule2);
  const sheduleThird = useSelector((state) => state.playoffWC.sheduleThird);
  const sheduleFinal = useSelector((state) => state.playoffWC.sheduleFinal);
  const eighth = useSelector((state) => state.playoffWC.eighth);
  const quaterfinal = useSelector((state) => state.playoffWC.quaterfinal);
  const semifinal = useSelector((state) => state.playoffWC.semifinal);
  const third = useSelector((state) => state.playoffWC.third);
  const final = useSelector((state) => state.playoffWC.final);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "SHEDULE_EIGHTH", payload: eighth})
    dispatch({type: "SHEDULE_QUATER", payload: quaterfinal})
    dispatch({type: "SHEDULE_SEMIFINAL", payload: semifinal})
    dispatch({type: "SHEDULE_FINAL", payload: final})
    dispatch({type: "SHEDULE_THIRD", payload: third})
  }, [dispatch, eighth, quaterfinal, semifinal, final, third])

  return (
    <div className="world-cup">
      <div className="play-off">
        <Eight shedule={sheduleEight} />
        <QuaterFinal shedule={sheduleQuaterFinal} />
        <SemiFinal shedule={sheduleSemiFinal} />
        <FinalStage sheduleFinal={sheduleFinal} sheduleThird={sheduleThird} />
      </div>
    </div>
  );
};
