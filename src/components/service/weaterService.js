// import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
class Weater {
  api = "43d814a4b6b955e70bc41c04b7eb8671";
  get api() {
    return this.api;
  }
}
export default new Weater();
