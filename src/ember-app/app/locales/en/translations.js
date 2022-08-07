import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS22ВидПоддержкиLForm from './forms/i-i-s-i-s-s22-вид-поддержки-l';
import IISISS22УсловиеLForm from './forms/i-i-s-i-s-s22-условие-l';
import IISISS22ФормаLForm from './forms/i-i-s-i-s-s22-форма-l';
import IISISS22ВидПоддержкиEForm from './forms/i-i-s-i-s-s22-вид-поддержки-e';
import IISISS22УсловиеEForm from './forms/i-i-s-i-s-s22-условие-e';
import IISISS22ФормаEForm from './forms/i-i-s-i-s-s22-форма-e';
import IISISS22ВидПоддержкиModel from './models/i-i-s-i-s-s22-вид-поддержки';
import IISISS22СписокУсловийModel from './models/i-i-s-i-s-s22-список-условий';
import IISISS22УсловиеModel from './models/i-i-s-i-s-s22-условие';
import IISISS22ФормаModel from './models/i-i-s-i-s-s22-форма';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s22-вид-поддержки': IISISS22ВидПоддержкиModel,
    'i-i-s-i-s-s22-список-условий': IISISS22СписокУсловийModel,
    'i-i-s-i-s-s22-условие': IISISS22УсловиеModel,
    'i-i-s-i-s-s22-форма': IISISS22ФормаModel
  },

  'application-name': 'I s s22',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s22',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s22',
          title: 'I s s22'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s22': {
          caption: 'ISS22',
          title: 'ISS22',
          'i-i-s-i-s-s22-вид-поддержки-l': {
            caption: 'Вид поддержки',
            title: ''
          },
          'i-i-s-i-s-s22-форма-l': {
            caption: 'Форма',
            title: ''
          },
          'i-i-s-i-s-s22-условие-l': {
            caption: 'Условие',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s22-вид-поддержки-l': IISISS22ВидПоддержкиLForm,
    'i-i-s-i-s-s22-условие-l': IISISS22УсловиеLForm,
    'i-i-s-i-s-s22-форма-l': IISISS22ФормаLForm,
    'i-i-s-i-s-s22-вид-поддержки-e': IISISS22ВидПоддержкиEForm,
    'i-i-s-i-s-s22-условие-e': IISISS22УсловиеEForm,
    'i-i-s-i-s-s22-форма-e': IISISS22ФормаEForm
  },

});

export default translations;
