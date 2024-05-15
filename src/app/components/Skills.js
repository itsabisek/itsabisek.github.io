const Skills = () => {
    // Define your work experiences
    const mySkills = [
        { key: 1, head: "Languages", skills: [{ "name": "Python", "logo": "python.png" }, { "name": "JAVA", "logo": "java.png" }] },
        { key: 2, head: "Tools/Frameworks", skills: [{ "name": "Django", "logo": "django.png" }, { "name": "Flutter", "logo": "flutter.png" }, { "name": "Rest API", "logo": "rest.png" }, { "name": "Docker", "logo": "docker.png" }, { "name": "Linux", "logo": "linux.png" }, {"name": "React", "logo": "react.png"}] },
        { key: 3, head: "Cloud", skills: [{ "name": "GCP", "logo": "gcp.png" }, { "name": "AWS", "logo": "aws.png" }] },
        { key: 4, head: "Databases", skills: [{ "name": "MySQL", "logo": "mysql.png" }, { "name": "MariaDB", "logo": "maria.png" }, { "name": "Redis", "logo": "redis.png" }, { "name": "Apache Impala", "logo": "impala.png" }] },
        { key: 5, head: "Management/Collaboration", skills: [{ "name": "Jira", "logo": "jira.png" }, { "name": "Confluence", "logo": "confluence.png" }, { "name": "Git", "logo": "git.png" }, { "name": "Gerrit", "logo": "gerrit.png" }] },
    ];

    return (
        <div id="Skills" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12 auto-cols-fr">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div className="flex-col lg:p-1 p-2">
                    <h1 className="text-4xl">what do I</h1>
                    <h1 className="text-6xl font-bold">KNOW?</h1>
                </div>
                <div className="lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4"></div>
            </div>
            <div className="col-span-3 grid lg:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="grid lg:grid-row-2 gap-4">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <SkillBlock
                            heading={mySkills[0].head}
                            skills={mySkills[0].skills}
                        />
                        <SkillBlock
                            heading={mySkills[2].head}
                            skills={mySkills[2].skills}
                        />
                    </div>
                    <SkillBlock
                        heading={mySkills[1].head}
                        skills={mySkills[1].skills}
                    />
                </div>
                <div className="grid lg:grid-rows-2 gap-4">
                    <SkillBlock
                        heading={mySkills[3].head}
                        skills={mySkills[3].skills}
                    />
                    <SkillBlock
                        heading={mySkills[4].head}
                        skills={mySkills[4].skills}
                    />
                </div>
            </div>
        </div>
    )
}

const SkillBlock = ({ heading, skills, logo }) => {
    const chunkArray = (arr, size) => {
        return arr.reduce((chunks, el, i) => {
            if (i % size === 0) {
                chunks.push([el]);
            } else {
                chunks[chunks.length - 1].push(el);
            }
            return chunks;
        }, []);
    };

    // Chunk skills array into pairs of two
    const skillChunks = chunkArray(skills, 2);


    return (
        <div className={`p-2 w-full flex flex-col border-2 border-secondaryBg rounded-md`}>
            <div className="flex text-center justify-center">
                <p className="text-lg font-bold">{heading}</p>
            </div>
            <div className="mt-2 p-2 grid gap-">
                {[...Array(Math.ceil(skills.length / 2))].map((_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-2 gap-2 p-2">
                        {skills.slice(rowIndex * 2, rowIndex * 2 + 2).map((skill, colIndex) => (
                            <div key={colIndex} className="flex items-center">
                                <img src={skill.logo} className="mr-1 h-8 w-8" alt="logo"></img>
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;