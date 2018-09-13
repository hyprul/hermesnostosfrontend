class Location {

	constructor({
	    id,
	    name,
	    coordinates,
	    journalEntry,
	    visit_frequency,
	    journey_id
	  } = {}) {
	  	this.id = id;
	  	this.name = name;
	    this.coordinates = coordinates;
	    this.journal_entry = journalEntry;
	    this.visit_frequency = visit_frequency;
	    this.journey_id = journey_id;
	    Location.all.push(this)
	}

	static findLocationById(id){
	  	return Location.all.find(x => x.id === id)
	}

	render(){
		
		let {coordinates: {lat, lng}, name } = this;
		[lat, lng] = [lat * 1, lng * 1];
		// let title = this.name
		//let place = document.querySelector('#map')
		//blah.createMarker({position: ${this.coordinates}, title: `${this.name}`})
		//debugger
		blah.createMarkerInfoWindow({position: {lat, lng}, title: name}, {content: this.journal_entry, picture_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEhMVFRUVFxUVFxcWFRUWFRUXFxUWFhgXFhUYHSggGBolGxUVITEhJykrLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGi8lICUtLSstKy8tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAACAQIEAwUEBgcHBAMBAAABAgMAEQQSITEFQVEGEyJhcTJCgZEUUnKhscEHI2KS0eHwM0NjgrLC8RZTotIkRJMV/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwUEBv/EACwRAAICAQQBAwMCBwAAAAAAAAABAhEDEiExUUEEIjIFE2EjoTNCcYGRsfH/2gAMAwEAAhEDEQA/AMhTkUhWn+IcMmgNpEIH1t1P+YVFBruNQyRp7o5icoPplzg+KG2R/Eu3mL+VJx+BVvHANLeJb3N7nVR0209eVVQp/D4lkNwa8a9NPC9WJ3+Gej70ciqa/uNClCrUTwT6SDI/J1G/2hz/AK1qLjeHyRakXU7Ouqn48j5Gt8XqIzenh9Mynicd+V2RrUYoClCtzEAFCjo6ACtRgULVUtxGWWQxYcIbGxZ72JG+UDkOtRlzQxK5MvHilklUUW4FHR4fhWORDJMqMn1oz7P2gdbHragKWLNDLHVEMuKWKWmSDFGKFHWhmAClWoCjoAApQoClAUAAClAUBSgKQBAUqgBSgKACApQFAClAUAACnFFEBSwKlsqgwKWBRAUsCkMAFKtQApQFIYa0u9JFHSGKFHRClgUgCFKFACjoGHehRUKQGj4gI0RnktlA1uL+Vrcydrc71zzF8NM0pEEBBIvkU2CA7NIxOVSfqjobXtet/wAUh72ZIfdRe8YdWJKp8rN8xUzC4FY1yqPMnmzcyf62ArkqUrqLo6NJ8o5nLwgxWXEJlVjYSIbgE7X/AJ1W43CNE5RvUEbMDsRXWcbgUkRo3F1YWI/h0NYrE8L8X0KdrFbtBLa+Zeh/AjyFejB6mWOVSdx/0Y5cKmritzLCp+B4nJHpup0KnUEdCDQ4lwWfD+2t1+uuq/Hp8ahA10J48eZX+6PJGc8bouPocM+sJEb/APbY+E/ZJ9n029KrZoWRijqVYbg7/wDHnTQ8tPSr7heNSe2HxPPRJPeRj/W2x9bGsNeTB8949+V/U00wy/HZ9FKKO1SeJYB4JGifdeY2YHUMvkRUcCvammrR5XtsxEzZVZuik/IXqm7G8NJcLnCEakgXuut7edhzq+NrHNoLa30FvWqKJZMLIO9RlzCwJ2II5HnXK+qX7a/J0/ptW2zbcMxs8mEZwYzGYnVwf7TMGIVhbTYKbW61TirWLiKjDlFYOH0t9XTXW2tVgWr+mRaxt9sn6nJPIkvCCpQFGFp1L2tXSbOchqlAU6EpTREAHkdqVjoZApYFOnDMBe2hpAFF2KgAUoCgBS1FAICrSwtGopVqmyhGWlAUrLSgtFgJApYFHlowKQwAUoCjAo6QwClCiFLApAGBR2pQFKtSKEClCjtQAoEHR2oqUKQBWoUqhQM0fD5BJiJnXVf1aqeoCAm3xLValKxPD8a0bBkbQ9NVb+Na7hnFo5bKfC/S+h+yefpXHizpMdZKq+O8HGIjy3yupzRv9Vv4HYitA0VNNFVciMhwLHmQGGUZZUOVlPUfiDUXi/ZGJ7tF+rbyHgPqvL4VadqOEOSMXAP1sY8Sj+9QbjzYcvl0p/gfEUxEYYG5t/Xxox5JY3sxTgpLc5pxDhs0BtItujDVT6H8t6jg9K69iMKrAqwBB3BFwfhWG7R8Dhjb9USG3Kbqo6lvd9NfSujD1cZKsh45enlF3Ak8eX6RgMPi/fQ9056g3tf0Yf8AnXLO0XHHV+5ibLl9phuT0HS3411vhUGfhM6XH9omUna/fJ/P51wGW5dr75jc763N680c7WLQn5/Y3eJPJqa/6SziZXGV5HYHkzkj5E2re9hO2XcAYHHhZsG/gOcZjBfZrneO+43XcbWPPFOh9KkRS30NYPfk2W3B1PiXdZ2jjQRiJ5YQobNpHIcr3sN1devrrUULVd2L/wDkYbEwDXFRZcRD9aQRJleLzUxrb1KH3asMHOsiLIhurC4/rrXR9JkThp8o8Xqoe7V2OAVIjw5IvcfhUnCSIq2ZQT1NPXjta2/Xl6VrKbM1BFj2dwKEZmUE+fTpVnJw2EkgKNd9PuHSqfheKC3F9Kn4fHLc615MinqbPTDTVFomCiAAA0H3+tUvaDAx2BRBmvrT8vGANBUPE8RLctOlGOM07FNxaoo+4NALU6YhjfamMlexSs8riNBaWFpeWjAp2FBKtLC0ailVNjE5aLLToFHaiwoaAo7U4FpWWiwoaApxRSgtKAosKCFKFFajFIoMUdqApQpAJtRWpyjtRYhAFCl2oUWMyXBuJMQ2UFXQgSwvyPUeR5MK0HD8WrjwE3GpQ+0PQ+8POsHPgwh76NpEdSc9nZmZF/tDGSTcC2x+rruKmyzSQsDKe8iJ0lQZWW+xYD+vwrlSxrmP+Dop9nT8N2lmQMmVZCB4M7FfQM4BNvgTUEdrOLOSI+G3sbXHeSL8GAANVOBx11BY51YC0q6m3LMBv6j/AItsHxCWEh0bfmNVYeY2I/jWdjoMcU463/00X/IQfm01VYix2EkOKmhMcTsM+Ux5UZveCqzWBO99LnzrofB+0MM9kaySHkdm+yfyqxxODV1ZGAZWBVlIuCDoQRQ9wOV4uLjBSSdcYphQM4No1bKBm2WLe2nrT/8A/LmnhWWOZVVTnlke5ZyAGJ05D8vKl8UwT4PPgpGb6NOGSKXfKD/dsT7w+8fG0rhuHyYWDh4YMxzNMym4Cd4zW15voLfVv5Uc8hwTcFwxpOHiJjZpmEjFgWOrZ+oN721vyrzdiFys46Mw+RIr1ZjvBC5HuRsR8FJ/KvJ0fKriqEx+3ho0pMmw9aNTVCLzstxlsJiocWpt3br3nO8TEK4t9kn7q12BUJiMbAvsRYmXJbYI7MygeX8a53Edf61HMVsOw7MwmZiSSU1JudMyi/wUVt6f+IjLP8GaalA0LUoLXSZ4UGhNPKaSq04oqGUgqUKIrQFACrUdqANKApAJtRZaXahamAQFHR2oAUAGKVaiApQoGCjoCjpAAUoULUdAgrUdqOjtRYxIpVC1GKQBilAUYTrS+8tsKVjFLB1NqFNk0KW47Rhsfg2jyIwLpe45tbK2oI9sa7jX1NO8KZWiCbgZk11BCkp+Aqoh7TxwkQqhkgGhBNiLaXiJ2ProavEw6snfQsXQ6m4s6X1s68vXauRqtHTljlHkZ4S5w83cG/dS3aP9hxqV9D/Dzq9u6frIbMp1aM+yepX6rVm+M3MRce1HaRfVDf8AC9X+HxIYAjmAfnVSdpMhD8Myy3aInMPajb+0XzH1h5itFwbta6AJKcw2BPtDyvzrK4mBXsTdWGzrowPrTU+JlYdy6BpWHgkWwzciZF8uoqQNd2v4vFjMJ9Hib9Y8iAr7yBGDEt05et6YgZcAkTMjFXazSnVQdAAx312HLSsxjpTw6K8ZDyyAgltcjW9odfsny9DvuJs+VISQVMSqVdcyPpYhhufnVKLYXRdYeeOZNLFWFiPI6GvJeMwphmkhO8bvGfVGK/lXdcJLNgQMRHmfCEkMpOZ8MwNipPvR32bpa/U84/SZwVxiX4hGobD4hg4ZdQrsBmV+hLZiOt+t6afhiaMfLsPX8qCilyWyA/tfiP5UhasQ7GdRW47AwM0c2UEhGW9uV85GnzrDx71079DGs2JXrHG37rMP99VCeh2iZR1KieKWta7iHBI3uwGVuo/Mc6zmM4bJF7QuPrDb+Ve7HmUzyTxOJGFLFIFLBrUzFihaiBpQpDABShRClUAGKFqApVIAgKVagKOgArUdqMUdqACAowKO1GBQAVqOjtSgl6VjEUoClEAedFQAYUc6Vm6UkCjAoCwqMUoClBaACAoUoChSsKOVx8NgwoEk5DPuFGuv7I5+pqG3H5+9Esbd2V2A1uOj39oHptUDFpNfPKHu3vMDr6E1IndHyJDGV0AsTdnc6EluY5Dbn1rhNn0ax+Zbs1eG4rBiYZCwEEio2Yf3L+EnwN7psPZNSMAjpFGGBDBEuCLH2RVZNghFB3QsS3g29pn026fkKtMNxB1URyI0qDRdu9U8grNow8j863Xx3OfKtT08EwYrS1iWOigcz+XrR43GDBpe4fEyDS+yDkSOg5Dn86fw0Qi8RKd+4PdIx8IPIX5a8za56csZii5kYy5u8zHPmuGzcwRy9KRIjimPmkjYyOCRqLC2pOpPWrXE9o8Y8S5p3zILXspzA9Ta9x15+uposf7FurL+NS4zoKdvkKRJwPF8W10GLmCte4RrA30NwBrcVNwPF/osn0WQd7DIniVx4WBJDC1t9AfjyNVCKEfOBpzH5j+FTO0WLBOFsRtMwI11tGFPpqal9lRVuhrtN2LRMPJjMJJ3kAKsYzfvIgSAfF74BPMAgb3trhxXU8Di3w7loiGB73PGbBXVJMhsDpezL61S9p+ySSIcdw8Xj3lgHtwnmUG5Tqu68rjaseS+QyY3BmJWum/oMYfScQL6mLT0Dpf/AFD51zK/9WrT/o14i8OMDIpYkSLlXVioVXNh7xtHe25tWj4M0eh3jqPJADoaRwrikc6B0YG4v/xUw0k7AzXEOAqdU8J+75cqocThXjNmFvPkfjXQSlRcRhgRYgEGvRDPKOz3Mp4k+DCClirzG8C5x6eR2+B5VTyQspswINeuOSMuDzSg48iRTsMRY2UXNIUVa8JUC5tryPMUTlpVhGNuiMeGzAXKG1NjDv8AVb5GtLh8QRpepLG4JOtef776NvsrsyKQMdlJ+FTRwmTJm5728v41ZNIVF8tl8qjPxJthtV65PgnRFclTlo7U6wvSbVrZlQi1GBSMZJkjd98qs1vsqT+VN9mneTCxPPbvXXPmGgs5ugK7bEbdedTLIo8lRg5EpRRk3pWW2hoZaqxDdqO1KtQtRYqCApQFAClAUAkEKUBRgUoCkUFQqxwGCVhc3/ChWbyJOilBs5hjcW0sDQSWa4skjAlk8m+sOh3HnVbwLgzxXxEwsBcITbKfrOG28vnSnxUz/wBnhnHnIyoB8N6GFjlBvNaRNzDdhB6kX1box+Vc77dO5HRjlag4om4d+8bvz/Zrfu7jVr6GS3nsvkT1qZjsfHhI/pEwu5uIor6k/kNrn4dKcklSONsVIjBF1SPdrna5Gl/PkK51xjiMmJkMsh1OgHJV5KvlRKQ8WJzNlhMauOUyrpOo/WR6+IAe3GD96/Gppw4xShWIWZRZJDoJANkkPXo3wNc4wGJkhkWSMlWU3BFdL4RjI8YneRgCUC8kY97q6D8R8amwnjcdzJcURkIjcFWD2YHQggHQ1JB0rWcU4UmNRRcLOn9m52cf9uQ/g3L0rJTRPGxjdSrKbMpFiDT8GQq9ZbFSt37HYqxt6A6fO9/jWmBrP8bjyy5+TAfMaH8qEMnTcYlMLP8AXzJ6Z5O9dh6tp8ulaThPGXiSPGRtY3CuOR0uMw+B19POsqro0Pd3F9fny/CrNXVcMsO7FszeVgQB95+VFIvU3yX3aHs3Fjozi8AoWYeKbDiwzdXiG2Y75dm3GuhH6IsLGsxmK3bvO6GYez+ql1Fx4Wv4fQkczWU4X2hkw0wdCQu46i5PLmDzFdT4NjYMX/8AIhULiM0ckiKQBP3ZvdbkLnIJGYkX0DbXFptbMz2F4yCaHFM+G1Z5HLR3sHNi4K30VyB6E2v1rVcE40mIS40YaMpFmVhurKdQQeVYZO06T4qwjlhdZI7pKFVrowDiwJsbA6GrLj0Dpiu9gIWR2jBubI+aygPbz97lVuPmJN+GblJAdQQeW99elKvWW4DjA0j2/VyWyywtoVkFirW21BbUaEEGpfDOMkxuZdWjsTlHtK2xy9bhhby86S34B7F2VqNicGrixANOQYhXUOpuGFweop3NQBQTcGtsTb76XEAgy/8ANXhANR58IrDXfrzrT7je0jPQlwQDIAL0luJ+GwFM4zAuu3iH31nOIdo8LCSrSXYGxRAXYHobaKfUitYqFW2Q3K6SL+THOeelRqxON7byHSGEL+1Kbn9xf41neKcYxDgmaZip91fAvplFgfjSeeEdkCxSfJ0fH8dwsOkkq3Hug5m+Krcj41nMf275QRE/tSaD9xd/mKwcPEIL2IIHUC/3G341rcH2QmmjWaKWIxvqr3ax5EWtcEbEGxrN5pydJFrHBbshNxDG4yRIDIw711jCr4Vu5C6hfaGvO9bft6gXDmFNFzIi+iar/oFR+ynZj6Pi1kdxIYo5JdFKhWNooxqxvdnY7f3dSe165okH+IP9LVD1XUi1VWjnkGNxC+zNKtuQdxb4XqfF2hx67Tk/aVG/Fb1pOCcLgaU6XsCDcm426etXr9n8K28d/wDM/wDGqhjk1aZM5xT3Rio+2ONG4hb1VgfuYVLi7dSj2sMp+zIR9xU1ov8ApHBf9s//AKy/+1K/6Swf/bP7zfmatQyr+YjVj6KeLt3F70Eo+zkb8SKmRdtcEd2kT7UT/wC29Sx2Owh91h/m/lQPYfCf4n7/APKq/VXlC/THIe0uBbbERj7Ryf6rVY4fGQv7Esb/AGXVvwNUzdgcJ9eX95f/AFqNN+jvCn+8k+IjP+2nqydIWmHZs4Ziu1CmMHhhGiRgkhFVQSbkhRa5PXShV0nyTbMCz0qHLlM0mka7Dm55afgPj6QpeIRk55ciDTMEJIc9QttPsi9Q+NzyPIFawQC8YU3UqdnB536/CucewKbjk4m74+KMjIYj7GT6vrzzb3+VQ+O9n1yDF4W7QNuPeibmrDl/R22lYeG+9TeHzPhWuBmjfR0OzDofPoaT3NMeRwdoxZgsKXgMbJBIJIyQym4sa03aPgahRicP4oX+aHmjDkRWVkWsd09zpe2cbR0rhvEVxad9FYTLrJGPetu6Dr1HxFT8bhI8dGAxCYhRlSQ+yw5Rynp0bl865VgMdJBIJI2KspvpXTOC8Sjxi95HZZgLyRjTPbd0HXqPiK1TOflxaN1wZLFYd4naKRSjqbMp3B/MdCNDVRilEzFCbKpsOt+tdQxuEjxiCOUhZFFopvq/4cnMx/eu45g8/wCJcIeCUpKpWRSSRe4194ciCNjtTMimmwUUShyZGUnLoRa+vp0NR5+IZvABlX1uf5VYcalURhOZIsPQ3J/rrVJWkSWx/Fe6fLX4E07wfjEuHkDITodLbg/s/wAOdRZG2HT/AJrS9juDoqPxDED9XH7APvudF9dSBTlwJG6gbD8TMTMwhxkLRsH5SiNgcr9Rpod18xpWz4lw0SOrE2KlSdNwrBx+H31wJ+IPHIZQT7KuADbL48pt53vrXZ+C8eYOMHjPDJ/dye7IORB/Kpi6KkrHeN8Od5kki8ElxaQC4Asbq45roND10o+H4hXeSOQd3iMmR1v4X5q6nmNTr5661cuCpsf+R1FQeI8Ojm1PhcarIujoeoP5HQ1bXlEfhkFI3WEqPbhlYpb9oCT5ZiRb1qzTirCbKdUePOnI3ChsvncZvS1QMPimBOHnssptkkAssoXp0PVdxfmKN4mjOHuLkZEvvbW2/wBlj8jVqSkJqi6wfEUdVYG2a4ANgbr7QtzIt+dTA9Y2VcqSBd45FkF+R1X5XjFWBx7oZcpzDwyqDr4WPiUdN1t6mm4dCUjR6GqTjPZTCYo5pIxn+spKsfJipGYetSYuJx3YE5cuTU7EP7JHlU4SVFFWZQ9lsPD/AHCEDmRn/wBVyK5X+lBz9L7u1lVEygaDUXJt6k/KvQWYGsd217BwY8BwxilUWDAXUi5NmXpcnUdedW53GqJUd7PPldP/AEN4xv12HY+A2YDowsLj4fhWYxvYLHQyd3IgAvo4N0Po35Gx8q2/Z7g4waDI13NiSPwHlvWd0WbWPDGPvmNryPGBa9xFHH4QfWR5j8qpO0i3jQdXH4EfnWlibMgJ6a1nuPRBFRQLDMT9xN/maa+Vsl/EseB8GXIJQFDOBma3isdvut8qt24YbXBv8LU3gp8saC2yqLdLAVI+mVtclwZVEivhHHKh9Ga17VM+nURxvlVapdCqPZAFKBoNveirQkWDSTRUKABehQoUCOA2PtakHfmVP8KveFYlcvcynwbo+5iY8/NDzHxrOx4wg3t9x1q2wxXLnX2DuOaHofKuae80KYVoyVYa+WoI5EHmDTjrcWpnhuMUgQymy+45/uyeR/YP3VMmiKkqwsR/XypEkTA41oGKkZ430dDs4/JhyNVvaTgYUDEQnPC+x5g81YcnH31Zyxgi1IwWMMBKsueJ9HQ7MOoPJxyNTJWbYsrxsw7rT2AxskLiSMkMpB0Nqvu0XBBGBPEc8L7NzU81ccmHMfGs261C22Pe9Mo2uDqnBuLJjUzpZZgLum2e27IPrdV+IqZi8PFi4xDMcrL/AGU1rmM/Vf60ZPLluK5JgcZJC4kjJDAg6abV03g/FkxqZ0sJwPGm3eW3ZR9bqOe4rROzn5MendcHNO1GAmgxLRTJlZQAOYZdwyN7ynWxqsArsuPwcGOhGGnOVlv3M1rtCx5H60Z5r8RY1y7iPAMTDiPokiWkuLW1VlO0it7yEa3+G+laowD7M8DfFzCMDwjVz0HS/WrXtVxmOWWPBwEDDQmwI2eQAgvpuo2HxPOrqfCSYeD6BhADO6hp3uF7tG5X+s3lsPUVTYTsHiju0SeeZyR6WX86VjRT8VhAVSDfwSKfLLIHFxy3NdmbCx4vCxCQe1HG6sPaRigOZT1rDD9H8lvHiAR72WIlgOZF31510aGBY40VDeMKFRuoUAWPQ6aiiPQ5O3aKzhPG5MOwweO1U6RT8m6X6N5fyNaOVSp30Ox3BHlVPj8LHMhjkXMp+7zB5Gqvh3FZMEww2KJkw7G0cvNOit0PnT+IuTSYyFJEKSC673vYqRswPukdb1E4fxNkIhnvY27uUi2YG+UNyV7DbnptewlTwkWa+aI6qRs55KeltzTcrq6lXAYNuDsab33QiVPhFIYWtnAuRztsfhUc4DUWOgiMeu5Pht/pFRMPjWw/gkJeE7OdWj6BzzHRvn5250AINwdiKqM/BLiU3cHwow9qEoR9m1vuVfnT0WKZRnBOqpKQOZXwyX9bj90VY94KbbCodtPCUHSxN9vUVpq7Jrodhx59l9CC63G3hGYaeam/wqbFOCLgg7bcri/4EVV/R2U3BuLxW6+HRj8aSDk1tYgE6c+7bQfulhUtLwMuJFVhYgEHcHUH1FVrcFjXWMAX5HUfPlTseLtodbadDobfmvTnUqOUHY/Dn/WoqeCiNGlhY6VQ9oluYh9ofeoH4mtUbHeqTi2FuyGxKhh8De4vblpvTjyS+B+joqVXpPOCjoCjtRYAojR0pRRYDdC1PMoolWjUOhKITtQp4SW2AoqnUx0jzn9Ifr9w/hUjCYx1N9xzGmoqK41PrShXOZ1UkzQKy2DLqh/8T0PlV1wzHBgIZDa2kbnl+wx+r0PKsdgcWYz1U6MvIirjSwIN0b2T0/ZamnZjKOll7NGVJUixGhFMyKGFjS+HY0SgQyGzjSNzz6RufwPwoSIVJDCxBtY8jTIGMDjDAzI654n0kQ+8Oo6OORqo7ScB7kCeI95h5PZcbqfqOORG1W+IjDCk8M4iYS0ci54X0kjOxH1l6MPv2pNWaY8rgzEkU7gsY8LiRCQwIOhttVx2k4F3FpYjnw8mqP0/ZboRtVCRUcHt9s1aOocI4mmOXOtlxAHiXYS23ZRyfqOe4qzwkqymPvSA0YcIxXMELW3W4JW4BtcVyHB4p4nDoSCDfQ22rpPB+KpjVzLZcQB4l2Ettyo5P1HPcVrF2eHLj07rgi8F4PicNJP9K1lkkzd4DdZUtdXQ81JZvS1rC1qvo3p3BY9HXuJ75L+FveibqOo6rz9aRisI0TZWsbi6sNVdeTKelNmRIjmqThp8t9Lq3tL/ALl6MKqlapEUtICr43xrE4RgWiSaFz+rlQlL88jg5gsgHLY7jnZ7hvGIsaroYmVAt5GfL3YXf2r76X2q2AUgqyq6NbOji6tbUadQdQapOONh8NAIzFJ3EjeJ4bWD30R9QRsLcja3KqtlbPwNcF7SR4Vu6Enf4R9gb95EPMEA2HWtbPEMolibPE2zDlfk1ufnzrmqQ8Of2MUyH/EQn77AffV1wbiT4HWOVMRh20kRGBKg+8FubDyoVoJJGnL0zhcU2HOgzQn2k3Kea9V8txy8q7iMeJCjE4JzPh21ykB5IvJveZehvfkeprv+opU0lgIP+ZPuINNtMSi/BtmYECRDmjIvccr7X8vOijmFY7B9p44mzpmCsfHGwupvuVsTY9QdDWoQpInfQG6kXK81628vwpqXhkyi0WccvK9O6NoRfS3wO9Ukc+tT4pqskkzYcG9tzf7wPkNAaZmhI1H9asR/t+VBMRfWjkmoEEuLYae1+Ohtv1vT/wBLU/gR+NUmMyk3I5g32OhJGo8yfnUSJ2S1nLKABZtTbXNY8yRQBomWxrH9sO3UWCbuY172XdheypcXAa2pa1jb76kYrtUMNGGljdtQthbc9CeWlcY41iGkxEsjXu7s2v7TE/nVPJtsJY9zfcK/Sq+cDEwrkJ1aO4ZR1ysTm9NK6fhp0kRZI2DowBVl2YHmK8zV1z9D2PYwvAx0U5kHQG97fcaUZuxygq2OhhadjQe9Sb0V60bMkOvEORpo0d6FqSBgRL0KMUVFsNjzpN7Xy/CgKFCvCzpx4QdXHCDeR4z7NtuWx/hQoUkKfAuM3UVp85fDxSNqxzKSdyFNhfr60KFWYMhGoOMHOjoU0ItOyg7wywP4o2idih2zLax8j6VgZ1AZgNgxA+BNChUz4PV6bljTU/w2ZkkQqxU3GoNj1oUKlG2Tg6pjmusEp9uSJWc7Zm6kDSrXhZz4edX1Eah0v7rEgEg8r9NqOhWxzSspa0KFSMlKdKlYaJXIjcBkk8DqRdWUkCxFChTEca4jEEmlRdFWSRQLk2CuQBc6nQCoysRrQoVJ6jd/o8x0q4hVViFdLsNLE9bVc8Q4lMnEJ8OrfqlZbKQrAXRWIuRe1yaFCmuDKt2X0nBsNIoLwoSRuFAPzFqocCn0fFLHDdVJNxckf+RNFQpvghMq+3JOFnzYctHmVXIVmyZje5yE5RtsBVx2O4jLNFmlbMbb2Uc/IChQqlyVJe0vYdh6ClOaFCrMSDiqr250KFMRgu0EzFpASSO82vpo1hp6VmuKKLg+Q/ChQrPyaeCMovauk9gvC0eXS51+dvwFChVeReDq8dOFRQoVbM0MgUKKhVEhihQoUCP/2Q==", title: "Alex Sucks"})
		//blah.createInfoWindow();
		//debugger
	}

}

Location.all = []