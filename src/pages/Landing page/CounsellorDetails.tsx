const posts = [
  {
    id: 1,
    title: "Introduction to Python",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Feb 15, 2022",
    datetime: "2022-02-15",
    category: { title: "Programming", href: "#" },
    author: {
      name: "Rahim Ahmed",
      role: "Senior Software Engineer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    description:
      "Learn the fundamentals of Python programming with Rahim Ahmed, a seasoned software engineer. This course is perfect for beginners looking to gain a solid foundation in Python.",
  },
  {
    id: 2,
    title: "Web Development with JavaScript",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1581093588401-75baca46f89f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Mar 20, 2022",
    datetime: "2022-03-20",
    category: { title: "Web Development", href: "#" },
    author: {
      name: "Karim Hossain",
      role: "Full-Stack Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1603415526960-f2aa381ee5f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    description:
      "Dive into web development with JavaScript, guided by Karim Hossain, a full-stack developer. This course covers the basics of JavaScript, making it accessible for beginners.",
  },
  {
    id: 3,
    title: "Data Science with Python",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1534081333815-ae5019106622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "May 05, 2022",
    datetime: "2022-05-05",
    category: { title: "Data Science", href: "#" },
    author: {
      name: "Nusrat Jahan",
      role: "Data Scientist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    description:
      "Master the fundamentals of data science using Python. Nusrat Jahan, an experienced data scientist, will guide you through data manipulation, visualization, and basic machine learning techniques.",
  },
  {
    id: 4,
    title: "Introduction to Machine Learning",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1555952512-05439b3f3d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Jul 10, 2022",
    datetime: "2022-07-10",
    category: { title: "Machine Learning", href: "#" },
    author: {
      name: "Tanvir Rahman",
      role: "Machine Learning Engineer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1510571787505-877c6ebf72c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    description:
      "Learn the basics of machine learning with Tanvir Rahman, a machine learning engineer. This course covers fundamental algorithms and techniques, making it ideal for beginners.",
  },
  {
    id: 5,
    title: "Cloud Computing Basics",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Sep 25, 2022",
    datetime: "2022-09-25",
    category: { title: "Cloud Computing", href: "#" },
    author: {
      name: "Fatima Akter",
      role: "Cloud Solutions Architect",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    description:
      "Get started with cloud computing with Fatima Akter, a cloud solutions architect. This course introduces key concepts and tools in cloud platforms like AWS and Azure, suitable for beginners.",
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1559751409-db0bd4f1f6b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Nov 12, 2022",
    datetime: "2022-11-12",
    category: { title: "Cybersecurity", href: "#" },
    author: {
      name: "Mahmud Hasan",
      role: "Cybersecurity Specialist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1506976785307-8732f75a3a44?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    description:
      "L fundamentals of cybersecurity with Mahmud Hasan, a cybersecurity specialist. This course covers essential concepts and practices to protect systems and data, perfect for beginners looking to enter the field.",
  },
];

export default function Counselors() {
  return (
    <div className="bg-gradient-to-tr from-[#6ec0ff] to-[#fffdba] py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">New Counselors</h2>
          <p className="mt-2 text-lg text-gray-600">
            Learn how to grow your skill with our expert advice.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="mt-4 flex flex-col">
                <div className="flex items-center gap-x-3 text-xs">
                  <a
                    href={post.category.href}
                    className="rounded-full bg-gray-50 px-3 py-1.5 text-gray-600 hover:bg-gray-100">
                    {post.category.title}
                  </a>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  <a href={post.href}>{post.title}</a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>
                <div className="mt-4 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <p>{post.author.role}</p>
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
