const path = require("path");

module.exports = [
	{
		entry: './site1/scripts/page1/index.ts',
		output: {
			filename: './site1/build/bundle.js'
		},
		resolve: {
			extensions: ['', '.ts', '.js'],
			root: path.resolve("site1"),
			alias: {
				shared: path.resolve("shared", "scripts")
			}
		},
		module: {
			loaders: [
				{ test: /\.tsx?$/, loader: 'ts' }
			]
		},
	},
	{
		entry: './site2/scripts/page2/index.ts',
		output: {
			filename: './site2/build/bundle.js'
		},
		resolve: {
			extensions: ['', '.ts', '.js'],
			root: path.resolve("site2"),
			alias: {
				shared: path.resolve("shared", "scripts")
			}
		},
		module: {
			loaders: [
				{ test: /\.tsx?$/, loader: 'ts' }
			]
		},
	}
];