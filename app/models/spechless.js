import DS from 'ember-data';

export default DS.Model.extend({
    nameSala: DS.attr('string'),
    adressSala: DS.attr('string'),
    busInfo: DS.attr('string'),
    metroInfo: DS.attr('string'),
    fecha: DS.attr('date'),
    p1: DS.attr('string'),
    p2: DS.attr('string'),
    p3: DS.attr('string'),
    p4: DS.attr('string')

});