import { useSelector } from "react-redux";

export const getCurrentCity = (state) => state.position.currentCity;
export const getFullData = (state) => state.position.data;
