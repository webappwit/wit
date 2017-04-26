import DS from 'ember-data';

export default DS.Model.extend({
    spechless: DS.attr('string'),
    p1: DS.attr('boolean'),
    p2: DS.attr('boolean'),
    p3: DS.attr('boolean'),
    p4: DS.attr('boolean')
});