import { UsersDataState } from "../shared/types/users.type";
import { CounterState } from "./counter/counter.state";

export interface AppState {
    counter: CounterState
    users: UsersDataState
}