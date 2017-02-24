(function(){

	var app = angular.module('app', []);
   
	app.controller('AppController', function(){
		
		this.days = data;
		
	});

	app.controller('TabController', function(){
		this.tab = 1;
		this.setTab = function(selectTab){
			this.tab = selectTab;
		};
		this.getTab = function(checkTab){
			return this.tab;
		};
	});


	var data = [{
			tab: 1,
			name: 'Day 1',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square',
				'sdgsdgdsg'
			],
			images: [
        		"img/quick_itenary/d1/01.jpg"
        	]
      	},
      	{
			tab: 2,
			name: 'Day 2',
			title:  'Animals and Apple',
			details: [
				'fd dffd',
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        		"img/quick_itenary/d2/01.jpg",
        		"img/quick_itenary/d2/02.jpg",
        		"img/quick_itenary/d2/03.jpg"
      		]
      	},
      	{
			tab: 3,
			name: 'Day 3',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        		"img/quick_itenary/d3/01.jpg",
        		"img/quick_itenary/d3/02.jpg",
        		"img/quick_itenary/d3/03.jpg",
        		"img/quick_itenary/d3/04.jpg",
        		"img/quick_itenary/d3/05.jpg"
      		]
      	},
      	
      	{
			tab: 4,
			name: 'Day 4',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        		"img/quick_itenary/d4/01.jpg",
        		"img/quick_itenary/d4/02.jpg",
        		"img/quick_itenary/d4/03.jpg"
      		]
      	},
      	{
			tab: 5,
			name: 'Day 5',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        		"img/quick_itenary/d5/01.jpg",
        		"img/quick_itenary/d5/02.jpg"
      		]
      	},
      	{
			tab: 6,
			name: 'Day 6',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        		"img/quick_itenary/d6/01.jpg",
        		"img/quick_itenary/d6/02.jpg",
        		"img/quick_itenary/d6/03.jpg",
        		"img/quick_itenary/d6/04.jpg",
        		"img/quick_itenary/d6/05.jpg",
        		"img/quick_itenary/d6/06.jpg"
      		]
      	},
      	{
			tab: 7,
			name: 'Day 7',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        		"img/quick_itenary/d7/01.jpg",
        		"img/quick_itenary/d7/02.jpg"
      		]
      	},
      	{
			tab: 8,
			name: 'Day 8',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        		"img/quick_itenary/d8/01.jpg",
        		"img/quick_itenary/d8/02.jpg",
        		"img/quick_itenary/d8/03.jpg",
        		"img/quick_itenary/d8/04.jpg"
      		]
      	},
      	{
			tab: 9,
			name: 'Day 9',
			title:  'Animals and Apple',
			details: [
				'Encounter carnivores on a morning safari',
				'Activity-Tech Workshop at Apple\'s Flagship Store in Union Square'
			],
			images: [
        		"img/quick_itenary/d9/01.jpg",
        		"img/quick_itenary/d9/02.jpg",
        		"img/quick_itenary/d9/03.jpg"
      		]
      	}
	];


})();