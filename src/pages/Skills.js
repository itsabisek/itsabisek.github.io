import python from "../assets/icons/python.png"
import java from "../assets/icons/java.png"
import django from "../assets/icons/django.png"
import flutter from "../assets/icons/flutter.png"
import rest from "../assets/icons/rest.png"
import docker from "../assets/icons/docker.png"
import linux from "../assets/icons/linux.png"
import react from "../assets/icons/react.png"
import aws from "../assets/icons/aws.png"
import gcp from "../assets/icons/gcp.png"
import impala from "../assets/icons/impala.png"
import mysql from "../assets/icons/mysql.png"
import redis from "../assets/icons/redis.png"
import maria from "../assets/icons/maria.png"
import jira from "../assets/icons/jira.png"
import confluence from "../assets/icons/confluence.png"
import git from "../assets/icons/git.png"
import gerrit from "../assets/icons/gerrit.png"

const Skills = () => {
    // Define your work experiences
    const mySkills = [
        { key: 1, head: "Languages", skills: [{ "name": "Python", "logo": python }, { "name": "JAVA", "logo": java }] },
        { key: 2, head: "Tools/Frameworks", skills: [{ "name": "Django", "logo": django }, { "name": "Flutter", "logo": flutter }, { "name": "Rest API", "logo": rest }, { "name": "Docker", "logo": docker }, { "name": "Linux", "logo": linux }, { "name": "React", "logo": react }] },
        { key: 3, head: "Cloud", skills: [{ "name": "GCP", "logo": gcp }, { "name": "AWS", "logo": aws }] },
        { key: 4, head: "Databases", skills: [{ "name": "MySQL", "logo": mysql }, { "name": "MariaDB", "logo": maria }, { "name": "Redis", "logo": redis }, { "name": "Apache Impala", "logo": impala }] },
        { key: 5, head: "Management/Collaboration", skills: [{ "name": "Jira", "logo": jira }, { "name": "Confluence", "logo": confluence }, { "name": "Git", "logo": git }, { "name": "Gerrit", "logo": gerrit }] },
    ];

    return (
        <div id="Skills" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div className="flex-col lg:p-6 p-2">
                    <h1 className="text-4xl">what I</h1>
                    <h1 className="text-6xl font-bold">KNOW?</h1>
                </div>
                <div className="lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4"></div>
            </div>
            <div className="col-span-3 grid lg:grid-cols-2 md:grid-cols-2 gap-10">
                <div className="grid lg:grid-row-2 gap-10">
                    <div className="grid lg:grid-cols-2 gap-10">
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
                <div className="grid lg:grid-rows-2 gap-10">
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
        <div className={`p-2 w-full flex flex-col border-2 border-secondaryBg bg-boxBg rounded-3xl`}>
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