function Welcome() {
  return (
    <div className="welcome">
      <div className="card bg-base-100 m-4 bg-white rounded-none border-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
        <div className="header bg-primary font-headline p-2 grid grid-col-6 gap-4 mb-0">
          <div className="col-start-1 col-end-2">
            <div className="flex flex-row">
              <h1 className="text-neutral ">
                welcome.exe - Abeera Fatima [ v1.0.4 ]
              </h1>
              <p className="btn btn-primary btn-xs rounded-none bg-error mx-2">
                PORTFOLIO_OS
              </p>
            </div>
          </div>
          <div className="col-span col-end-13">
            <div className="flex flex-row">
              <div className="box bg-neutral mx-2 px-2">_</div>
              <div className="box bg-neutral mx-2 px-2">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  stroke-linejoin="round"
                >
                  <rect x={4} y={4} width={12} height={12}></rect>
                </svg>
              </div>
              <div className="box bg-neutral px-2">x</div>
            </div>
          </div>
        </div>
        {/* grey line */}
        <div className="fileLine text-xs bg-info pt-2 pb-2 grid grid-col-6 gap-4">
          <div className="leftside-muted-row col-start-1 col-end-2">
            <div className="flex flex-row">
              <p className="text-primary mx-2 font-semibold">
                c:\USERS\melodyBee {">"}
              </p>
              <p className="border-l-2 border-primary pl-2 ">
                1.44MB Floppy {"[A:]"} READY
              </p>
            </div>
          </div>

          <div className="rightside-muted-row col-span col-end-13">
            <div className="flex flex-row">
              <p className="mt-1 mr-2 text-xs font-semibold">
                SYNTH: CHIP-TUNE #03
              </p>
              <button className="btn btn-secondary rounded-none btn-xs">
                ONLINE
              </button>
            </div>
          </div>
        </div>
        {/* card white body */}
        <div className="card-body">
          {" "}
          <div className=" flex flex-row">
            <div className="card-body-r">
              <div className="anotherLine">
                <button className="btn btn-accent rounded-none btn-xs">
                  USER PROFILE: ADMIN
                </button>
                <button className="btn btn-secondary rounded-none ml-2 btn-xs">
                  melodyBee
                </button>
              </div>
              <h1 className="text-5xl font-medium text-primary my-4">
                Abeera Fatima
              </h1>
              <h3 className="text-success text-2xl font-medium font-headline">
                Frontend Developer & Content Writer
              </h3>
              <p className="text-xl my-4">
                Harmonizing clean, modular web architectures with crafted
                narrative clarity. Translating complex system logic into
                thoughful interfaces and crisp technical prose.
              </p>
              <div className="buttons my-6">
                <button className="btn rounded-none btn-primary border-r-4 border-b-4 border-black">
                  EXPLORE_PROJECTS.BAT
                </button>
                <button className="btn rounded-none ml-4 border-r-4 border-b-4 border-black">
                  READ_ESSAYS.TXT
                </button>
              </div>
              <p className="underline mb-8 text-sm decoration-dashed">
                terminal_link://contact
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center p-8">
                <div className="relative rotate-3">
                  <div className="absolute -top-4 ml-12 z-10 -rotate-2 bg-rose-200/80 px-4 py-1 text-xs shadow-sm">
                    WASHI TAPE#24
                  </div>
                  <div className="card bg-accent border-neutral shadow-[2px_2px_0_rgba(0,0,0,0.12)] px-8 pt-10 pb-6 rounded-none">
                    <div className="paperclipsvg"></div>
                    <div className="header  item-center gap-2 mb-2">
                      <h2 className="font-bold text-primary mb-2">
                        MEMORANDUM
                      </h2>
                      <p>
                        "Building things & writing about them one pixel and one
                        paragraph at a time"
                      </p>
                      <div className="active bg-neutral text-sm font-headline p-2 px-6">
                        <div className="ops flex justify-between whitespace-nowrap gap-4 my-2 ">
                          <p className="">Active Stack:</p>
                          <p className="text-primary font-semibold">
                            React JS/Next.js
                          </p>
                        </div>
                        <div className="ops flex justify-between whitespace-nowrap gap-4 my-2  ">
                          <p>Writing Desk:</p>
                          <p className="text-success font-semibold">
                            Article writing, Blog writing with SEO
                          </p>
                        </div>
                        <div className="ops flex justify-between whitespace-nowrap gap-4 my-2  ">
                          <p>System Status:</p>
                          <p className="bg-secondary font-semibold px-2 ml-4">
                            AVAILABLE FOR HIRE
                          </p>
                        </div>
                      </div>
                      <div className="last-line flex justify-between whitespace-nowrap gap-4 m-2 font-headline text-sm">
                        <p>STATIONARY_SERIES</p>
                        <p>REF AF-2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kernal rounded bg-info text-sm p-4 grid grid-col-6 gap-4">
            <div className="left col-start-1 col-end-2 flex flex-row">
              <div className="cirlce border rounded-full bg-primary w-5 h-5 mr-2"></div>
              <p>KERNAL: ACTIVE MEM: 16420KB FREE AUDIO: 44.1kHz STEREO</p>
            </div>
            <div className="right col-span col-end-13">
              <p className="font-semibold text-xs">SYS_POWER: AC_OPTIMAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
