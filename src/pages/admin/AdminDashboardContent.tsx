const stats = [
  { id: 1, name: "Total Students", value: "8,000" },
  { id: 2, name: "Total Counselor", value: "50" },
  { id: 3, name: "Total Files", value: "1,000" },
  { id: 4, name: "Meet Counseling", value: "15" },
];

export default function AdminDashboardContent() {
  return (
    <div className="bg-blue-200 py-1 min-h-96 sm:py-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-lg:px-">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-100 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
                </div>
                
            
            ))}
                  </dl>
                 
        </div>
      </div>
    </div>
  );
}
