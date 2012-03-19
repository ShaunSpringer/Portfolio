
/*
  BLOG DATABASE FILE
  Handles interaction with the blog 
  
  our data format will be as follows:	  
 	
 	{
		id: 0,
		uid: 0,
		title: 'Title',
		created: Date,
		body: 'Body',			
		keywords: 'Keyword 1, keyword 2, etc',
		comments: [{
			id: 0,
			uid: 0,
			comment: 'User Comment',
			created: Date
		}]
	}
	
*/
var BlogDB = function(){};
	
var testData = [];

/**
 *  Gets every post from the database
 */
BlogDB.prototype.getAll = function(callback){	
	callback(testData);
};

/**
 *  Adds blog post to database
 */
BlogDB.prototype.addPost = function(post, callback){	
	testData.push(post);
	
	if (callback)
	{
		callback(null);
	}
};

/**
 *  Bootstraps data
 */
new BlogDB().addPost({
	id: 0,
	uid: 1,
	title: 'Test Title',
	date: new Date(),
	body: 'Body of my post',			
	keywords: 'Test, This, Blog',
	comments: [{
		id: 0,
		uid: 1,
		comment: 'User Comment 1',
		date: new Date()
	},{
		id: 1,
		uid: 1,
		comment: 'User Comment 2',
		date: new Date()
  }]
});
//store in exports
exports.BlogDB = BlogDB;