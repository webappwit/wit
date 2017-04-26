import DS from 'ember-data';

export default DS.Model.extend({
    nameSala: DS.attr('string'),
    adressSala: DS.attr('string'),
    fecha: DS.attr(),
    p1: DS.attr('p1'),
    p2: DS.attr('p2'),
    p3: DS.attr('p3'),
    p4: DS.attr('p4')

});