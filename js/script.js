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

// VARIABLE
const album = document.querySelector('.album');
const formMember = document.querySelector('form');
const formNewMember = document.querySelectorAll('input');

// FUNCTION DECLARETION

let setMember = (member) => {
  const { name, role, email, img } = member;
  return `
      <div class="card">
        <img src="./${img}" alt="${name}">
        <ul class="desc">
          <li>${name}</li>
          <li>${role}</li>
          <li><a href="">${email}</a></li>
        </ul>
      </div>
`}

const setAlbumMembers = () => {
  let allMember = '';
  for (let i = 0; i < teamMembers.length; i++) {
    const element = teamMembers[i];
    const member = setMember(element);
    allMember += member;
  }
  album.innerHTML = allMember;
}

// FUNCTION ON SUBMIT

const setNewMember = (event) => {
  event.preventDefault();
  let [name, role, email, img] = formNewMember;
  name = name.value.trim();
  role = role.value.trim();
  email = email.value.trim();
  img = img.value.trim();

  const newMember = {
    name,
    role,
    email,
    img
  }

  const cardMember = document.createElement("div");
  cardMember.classList.add("card");
  const imgCardMember = document.createElement("img");
  imgCardMember.src = `${img}`
  imgCardMember.alt = `${name}`
  const descCardMember = document.createElement("ul");
  descCardMember.classList.add("desc");
  const nameDescCardMember = document.createElement("li");
  nameDescCardMember.innerText = `${name}`;
  const roleDescCardMember = document.createElement("li");
  roleDescCardMember.innerText = `${role}`;
  const emailDescCardMember = document.createElement("li");
  const anchorEmail = document.createElement("a");
  anchorEmail.innerText = `${email}`;
  emailDescCardMember.appendChild(anchorEmail);


  descCardMember.append(nameDescCardMember, roleDescCardMember, emailDescCardMember)

  cardMember.appendChild(imgCardMember);
  cardMember.appendChild(descCardMember);
  album.appendChild(cardMember);
  console.log(album);

  teamMembers.push(newMember);
  // setAlbumMembers();

  formMember.reset()

}

formMember.addEventListener("submit", setNewMember);

// CALL FUNCTION

setAlbumMembers();