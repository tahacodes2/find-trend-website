// module.exports = (eleventyConfig) => {
// 	// Set directories to pass through to the dist folder

// 	eleventyConfig.addWatchTarget("./src/sass/");
// 	eleventyConfig.addPassthroughCopy("./src/css");
// 	return {
// 		dir: {
// 			input: "src",
// 			output: "dist",
// 		},
// 	};
// };

//purge css import


const purgeCssPlugin = require("eleventy-plugin-purgecss");


module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/images/");

	eleventyConfig.addWatchTarget("./src/sass/");

	eleventyConfig.addPassthroughCopy("./src/css/");

	eleventyConfig.addPassthroughCopy("./src/js/");


// add alias intead of the full url
	eleventyConfig.addLayoutAlias("base", "layouts/base.html");


	// purge css  11ty config

	eleventyConfig.addPlugin(purgeCssPlugin, {
		// Optional: Specify the location of your PurgeCSS config
		config: "./purgecss.config.js",
	
		// Optional: Set quiet: true to suppress terminal output
		quiet: false,
	  });

			//TODO for big project use this condition 
	  // production === built command ' npm buitd ' for our project
			// if (process.env.NODE_ENV === "production") {
			// 	eleventyConfig.addPlugin(purgeCssPlugin);
			// }


	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
