 function checkResult() {
    let matricNumber = document.getElementById("matric").value.trim();
    let result = document.getElementById("result");
    if (matricNumber === "") {
        result.innerHTML = 
        '<p class="error">Please enter your matric number.</p>';
        return;
    }

    let student = {
        "ND/2026/001": {
            name: "Abdullahi Sani",
            department: "Computer Science",
            level: "ND 2",
            semester: "second semester",
            cgpa: "3.10",

            courses: [
                ["Web Design", "A"],
                ["Java Programming ", "B"],
                ["Database System", "A"],
                ["Data Structure", "B"],
                ["Computer Science", "A"],
            ]
        },

         "ND/2026/002": {
            name: "Abdulrazak lawan",
            department: "Computer Science",
            level: "ND 2",
            semester: "second semester",
            cgpa: "3.33",

            courses: [
                ["Web Design", "B"],
                ["Java Programming ", "B"],
                ["Database System", "B"],
                ["Data Structure", "C"],
                ["Computer Science", "A"],
            ]
        },

         "ND/2026/003": {
            name: "Al-amin Sagir",
            department: "Computer Science",
            level: "ND 2",
            semester: "second semester",
            cgpa: "3.13",

            courses: [
                ["Web Design", "B"],
                ["Java Programming ", "B"],
                ["Database System", "A"],
                ["Data Structure", "B"],
                ["Computer Science", "C"],
            ]
        },
    };

    let Student = student[matricNumber];
    if (Student) {
        let tableRows = "";
        Student.courses.forEach(function(course) {
            tableRows += `
                <tr>
                   <td>${course[0]}</td>
                   <td>${course[1]}</td>
                </tr>
            `;
        });

        result.innerHTML = `

        <div class="student-info">

        <p>
           <strong>Name:</strong>
           ${Student.name}
        </p>
        
         <p>
            <strong>Matric Number:</strong>
            ${matricNumber}
        </p>

         <p>
            <strong>Department:</strong>
            ${Student.department}
        </p>

         <p>
            <strong>Level:</strong>
            ${Student.level}
        </p>

         <p>
            <strong>Semester:</strong>
            ${Student.semester}
        </p>

         <p>
            <strong>CGPA:</strong>
            ${Student.cgpa}
        </p>

        </div>

        <table>

            <tr>
                <th>Course</th>
                <th>Grade</th>
            </tr>

            ${tableRows}
        </table>

        <p class="success">
            Result found successfully.
        </p>

        `;
    } else {
        result.innerHTML = 
        '<p class="error">No result found for this matric number.</p>';
    }
 }
