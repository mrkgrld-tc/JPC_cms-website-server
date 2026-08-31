'use strict';

/**
 * news-and-update service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-update.news-and-update');
