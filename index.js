/**
 * External dependencies
 */
const { join } = require("path");

module.exports = {
	defaultValues: {
		slug: "richtext-block",
		namespace: "mkaz",
		author: "Marcus Kazmierczak",
		category: "text",
		title: "RichText Block",
		description: "A Gutenberg block template with a RichText field.",
		dashicon: "hammer",
		attributes: {
			content: {
				type: "string",
				source: "html",
				selector: "div",
			},
		},
		supports: {
			html: false,
		},
		npmDependencies: [
			"@wordpress/block-editor",
			"@wordpress/blocks",
			"@wordpress/components",
			"@wordpress/i18n",
		],
	},
	templatesPath: join(__dirname, "templates"),
	assetsPath: join(__dirname, "assets"),
};
