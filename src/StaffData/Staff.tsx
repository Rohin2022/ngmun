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
        image: "/AlexProfile.jpg",
        biography: "Alex is a junior at the Noble and Greenough high school, and has been participating in Model UN since freshman year. He is incredibly excited to see all the delegates bring in prior knowledge and experience into their committees to engage in thoughtful debate. In his free time, Alex enjoys running, playing the guitar, and watching his favorite baseball team the Dodgers."
    },
    {
        name: "Ben Gelber",
        role: "Secretary-General",
        image: "/BenProfile.jpg",
        biography: "Ben is a junior at the Noble and Greenough school, and has been an active participant in Model UN since freshman year. Through Model UN, he enjoys strengthening his public speaking and communicational skills, and is excited to welcome delegates to improve their own abilities through engaging debates. Outside of Model UN, Ben participates in track and field, theater, and loves playing video games."
    },
    {
        name: "Chidubem Chukwu",
        role: "Undersecretary-General",
        image: "/ChidProfile.jpg",
        biography: "Chidubem is a senior at Noble and Greenough who has participated in Model UN since fall 2020. He started Model UN to strengthen his communication and collaboration skills after the pandemic. Outside of MUN, Chidubem is a Track and Field Team Captain, a Casey Dunne Achieve Tutor, and a Nobles Middle School Mentor. He loves Nintendo video games, Nigerian food, and Afrobeats music, and cannot wait to meet all the amazing delegates at NGMUN VII!"
    },
    {
        name: "Chloe Coleman",
        role: "Chief of Staff",
        image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431437/nobles/person_photos/wzygp3gcfvmjxeu6ta6c.jpg",
        biography: "Chloe is a sophomore at Noble and Greenough and has been participating in Noble's MUN as a delegate since freshman year. She has also been chairing for middle school and high school committees at both NGMUN and the United Nations Association of Greater Boston for the last year. Chloe loves to debate, and is an avid participant in Nobles Parliamentary Debate and Mock Trial clubs. In her free time she enjoys making art, wrestling, and reading."
    },
    {
        name: "Talia Klevens",
        role: "Chief of Staff",
        image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431436/nobles/person_photos/hdvtxxrrli0qdhyx7fd4.jpg",
        biography: "Talia is a sophomore at Noble and Greenough, who has been involved in Model UN since eighth grade. She is excited to be co-chief of staff this year at NGMUN, and is especially excited to watch the crises, which are her favorite type of committee. When she isn't at conferences, she spends her time playing soccer, rowing, and with her friends."
    },
    {
        name: "Morgan Gibson",
        role: "Crisis Director",
        image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431413/nobles/person_photos/vuaykmfqsta9syrxlzv5.jpg",
        biography: "Morgan is a senior at Noble and Greenough and has been participating in MUN and NGMUN since Freshman year. With her love for crisis committees Morgan cannot wait to see what creative arcs the delegates concoct. Outside of MUN Morgan plays soccer, wrestles, coxes, participates in Mock Trial, and loves to read."
    }
];

const committees: CommitteeStaff[] = [
    {
        name: "United Nations Educational, Scientific and Cultural Organization",
        chairs: [
            {
                name: "Seynabou Seck",
                role: "Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431415/nobles/person_photos/lmfnnq9esrdz3uqvubka.jpg",
                committee: "UNESCO",
                biography: "Seynabou is a Sophomore at Nobles and has been doing Model UN since 7th grade. Seynabou participated in NGMUN in her 8th grade year, and a multitude of conferences since. Seynabou can’t wait to be a Head Chair for NGMUN this year. Seynabou is so excited to see delegates debate complex topics, and strategize with one another on ways to reach a resolution! Apart from Model UN, Seynabou loves spending time in the city, as well as being with friends and family!"
            },
            {
                name: "Mariame Diagana",
                role: "Co-Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431424/nobles/person_photos/qkpigyocdzbgljx8o8l2.jpg",
                committee: "UNESCO",
                biography: "Mariame is a Junior at Noble and Greenough School who has been participating in Model UN since freshman year. Mariame is excited to chair the Middle School Committee and to further her love of Model UN through co-charing. In Mariame’s free time, she loves to study environmental sustainability and eating Shake Shack! "
            }
        ]
    },
    {
        name: "Economic and Financial Affairs Council",
        chairs: [
            {
                name: "Eli Schotland",
                role: "Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431399/nobles/person_photos/jdsc6vqgzpl3cmhoxpwi.jpg",
                committee: "ECOFIN",
                biography: "Eli is a senior at Nobles who has been doing MUN since Middle School. He enjoys the lively debate and intellectual discussion that come with Model UN, and he looks forward to seeing what delegates will bring this year. In his spare time, Eli likes to study history and go sailing."
            },
            {
                name: "Ayaan Mohammed",
                role: "Co-Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431432/nobles/person_photos/utptthsjwwypkkhytyed.jpg",
                committee: "ECOFIN",
                biography: "Ayaan is a sophomore at Noble and Greenough School, and has participated in MUN since the sixth grade. She enjoys the fast paced, intellectual, and fervent debates that are at the core of Model UN. Outside of Model UN, she can be found playing basketball, writing poems and articles, learning about geography and international relations, and debating about various topics. She is looking forward to a passionate debate!"
            }
        ]
    },
    {
        name: "Commission of Crime Prevention and Criminal Justice",
        chairs: [
            {
                name: "Arthi Vithiananthan",
                role: "Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431417/nobles/person_photos/xwbk8qhbyw0qaltkc8nt.jpg",
                committee: "CCPCJ",
                biography: "Arthi is a senior at Noble and Greenough School. She was first immersed in Model UN and Debate in her freshman year, and her love for conferences grew exponentially throughout the year. She appreciates the fast-paced nature of committee sessions and the innovative thinking required to excel within the MUN world. She is thrilled to be a Chair of a crisis committee at NGMUN VII and is looking forward to being a part of the conference again this year. Outside of MUN and debate, Arthi spends her time writing for Nobles' publications, playing volleyball, and picking up hobbies such as learning the guitar and solving Rubik's cubes."
            },
            {
                name: "Tomás Hernández",
                role: "Co-Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431409/nobles/person_photos/upmfghdx8asqqhfmemqx.jpg",
                committee: "CCPCJ",
                biography: "Tomás Hernández is a junior at Noble and Greenough. An active participant in the MUN/Debate club, he also frequently participates in the chess club, science olympiad, and trades stocks by himself or with others. He is a native of Boston, MA, and frequently takes strolls down the esplanade for personal enjoyment. He plays varsity squash for the Nobles team, and also runs cross country, however, he also frequents the weight room from time to time."
            }
        ]
    },
    {
        name: "Arctic Refugee Crisis",
        chairs: [
            {
                name: "Kate Osakwe",
                role: "Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431437/nobles/person_photos/rwikftrzgnulqhuu0xeb.jpg",
                committee: "ARC",
                biography: "Kate is a sophomore at the Noble and Greenough School, and she has been involved in Model UN since 8th grade. She is thrilled to be Chairing the crisis committee on Minions. Aside from Model UN, she enjoys throwing the discus in track and field, wrestling during the winter, and also writing poetry. More importantly, she hopes that every delegate has fun and comes out learning something new. She looks forward to meeting everyone!"
            },
            {
                name: "Lara Sahagun",
                role: "Co-Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431426/nobles/person_photos/tuz5k507ulctllgznbhu.jpg",
                committee: "ARC",
                biography: ""
            }
        ]
    },
    {
        name: "Great Molasses Flood",
        chairs: [
            {
                name: "Lauren Peloquin",
                role: "Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431417/nobles/person_photos/myugxlq6rqxmbchikrux.jpg",
                committee: "GMF",
                biography: "Lauren is a current sophomore with 4 years of MUN experience, and she is thrilled to chair the Crisis Committee on the Great Molasses Flood of Boston. Outside of MUN, she is an avid trail runner who enjoys competing in cross country and track. A passionate enthusiast of politics and an avid reader, Lauren brings energy and excitement to learning about current events and international policy. She can't wait to delve into the fast-paced dynamics of this unique crisis and guide delegates through an engaging and memorable experience."
            },
            {
                name: "Bella Bessa",
                role: "Co-Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431444/nobles/person_photos/qaeerwkw9tbkxhdz0scl.jpg",
                committee: "GMF",
                biography: "Bella is a freshman at Nobles and Greenough High School. She is really excited to be a committee co-chair at this year's NGMUN conference. Bella has done Model United Nations for over three years now and it is something she is very passionate about. Besides being involved in Model UN, in her free time she plays volleyball and basketball, takes Portuguese lessons, and is involved in a few clubs. She is looking forward to meeting all the delegates at NGMUN and helping supervise a prolific debate."
            }
        ]
    },
    {
        name: "Hunger Games",
        chairs: [
            {
                name: "Teja Hanumolu",
                role: "Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431425/nobles/person_photos/vcctjszur7s7atkemsdm.jpg",
                committee: "HG",
                biography: "Teja is a junior at the Noble and Greenough School. He was first introduced to Model UN in Middle School and quickly developed a passion for its fast-paced and thinking-on-the-spot nature. This was furthered when he joined high school, as he learned about crisis committees and the wide range of topics conferences have to offer. He is extremely excited to serve as a Chair in his second NGMUN and engage in thoughtful and thorough debate. More importantly, he hopes that every delegate has fun and comes out learning something new. Outside of Model UN, Teja can be found playing basketball, golfing, or attending various clubs."
            },
            {
                name: "James Fair",
                role: "Co-Chair",
                image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731431436/nobles/person_photos/fz6ojh5gllva7y24trsz.jpg",
                committee: "HG",
                biography: "James Fair is a sophomore at Noble and Greenough school and began attending Model UN conferences in 7th grade. He is excited for a fun and lively committee, and lots of creativity from the delegates. Outside of Model UN he participates in debate, cross country and track and field."
            }
        ]
    }
];

const facultyAdvisors: StaffMember[] = [
    {
        name: "Sheila McElwee",
        role: "Faculty Advisor",
        image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731435517/nobles/person_photos/twyp131pzgcsxvsyhlhg.jpg",
        biography: "",
    },
    {
        name: "Amadou Seck",
        role: "Faculty Advisor",
        image: "https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1731435513/nobles/person_photos/bcw3m30ua1komjqjbpo3.jpg",
        biography: "",
    },
];


export {leadershipTeam, committees, facultyAdvisors};
export type { StaffMember, CommitteeStaff };
