import Ember from 'ember';

export default Ember.Controller.extend({
    languages: [{
        name: 'ES',
        code: 'es',
        flagUrl: '/images/Spain.jpg'
    }, {
        name: 'UK',
        code: 'en',
        flagUrl: '/images/United_Kingdom.jpg'
    }],

    selectedLanguage: Ember.computed('languages', 'locale',
        function() {
            this.get('moment').setLocale(this.get('locale'));
            return this.languages.findBy('code', this.get('locale'));
        }),

    i18n: Ember.inject.service(),

    moment: Ember.inject.service(),

    edicionActual: Ember.computed('model',
        function() {
            return "2017-05-06 20:00";
        }),


    locale: Ember.computed.alias('i18n.locale'),

    actions: {
        changeLocale(param) {
            this.get('i18n').set('locale', param);
            this.get('moment').setLocale(param);
            this.toggleProperty('dropdownOpen');
        }

    }
});