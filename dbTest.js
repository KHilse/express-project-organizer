var db = require('./models')

db.project.findOne({
  where: { id: 1 },
  include: [db.category]
}).then(function(project) {
  // by using eager loading, the project model should have a categories key
  console.log(project.categories)

  // a createCategory function should be available to this model
  project.createCategory({ name: 'node' }).then(function(category) {
    console.log(category.get())
  })
})