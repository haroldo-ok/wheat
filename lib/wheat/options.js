var logger = require('nlogger').logger(module);

var Options = {
	configure: function(options) {
		var options = options || {};
		for (var key in options) {
			if (options.hasOwnProperty(key)) {
				Options[key] = options[key];
			}
		}
		
		logger.debug("Current options: {}", Options);
	}
}

module.exports = Options;