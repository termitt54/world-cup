import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { drawReducer } from "./drawReducer";
import { historyReducer } from "./historeReducer";
import { qualsReducer } from "./qualsReducer";
import { qualsStackReducer } from "./qualsStackReducer";
import { sheduleReducer } from "./sheduleReducer";
import { teamsReducer } from "./teamsReducer";
import { drawWCReducer } from "./WC/drawWCReducer";
import { groupsWCReducer } from "./WC/groupsWCReducer";
import { playoffWCReducer } from "./WC/playoffWCReducer";
import { sheduleWCReducer } from "./WC/sheduleWCReducer";
import { teamWCReducer } from "./WC/teamWCReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['teams', 'history']
  }

const rootReducer = combineReducers(
    {
        teams: teamsReducer,
        draw: drawReducer,
        quals: qualsReducer,
        qualsStack: qualsStackReducer,
        shedule: sheduleReducer,

        teamWC: teamWCReducer,
        drawWC: drawWCReducer,
        groupsWC: groupsWCReducer,
        sheduleWC: sheduleWCReducer,
        playoffWC: playoffWCReducer,

        history: historyReducer,
    }
)

const persistedReducers = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducers)
export const persistor = persistStore(store)