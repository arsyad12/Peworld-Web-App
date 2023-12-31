// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const lisTalent = [
  {
    id: 1,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Arsyad Basofil Amri",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js","tailwind","React Native"],
    socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 2,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Travis Małgorzata",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 3,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Chip 'Adinah",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 4,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Momoka Nobuyuki",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 5,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Tsukasa Akiko",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 6,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Rio Ayano",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 7,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Takako Mami",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 8,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Misaki Kōsuke",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 9,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Kichirō Katsuro",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
  {
    id: 10,
    photo: `https://i.pravatar.cc/150?${new Date().getTime()}`,
    fullname: "Wakana Osamu",
    role: "Fullstack Developer",
    location: "Pekanbaru",
    skill: ["Javascript", "React Js", "Next Js"],
     socmed:{email:"arsyadbasofilamrii@gmail.com"}
  },
];


//merubah halaman untuk berjalan di server side rendering

export default function handler(req, res) {

  if (req.query.id) {
    res.status(200).json({
      status:true,
      message: "get data succes",
      data : lisTalent.find((item) => item.id === parseInt(req.query.id))
    });
  } else {
    
    res.status(200).json({
      status:true,
      message: "get data succes",
      data : lisTalent
    });

  }

}