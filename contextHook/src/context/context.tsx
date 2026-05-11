import { createContext } from "react";
import type{ CountType, UserType } from "../types/types";

export const CountContext = createContext<CountType | null>(null)

export const UserContext = createContext<UserType | null>(null)