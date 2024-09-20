// Headless UI Components
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const categories = [
  {
    name: "Programming Languages",
    posts: [
      {
        id: 1,
        title: "Type Script",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Java",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Frameworks",
    posts: [
      {
        id: 1,
        title: "React",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "NestJS",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Libraries",
    posts: [
      {
        id: 1,
        title: "React Icons",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "Headless UI",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

function Details() {
  return (
    <div className="flex px-4">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="p-3 rounded-xl bg-black/5">
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 transition rounded-md text-sm/6 hover:bg-black/5"
                    >
                      <a href="#" className="font-semibold text-black">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <ul
                        className="flex gap-2 text-black/50"
                        aria-hidden="true"
                      >
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

export default Details;
