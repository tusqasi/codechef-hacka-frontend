import { useState } from "react";
import fetch from "isomorphic-unfetch";

const CollegeResultPage = ({ semesters }) => {
  const [sortBy, setSortBy] = useState("semester");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedSemesters = semesters.sort((a, b) => {
    if (sortBy === "semester") {
      if (sortOrder === "asc") {
        return a.semester.localeCompare(b.semester);
      } else {
        return b.semester.localeCompare(a.semester);
      }
    } else if (sortBy === "grade") {
      if (sortOrder === "asc") {
        return a.grade - b.grade;
      } else {
        return b.grade - a.grade;
      }
    }
  });

  return (
    <div>
      <h1>College Result Page</h1>
      <div>
        Sort by:{" "}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="semester">Semester</option>
          <option value="grade">Grade</option>
        </select>{" "}
        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>
      <div>
        {sortedSemesters.map((semester) => (
          <div key={semester.id}>
            <h2>{semester.semester}</h2>
            <ul>
              {semester.courses.map((course) => (
                <li key={course.id}>
                  {course.name}: {course.grade}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://resultstore.tusqasi.repl.co/api/semesters");
  const semesters = await res.json();
  return { props: { semesters } };
}

export default CollegeResultPage;

