import api from "./base";

export function getMarkets() {
  return api.get("/markets");
}

export function getIdMarkets(id){
  return api.get(`/markets/${id}`)
}
