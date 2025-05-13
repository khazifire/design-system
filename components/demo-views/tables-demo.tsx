'use client'

import { Fragment, useState } from "react"
import {
  LucideSearch,
  LucideFilter,
  LucideArrowUpDown,
  LucideArrowDown,
  LucideArrowUp,
  LucideChevronLeft,
  LucideChevronRight,
  LucideMoreHorizontal,
  LucideDownload,
  LucideTrash,
  LucideCheck,
  LucideX,
  LucideEye,
  LucideEdit,
  LucideChevronDown,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox"

export default function TablesDemo() {
  const [sortColumn, setSortColumn] = useState<string | null>("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  
  // Sample data
  const users = [
    { id: 1, name: "Alice Smith", email: "alice@example.com", role: "Admin", status: "active", joined: "Mar 14, 2022" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "active", joined: "Apr 21, 2022" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "inactive", joined: "May 04, 2022" },
    { id: 4, name: "Diana Miller", email: "diana@example.com", role: "Editor", status: "active", joined: "Jun 18, 2022" },
    { id: 5, name: "Edward Wilson", email: "edward@example.com", role: "User", status: "active", joined: "Jul 02, 2022" },
    { id: 6, name: "Fiona Taylor", email: "fiona@example.com", role: "Admin", status: "inactive", joined: "Aug 11, 2022" },
    { id: 7, name: "George Davis", email: "george@example.com", role: "User", status: "active", joined: "Sep 30, 2022" },
    { id: 8, name: "Hannah Clark", email: "hannah@example.com", role: "Editor", status: "active", joined: "Oct 15, 2022" },
    { id: 9, name: "Ian Moore", email: "ian@example.com", role: "User", status: "active", joined: "Nov 23, 2022" },
    { id: 10, name: "Julie Adams", email: "julie@example.com", role: "Admin", status: "inactive", joined: "Dec 07, 2022" },
    { id: 11, name: "Kevin Nelson", email: "kevin@example.com", role: "User", status: "active", joined: "Jan 19, 2023" },
    { id: 12, name: "Laura Hill", email: "laura@example.com", role: "Editor", status: "active", joined: "Feb 28, 2023" },
  ]

  // Filter by search query
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort data
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortColumn) return 0
    
    // Type assertion to access dynamic properties
    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]
    
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  // Paginate data
  const totalPages = Math.ceil(sortedUsers.length / pageSize)
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  // Handle sort toggle
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  // Handle row selection
  const handleSelectRow = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    )
  }

  // Handle "select all" checkbox
  const handleSelectAll = () => {
    if (selectedRows.length === paginatedUsers.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(paginatedUsers.map(user => user.id))
    }
  }

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">Tables</h1>
        <p className="text-muted-foreground mt-2">Advanced table patterns with sorting, filtering, and pagination</p>
      </div>

      {/* Basic Table */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Basic Table</h2>
        <div className="card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.slice(0, 5).map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <StatusBadge status={user.status} />
                  </TableCell>
                  <TableCell>{user.joined}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Advanced Table with Actions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Table</h2>
        <div className="card">
          {/* Table Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
            <div className="relative max-w-sm">
              <LucideSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search users..." 
                className="pl-9" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1) // Reset to first page on search
                }}
              />
            </div>
            <div className="flex gap-2">
              <button className="btn-outline flex items-center gap-2">
                <LucideFilter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <button className="btn-outline flex items-center gap-2">
                <LucideDownload className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Selected Row Actions */}
          {selectedRows.length > 0 && (
            <div className="bg-muted/50 p-3 mb-4 rounded-md flex items-center justify-between">
              <span className="text-sm font-medium">{selectedRows.length} row(s) selected</span>
              <div className="flex gap-2">
                <button className="btn-outline btn-sm flex items-center gap-1 text-error hover:bg-error/10">
                  <LucideTrash className="h-4 w-4" />
                  <span>Delete</span>
                </button>
                <button className="btn-outline btn-sm flex items-center gap-1">
                  <LucideCheck className="h-4 w-4" />
                  <span>Approve</span>
                </button>
              </div>
            </div>
          )}

          {/* Table with Sorting */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Checkbox 
                      checked={selectedRows.length === paginatedUsers.length && paginatedUsers.length > 0}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all"
                    />
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                    <div className="flex items-center gap-1">
                      Name
                      {sortColumn === "name" ? (
                        sortDirection === "asc" ? <LucideArrowUp className="h-4 w-4" /> : <LucideArrowDown className="h-4 w-4" />
                      ) : (
                        <LucideArrowUpDown className="h-4 w-4 opacity-50" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("email")}>
                    <div className="flex items-center gap-1">
                      Email
                      {sortColumn === "email" ? (
                        sortDirection === "asc" ? <LucideArrowUp className="h-4 w-4" /> : <LucideArrowDown className="h-4 w-4" />
                      ) : (
                        <LucideArrowUpDown className="h-4 w-4 opacity-50" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("role")}>
                    <div className="flex items-center gap-1">
                      Role
                      {sortColumn === "role" ? (
                        sortDirection === "asc" ? <LucideArrowUp className="h-4 w-4" /> : <LucideArrowDown className="h-4 w-4" />
                      ) : (
                        <LucideArrowUpDown className="h-4 w-4 opacity-50" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                    <div className="flex items-center gap-1">
                      Status
                      {sortColumn === "status" ? (
                        sortDirection === "asc" ? <LucideArrowUp className="h-4 w-4" /> : <LucideArrowDown className="h-4 w-4" />
                      ) : (
                        <LucideArrowUpDown className="h-4 w-4 opacity-50" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("joined")}>
                    <div className="flex items-center gap-1">
                      Joined
                      {sortColumn === "joined" ? (
                        sortDirection === "asc" ? <LucideArrowUp className="h-4 w-4" /> : <LucideArrowDown className="h-4 w-4" />
                      ) : (
                        <LucideArrowUpDown className="h-4 w-4 opacity-50" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedUsers.map((user) => (
                    <TableRow key={user.id} className={selectedRows.includes(user.id) ? "bg-muted/50" : ""}>
                      <TableCell>
                        <Checkbox 
                          checked={selectedRows.includes(user.id)}
                          onCheckedChange={() => handleSelectRow(user.id)}
                          aria-label={`Select ${user.name}`}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <RoleBadge role={user.role} />
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={user.status} />
                      </TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>
                        <div className="flex justify-end gap-2">
                          <button className="p-1 hover:bg-muted rounded-md" title="View">
                            <LucideEye className="h-4 w-4" />
                          </button>
                          <button className="p-1 hover:bg-muted rounded-md" title="Edit">
                            <LucideEdit className="h-4 w-4" />
                          </button>
                          <button className="p-1 hover:bg-muted rounded-md" title="More actions">
                            <LucideMoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Showing {(currentPage - 1) * pageSize + 1}-
              {Math.min(currentPage * pageSize, filteredUsers.length)} of {filteredUsers.length}
            </div>
            
            <div className="flex items-center gap-1">
              <button 
                className="btn-outline btn-sm" 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <LucideChevronLeft className="h-4 w-4" />
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                // Logic to show pages around current page
                let pageToShow
                if (totalPages <= 5) {
                  pageToShow = i + 1
                } else if (currentPage <= 3) {
                  pageToShow = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageToShow = totalPages - 4 + i
                } else {
                  pageToShow = currentPage - 2 + i
                }
                
                return (
                  <button
                    key={pageToShow}
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${
                      pageToShow === currentPage ? 'bg-primary text-white' : 'hover:bg-muted'
                    }`}
                    onClick={() => setCurrentPage(pageToShow)}
                  >
                    {pageToShow}
                  </button>
                )
              })}
              
              <button 
                className="btn-outline btn-sm" 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                <LucideChevronRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm">Rows per page:</span>
              <select 
                className="border rounded-md text-sm p-1"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value))
                  setCurrentPage(1) // Reset to first page when changing page size
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Table */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Expandable Table</h2>
        <div className="card">
          <ExpandableTable />
        </div>
      </div>
    </div>
  )
}

// Status Badge Component
function StatusBadge({ status }: { status: string }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
        <LucideCheck className="h-3 w-3 mr-1" />
        Active
      </span>
    )
  } else {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-error/10 text-error">
        <LucideX className="h-3 w-3 mr-1" />
        Inactive
      </span>
    )
  }
}

// Role Badge Component
function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    Admin: "bg-primary text-white",
    User: "bg-secondary text-white",
    Editor: "bg-info text-white",
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[role] || "bg-muted text-foreground"}`}>
      {role}
    </span>
  )
}

// Expandable Table Component
function ExpandableTable() {
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const projects = [
    { 
      id: 1, 
      name: "Website Redesign", 
      client: "Acme Corporation", 
      deadline: "Aug 15, 2023",
      progress: 75,
      status: "in-progress",
      details: {
        description: "Complete overhaul of corporate website with focus on improved UX and mobile responsiveness.",
        tasks: [
          { id: 1, name: "Wireframing", status: "completed" },
          { id: 2, name: "UI Design", status: "completed" },
          { id: 3, name: "Frontend Development", status: "in-progress" },
          { id: 4, name: "Backend Integration", status: "pending" },
        ],
        team: ["Alice Smith", "Bob Johnson", "Charlie Brown"]
      }
    },
    { 
      id: 2, 
      name: "Mobile App Development", 
      client: "TechStart Inc.", 
      deadline: "Sep 30, 2023",
      progress: 45,
      status: "in-progress",
      details: {
        description: "Developing a cross-platform mobile application for inventory management.",
        tasks: [
          { id: 1, name: "Requirements Gathering", status: "completed" },
          { id: 2, name: "App Architecture", status: "completed" },
          { id: 3, name: "UI Implementation", status: "in-progress" },
          { id: 4, name: "API Integration", status: "pending" },
          { id: 5, name: "Testing", status: "pending" },
        ],
        team: ["Diana Miller", "Edward Wilson", "Fiona Taylor"]
      }
    },
    { 
      id: 3, 
      name: "E-commerce Platform", 
      client: "Retail Solutions", 
      deadline: "Oct 15, 2023",
      progress: 20,
      status: "delayed",
      details: {
        description: "Building a comprehensive e-commerce solution with payment processing and inventory management.",
        tasks: [
          { id: 1, name: "System Design", status: "completed" },
          { id: 2, name: "Database Setup", status: "in-progress" },
          { id: 3, name: "Frontend Development", status: "delayed" },
          { id: 4, name: "Payment Gateway Integration", status: "pending" },
          { id: 5, name: "Admin Dashboard", status: "pending" },
        ],
        team: ["George Davis", "Hannah Clark", "Ian Moore"]
      }
    },
    { 
      id: 4, 
      name: "CRM Implementation", 
      client: "Global Services", 
      deadline: "Dec 01, 2023",
      progress: 90,
      status: "completed",
      details: {
        description: "Implementing and customizing a CRM solution for sales team with reporting capabilities.",
        tasks: [
          { id: 1, name: "Requirements Analysis", status: "completed" },
          { id: 2, name: "System Configuration", status: "completed" },
          { id: 3, name: "Data Migration", status: "completed" },
          { id: 4, name: "User Training", status: "completed" },
          { id: 5, name: "Final Review", status: "in-progress" },
        ],
        team: ["Julie Adams", "Kevin Nelson", "Laura Hill"]
      }
    },
  ]

  const toggleExpandRow = (id: number) => {
    setExpandedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30px]"></TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <Fragment key={project.id}>
            <TableRow className="cursor-pointer" onClick={() => toggleExpandRow(project.id)}>
              <TableCell>
                <button className="p-1 hover:bg-muted rounded-full">
                  {expandedRows.includes(project.id) ? (
                    <LucideChevronDown className="h-4 w-4" />
                  ) : (
                    <LucideChevronRight className="h-4 w-4" />
                  )}
                </button>
              </TableCell>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.client}</TableCell>
              <TableCell>{project.deadline}</TableCell>
              <TableCell>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      project.status === "completed" ? "bg-success" :
                      project.status === "delayed" ? "bg-error" :
                      "bg-primary"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1">{project.progress}%</span>
              </TableCell>
              <TableCell>
                <ProjectStatusBadge status={project.status} />
              </TableCell>
            </TableRow>
            
            {expandedRows.includes(project.id) && (
              <TableRow className="bg-muted/30">
                <TableCell colSpan={6} className="p-0">
                  <div className="p-4 space-y-4">
                    <div>
                      <h4 className="font-medium">Description</h4>
                      <p className="text-sm text-muted-foreground">{project.details.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Tasks</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {project.details.tasks.map(task => (
                          <div key={task.id} className="flex items-center gap-2 p-2 border rounded-md bg-background">
                            {task.status === "completed" ? (
                              <LucideCheck className="h-4 w-4 text-success" />
                            ) : task.status === "in-progress" ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-b-transparent" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                            )}
                            <span className="text-sm">{task.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Team Members</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.team.map((member, index) => (
                          <div key={index} className="rounded-full px-3 py-1 bg-background border text-sm">
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </Fragment>
        ))}
      </TableBody>
    </Table>
  )
}

// Project Status Badge
function ProjectStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "completed": "bg-success/10 text-success",
    "in-progress": "bg-primary/10 text-primary",
    "delayed": "bg-error/10 text-error",
    "pending": "bg-warning/10 text-warning",
  }

  const labels: Record<string, string> = {
    "completed": "Completed",
    "in-progress": "In Progress",
    "delayed": "Delayed",
    "pending": "Pending",
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-muted text-foreground"}`}>
      {labels[status] || status}
    </span>
  )
} 