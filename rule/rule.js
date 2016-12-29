module.exports = {
	summary:function(){
		return "just a test, ^_^";
	},
	replaceServerResDataAsync: function(req, res, serverResData, callback){
		if (req.url.indexOf('/users/2') !== -1) {
			var newServerResData = serverResData.toJSON();
			newServerResData.description = 'just a test for auto proxy';
			callback(JSON.stringify(newServerResData));
		} else {
			callback(serverResData);
		}
	}
};
