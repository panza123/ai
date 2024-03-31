import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1440px] px-2 lg:px-16 ">
      <div className="grid lg:grid-cols-2 w-full h-full mt-8 ">
        <div className="relative w-full lg:w-[70%] h-[400px] ">
          <Image
            src={"/assets/pexels-pavel-danilyuk-8294648.jpg"}
            alt="robot-ai"
            fill
            className="object-cover"
          />
        </div>

        {/* {text sector} */}
        <div>
          <h2 className="text-xl font-bold pt-4 lg:pt-0">
            Exploring the Rise of Robotics: A Glimpse into the Future of
            Automation
          </h2>
          <p className="pt-4  font-light">
            Future of Automation" Introduction: In the intricate tapestry of
            technological advancement, robotics emerges as a central thread,
            weaving its way into various aspects of human existence. From
            manufacturing floors to household chores, robotics is reshaping
            industries and lifestyles alike. This article embarks on a journey
            through the landscape of robotics, unraveling its evolution, current
            state, and promising future.
          </p>

          <p className="pt-4  font-light">
            The impact of robotics reverberates across a multitude of
            industries, each benefiting from tailored automation solutions. In
            manufacturing, robots streamline production lines, optimizing
            efficiency and quality while reducing labor costs. In healthcare,
            robotic surgical systems enhance surgical precision, leading to
            better patient outcomes and reduced recovery times. In agriculture,
            autonomous drones and robotic harvesters revolutionize farming
            practices, increasing yields and sustainability.
          </p>
        </div>
      </div>
    </main>
  );
}
