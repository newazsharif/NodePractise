var MeetUp = require('../model/meetUp');
module.exports.create = function(req,res)
{
	console.log(req.body);
	var meetUp = new MeetUp(req.body);
	meetUp.save(function(err,result)
		{
			res.json(result);
		});
}
module.exports.getAll = function(req,res)
{
	MeetUp.find(function(err,result)
	{
		res.json(result);
	});
}