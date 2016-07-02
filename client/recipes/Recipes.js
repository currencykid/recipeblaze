//Meteor.subscribe('recipes'); 

Template.Recipes.onCreated(function(){
  let self = this; 
  self.autorun(function(){
    self.subscribe('recipes');
  });
});

Template.Recipes.helpers({
  recipes: ()=>{
    return Recipes.find({}); 
  }
});

