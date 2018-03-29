const path=require("path");
//css分离
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin=require("uglifyjs-webpack-plugin");
module.exports={
	entry:{
		index:'./src/main.js',
	},//入口文件
	output:{
		filename:'js/[name].bundle.js',//打包文件名字
		path:path.resolve(__dirname,'dist'),//打包输出路径
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template:'./index.html',
			minify:{
				removeComments:false
			}
		}),
		//分离css
		new ExtractTextPlugin({
			filename: 'css/[name].[chunkhash].css',//css,js加chunkhash
			allChunks: true,
		}),
		//压缩js
		new UglifyJsPlugin(),
	],
	// 提取共同代码
	optimization: {
		runtimeChunk: {
			name: "common"
		},
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all"
				}
			}
		}
	},
	module:{
		rules:[{
			//顺序很重要，不要写乱了
			test:/\.css$/,//匹配以.css结尾的
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: {
					loader:"css-loader",
					options:{
						minimize:true,//压缩
					}
				},

			})
		},
			{
				test:/\.js$/,
				exclude:/(node_modules)/,//排除第三方包
				use:{
					loader:'babel-loader',
					options:{
						presets:['env']
					}
				}
			},
			{
				test:/\.vue$/,
				use:[
					'vue-loader'
				]
			}
		],
	}
};
