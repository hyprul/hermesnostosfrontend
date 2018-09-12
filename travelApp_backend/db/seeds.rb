# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


alex = Traveler.create(name:"alex", picture_url:"blah", age:27)

date = DateTime.parse("26/12/2017")

pics = [
  "https://loremflickr.com/g/320/240/thailand",
  "https://loremflickr.com/g/320/240/bangkok",
  "https://loremflickr.com/g/320/240/changmai",
  "https://loremflickr.com/g/320/240/elephant",
  "https://loremflickr.com/g/320/240/thaifood"
]

thailand = Journey.create(name:"Thailand", traveler:alex, pics:pics, overview:"Elephants, food, and friends all in one place", date:date)


Location.create(name:"Bangkok", journey:thailand, journal_entry:"City like", visit_frequency:"22", coordinates:{lat:"13.7563", lng:"100.5018"})
Location.create(name:"Chang Mai", journey:thailand, journal_entry:"I partied here.", visit_frequency:"30", coordinates:{lat:"18.7061", lng:"98.9817"})
Location.create(name:"Phi Phi Islands", journey:thailand, journal_entry:"Beautiful Beaches", visit_frequency:"45", coordinates:{lat:"7.7407", lng:"98.7784"})


date = DateTime.parse("04/05/2018")
pics = [
  "https://loremflickr.com/g/320/240/mexico",
  "https://loremflickr.com/g/320/240/snake",
  "https://loremflickr.com/g/320/240/mexicanfood",
  "https://loremflickr.com/g/320/240/mezcal"
]
mexico = Journey.create(name:"Mexico City & Oaxaca", traveler:alex, pics:pics, overview:"This was an awesome trip", date:date)
Location.create(name:"Mexico City", journey:mexico, journal_entry:"EAT EAT EAT", visit_frequency:"22", coordinates:{lat:"19.4326", lng:"-99.1332"})
Location.create(name:"Oaxaca", journey:mexico, journal_entry:"Mezcal!!!", visit_frequency:"30", coordinates:{lat:"17.0732", lng:"-96.7266"})
