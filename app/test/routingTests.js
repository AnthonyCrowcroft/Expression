/**
 * Created by Anthony on 31/01/2015.
 */

var request = require('supertest');

var app = require('./../../server.js');

describe('Request to the root path', function(){

    it('Returns a 200 status code', function(done){
        request(app)
            .get('/pages/contact')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error){
                if(error) throw error;
                done();
            });
    });
});




