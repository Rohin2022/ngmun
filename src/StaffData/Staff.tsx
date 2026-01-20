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
        biography: "Chloe is a Junior at Noble and Greenough and has been participating in Noble's MUN as a delegate since freshman year. She has also been chairing for middle school and high school committees at both NGMUN and the United Nations Association of Greater Boston for the last year. Chloe loves to debate, and is an avid participant in Nobles Parliamentary Debate and Mock Trial clubs. In her free time she enjoys making art, wrestling, and reading."
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
        biography: "Eli is a senior at Nobles who has been doing MUN since Middle School. He enjoys the lively debate and intellectual discussion that come with Model UN, and he looks forward to seeing what delegates will bring this year. In his spare time, Eli likes to study history and go sailing."
    },
    {
        name: "Talia Klevens",
        role: "Crisis Director",
        image: "/profiles/Talia_Klevens.jpg",
        biography: "Eli is a senior at Nobles who has been doing MUN since Middle School. He enjoys the lively debate and intellectual discussion that come with Model UN, and he looks forward to seeing what delegates will bring this year. In his spare time, Eli likes to study history and go sailing."
    },
    {
        name: "Lara Sahagun",
        role: "Crisis Director",
        image: "/profiles/Lara_Sahagun.jpg",
        biography: "Lara Sahagun is a senior at Nobles and has been a MUNer since eighth grade. As the Co-President of Model UN-Debate Club, she loves to prepare for conferences and see delegates engaged in thoughtful debate. She hopes to study international law, and in her free time she likes to read, bike, and act in her school’s theatre productions."
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
                biography: "Chloe bio"
            },
            {
                name: "Alex Curry",
                role: "Co-Chair",
                image: "/profiles/Alex_Curry.jpg",
                committee: "UNESCO",
                biography: "Alex C bio"
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
                biography: "Lauren bio"
            },
            {
                name: "Bella Bessa",
                role: "Co-Chair",
                image: "/profiles/Bella_Bessa.jpg",
                committee: "Sokovia",
                biography: "Bella B bio"
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
                biography: "James bio"
            },
            {
                name: "Tomás Hernández",
                role: "Co-Chair",
                image: "/profiles/Tomás_Hernández.jpg",
                committee: "Prohibition",
                biography: "Tomas bio"
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
