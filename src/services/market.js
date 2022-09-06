import api from "./base";

//list
export function getMarkets() {
  return api.get("/markets");
}

// product
export function getIdMarkets(id){
  return api.get(`/markets/${id}`)
} 

// cart 
export function getCart() {
  return api.get("/cart");
}
export function addProduct(payload) {
  return api.post("/cart", payload);
}
export function removeProduct(id) {
  return api.delete(`/cart/${id}`);
}

//bought
export function getBought() {
  return api.get("/bought");
}
export function addBought(payload) {
  return api.post("/bought", payload);
}
export function removeBought(id) {
  return api.delete(`/bought/${id}`);
}





