import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Tester" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Product Owner" },
]

const Index = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Employee Data</h1>
      <p className="text-gray-600 mb-6">A tabular view of employee information</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Index
