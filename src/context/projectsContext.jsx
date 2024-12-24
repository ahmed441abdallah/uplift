'use client'
import { createContext } from 'react';
export const projectContext = createContext({
    projects: [],

});
export function ProjectsProvider({ children }) {
    const projects = [
        {
            id: 1,
            name: "Rushi beauty salon",
            type: "COMMERCIAL",
            descriptions: "The Rushi Beauty Salon project showcases a harmonious blend of modern aesthetics and functional design, tailored to create a luxurious and inviting space for clients. This architectural concept was meticulously crafted to reflect the salon's brand essence—elegance, comfort, and sophistication.The layout optimizes the use of space, ensuring seamless navigation for both staff and customers. From the reception area to the treatment rooms, every corner is designed to enhance the client experience. Soft lighting, carefully chosen color palettes, and contemporary furnishings contribute to an ambiance of relaxation and refinement.Innovative storage solutions and ergonomic workstations have been integrated to ensure efficiency for the salon's operations. Attention to detail is evident in the selection of high-quality materials, stylish accents, and artistic decor elements, making Rushi Beauty Salon a standout destination for beauty and wellness.",
            images: [
                "https://i.postimg.cc/TYtyNWgF/01.jpg",
                "https://i.postimg.cc/2jw33Bcy/02.jpg",
                "https://i.postimg.cc/52HtPKxQ/03.jpg",
                "https://i.postimg.cc/htHtN8jy/04.jpg",
                "https://i.postimg.cc/C5mK2WBk/05.jpg",


            ],

        }, {
            id: 2,
            name: "Majlis",
            type: "RESIDENTIAL",
            descriptions: "The Majlis Villa project embodies the essence of timeless elegance and cultural sophistication, designed to cater to modern living while honoring traditional values. This residential masterpiece combines luxurious aesthetics with practical functionality, creating a space that seamlessly blends tradition and contemporary design.The villa features a grand Majlis area, designed as the heart of the home for hosting guests and fostering meaningful connections. The interior spaces are thoughtfully curated with high ceilings, intricate detailing, and natural lighting, exuding an air of opulence and openness. The integration of premium materials, soft textures, and a harmonious color palette enhances the ambiance of comfort and luxury.Functional spaces such as the living and dining areas, bedrooms, and outdoor terraces are meticulously planned to ensure privacy, convenience, and a natural flow throughout the villa. The design also incorporates sustainable elements",
            images: [
                "https://i.postimg.cc/8c0SMDfK/Majlis-Umm-Suqeim-Villa-Presentation-v02.jpg",
                "https://i.postimg.cc/zX4Nfzr3/Majlis-Umm-Suqeim-Villa-Presentation-v02-9.jpg",
                "https://i.postimg.cc/0ymsMTkn/Majlis-Umm-Suqeim-Villa-Presentation-v02fd.jpg",
                "https://i.postimg.cc/TYKGGyBZ/Majlis-Umm-Suqeim-Villa-Presentation-v02fdf.jpg",
                "https://i.postimg.cc/CMPYWCrG/Majlis-Umm-Suqeim-Villa-Presentation-v02fdfdfdf.jpg",
                "https://i.postimg.cc/mrsGQmhs/sfasf.jpg"
            ],

        }, {
            id: 3,
            name: 'Obamine Café',
            type: 'FOOD & BEVERAGE',
            descriptions: "The Obamine Café project is a vibrant and inviting space designed to deliver an unforgettable culinary and social experience. This café combines modern design sensibilities with a cozy ambiance, creating the perfect setting for relaxation, conversation, and indulgence.The layout is thoughtfully planned to balance functionality and aesthetics, offering a welcoming atmosphere for both casual diners and coffee enthusiasts. The seating arrangements are versatile, with a mix of intimate corners and communal tables to cater to diverse guest preferences.The design incorporates natural elements like wood, stone, and greenery, complemented by warm lighting to enhance the sense of comfort and connection with nature. Large windows invite ample natural light, creating an open and airy feel, while decorative accents and artistic features add a touch of sophistication.",
            images: [
                "https://i.postimg.cc/3JTWxFCP/02-copy.jpg",
                "https://i.postimg.cc/WbCWZttL/03-copy.jpg",
                "https://i.postimg.cc/PxX2HwVZ/04-copy.jpg",
                "https://i.postimg.cc/yx5P0r1X/F01.jpg",
                "https://i.postimg.cc/d13rnmSW/F02.jpg",
            ],

        }, {
            id: 4,
            name: 'Residential Villa – Sharjah',
            type: 'RESIDENTIAL',
            descriptions: "The villa’s architecture showcases clean lines, spacious interiors, and a harmonious balance between indoor and outdoor spaces. The design incorporates large windows and open layouts, allowing natural light to flood the interiors while creating a seamless connection with the surrounding environment.The living spaces are thoughtfully designed to offer a luxurious yet comfortable lifestyle. The villa features a grand entrance, expansive living and dining areas, well-appointed bedrooms with en-suite bathrooms, and state-of-the-art kitchen facilities. Each space is adorned with premium materials, sophisticated finishes, and a neutral color palette that exudes timeless charm.Outdoor areas, including landscaped gardens and private terraces, provide tranquil spaces for relaxation and social gatherings. Sustainable design elements, such as energy-efficient systems and eco-friendly materials, ensure the villa is both luxurious and environmentally conscious.",
            images: [
                "https://i.postimg.cc/nzN2DPcK/0240-F.jpg",
                "https://i.postimg.cc/RZvRKf9Y/0240-F-1.jpg",
                "https://i.postimg.cc/fTn5WpPD/0240-F-3.jpg",
                "https://i.postimg.cc/G3sqCdqX/0240-F-4.jpg",
                "https://i.postimg.cc/jdHcDvVN/0240-F-6.jpg",
                "https://i.postimg.cc/K8cPR2DS/0240-F-10.jpg",
                "https://i.postimg.cc/RZPctDg3/0240-F-11.jpg",
                "https://i.postimg.cc/RhQtZs3Z/0240-F-145.jpg",
                "https://i.postimg.cc/BvkHY194/0240-F-45.jpg",
                "https://i.postimg.cc/FFcg6GHq/0240-F-7.jpg",
                "https://i.postimg.cc/yxz9B48G/0240-F-8.jpg",
                "https://i.postimg.cc/3rgm1RLQ/240-3950-GF-ENTRANCE-HALL-STAIRS-SITTING-DINING-19-3.jpg",
                "https://i.postimg.cc/KvfLXWS9/240-3950-GF-ENTRANCE-HALL-STAIRS-SITTING-DINING-19-35.jpg",
                "https://i.postimg.cc/MKqRFS4M/240-3950-GF-ENTRANCE-HALL-STAIRS-SITTING-DINING-6.jpg",
                "https://i.postimg.cc/x1dm9P99/3950-GF-MAJLIS-DINING-1-65.jpg",


            ],


        }
    ]
    const value = { projects: projects };
    return (
        <projectContext.Provider value={value}>
            {children}
        </projectContext.Provider>
    );
}