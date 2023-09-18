import axios from "axios" //serve para conectar po front com o back

export const server = axios.create({
  baseURL: "http://localhost:3333",
})