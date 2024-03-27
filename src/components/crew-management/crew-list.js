// components/CrewList.js

import React from 'react';


// components/CrewList.js

const CrewList = () => {
  const crewData = [
    { employeeId: '001', name: 'John Doe', position: 'Captain', department: 'Operations', shift: 'Day', age: 35 },
    { employeeId: '002', name: 'Jane Smith', position: 'Engineer', department: 'Engineering', shift: 'Night', age: 28 },
   
    { employeeId: '003', name: 'Jack', position: 'Captain', department: 'Operations', shift: 'Day', age: 35 },
    { employeeId: '004', name: 'Json Smith', position: 'Engineer', department: 'Engineering', shift: 'Night', age: 28 },
    { employeeId: '005', name: 'Jackie', position: 'Captain', department: 'Operations', shift: 'Day', age: 35 },
    { employeeId: '006', name: 'John', position: 'Engineer', department: 'Engineering', shift: 'Night', age: 28 },
   
  ];



  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Crew List</h2>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <div className="min-w-full overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shift</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                {/* Add more columns if needed */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {crewData.map((crewMember, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap">{crewMember.employeeId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{crewMember.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{crewMember.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{crewMember.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{crewMember.shift}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{crewMember.age}</td>
                  {/* Add more cells if needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrewList;
