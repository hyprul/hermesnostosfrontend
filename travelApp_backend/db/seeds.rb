# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


draper = Traveler.create(name:"Don Draper", picture_url:"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/don-draper.jpg", age:47)

date = DateTime.parse("26/12/2017")

pics = [
  "https://loremflickr.com/g/320/240/thailand",
  "https://loremflickr.com/g/320/240/bangkok",
  "https://loremflickr.com/g/320/240/changmai",
  "https://loremflickr.com/g/320/240/elephant",
  "https://loremflickr.com/g/320/240/thaifood"
]

overview = "Friendly and fun-loving, cultured and historic, Thailand radiates a golden hue, from its glittering temples and tropical beaches through to the ever-comforting Thai smile."

bangkok_journal_entry="What I love most about Bangkok… is that there is always more to discover. Even if you’re from Bangkok, it’s impossible to stay on top of all of the new openings or to know the best spots in every neighbourhood, so I’m constantly finding new places worth recommending. I also adore the diversity — and quality — of Bangkok’s food offerings. One night I can enjoy phenomenal high-end Indian cuisine at one of my favourite restaurants, Charcoal Tandoor Grill & Mixology, and the next day I can eat delicious Chinese food at another favourite, a no-nonsense hole-in-the-wall place called Sun Moon Restaurant."
changmai_journal_entry="For long months, summer has been building to a crescendo in northern Thailand, slowly filling the bowl of mountains that surrounds Chiang Mai with soupy heat. By the middle of April, a sticky, wilting haze dulls the glint from the gilded Buddhas that gaze serenely out from the city’s 300-plus temples. The scents of frangipani, mango and hyper-spiced street food have been slow-cooked to a ripe miasma; the contents of the four-mile moat that girdles the Old City simmered to a green broth.Something has to give and it can’t wait until the rains come in late May. At dusk on April 12, the sidewalks downtown begin to mass with excitable water warriors, fingers on plastic triggers, thumbs pressed over hose tips, buckets abrim. Ahead lies a four-day, man-made monsoon, which will saturate the city’s streets and all who sail in them. By tradition officially stretching from April 13 to 16, Songkran is the spray-and-pray festival that marks the Buddhist New Year on April 15. It’s a bewildering but glorious fusion of dignified religious faith, familial devotion and deafening, Technicolor aquatic madness. As a celebration of towering national importance, Songkran – the name comes from a Sanskrit word that means “transformation” or “change” – is like a Western Christmas and New Year rolled into one, with a soggy side order of trick-or-treat Halloween mayhem."
phiphi_journal_entry="Phi Phi Island is Thailand's island-superstar. It's been in the movies. It's the topic of conversation for travelers all over Thailand. For some, it's the only reason to touchdown in Phuket. Even with all the hype, it doesn't disappoint. Phi Phi's beauty is a large chunk of the allure. The islands, when approached by boat, rise from the sea like a fortress. Sheer cliffs tower overhead, then give way to beach-fronted jungle. It's love at first sight. The second part of the why-we-love-this-place story is attitude: few places on the planet are this laid-back. Of the two islands located near Phuket and Krabi, one is completely free of human inhabitants (Phi Phi Leh), and the other is without roads (Phi Phi Don). There's no schedule, no hustle-and-bustle, no reason to be in a hurry."

thailand = Journey.create(name:"Thailand", traveler:draper, pics:pics, overview:overview, date:date)


Location.create(name:"Bangkok", journey:thailand, journal_entry:bangkok_journal_entry, visit_frequency:"22", coordinates:{lat:"13.7563", lng:"100.5018"})
Location.create(name:"Chang Mai", journey:thailand, journal_entry:changmai_journal_entry, visit_frequency:"30", coordinates:{lat:"18.7061", lng:"98.9817"})
Location.create(name:"Phi Phi Islands", journey:thailand, journal_entry:phiphi_journal_entry, visit_frequency:"45", coordinates:{lat:"7.7407", lng:"98.7784"})


date = DateTime.parse("04/05/2018")
pics = [
  "https://loremflickr.com/g/320/240/mexico",
  "https://loremflickr.com/g/320/240/snake",
  "https://loremflickr.com/g/320/240/mexicanfood",
  "https://loremflickr.com/g/320/240/mezcal"
]
overview = "Visit Mexico, a country rich with history, delicious food and sprawling beaches. Whether you are interested in roaming the grounds of old Mesoamerican ruins, laying out on the white sands of the country’s many resort beaches or going snorkeling off the waters of the Yucatan peninsula, there is something for everyone who wants to travel to Mexico."
mexico_journal_entry="Rising from the ruins of the Aztec capital, Tenochtitlan, Mexico City offers a unique collision of contemporary city life and historic preservation. World-class museums, restaurants and parks rub shoulders with the remains of several cultures. The nightlife, the shopping and the history make it a must-see regardless of your travel style."
oaxaca_journal_entry="It´s always good to visit Oaxaca, a city recognized by UNESCO as a World Heritage Site. In March, for example, the jacarandas bloom, emphasizing the greenish of its original quarry stone. Oaxaca is one of the cities where all the historical periods of Mexico shine: pre-Hispanic, colonial, independent, modern, and contemporary are expressed with its natural elegance in every street, colonial building, museum, magical festival, colorful crafts, pre-Columbian ruins, and the many splendorous baroque churches that are to be found in every corner of the city.Ecotourism, fluorescent lagoons, lush mountains, archaeological sites, colonial treasures, culture, crafts, gastronomy, folklore, parties and many more great experiences will set the tone of your vacation in Oaxaca, the third best city in Central and South America according to Travel and Leisure magazine."

mexico = Journey.create(name:"Mexico City & Oaxaca", traveler:draper, pics:pics, overview:overview, date:date)
Location.create(name:"Mexico City", journey:mexico, journal_entry:mexico_journal_entry, visit_frequency:"22", coordinates:{lat:"19.4326", lng:"-99.1332"})
Location.create(name:"Oaxaca", journey:mexico, journal_entry:oaxaca_journal_entry, visit_frequency:"30", coordinates:{lat:"17.0732", lng:"-96.7266"})


date = DateTime.parse("21/07/2016")
pics = [
  "https://loremflickr.com/g/320/240/korea",
  "https://loremflickr.com/g/320/240/koreanfood",
  "https://loremflickr.com/g/320/240/seoul",
  "https://loremflickr.com/g/320/240/busan"
]
overview ="With its booming economy, ancient culture, and increasingly prominent presence on the world stage, South Korea is quickly becoming one of the most talked-about travel destinations on the planet – which means that travelers looking to visit South Korea have more options than ever when it comes to hotel accommodations, restaurant choices, and things to do. This South Korea travel guide will give prospective visitors a brief run-down on the country’s must-does, must-sees, and must-eats, helping them cut through all the distractions vying for their attention and really get the most out of their trip."
seoul_journal_entry = "Seoul is the largest city and capital of the Republic of Korea (also known as 'South Korea'). When including Incheon and the surrounding suburbs, Seoul is the second largest metropolitan area in the world (after Tokyo) with over 25 million people. It is only one-twelfth the size of Beijing in terms of area, but has a larger population. This makes for a very crowded city with lots of traffic. While New Yorkers or Parisians may get used to the pushing and shoving in the subways at rush hour or the occasional bumping into strangers in the busy shopping malls on the weekends, it can be a new experience for people used to a more sedate and relaxed lifestyle. Seoul is a bustling 24-hour neon light-filled mega city and it's a place where you can always find somewhere to eat or drink at any time of the day in almost any area"
busan_journal_entry = "Busan is Korea's second largest city. Tourists often come to this region to hike and to visit the Buddhist Temples located deep within the region's mountains. The Beomeosa Temple, founded in 678 AD, is perhaps one of the most frequented temples in the area and is always packed with worshipers and tourists. For art buffs, Busan offers several museums and historical buildings. If scenery is your thing, try visiting the Dongbaek Island, or bird watch at the Nakdong river estuary."

korea = Journey.create(name:"South Korea", traveler:draper, pics:pics, overview:overview, date:date)
Location.create(name:"Seoul", journey:korea, journal_entry:seoul_journal_entry, visit_frequency:"22", coordinates:{lat:"37.5665", lng:"126.9780"})
Location.create(name:"Busan", journey:korea, journal_entry:busan_journal_entry, visit_frequency:"30", coordinates:{lat:"35.1796", lng:"129.0756"})
