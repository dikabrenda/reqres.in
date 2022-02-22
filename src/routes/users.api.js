import testBase from "../config/testBase.service";

const USERS = `/api/users`

const users = {
    GETLIST: (params) => testBase.get(`${USERS}?${params}`),
    POST: (data) => testBase.post(`${USERS}`, data)
}

export default users;