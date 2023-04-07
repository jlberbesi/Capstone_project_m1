const speakersArray = [
  {
    id: 0,
    name: 'Amanda Lewis',
    title: 'Developer Advocate at Google',
    description:
        '“A developer should attend DevFest this year to connect with others and for opportunities to expand their view of software delivery.”',
    urlMainImg: 'img/speaker-amanda-lewis.png',
  },
  {
    id: 1,
    name: 'Angie Sasmita',
    title: 'Android DevRel Engineer Google Singapore',
    description:
        '“It will feel like a family reunion meeting again with the developer community after years of staring into the screen.”',
    urlMainImg: 'img//speaker-angie-sasmita.png',
  },
  {
    id: 2,
    name: 'Carlos J. Rojas Reyes',
    title: 'Principal Customer Engineer, Google Latin America',
    description:
        '“DevFest is an amazing opportunity for you to connect with other passionate developers and learn from them!”',
    urlMainImg: 'img//speaker-carlos-reyes.png',
  },
  {
    id: 3,
    name: 'Thomas Ezan',
    title: 'Developer Advocate at Google',
    description:
        '“DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!”',
    urlMainImg: 'img//speaker-ezan-thomas.png',
  },
  {
    id: 4,
    name: 'Achouak Bachiri',
    title: 'Master student in computer science',
    description:
        '“Experience in organizations and volunteer work, president of the club GDSC Msila in algeria , and conducted several workshops for the benefit of students.”',
    urlMainImg: 'img//speaker-achouak-bachiri.png',
  },
  {
    id: 5,
    name: 'Adeline Villette',
    title: 'Cloud Security Officer',
    description:
        '“A developer With 17 years of experience on infrastructure topics and evolving for 5 years now in a 100% Public Cloud context.”',
    urlMainImg: 'img//speaker-adeline-villette.png',
  },
];

const container = document.getElementById('speakers-card');
const speakersHtml = speakersArray.map((card) => `
    <li class='col-md-6 mb-3 mt-3'>
        <div class='row row-cols-2'>
            <img class='col-4 mb-3 mt-3' src='${card.urlMainImg}' alt='speaker' />
            <div class='col-8 text-start text-holder'>
                <h3 class='mt-3'>${card.name}</h3>
                <p class='fontS-10-15 mb-3 mt-3 position-relative secondary-title orange-font'>${card.title}</p>
                <p class='fontS-9-14'>${card.description}</p>
            </div>
      </div>
    </li>
  `);
container.innerHTML = speakersHtml.join('');
