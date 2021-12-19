/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "./variables.module.scss";`,
        
      }
  }
  return defaultConfig;
}