import Ember from 'ember';

export default Ember.Route.extend({
    moment: Ember.inject.service(),

    beforeModel() {
        this.get('moment').setLocale('es');
        this.get('moment').setTimeZone('Europe/Madrid');
    },

    model() {
        return Ember.RSVP.hash({
            spechlesses: this.store.findAll('spechless').then(results => results.sortBy('fecha')),
            votos: this.store.findAll('voto').then(results => results.sortBy('spechless'))
        });
    },
    setupController(controller, model) {
        controller.set('spechlesses', model.spechlesses);
        controller.set('votos', model.votos);
    }
});