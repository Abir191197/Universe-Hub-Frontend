import { useGetAllCounsellingQuery } from "../../redux/features/Admin Management/GetAllCounselling";

export default function AllCounselling() {
  const { data: AllCounsellingData } = useGetAllCounsellingQuery(undefined);
  // Filter the counseling sessions to only show completed ones
  const completedCounsellingSessions = AllCounsellingData?.data?.filter(
    (counselling) => counselling.isBooked === false
  );
  // Helper function to format date and time
  const formatDateTime = (dateTimeString: string | number | Date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(dateTimeString).toLocaleString("en-US", options);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">
          Available Counselling Sessions
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {completedCounsellingSessions?.map((counselling) => (
            <div
              key={counselling._id}
              className="shadow-xl rounded-lg overflow-hidden bg-white relative">
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={counselling.imgSrc || "default-image.jpg"}
                    alt={counselling.TopicName || "Counselling Session"}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4 px-4">
                  <p className="relative text-2xl text-right font-semibold text-black">
                    {counselling.CashAmount > 0
                      ? `৳${counselling.CashAmount}`
                      : "Free"}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-black">
                    Counsellor Name:{" "}
                    <span className="font-normal">{counselling.CreateBy}</span>
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-black">
                    Topic Name:{" "}
                    <span className="font-normal">{counselling.TopicName}</span>
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    Description:{" "}
                    <span className="font-normal">
                      {counselling.Description}
                    </span>
                  </p>
                  <p className="mt-1 text-lg font-semibold text-black">
                    Type:{" "}
                    <span className="font-normal">{counselling.Type}</span>
                  </p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    Duration:{" "}
                    <span className="font-normal">{counselling.Duration}</span>{" "}
                    Minutes
                  </p>
                  <p className="mt-1 text-lg font-semibold text-black">
                    Date and Time:{" "}
                    <span className="font-normal">
                      {formatDateTime(counselling.selectDate)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-6 px-4 pb-4">
                <button className="relative w-full flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Pay And Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
