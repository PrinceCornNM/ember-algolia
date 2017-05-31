import Ember from 'ember';
import config from '../config/environment';

const { set } = Ember;

export function initialize( appInstance ) {
  if (typeof FastBoot !== 'undefined') {
    const service = appInstance.lookup('service:algolia');
    const algoliaConfig = config['ember-algolia'];

    set(service, 'client', algoliasearch(algoliaConfig.algoliaId, algoliaConfig.algoliaKey));
  }

}

export default {
  name: 'algolia-config',
  initialize
};
