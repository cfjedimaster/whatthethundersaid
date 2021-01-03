
module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("style.css");
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("images");
	/*
	eleventyConfig.addPassthroughCopy("./manifest.json");
	eleventyConfig.addPassthroughCopy("./favicon.ico");
	eleventyConfig.addPassthroughCopy("./robots.txt");
	eleventyConfig.addPassthroughCopy("./ads.txt");
	eleventyConfig.addPassthroughCopy("./_redirects");
	eleventyConfig.addPassthroughCopy("./*.png");
	eleventyConfig.addPassthroughCopy("./service-worker.js");
	*/

};

