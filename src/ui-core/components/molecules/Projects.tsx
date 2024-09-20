import ProjectListItem from "./ProjectListItem";

function Projects() {
  const data: { projectName: string; description: string }[] = [
    {
      projectName: "Modern Walk Application",
      description:
        "This is an e-commerce website for a clothing store called Modern Walk that showcases my ability to design and implement e-commerce websites using component-based frameworks React.",
    },
    {
      projectName: "E-commerce Application",
      description:
        "This is an e-commerce website store that showcases my ability to design and implement e-commerce websites using component-based frameworks React.",
    },
    {
      projectName: "Railway Reservations Application",
      description:
        "In this projects a user can visit the websites, registers and login to the website. They can check all the trains available for reservations. Once the user can select a tour and proceed to checkout and click the credit card payment details to proceed. Once the payment is success the orders will be placed and users will be able to get the email of ticket information. In this part only focus on backend APIs of admins and users.",
    },
    {
      projectName: "CRUD Application",
      description:
        "REST APIs based on CRUD methods. The project wrote in JavaScript using React and Redux Toolkit. This application gives us the ability to manage the students, edit, and get information on specific students and delete a student. The project has been written in accordance with the principles of Clean Code and good object-oriented programming practices.",
    },
  ];

  return (
    <div className="w-[500px] p-4 bg-black/5">
      <h2 className="font-bold">My Projects</h2>
      <ul>
        {data?.map((data, key) => {
          return (
            <ProjectListItem
              key={key}
              {...{
                projectName: data.projectName,
                description: data.description,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
