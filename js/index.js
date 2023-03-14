const today = new Date();

const thisYear = today.getFullYear();


const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.textContent = `\u00A9 Amdemichael Gelaye   ${thisYear} `;
footer.appendChild(copyright);

const skills = ['effective communication','problem solving','analytical'];

const skillsSection = document.getElementById('skills');

const skillsList = document.querySelector('section#skills > ul');


for (i = 0; i < skills.length; i++) {
    alert(skills[i]);

    const skill = document.createElement('li');
    skill.innerText = `${skills[i]}`
    skillsList.appendChild(skill);

}



