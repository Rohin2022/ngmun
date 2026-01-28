interface StaffMember {
    name: string;
    role: string;
    image: string;
    biography: string; // Added biography field
    committee?: string;
}

interface CommitteeStaff {
    name: string;
    chairs: StaffMember[];
}


const leadershipTeam: StaffMember[] = [
    {
        name: "Alexander Yoon",
        role: "Secretary-General",
        image: "/profiles/Alexander_Yoon.jpg",
        biography: "Alex is a Senior at the Noble and Greenough high school, and has been participating in Model UN since freshman year. He is incredibly excited to see all the delegates bring in prior knowledge and experience into their committees to engage in thoughtful debate. In his free time, Alex enjoys running, playing the guitar, and watching his favorite baseball team the Dodgers."
    },
    {
        name: "Ben Gelber",
        role: "Secretary-General",
        image: "/profiles/Benjamin_Gelber.jpg",
        biography: "Ben is a Senior at the Noble and Greenough school, and has been an active participant in Model UN since freshman year. Through Model UN, he enjoys strengthening his public speaking and communicational skills, and is excited to welcome delegates to improve their own abilities through engaging debates. Outside of Model UN, Ben participates in track and field, theater, and loves playing video games."
    },
    {
        name: "Seynabou Seck",
        role: "Undersecretary-General",
        image: "/profiles/Seynabou_Seck.jpg",
        biography: "Seynabou is a Junior at Nobles and has been doing Model UN since 7th grade. Seynabou participated in NGMUN in her 8th grade year, and a multitude of conferences since. Seynabou can’t wait to be a Head Chair for NGMUN this year. Seynabou is so excited to see delegates debate complex topics, and strategize with one another on ways to reach a resolution! Apart from Model UN, Seynabou loves spending time in the city, as well as being with friends and family!"
    },
    {
        name: "Camilla Mangal",
        role: "Undersecretary-General",
        image: "/profiles/Camilla_Mangal.jpg",
        biography: "Camilla is a junior at the Noble and Greenough School and has been passionate about Model UN since middle school, both as a delegate and a chair. She loves MUN as a dynamic space to learn, teach, and debate the world around us and loves watching delegates collaborate to solve complex global issues. Outside of committee, Camilla enjoys baking, playing the saxophone, watching movies with friends and family, and taking her labradors, Louie and Cleo, on long hikes."
    },
        // EDIT CAMILLA SHE NEEDS TO BE HERSELF W/ A BIO NOT CHLOE

    {
        name: "Agaezi Chukwu",
        role: "Chief of Staff",
        image: "/profiles/Agaezi_Chukwu.jpg",
        biography: "Agaezi is a Junior at the Noble and Greenough School and has been involved in Model UN since 7th grade. She loves thinking of innovative solutions to world issues along with hearing all the creative ideas of other delegates. She is looking forward to helping the conference run smoothly and supporting the staff. Outside of Model UN, Agaezi is a Junior Prefect and Freshman Mentor. You can find her in science class, taking pictures with her digital camera, listening to music, playing Volleyball, or throwing Javelin and Shot Put on the Track and Field team."
    },
    {
        name: "Teja Hanumolu",
        role: "Chief of Staff",
        image: "/profiles/Teja_Hanumolu.jpg",
        biography: "Teja is a senior at the Noble and Greenough School. He was first introduced to Model UN in middle school and quickly developed a passion for its fast-paced and thinking-on-the-spot nature. This was furthered when he joined high school, as he learned about crisis committees and the wide range of topics conferences have to offer. He is extremely excited to serve as a Chief of Staff in his third NGMUN and engage in thoughtful and thorough debate. More importantly, he hopes that every delegate has fun and comes out learning something new. Outside of Model UN, Teja can be found on the varsity golf team, glazing LeBron, or learning the piano."
    },
    {
        name: "Talia Klevens",
        role: "Crisis Director",
        image: "/profiles/Talia_Klevens.jpg",
        biography: "Talia is a junior at Noble and Greenough, who has been involved in Model UN since eighth grade. She is excited to be co-chief of staff this year at NGMUN, and is especially excited to watch the crises, which are her favorite type of committee. When she isn't at conferences, she spends her time playing soccer, rowing, and with her friends."
    },
    {
        name: "Lara Sahagun",
        role: "Crisis Director",
        image: "/profiles/Lara_Sahagun.jpg",
        biography: "Lara Sahagun is a senior at Nobles and has been a MUNer since eighth grade. As the Co-President of Model UN-Debate Club, she loves to prepare for conferences and see delegates engaged in thoughtful debate. She hopes to study international law, and in her free time she likes to read, bike, and act in her school’s theatre productions."
    },
    {
        name: "Vedant Kulkarni",
        role: "Head of Conference Services",
        image: "/profiles/Vedant_Kulkarni.jpg",
        biography: "Vedant is a senior at Nobles and has been involved in Debate and MUN since middle school. As an avid enthusiast of public speaking and argumentation, he is excited to help facilitate a smooth conference experience for all delegates. Outside of MUN, Vedant enjoys rowing with his school team, skiing in New England, and checking new cities off his traveling list."
    }

];

const committees: CommitteeStaff[] = [
    {
        name: "General Assembly Committee: Vaccines",
        chairs: [
            {
                name: "Bella Kong",
                role: "Chair",
                image: "/profiles/Bella_Kong.jpg",
                committee: "Vaccines",
                biography: "Bella Kong is a senior at the Noble and Greenough School and has been involved with Model UN since seventh grade. She’s currently the President of the Nobles Model UN club and loves the camaraderie and connection it fosters. She cannot wait to meet everyone and looks forward to seeing the innovative ideas brought forward by delegates. Outside of Model UN, she can be found playing the piano, spending time with her dog Mochi, and binge-watching mystery movies."
            },
            {
                name: "Jonathan Pat",
                role: "Co-Chair",
                image: "/profiles/Jonathan_Pat.jpg", //UPDATE THE PHOTO IMAGE FOR JONATHAN
                committee: "Vaccines",
                biography: "Jonathan is currently a sophomore at the Noble and Greenough School and has been participating in Model UN since his freshman year. His experience in Model UN, through meetings and committees, has allowed him to build strong connections and improve his public speaking, debating, and collaboration skills. He is incredibly excited to meet the delegates in his committee and have a great session discussing the issues regarding vaccines! Outside of Model UN, you can find Jonathan at track practice, behind his cello at orchestra rehearsal, or even on the pickleball courts in the fall."
            }
        ]
    },
    {
        name: "UNESCO World Heritiage Sites",
        chairs: [
            {
                name: "Chloe Coleman",
                role: "Chair",
                image: "/profiles/Chloe_Coleman.jpg",
                committee: "UNESCO", // was ECOFIN
                biography: "Chloe is a Junior at Noble and Greenough and has been participating in Noble's MUN as a delegate since freshman year. She has also been chairing for middle school and high school committees at both NGMUN and the United Nations Association of Greater Boston for the last year. Chloe loves to debate, and is an avid participant in Nobles Parliamentary Debate and Mock Trial clubs. In her free time she enjoys making art, wrestling, and reading."
            },
            {
                name: "Alex Curry",
                role: "Co-Chair",
                image: "/profiles/Alex_Curry.jpg",
                committee: "UNESCO",
                biography: "Alex is currently a sophomore at the Noble and Greenough School and has been participating in Model UN since her Freshman year. Throughout her time as a delegate, MUN has allowed her to meet so many people from so many different places! She is extremely excited to see what the delegates in this year’s UNESCO committee have in store for discussion. Alex loves MUN, but outside of it, you can find her at EAC, skiing, playing tennis, and reading."
            }
        ]
    },
    {
        name: "Roman Advisory Council",
        chairs: [
            {
                name: "Anran Liu",
                role: "Chair",
                image: "/profiles/Anran_Liu.jpg",
                committee: "Roman",
                biography: "Anran Liu is a Senior at the Noble and Greenough School and has been involved in Model UN throughout his entire high school career. He cannot wait to see what creative ideas delegates bring to the table, especially after crisis updates knock everything out of whack. Outside of MUN, Anran plays soccer, runs the hurdles on the Track and Field team, plays guitar, and loves watching Drake Maye!"
            },
            {
                name: "Derek Yin",
                role: "Co-Chair",
                image: "/profiles/Derek_Yin.jpg",
                committee: "Roman",
                biography: "Derek is a Junior at Noble and Greenough School and has been involved in Model UN since the start of his freshman year. He is so excited to meet the delegates and co-chair the Roman Advisory Council, where he looks forward to lively debates and a multitude of different ideas. Outside of Model UN, Derek can be found with a good book, doing fun math problems, or programming."
            }
        ]
    },
    {
        name: "The Marvel Sokovia Accords",
        chairs: [
            {
                name: "Lauren Peloquin",
                role: "Chair",
                image: "/profiles/Lauren_Peloquin.jpg",
                committee: "Sokovia",
                biography: "Lauren is a current Junior with 4 years of MUN experience, and she is thrilled to chair the Marvel Sokovia Accords, especially as an avid Marvel fan herself! Outside of MUN, she is an avid trail runner who enjoys competing in cross country and track. A passionate enthusiast of politics and an avid reader, Lauren brings energy and excitement to learning about current events and international policy. She can't wait to guide delegates through an engaging and memorable crisis experience."
            },
            {
                name: "Bella Bessa",
                role: "Co-Chair",
                image: "/profiles/Bella_Bessa.jpg",
                committee: "Sokovia",
                biography: "Bella is a sophomore at Nobles and Greenough High School. She is really excited to be a committee co-chair at this year's NGMUN conference. Bella has done Model United Nations for over three years now and it is something she is very passionate about. Besides being involved in Model UN, in her free time she plays volleyball and basketball, takes Portuguese lessons, and is involved in a few clubs. She is looking forward to meeting all the delegates at NGMUN and helping supervise a prolific debate."
            }
        ]
    },
    {
        name: "Prohibition",
        chairs: [
            {
                name: "James Fair",
                role: "Chair",
                image: "/profiles/James_Fair.jpg",
                committee: "Prohibition",
                biography: "James Fair is a junior at Noble and Greenough school and began attending Model UN conferences in 7th grade. He is excited for a fun and lively committee, and lots of creativity from the delegates. Outside of Model UN he participates in debate, cross country, and track and field."
            },
            {
                name: "Tomás Hernández",
                role: "Co-Chair",
                image: "/profiles/Tomás_Hernández.jpg",
                committee: "Prohibition",
                biography: "Tomás Hernández is a senior at Noble and Greenough. An active participant in the MUN/Debate club, he also frequently participates in the chess club, science olympiad, and trades stocks by himself or with others. He is a native of Boston, MA, and frequently strolls down the esplanade for personal enjoyment. He plays varsity squash for the Nobles team, and also runs cross country, however, he also frequents the weight room from time to time."
            }
        ]
    },
    {
        name: "Interplanetary Expansion",
        chairs: [
            {
                name: "Ayaan Mohammed",
                role: "Chair",
                image: "/profiles/Ayaan_Mohammed.jpg",
                committee: "Interplanetary",
                biography: "Ayaan is a Junior at Noble and Greenough School, and has participated in MUN since the sixth grade. She enjoys the fast paced, intellectual, and fervent debates that are at the core of Model UN. Outside of Model UN, she can be found writing poems and articles, running, learning about geography and international relations, and debating about various topics. She is looking forward to a passionate debate!"
            },
            {
                name: "Kate Putnam",
                role: "Co-Chair",
                image: "/profiles/Kate_Putnam.jpg",
                committee: "Interplanetary",
                biography: "Kate is currently a junior at Noble and Greenough School and has been involved in Model UN since the beginning of her sophomore year. Throughout her high school career, Model UN has fostered connections among peers and across schools. Kate is incredibly excited to meet the delegates and to explore interplanetary expansion in committee. Outside of Model UN, you can find her coding, stage managing, and watching Stranger Things (she’s still in denial over the ending)."
            }
        ]
    }
];

const facultyAdvisors: StaffMember[] = [
    {
        name: "Sheila McElwee",
        role: "Faculty Advisor",
        image: "/profiles/Sheila_McElwee.jpg",
        biography: "",
    },
    {
        name: "Amadou Seck",
        role: "Faculty Advisor",
        image: "/profiles/Amadou_Seck.jpg",
        biography: "",
    },
];


export {leadershipTeam, committees, facultyAdvisors};
export type { StaffMember, CommitteeStaff };
