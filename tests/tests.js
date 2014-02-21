var assert = chai.assert;

suite('Pruebas de deteccion de parseador de ficheros INI', function() {
  
test('Blancos', function() {
        var tokens = lexer(' ');
assert.equal(tokens[0].type,'blanks');
    });

    test('Cabeceras', function() {
        var tokens = lexer('[HEADER] ');
assert.equal(tokens[0].type,'header');
    });
    
test('Comentarios', function() {
        var tokens = lexer('; Comprobando comentario ');
assert.equal(tokens[0].type,'comments');
    });

    test('Asignaciones', function() {
        var tokens = lexer('Variable = valor');
assert.equal(tokens[0].type,'nameEqualValue');
    });
    
    test('Errores', function() {
        var tokens = lexer('!!@%%***¿¿*+');
assert.equal(tokens[0].type,'error');
    });
    
});