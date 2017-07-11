/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.post('/mobile/custom/IncidentReport/indicents', function(req,res) {
		var result = {};
		var statusCode = 201;
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/IncidentReport/indicents', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					  "items":
						 [
						   {
							 "id": 100,
							 "title": "Leaking Water Heater",
							 "createdon": "2014-07-18 17:21:55 PST",
							 "contact": {
								 "name": "Lynn Adams",
								 "street": "45 O'Connor Street",
								 "city": "Ottawa",
								 "postalcode": "a1a1a1",
								"username": "johnbeta"
							 },
							 "status" : "New",
							 "priority" : "High",
							 "driveTime" : 30,
							 "imageLink": "storage/collections/2e029813-d1a9-4957-a69a-fbd0d7431d77/objects/6cdaa3a8-097e-49f7-9bd2-88966c45668f?user=lynn1014"
						   },
						  {
							 "id": 101,
							 "title": "Smoking Gun",
							 "createdon": "2014-07-18 17:21:55 PST",
							 "contact": {
								 "name": "Lynn Adams",
								 "street": "45 O'Connor Street",
								 "city": "Ottawa",
								 "postalcode": "a1a1a1",
								 "username": "johnbeta"
							 },
							 "status" : "In Progress",
							 "priority" : "Medium",
							 "driveTime" : 10,
							 "imageLink": "storage/collections/2e029813-d1a9-4957-a69a-fbd0d7431d77/objects/6cdaa3a8-097e-49f7-9bd2-88966c45668f?user=lynn1014"
						   }
						 ],
					   "uris":
						 [
							"/mobile/custom/incidentreport/incidents/100",
							 "/mobile/custom/incidentreport/incidents/101"
						  ],
						"etags":
						  [
							  "100",
							  "101"
						  ]
					};
			}
		}
		res.status(statusCode).send(result);
	});

};
