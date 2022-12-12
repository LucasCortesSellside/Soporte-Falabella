
var convert = require('xml-js');

// Este es el body que estoy intentando enviar, esta en formato XML pero con un codigo lo cambio a formato JSON
var xml =
'<?xml version="1.0" encoding="UTF-8" ?>'+
'<Request>'+
'<Product>'+
   '<SellerSku>113887572</SellerSku>'+
    '<ParentSku/>'+
    '<Name>Silla de Oficina Niza Black</Name>'+
    '<PrimaryCategory>141</PrimaryCategory>'+
    '<Description>La Silla modelo Niza Black es una silla ideal para usar en oficinas y en el hogar'+
    'Base de pvc reforzado con ruedas giratorias, apoyabrazos confeccionados en pvc de alta resistencia, respaldo en tela Mesh y base del asiento con relleno de alta densidad cubierta con un textil resistente.'+
    'Es práctica, cómoda, joven y dinámica en su diseño.'+
    'Cuenta con nivelación de altura. Peso máximo soportado: 120 kg.'+
    'Basic Store te trae la silla Niza Black ideal para usar en tu escritorio. Es práctica, cómoda, joven y dinámica en su diseño.'+
    'Material del respaldo: marco de pvc con mallaMaterial del posa brazos: pvc.Material del asiento: polimadera con espuma y cubierta textil'+
    'Material de la base: base de estrella de metal de 280 mm con rueda de plástico</Description>'+
    '<Brand>GENERICO</Brand>'+
    '<ShipmentType>dropshipping</ShipmentType>'+
    '<ProductId>113887572</ProductId>'+
    '<Condition>new</Condition>'+
    '<BusinessUnits>'+
        '<BusinessUnit>'+
            '<OperatorCode>facl</OperatorCode>'+
            '<Price>92990</Price>'+
            '<Stock>5</Stock>'+
            '<Status>active</Status>'+
        '</BusinessUnit>'+
    '</BusinessUnits>'+
'</Product>'+
'</Request>';

//Este es el codigo para transformarlo a JSON
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});

//Variable para fecha en iso
 const tiempoTranscurrido = Date.now();
 const hoy = new Date(tiempoTranscurrido);
 hoy.toISOString();

//url linio
 const sdk = require('api')('@linio-developers-hub/v400.0.0#3qkvts42l5cvcn1a');


 //productCreate para falabella seller center
 sdk.productcreate({Action: 'ProductCreate'}, {
   Format: 'JSON',
   Action: 'ProductCreate',
   accept: result1,
   Timestamp:hoy,
   UserID:'cio@sellside.cl',
   Version:'1.0',
   Signature:'signatureKey',
 })

   .then(({ data }) => console.log(data))
   .catch(err => console.error(err));