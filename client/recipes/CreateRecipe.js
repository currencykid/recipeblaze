Template.CreateRecipe.events({
  'click .fa-close': function(){
    Session.set('createRecipe', false);  
  }
});
