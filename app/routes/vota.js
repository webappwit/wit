import Ember from 'ember';

export default Ember.Route.extend({
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