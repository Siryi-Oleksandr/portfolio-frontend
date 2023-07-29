import React, { FC } from 'react';

const ProjectDetails: FC = () => {
  const projectState = [
    {
      _id: 'asdasdq12e3132e4sdfsdf34314',
      projectTitle: 'sky go desktop',
      projectSubTitle:
        'Sky Go Desktop react javascript web application build on top of the Electron framework.',
      projectLink: 'https://caferati.me/portfolio/sky-go-desktop',
      projectImages: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0fV3pZJj_K4WvI3-1hTIQWpAXsgbLnl8mTdHu-yCrHgR5FSHmB34rvj0Ntq1xyAMFCk&usqp=CAU',
      ],
      aboutProject:
        'Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.',
      technicalStack: ['Js', 'React', 'Redux', 'Webpack'],
    },
  ];
  return (
    <>
      {projectState.map(
        ({
          projectTitle,
          projectSubTitle,
          projectLink,
          aboutProject,
          technicalStack,
          projectImages,
        }) => (
          <section key={projectTitle}>
            <h2>{projectTitle}</h2>
            <h3>{projectSubTitle}</h3>
            <div>
              <a href={projectLink}>Visit The Website</a>
              <ul>
                <li>
                  <a href="https://github.com/Malakhow-Alexandr">Git</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/oleksandr-malakhow/">
                    Linkidin
                  </a>
                </li>
                <li>
                  <a href="https://t.me/MakakhovA">Telegram</a>
                </li>
              </ul>
            </div>

            <img src={projectImages[0]} alt={projectTitle} />
            <p>{aboutProject}</p>
            <ul>
              {technicalStack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>
        )
      )}
    </>
  );
};

export default ProjectDetails;
