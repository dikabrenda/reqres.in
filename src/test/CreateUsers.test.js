import users from "../routes/users.api";
import { assert } from "chai";
import { describe, test } from "mocha";
import * as data from "../data/users.data";
import * as schema from "../schemas/CreateUsers.schema.json"
import { expect } from "../helper/schema.helper";

describe('As a client, i want to create new user', () => {

    test('Client sent a POST request /api/users', async () => {
        const response = await users.POST(data.NEW_USERS)
        assert.equal(response.status, 201)
        assert.equal(response.headers['content-type'], 'application/json; charset=utf-8')
        assert.hasAllKeys(response.data, ['name', 'job', 'id', 'createdAt'])
        expect.JsonSchema(response, schema)
    })
})