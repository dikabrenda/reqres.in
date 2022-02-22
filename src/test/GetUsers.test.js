import users from "../routes/users.api";
import { assert } from "chai";
import { describe, test } from "mocha";
import {queryParams} from "../helper/lib"
import * as data from "../data/users.data"


describe('As a client, i want to get list of user', () => {

    test('Client sent GET request /api/users/:UserId', async () => {
        const params = queryParams(data.PAGE)
        const response = await users.GETLIST(params)
        assert.equal(response.status, 200)
        assert.equal(response.data.page, 1)
    })
})