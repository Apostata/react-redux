var webpack = require('webpack');//para adicionar os plugins
var path = require('path');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx',
	],

	externals:{
		jquery:'jQuery'
	},

	output: {
	    path: __dirname,
	    filename: './public/bundle.js'
	},

	resolve: {
	    root: __dirname,
	    alias: {
	      	aplicationStyles: 'app/styles/app.scss'  
	    },
	    extensions: ['', '.js', '.jsx']
	},

  	module: {
	    loaders: [
	      {
	        loader: 'babel-loader',
	        query: {
	          presets: ['react', 'es2015', 'stage-0']
	        },
	        test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/
	      }
	    ]
  	},

  	sassLoader:{
  		includePaths:[
  			path.resolve(__dirname, './node_modules/foundation-sites/scss')
  		]
  	},

  	devtool: 'cheap-module-eval-source-map',
  	//devtool: 'cheap-module-eval',

	plugins: [
	  // Minify assets.
		/*new webpack.optimize.UglifyJsPlugin({
		    compress: {
		      warnings: false // https://github.com/webpack/webpack/issues/1496
		    }
		}),*/

		/*new webpack.DefinePlugin({
	    	'process.env': {
		      'NODE_ENV': JSON.stringify('production')
		    }
	  	}),*/

		new webpack.ProvidePlugin({
			"$": 'jqeury',
			"jQuery": 'jquery'
		})
	]
};
