import { useMemo, useState } from "react";
import { Input, Dropdown, Menu, Button, Radio, Checkbox } from "antd";
import { ChevronDown } from "lucide-react";

const repositories = [
  {
    name: "Dashboard",
    language: "TypeScript",
    updated: "2025-08-08T09:00:00Z",
    forkedFrom: null,
    stars: 150,
    languageColor: "bg-blue-500",
  },
  {
    name: "Weather",
    language: "TypeScript",
    updated: "2025-08-06T11:00:00Z",
    forkedFrom: null,
    stars: 88,
    languageColor: "bg-blue-500",
  },
  {
    name: "my-progect",
    language: "TypeScript",
    updated: "2025-07-01T14:00:00Z",
    forkedFrom: null,
    stars: 60,
    languageColor: "bg-blue-500",
  },
  {
    name: "OTU-transfer",
    language: "TypeScript",
    updated: "2025-06-25T10:00:00Z",
    forkedFrom: "alienorar/OTU-transfer",
    stars: 48,
    languageColor: "bg-blue-500",
  },
  {
    name: "todo-list-react",
    language: "JavaScript",
    updated: "2025-06-04T12:00:00Z",
    forkedFrom: null,
    stars: 77,
    languageColor: "bg-yellow-500",
  },
  {
    name: "js-project",
    language: "HTML",
    updated: "2025-06-04T14:00:00Z",
    forkedFrom: null,
    stars: 67,
    languageColor: "bg-red-500",
  },
  {
    name: "Countres",
    language: "JavaScript",
    updated: "2025-05-27T09:00:00Z",
    forkedFrom: null,
    stars: 64,
    languageColor: "bg-yellow-500",
  },
  {
    name: "next-dashboard",
    language: "TypeScript",
    updated: "2025-05-15T13:00:00Z",
    forkedFrom: null,
    stars: 92,
    languageColor: "bg-blue-500",
  },
  {
    name: "TodoList",
    language: "TypeScript",
    updated: "2025-04-29T08:00:00Z",
    forkedFrom: null,
    stars: 41,
    languageColor: "bg-blue-500",
  },
  {
    name: "reduxTodoList",
    language: "TypeScript",
    updated: "2025-04-29T15:00:00Z",
    forkedFrom: null,
    stars: 30,
    languageColor: "bg-blue-500",
  },
  {
    name: "Task",
    language: "JavaScript",
    updated: "2025-04-23T10:00:00Z",
    forkedFrom: null,
    stars: 55,
    languageColor: "bg-yellow-500",
  },
];


export default function Component() {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(["All"]);
  const [selectedLanguages, setSelectedLanguages] = useState(["All"]);
  const [selectedSort, setSelectedSort] = useState("last-updated");

  const createCheckboxMenu = (items:any, selectedItems:any, setSelectedItems:any) => (
    <Menu>
      {items.map((item:any) => (
        <Menu.Item key={item}>
          <Checkbox
            checked={selectedItems.includes(item)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedItems([...selectedItems, item]);
              } else {
                setSelectedItems(selectedItems.filter((i) => i !== item));
              }
            }}
          >
            {item}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="last-updated">
        <Radio
          checked={selectedSort === "last-updated"}
          onChange={() => setSelectedSort("last-updated")}
        >
          Last updated
        </Radio>
      </Menu.Item>
      <Menu.Item key="name">
        <Radio
          checked={selectedSort === "name"}
          onChange={() => setSelectedSort("name")}
        >
          Name
        </Radio>
      </Menu.Item>
      <Menu.Item key="stars">
        <Radio
          checked={selectedSort === "stars"}
          onChange={() => setSelectedSort("stars")}
        >
          Stars
        </Radio>
      </Menu.Item>
    </Menu>
  );

  const filteredRepositories = useMemo(() => {
    let filtered = [...repositories];

    if (search) {
      filtered = filtered.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (!selectedTypes.includes("All")) {
      filtered = filtered.filter((repo) => {
        return selectedTypes.some((type) => {
          if (type === "Forks") return repo.forkedFrom;
          if (type === "Sources") return !repo.forkedFrom;
          return false;
        });
      });
    }

    if (!selectedLanguages.includes("All")) {
      filtered = filtered.filter((repo) =>
        selectedLanguages.includes(repo.language)
      );
    }

    filtered.sort((a, b) => {
      if (selectedSort === "last-updated") {
        return new Date(b.updated).getTime() - new Date(a.updated).getTime();
      }
      if (selectedSort === "name") {
        return a.name.localeCompare(b.name);
      }
      if (selectedSort === "stars") {
        return b.stars - a.stars;
      }
      return 0;
    });

    return filtered;
  }, [search, selectedTypes, selectedLanguages, selectedSort]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <Input
          placeholder="Find a repository..."
          className="flex-1 max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <Dropdown
            overlay={createCheckboxMenu(
              ["All", "Sources", "Forks"],
              selectedTypes,
              setSelectedTypes
            )}
            trigger={["click"]}
          >
            <Button className="flex items-center gap-1">
              Type <ChevronDown className="h-4 w-4" />
            </Button>
          </Dropdown>
          <Dropdown
            overlay={createCheckboxMenu(
              ["All", "TypeScript", "JavaScript", "HTML"],
              selectedLanguages,
              setSelectedLanguages
            )}
            trigger={["click"]}
          >
            <Button className="flex items-center gap-1">
              Language <ChevronDown className="h-4 w-4" />
            </Button>
          </Dropdown>
          <Dropdown overlay={sortMenu} trigger={["click"]}>
            <Button className="flex items-center gap-1">
              Sort <ChevronDown className="h-4 w-4" />
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="">
        {filteredRepositories.map((repo, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 border-b"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-blue-600 hover:underline cursor-pointer">
                  {repo.name}
                </h3>
                <span className="text-xs px-2 py-0.5 border rounded-full text-gray-600 dark:text-gray-400">
                  Public
                </span>
              </div>
              {repo.forkedFrom && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Forked from{" "}
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {repo.forkedFrom}
                  </span>
                </p>
              )}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className={`w-3 h-3 rounded-full ${repo.languageColor}`} />
                <span>{repo.language}</span>
                <span>Updated {new Date(repo.updated).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded-sm flex items-end justify-end">
              <div className="w-1 h-3 bg-green-400 rounded-t-sm mr-1" />
              <div className="w-1 h-4 bg-green-400 rounded-t-sm mr-1" />
              <div className="w-1 h-2 bg-green-400 rounded-t-sm mr-1" />
              <div className="w-1 h-5 bg-green-400 rounded-t-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}