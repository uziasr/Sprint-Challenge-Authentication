const request = require('supertest')

const server = require('./server')


const db = require('../database/dbConfig')
const {insert, remove, get, findByID} = require('../users/users-model')

describe('server', function(){
    describe('POST /register', function(){
        beforeEach(async () => {
            await db("users").truncate();
          });
        it("should return 201", function(){
        return request(server)
            .post('/api/auth/register').send({username:"uzias", password:"12345"})
            .then(res=>{
                console.log(res.type)
                expect(res.status).toBe(201)
            })
        })
    })
})

describe('server',function(){
    describe('POST /register', function(){
        it("should return an object", function(){
        return request(server)
            .post('/api/auth/register').send({username:"uzias2", password:"12345"})
            .then(res=>{
                console.log(res.type)
                expect(res.type).toMatch(/json/i)
            })
        })
    })
    describe('POST /login', function(){
        it("should return a status 200 upon success", function(){
        return request(server)
            .post('/api/auth/login').send({username:"uzias2", password:"12345"})
            .then(res=>{
                console.log(res.type)
                expect(res.status).toBe(200)
            })
        })
    })
    describe('POST /login', function(){
        it("should return an object with message and token", function(){
        return request(server)
            .post('/api/auth/login').send({username:"uzias2", password:"12345"})
            .then(res=>{
                // global.Headers = ()=>{ res.headers.authorization = res.body.token}
                console.log(res.type)
                expect(res.body).toHaveProperty('token')
            })
        })
    })
    describe('GET /', function(){
        it("should be denied access", function(){
        return request(server)
            .get('/api/jokes/')
            .then(res=>{
                console.log(res.type)
                expect(res.status).toBe(401)
            })
        })
    })
    describe('GET /', function(){
        it("should be denied access", function(){
        return request(server)
            .get('/api/jokes/')
            .then(res=>{
                expect(res.body.you).toEqual('shall not pass!')
            })
        })
    })
})


//.toHaveProperty('token')