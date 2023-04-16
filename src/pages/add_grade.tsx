import { useState } from "react";

export default function NewSemester() {
  const [semesterName, setSemesterName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseGrade, setCourseGrade] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/semesters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          semester: semesterName,
          courses: [
            { name: courseName, grade: courseGrade },
          ],
        }),
      });

      if (response.ok) {
        console.log("New semester created successfully!");
      } else {
        console.error("Failed to create new semester.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="semesterName">Semester Name:</label>
      <input
        type="text"
        id="semesterName"
        value={semesterName}
        onChange={(event) => setSemesterName(event.target.value)}
      />

      <label htmlFor="courseName">Course Name:</label>
      <input
        type="text"
        id="courseName"
        value={courseName}
        onChange={(event) => setCourseName(event.target.value)}
      />

      <label htmlFor="courseGrade">Course Grade:</label>
      <input
        type="text"
        id="courseGrade"
        value={courseGrade}
        onChange={(event) => setCourseGrade(event.target.value)}
      />

      <button type="submit">Create Semester</button>
    </form>
  );
}

