import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateAssignment = () => {
  const data = useLoaderData();

  // Check if data is still loading
  if (!data) {
    return <div>Loading...</div>;
  }

  // Check if there's an error loading data
  if (data.error) {
    return <div>Error loading data</div>;
  }

  // Render the assignment data if available
  return (
    <div>
      <h2>Update Assignment</h2>
      <div>
        <strong>Title:</strong> {data.title}
      </div>
      <div>
        <strong>Difficulty:</strong> {data.difficulty}
      </div>
      <div>
        <strong>Description:</strong> {data.description}
      </div>
      {/* Add other fields as needed */}
    </div>
  );
};

export default UpdateAssignment;
