import api from "./base";

export function getMarkets() {
  return api.get("/markets");
}
