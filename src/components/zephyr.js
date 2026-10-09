function Zephyr() {
  return (
    <div className="Zephyr ">
      <div className="card bg-base-100 m-4 bg-white rounded-none border-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
        <div className="header bg-primary font-headline p-2 grid grid-col-6 gap-4 mb-0">
          <div className="col-start-1 col-end-2">
            <div className="flex flex-row">
              <h1 className="text-neutral font-label text-sm">
                Zephyr.exe [ v2.4.0 ]
              </h1>
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
        <div className="card-body">
          <h2 className="card-title font-headline text-primary">Zephyr</h2>
          <p>
            Full-featured React ecommerce storefront with seamless cart
            management, fluid transitions, and snappy checkout telemetry.
          </p>
          <div className="d-flex font-headline flex-row justify-start text-success ">
            <button className="rounded-none bg-secondary btn-xs m-2 p-1 ">
              React JS
            </button>
            <button className="rounded-none bg-secondary btn-xs m-2 p-1 ">
              React Bootstrap
            </button>
          </div>

          <div className="card d-flex flex-row justify-between my-2 p-3 rounded-none bg-neutral font-headline font-base-100">
            <div className="justify-start">
              <button className="btn btn-primary rounded-none btn-xs border-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
                Live Demo
              </button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-none btn-xs border-black shadow-[2px_2px_0_rgba(0,0,0,1)] bg-neutral text-error">
                GITHUB_REPO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zephyr;
