import chai from 'chai';
import http from 'chai-http';

import User from '../server/models/user';

import { server } from '../server/index';
chai.use(http);

describe('#Check login/sign-up validation request', () => {
    beforeAll(done => {
        User.deleteMany({})
            .then(() => done())
    });

    it('Check that new user registration saved with needs fields', done => {
        chai.request(server)
            .post('/auth/sign-up')
            .send({
                username: 'some_user',
                password: 'some_pass'
            })
            .end((err, res) => {
                const body = res.body;
                expect(res.status).toBe(200);
                expect(typeof body).toBe('object');
                expect(body).toHaveProperty('id');

                done();
            })
    });

    it('Throw error if require fields will be an empty', done => {
        chai.request(server)
            .post('/auth/sign-up')
            .send({})
            .end((err, res) => {
                const body = res.body;
                expect(res.status).toBe(400);
                expect(typeof body).toBe('object');
                expect(body.errors).toHaveProperty('username', 'Field can not be blank');
                expect(body.errors).toHaveProperty('password', 'Field can not be blank');

                done();
            });
    });

    it('Throw error if user is already exist', done => {
        chai.request(server)
            .post('/auth/sign-up')
            .send({
                username: 'some_user',
                password: 'some_pass'
            })
            .end((err, res) => {
                const body = res.body;
                expect(res.status).toBe(500);
                expect(typeof body).toBe('object');
                expect(body.errors).toHaveProperty('globalError', 'User is already exist')

                done();
            })
    });

    it('Throw error if while login incorrect username', done => {
        chai.request(server)
            .post('/auth/login')
            .send({
                username: 'wrong_some_user',
                password: 'some_pass'
            })
            .end((err, res) => {
                const body = res.body;
                expect(res.status).toBe(500);
                expect(typeof body).toBe('object');
                expect(body.errors).toHaveProperty('globalError', 'User is not exist')

                done();
            })
    });

    it('Throw error if while login incorrect password', done => {
        chai.request(server)
            .post('/auth/login')
            .send({
                username: 'some_user',
                password: 'wrong_some_pass'
            })
            .end((err, res) => {
                const body = res.body;
                expect(res.status).toBe(500);
                expect(typeof body).toBe('object');
                expect(body.errors).toHaveProperty('globalError', 'Password is incorrect')

                done();
            })
    });

    it('Login with correct fields', done => {
        chai.request(server)
            .post('/auth/login')
            .send({
                username: 'some_user',
                password: 'some_pass'
            })
            .end((err, res) => {
                const body = res.body;
                expect(res.status).toBe(200);
                expect(typeof body).toBe('object');
                expect(body).toHaveProperty('id');

                done();
            })
    });
});