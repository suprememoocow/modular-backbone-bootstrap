return {
  index: function(req, res){
    res.send('forum index');
  },

  new: function(req, res){
    res.send('new forum');
  },

  create: function(req, res){
    res.send('create forum');
  },

  show: function(req, res){
    res.send('show forum ' + req.forum.title);
  },

  edit: function(req, res){
    res.send('edit forum ' + req.forum.title);
  },

  update:  function(req, res){
    res.send('update forum ' + req.forum.title);
  },

  destroy: function(req, res){
    res.send('destroy forum ' + req.forum.title);
  },

  load: function(id, fn){
    process.nextTick(function(){
      fn(null, { title: 'Ferrets' });
    });
  }
};