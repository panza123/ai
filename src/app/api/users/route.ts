import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const data = [
        {
            "id": 1,
            "pic": "https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Robots",
            "desc": "Robots are mechanical or virtual agents, typically programmable, designed to perform tasks autonomously or semi-autonomously, often with a high degree of precision and efficiency. They come in various forms, ranging from industrial robots used in manufacturing processes to domestic robots assisting with household chores, and from humanoid robots used in research and entertainment to specialized robots for tasks like space exploration or underwater operations."
        },
        {
            "id": 2,
            "pic": "https://media.istockphoto.com/id/1345658982/photo/ai-microprocessor-on-motherboard-computer-circuit.jpg?b=1&s=612x612&w=0&k=20&c=FUOZKE3kKsu3Qx-2vdK2R5DzEOD5DsOXBE1tuZpKbuU=",
            "title": "Advanced AI",
            "desc": "Advanced AI represents a transformative leap in our technological landscape, where machines evolve beyond mere tools to become true cognitive partners. These systems possess the ability to interpret complex data, discern patterns, and make decisions with remarkable speed and accuracy. With advanced AI, we unlock the potential for machines to not only process information but to understand context, learn from experience, and continually refine their capabilities. As we delve deeper into the realm of advanced AI, we stand on the brink of unprecedented innovation, revolutionizing industries, reshaping economies, and redefining the very fabric of human."
        },
        {
            "id": 3,
            "pic": "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Technology",
            "desc": "Aerospace technology involves the design, development, and operation of aircraft and spacecraft for exploration, transportation, and defense purposes. Advances in aerospace technology enable space exploration missions, satellite communications, remote sensing, and space tourism."
        },
        {
            "id": 4,
            "pic": "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "title": "Space Exploration",
            "desc": "Space exploration is the ongoing investigation and discovery of outer space using a variety of technological tools and methods. It encompasses both human and robotic missions to study celestial bodies, understand the universe's origins and composition, and potentially establish a human presence beyond Earth. Here are some key aspects of space exploration:"
        }
    ];

    // Add CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*', // Change '*' to your specific origin if needed
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Check if it's a preflight request
    if (req.method === 'OPTIONS') {
        return NextResponse.json(null, { headers });
    }

    return NextResponse.json(data, { headers });
}
