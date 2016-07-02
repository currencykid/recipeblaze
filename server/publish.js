Meteor.publish('recipes', function(){
  // only current user recipes available to them
  return Recipes.find({
    author: this.userId
  }); 
});

Meteor.publish('singleRecipe', function(id){
  check(id,String); 

  return Recipes.find({ _id: id }); 
});
