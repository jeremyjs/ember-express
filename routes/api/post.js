var mongoose = require('mongoose');
var Post = require('../../models/post');

module.exports = {

  addPost: function(req, res) {
    var post = new Post(req.body.post);
    post.save(function(err) {
      if(err) res.send(err);
      else    res.json({ post: post });
    });
  },

  getAllPosts: function(req, res) {
    Post.find(function(err, posts) {
      if(err) res.send(err);
      else    res.json({ posts: posts });
    });
  },

  getSinglePost: function(req, res, id) {
    Post.findById(id, function(err, post) {
      if(err) res.send(err);
      else    res.json({ post: post });
    });
  },

  updatePost: function(req, res, id) {
    Post.findByIdAndUpdate(id, { $set: req.body.post }, function(err, post) {
      if(err) res.send(err);
      else    res.json({ post: post });
    });
  },

  deletePost: function(req, res, id) {
    Post.findByIdAndRemove(id, function(err) {
      if(err) res.send(err);
      else    res.sendStatus(200);
    });
  }

};
