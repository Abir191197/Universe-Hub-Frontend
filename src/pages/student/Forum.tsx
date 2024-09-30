import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { PaperClipIcon, TagIcon } from "@heroicons/react/20/solid";
import { useCreatePostMutation } from "../../redux/features/Student Management/Forum";
import { toast } from "react-toastify";
import AllForum from "./AllForum";

const labels = [
  { name: "Tags", value: null },
  { name: "Engineering", value: "engineering" },
  { name: "Science", value: "science" },
  { name: "Math", value: "math" },
  { name: "Physics", value: "physics" },
  { name: "Chemistry", value: "chemistry" },
  { name: "Biology", value: "biology" },
  { name: "Computer Science", value: "computer science" },
  { name: "Data Science", value: "data science" },
  { name: "Artificial Intelligence", value: "artificial intelligence" },
  // Add more labels as needed
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateForumPost() {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [label, setLabel] = useState(labels[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Please fill in both title and content.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (file) {
      formData.append("file", file);
    }
    if (label.value) {
      formData.append("tags", label.value);
    }

    try {
      await createPost(formData).unwrap();
      toast.success("Post created successfully.");
      // Reset form
      setTitle("");
      setContent("");
      setFile(null);
      setLabel(labels[0]);
    } catch (error) {
      toast.error("Failed to create post. Please try again.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className=" ">
        <form
          onSubmit={handleSubmit}
          className="relative border-black shadow-sm bg bg-white">
          <div className="overflow-hidden rounded-lg border border-black shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0  "
              placeholder="Title"
            />
            <textarea
              rows={4}
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Write your post content..."
            />
          </div>

          <div className="relative inset-x-px bottom-0 border-black shadow-sm">
            <div className="flex flex-nowrap justify-start space-x-2 px-2 py-2 sm:px-3">
              <Listbox
                as="div"
                value={label}
                onChange={setLabel}
                className="flex-shrink-0">
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only">
                      Add a label
                    </Listbox.Label>
                    <div className="relative">
                      <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                        <TagIcon
                          className={classNames(
                            label.value === null
                              ? "text-gray-300"
                              : "text-gray-500",
                            "h-5 w-5 flex-shrink-0 sm:-ml-1"
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={classNames(
                            label.value === null ? "" : "text-gray-900",
                            "hidden truncate sm:ml-2 sm:block"
                          )}>
                          {label.value === null ? "Label" : label.name}
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {labels.map((label) => (
                            <Listbox.Option
                              key={label.value}
                              className={({ active }) =>
                                classNames(
                                  active ? "bg-gray-100" : "bg-white",
                                  "relative cursor-default select-none px-3 py-2"
                                )
                              }
                              value={label}>
                              <div className="flex items-center">
                                <span className="block truncate font-medium">
                                  {label.name}
                                </span>
                              </div>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
              <div className="flex">
                <label
                  htmlFor="file-upload"
                  className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400 cursor-pointer">
                  <PaperClipIcon
                    className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm italic text-gray-500 group-hover:text-gray-600">
                    {file ? file.name : "Attach a file"}
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50">
                  {isLoading ? "Posting..." : "Post"}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="-mx-3">
          <AllForum></AllForum>
        </div>
      </div>
    </>
  );
}
