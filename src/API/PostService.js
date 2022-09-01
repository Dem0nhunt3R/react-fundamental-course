import axios from "axios";
import {baseUrl} from "../constants";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        return axios.get(baseUrl + '/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }

    static async getById(id) {
        return axios.get(`${baseUrl}/posts/${id}`)
    }

    static async getCommentsByPostId(id) {
        return axios.get(`${baseUrl}/posts/${id}/comments`)
    }
}
