import { deleteCookie, setCookie } from "@/helpers/Cookie";
import axios from "axios";
import { commonAxios } from "./Api";

type typeTokens = {
  access_token: string
  refresh_token: string
}

class Autohrization {
  password: string
  username: string

  constructor(username: string, password: string) {
    this.password = password;
    this.username = username
  }

  validate() {
  }

  async execute(): Promise<typeTokens> {
    const { data }  = await commonAxios({
      url: "http://localhost:3002/sign_in",
      method: "POST",
      params: {
        username: this.username,
        password: this.password
      }
    });

    return data;
  }

  saveTokens( tokens: typeTokens ) {
    localStorage.removeItem("access_token");
    localStorage.setItem("access_token", tokens.access_token);

    deleteCookie("refresh_token");
    setCookie("refresh_token", tokens.refresh_token, 3600 * 24 * 15);
  }
}

export default Autohrization;