import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  описание: DS.attr('string'),
  форма: DS.belongsTo('i-i-s-i-s-s22-форма', { inverse: null, async: false }),
  списокУсловий: DS.hasMany('i-i-s-i-s-s22-список-условий', { inverse: 'видПоддержки', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s22-вид-поддержки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-i-s-s22-вид-поддержки.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  форма: {
    descriptionKey: 'models.i-i-s-i-s-s22-вид-поддержки.validations.форма.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокУсловий: {
    descriptionKey: 'models.i-i-s-i-s-s22-вид-поддержки.validations.списокУсловий.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидПоддержкиE', 'i-i-s-i-s-s22-вид-поддержки', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    форма: belongsTo('i-i-s-i-s-s22-форма', 'Форма', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    списокУсловий: hasMany('i-i-s-i-s-s22-список-условий', 'Список условий', {
      наименование: attr('Наименование', { index: 0 }),
      условие: belongsTo('i-i-s-i-s-s22-условие', 'Условие', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ВидПоддержкиL', 'i-i-s-i-s-s22-вид-поддержки', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    форма: belongsTo('i-i-s-i-s-s22-форма', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
