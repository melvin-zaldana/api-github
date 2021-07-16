const obtenerDatosDeUsuario = require('./../index').obtenerDatosDeUsuario;

const expect = require('chai').expect;
const melvinzaldana = require('./respuestas/melvin-zaldana')
var nock = require ('nock');

describe('Test de datos de diferentes usuarios de GitHub', () => {
    beforeEach(()=>{
        nock('https://api.github.com')
        .get('/users/melvin-zaldana')
        .reply(200,melvinzaldana);
    })
    it('Obtener datos del usuario "melvin-zaldana"',() => {
        return obtenerDatosDeUsuario('melvin-zaldana').then(
            respuesta => {
                //Probar el tipo de variable que obtenemos de respuesta. Tiene que se un objeto
                expect(typeof respuesta).to.equal('object');

                //Comprobar que el usuario del api es melvin-zaldana
                expect(respuesta.login).to.equal('melvin-zaldana');

                //Comprobar que el ID del api sea un número
                expect(typeof respuesta.id).to.equal('number');

                //Comprobar que seguidores y seguidos sean números
                expect(typeof respuesta.followers).to.equal('number');
                expect(typeof respuesta.following).to.equal('number');
            }
        )
    });
})
