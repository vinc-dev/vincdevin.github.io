class CarService {
    constructor() {
        this.data = [
            {
                "name" : "Toyota Prius",
                "brand" : "Toyota",
                "image" : "2015-toyota-prius-hybrid-three-hatchback-angular-front.jpg",
                "color" : [
                    "blue", "red", "white", "black"
                ],
                "transmision" : "Automatic & Manual",
                "price": 25000,
                "description": "The Toyota Prius is a full hybrid electric mid-size hatchback, formerly a compact sedan developed and manufactured by Toyota. The EPA and California Air Resources Board rate the Prius as among the cleanest vehicles sold in the United States based on smog-forming emissions."
            },
            {
                "name" : "Toyota Tacoma",
                "brand" : "Toyota",
                "image" : "64428b8-bf8457b-a8ba048-caab854-aa3f497-e93145d-55f23c1-d1b0d92-c8eecac-ffc8877-8dbf592-583d584-fab4f41-ff6e07a-a120f8c-6a7c336-72301c6-7e55e1d-ba70585.png",
                "color" : [
                    "blue", "red", "white", "black", "green"
                ],
                "transmision" : "Manual",
                "price": 25200,
                "description": "The Toyota Tacoma is a pickup truck manufactured in the U.S. by the Japanese automobile manufacturer Toyota since 1995. The first generation Tacoma, model years 1995½ through 2004, was classified as a compact pickup. The second generation was classified as mid-size."
            },
            {
                "name" : "BMW Z3",
                "brand" : "BMW",
                "image" : "BMW_M5_Sedan_Wallpaper_1920x1200_04.jpg",
                "color" : [
                    "blue", "white", "black"
                ],
                "transmision" : "Automatic & Manual",
                "price": 21522,
                "description": "The BMW Z3 was the first modern mass-market roadster produced by BMW, as well as the first new BMW model assembled in the United States. The Z in Z3 originally stood for Zukunft. The Z3 was introduced via video press release by BMW North America on June 12, 1995, as a 1996 model year vehicle."
            },
            {
                "name" : "Nissan GT-R",
                "brand" : "Nissan",
                "image" : "PNGPIX-COM-Nissan-GT-R-NISMO-White-Car-PNG-Image-500x226.png",
                "color" : [
                    "blue", "red", "white", "black", "orange"
                ],
                "transmision" : "Automatic & Manual",
                "price": 111585,
                "description": "The Nissan GT-R is a 2-door 2+2 sports coupé produced by Nissan and first released in Japan in 2007. It is the successor to the Nissan Skyline GT-R although it is no longer part of the Skyline"
            }
        ];
    }

    getData() {
        return this.data;
    }
}
