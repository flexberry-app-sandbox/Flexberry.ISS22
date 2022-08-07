import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s22.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s22.title'),
          children: [{
            link: 'i-i-s-i-s-s22-вид-поддержки-l',
            caption: i18n.t('forms.application.sitemap.i-s-s22.i-i-s-i-s-s22-вид-поддержки-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s22.i-i-s-i-s-s22-вид-поддержки-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-i-s-s22-форма-l',
            caption: i18n.t('forms.application.sitemap.i-s-s22.i-i-s-i-s-s22-форма-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s22.i-i-s-i-s-s22-форма-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-i-s-s22-условие-l',
            caption: i18n.t('forms.application.sitemap.i-s-s22.i-i-s-i-s-s22-условие-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s22.i-i-s-i-s-s22-условие-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})