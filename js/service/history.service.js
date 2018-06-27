class HistoryService {
    constructor() {
        this.data = [
            {
                "year": 2017,
                "details": [
                    {
                        "title": "Company Created",
                        "date": "04 Mar 2017",
                        "description": "The eventful and varied history of Car Autoshop extends back to the 19th century. Find out more about the great personalities from the brand’s 100-plus years of history. Learn about the fascinating evolution of the various models and major milestones in the fields of car manufacturing, engine production and motor racing.",
                    },
                    {
                        "title": "In contract with Audi",
                        "date": "15 Apr 2017",
                        "description": "By 2045 we will multiply the collective intelligence of our civilization, of people and machines, by a factor of one billion. That will be the dawn of the technological singularity - a future that defies our imagination.",
                    },
                    {
                        "title": "In contract with BMW",
                        "date": "30 Aug 2017",
                        "description": "To be a winner here, you need more than just a powerful car and superior driver. According to racing legend Yannick Dalmas, “To get to the top, drivers, mechanics and crew have to start working together closely months before the race. Racing situations have to be simulated in the factory and the entire team needs to develop a really good feeling.” In 1999, Dalmas drove the legendary BMW V12 LMR with 635 hp of the winning team. “Right from the start, you need to have the same objective: victory!”",
                    },
                    {
                        "title": "Event: Company car free day",
                        "date": "21 Dec 2017",
                        "description": "Car Auto Shop organizes a car free day event to keep the population from vehicle fumes",
                    },
                ],
            },
            {
                "year": 2018,
                "details": [
                    {
                        "title": "In contract with Bentley",
                        "date": "23 Jan 2018",
                        "description": "The people who work at the Bentley factory in Crewe have long represented the brand’s creative driving force. But beyond the factory walls, many more have contributed to the Bentley legend in a tradition of Bentley brand collaboration that is reinforced year after year. Below, you’ll find a selection of the extraordinary personalities and brands with which Bentley has had the pleasure of working. ",
                    },
                ]
            }
        ];
    }

    getData() {
        return this.data;
    }
}