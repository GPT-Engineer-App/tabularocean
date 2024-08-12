import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Tester" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Product Owner" },
];

const EmployeeDetails = () => {
  const { id } = useParams();
  const employee = data.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <Link to="/">
        <Button variant="outline" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to List
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Employee Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-semibold">Name:</div>
            <div>{employee.name}</div>
            <div className="font-semibold">Email:</div>
            <div>{employee.email}</div>
            <div className="font-semibold">Role:</div>
            <div>{employee.role}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeDetails;
