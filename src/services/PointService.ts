import axios from "axios";

export default class PointService {
  static async get() {
    try {
      const { data } = await axios.get<any>("/api/point");
      return data;
    } catch (err: any) {
      console.log(err)
    }
  }
}
