import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s22',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s22',
          title: 'I s s22'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
