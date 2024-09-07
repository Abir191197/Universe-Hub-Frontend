import GroupStudyDisplayAll from "./GroupStudyDisplayAll";

export default function GroupStudyTop() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20 rounded-lg">
        <img
          src="https://img.freepik.com/free-photo/young-students-learning-together-group-study_23-2149211067.jpg?t=st=1725297474~exp=1725301074~hmac=bb91371714767cb312e27e823fb967e37a26c0fa6328353feb984be43ff16cfe&w=826"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover rounded-lg"
        />
        {/* Dark blue semi-transparent overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-50 rounded-lg"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Group Study</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
        
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-48 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-24rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      {/* Add a 100px top margin before displaying all cards */}
      <div className="mt-[100px]">
        <GroupStudyDisplayAll />
      </div>
    </>
  );
}
