// components/CrewList.js

import React from 'react';

const CrewList = () => {
    const crewData = [
        { employeeId: '001', name: 'John Doe', position: 'Captain', department: 'Operations', shift: 'Day', age: 35 },
        { employeeId: '002', name: 'Jane Smith', position: 'Engineer', department: 'Engineering', shift: 'Night', age: 28 },
       
        { employeeId: '003', name: 'Jack', position: 'Captain', department: 'Operations', shift: 'Day', age: 35 },
        { employeeId: '004', name: 'Json Smith', position: 'Engineer', department: 'Engineering', shift: 'Night', age: 28 },
        
      ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Crew List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Employee ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Shift</th>
            <th className="px-4 py-2">Age</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {crewData.map((crewMember, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{crewMember.employeeId}</td>
              <td className="border px-4 py-2">{crewMember.name}</td>
              <td className="border px-4 py-2">{crewMember.position}</td>
              <td className="border px-4 py-2">{crewMember.department}</td>
              <td className="border px-4 py-2">{crewMember.shift}</td>
              <td className="border px-4 py-2">{crewMember.age}</td>
              {/* Add more columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrewList;
