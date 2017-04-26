import Ember from 'ember';

export default Ember.Route.extend({
    moment: Ember.inject.service(),

    beforeModel() {
        this.get('moment').setLocale('es');
        this.get('moment').setTimeZone('Europe/Madrid');
    },
    /*    model() {
            return Ember.RSVP.hash({
                spechless: this.store.findAll('spechless').then(results => results.sortBy('fecha')),
                votos: this.store.findAll('voto').then(results => results.sortBy('spechless'))
            });
        },

        setupController(controller, model) {
            //        controller.set('spechless', model.spechless);
            //        controller.set('votos', model.votos);
        }*/
});