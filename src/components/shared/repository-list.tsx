"use client"

import { useMemo, useState } from "react"
import { Input, Dropdown, Menu, Button, Radio } from "antd"
import { ChevronDown } from "lucide-react"

const repositories = [
  {
    name: "Dashboard",
    language: "TypeScript",
    updated: "2025-08-08T09:00:00Z",
    forkedFrom: null,
    stars: 150,
    languageColor: "bg-blue-500",
    repos: "Public",
  },
  {
    name: "Weather",
    language: "TypeScript",
    updated: "2025-08-06T11:00:00Z",
    forkedFrom: null,
    stars: 88,
    languageColor: "bg-blue-500",
    repos: "Public",
  },
  {
    name: "Billing-kantrakt-page",
    language: "TypeScript",
    updated: "2025-07-05T14:00:00Z",
    forkedFrom: null,
    stars: 100,
    languageColor: "bg-blue-500",
    repos: "Private",
  },
  {
    name: "my-progect",
    language: "TypeScript",
    updated: "2025-07-01T14:00:00Z",
    forkedFrom: null,
    stars: 60,
    languageColor: "bg-blue-500",
    repos: "Public",
  },
  {
    name: "OTU-transfer",
    language: "TypeScript",
    updated: "2025-06-25T10:00:00Z",
    forkedFrom: "alienorar/OTU-transfer",
    stars: 48,
    languageColor: "bg-blue-500",
    repos: "Private",
  },
  {
    name: "todo-list-react",
    language: "JavaScript",
    updated: "2025-06-04T12:00:00Z",
    forkedFrom: null,
    stars: 77,
    languageColor: "bg-yellow-500",
    repos: "Public",
  },
  {
    name: "js-project",
    language: "HTML",
    updated: "2025-06-04T14:00:00Z",
    forkedFrom: null,
    stars: 67,
    languageColor: "bg-red-500",
    repos: "Public",
  },
  {
    name: "Countres",
    language: "JavaScript",
    updated: "2025-05-27T09:00:00Z",
    forkedFrom: null,
    stars: 64,
    languageColor: "bg-yellow-500",
    repos: "Public",
  },
  {
    name: "next-dashboard",
    language: "TypeScript",
    updated: "2025-05-15T13:00:00Z",
    forkedFrom: null,
    stars: 92,
    languageColor: "bg-blue-500",
    repos: "Public",
  },
  {
    name: "entertainment-web-app-full-web-site-OlmosbekOWA",
    language: "TypeScript",
    updated: "2025-05-15T13:00:00Z",
    forkedFrom: "owauz/entertainment-web-app-full-web-site-OlmosbekOWA",
    stars: 35,
    languageColor: "bg-blue-500",
    repos: "Private",
  },
  {
    name: "TodoList",
    language: "TypeScript",
    updated: "2025-04-29T08:00:00Z",
    forkedFrom: null,
    stars: 41,
    languageColor: "bg-blue-500",
    repos: "Public",
  },
  {
    name: "reduxTodoList",
    language: "TypeScript",
    updated: "2025-04-29T15:00:00Z",
    forkedFrom: null,
    stars: 30,
    languageColor: "bg-blue-500",
    repos: "Public",
  },
  {
    name: "Task",
    language: "JavaScript",
    updated: "2025-04-23T10:00:00Z",
    forkedFrom: null,
    stars: 55,
    languageColor: "bg-yellow-500",
    repos: "Public",
  },
]

export default function Component() {
  const [search, setSearch] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedLanguage, setSelectedLanguage] = useState("All")
  const [selectedSort, setSelectedSort] = useState("last-updated")

  const createRadioMenu = (items: string[], selected: string, setSelected: any) => (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item}>
          <Radio checked={selected === item} onChange={() => setSelected(item)}>
            {item}
          </Radio>
        </Menu.Item>
      ))}
    </Menu>
  )

  const handleRepoClick = (repoName: string) => {
    const githubUrl = `https://github.com/OlmosbekOWA/${repoName}`
    window.open(githubUrl, "_blank")
  }

  const handleForkedRepoClick = (forkedFrom: string) => {
    const githubUrl = `https://github.com/${forkedFrom}`
    window.open(githubUrl, "_blank")
  }

  const filteredRepositories = useMemo(() => {
    let filtered = [...repositories]

    if (search) {
      filtered = filtered.filter((repo) => repo.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (selectedType !== "All") {
      filtered = filtered.filter((repo) => {
        if (selectedType === "Forks") return repo.forkedFrom
        if (selectedType === "Sources") return !repo.forkedFrom
        return false
      })
    }

    if (selectedLanguage !== "All") {
      filtered = filtered.filter((repo) => repo.language === selectedLanguage)
    }

    if (selectedSort === "last-updated") {
      filtered.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
    }
    if (selectedSort === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (selectedSort === "stars") {
      filtered.sort((a, b) => b.stars - a.stars)
    }

    return filtered
  }, [search, selectedType, selectedLanguage, selectedSort])

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
            overlay={createRadioMenu(["All", "Sources", "Forks"], selectedType, setSelectedType)}
            trigger={["click"]}
          >
            <Button className="flex items-center gap-1">
              Type <ChevronDown className="h-4 w-4" />
            </Button>
          </Dropdown>
          <Dropdown
            overlay={createRadioMenu(
              ["All", "TypeScript", "JavaScript", "HTML"],
              selectedLanguage,
              setSelectedLanguage,
            )}
            trigger={["click"]}
          >
            <Button className="flex items-center gap-1">
              Language <ChevronDown className="h-4 w-4" />
            </Button>
          </Dropdown>
          <Dropdown
            overlay={createRadioMenu(["last-updated", "name", "stars"], selectedSort, setSelectedSort)}
            trigger={["click"]}
          >
            <Button className="flex items-center gap-1">
              Sort <ChevronDown className="h-4 w-4" />
            </Button>
          </Dropdown>
        </div>
      </div>

      <div>
        {filteredRepositories.map((repo, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-6 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-[#00000042]"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3
                  className="font-semibold text-blue-600 hover:underline cursor-pointer"
                  onClick={() => handleRepoClick(repo.name)}
                >
                  {repo.name}
                </h3>
                <span className="text-xs px-2 py-0.5 border rounded-full text-gray-600 dark:text-gray-400">
                  {repo.repos}
                </span>
              </div>
              {repo.forkedFrom && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Forked from{" "}
                  <span
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleForkedRepoClick(repo.forkedFrom!)}
                  >
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
  )
}
