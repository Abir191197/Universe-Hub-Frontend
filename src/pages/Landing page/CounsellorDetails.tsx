





const posts = [
  
  {
    id: 1,
    title: "Data Science Fundamentals",
    href: "#",
    description:
      "Learn the basics of data science, including data manipulation, visualization, and basic machine learning algorithms. Perfect for beginners looking to start their journey in data science.",
    imageUrl:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Jan 10, 2021",
    datetime: "2021-01-10",
    category: { title: "Data Science", href: "#" },
    author: {
      name: "Alice Johnson",
      role: "Lead Data Scientist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  },
  {
    id: 2,
    title: "Advanced Marketing Strategies",
    href: "#",
    description:
      "Explore advanced techniques and strategies in marketing to boost your conversion rates and effectively reach your target audience. This course covers the latest trends and best practices in the field.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    href: "#",
    description:
      "Get hands-on experience with web development, from HTML and CSS to advanced JavaScript frameworks. Build real-world projects and become a full-stack web developer.",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de01c9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "May 5, 2021",
    datetime: "2021-05-05",
    category: { title: "Web Development", href: "#" },
    author: {
      name: "James Smith",
      role: "Senior Web Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  },
  {
    id: 4,
    title: "AI and Machine Learning",
    href: "#",
    description:
      "Dive deep into artificial intelligence and machine learning concepts. Learn about neural networks, natural language processing, and how to implement AI solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1556791002-d3fa50384344?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Sep 20, 2021",
    datetime: "2021-09-20",
    category: { title: "AI", href: "#" },
    author: {
      name: "Emily Davis",
      role: "AI Specialist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  },
];

export default function Counselors() {
  return (
    <div className="bg-slate-100 pt-4 bg-gradient-to-tr from-[#6ec0ff] to-[#fffdba] pb-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            New Counselors
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your skill with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-4   ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between bg-white rounded-lg  p-3 shadow-lg ">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-6 flex items-center gap-x-4 text-xs">
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-2 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-6 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
