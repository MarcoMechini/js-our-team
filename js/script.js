const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let setMember = (member) => {
  const { name, role, email, img } = member;
  return `
        <div class="card">
          <img src="./${img}" alt="${name}">
          <div class="desc">
              <ul>
                  <li>
                      <h4>${name}</h4>
                  </li>
                  <ul>${role}</ul>
                  <li><a href="">${email}</a></li>
              </ul>
          </div>
      </div>
`}

const album = document.querySelector('.album');

for (let i = 0; i < teamMembers.length; i++) {
  const element = teamMembers[i];

  const member = setMember(element);
  album.innerHTML += member;
}
