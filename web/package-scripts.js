/* eslint-disable max-len */
const _ = require("lodash");

const createAppConfig = appName => {
	const lint = `${appName}:lint`;
	const watch = `${appName}:watch`;
	const build = `${appName}:build`;

	return {
		[lint]: `eslint apps/${appName} --ext .js,.jsx`,
		[watch]: `cross-env APP_NAME=${appName} webpack --progress --hide-modules --watch`,
		[build]: `rimraf build/${appName} && cross-env APP_NAME=${appName} NODE_ENV=production webpack --progress --hide-modules`
	};
};

const config = {};

const applications = ["main"];

applications.forEach(app => {
	_.assignIn(config, createAppConfig(app));
});

const buildKeys = Object.keys(config).filter(key => /^.+:build$/.test(key));
const buildAll = buildKeys.map(key => `nps ${key}`).join(" && ");

_.assignIn(config, { buildAll });

module.exports = {
	scripts: config
};
