import Zephyr from "./zephyr";
import Humsafar from "./humsafar";
import MelodyPlayer from "./melodyPlayer";
import RusticReads from "./rusticreads";
function Projects() {
  return (
    <div className="Projects ">
      <div className="bg-info mx-4 my-1 rounded-none border-black shadow-[2px_2px_0_rgba(0,0,0,1)] p-2">
        <div className=" p-2 muted-header grid grid-col-6 gap-4">
          <div className="left col-start-1 col-end-2 flex flex-row">
            <div className="svg"></div>
            <h1 className="text-xl font-semibold font-headline text-warning">
              C:\PROJECTS\*.*
            </h1>
            <button className="btn btn-secondary font-thin font-headline btn-xs rounded-none text-xs mt-1 mx-3">
              {"[4 Executables Found]"}
            </button>
          </div>
          <div className="right col-span col-end-13 flex flex-row text-xs mt-2">
            <p>VIEW: TITLED_WINDOWS </p>
            <div className="bg-white mb-2 ml-2">
              <div className="svg"></div>
              <p> SORT: RECENT_DEPLOYED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <Zephyr />
        <MelodyPlayer />
        <RusticReads />
        <Humsafar />
      </div>
    </div>
  );
}

export default Projects;
